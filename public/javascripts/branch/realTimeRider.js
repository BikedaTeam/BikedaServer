$(document).ready(function () {
  var container = document.getElementById('map');
  var map = null;
  var marker = null;
  ajaxSend('/branch/branchLocation', 'get', null, function ( result ) {
    var options = {
      center: new kakao.maps.LatLng(result.data.brcofcLa, result.data.brcofcLo),
      level: 5
    };
    map = new kakao.maps.Map(container, options);
    //지점 위치 마커
    var markerPosition  = new kakao.maps.LatLng(result.data.brcofcLa, result.data.brcofcLo);
    marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
  });


  $('#tb_realTimeRider').DataTable({
    ajax : {
      url : '/branch/realTimeRider',
      type : 'post'
    },
    columns : [
      {
        data : 'brcofcId',
        visible : false
      },
      {
        data : 'riderId',
        visible : false
      },
      {
        data : 'riderNm'
      },
      {
        data : 'riderCelno',
        width : '100px',
        render : function ( data, type, row, meta) {
          return phoneFomatter(data);
        }
      },
      {
        data : 'riderStateCd',
        width : '50px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-primary">정상</span>';
          else if( data  == '02')
            return  '<span class="badge bg-danger">휴무</span>';
        }
      },
      {
        data : 'riderLa',
        visible : false
      },
      {
        data : 'riderLo',
        visible : false
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    select : {
      style: 'single'
    },
    order: [ [1, 'asc'] ],
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
    },
    drawCallback : function ( settings ) {
      // 라이더 위치 마커
      var api = this.api();
      var rows =  api.rows().data();
      var imageSrc = "/img/rider.png";

      for( var i = rows.length-1 ; i >= 0; i--) {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(rows[i].riderLa, rows[i].riderLo), // 마커를 표시할 위치
            title : rows[i].riderNm, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
            clickable: true
        });
      }
    }
  });


  var customOverlay;
  $('#tb_realTimeRider tbody').on('click', 'tr', function () {
    if( customOverlay != null ) customOverlay.setMap(null);
    table = $('#tb_realTimeRider').DataTable();
    data = table.row($(this)).data();
    var moveLatLon = new kakao.maps.LatLng(data.riderLa, data.riderLo);
    map.panTo(moveLatLon);

    var stateHtml = "";
    if( data.riderStateCd == '01' )
      stateHtml = '<span class="badge bg-primary">정상</span>';
    else
      stateHtml = '<span class="badge bg-danger">휴무</span>';

    var content =
    '<div class="col-12">'+
      '<div class="card card-info">'+
        '<div class="card-header">'+
          '<h3 class="card-title">'+ data.riderNm +'</h3>'+
          '<div class="card-tools">'+
            stateHtml +
          '</div>'+
        '</div>'+
        '<div class="card-body">'+
          '<table id="tb_riderDeliveries" class="table table-bordered table-hover">'+
            '<thead>'+
            '<tr>'+
              '<th>배달 목록</th>'+
              '<th>배달 목록</th>'+
            '</tr>'+
            '</thead>'+
          '</table>'+
        '</div>'+
      '</div>'+
    '</div>';
    var position = new kakao.maps.LatLng(data.riderLa, data.riderLo);
    // 커스텀 오버레이를 생성합니다
    customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: -0.1
    });

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
    var requestData = {};
    requestData.riderId = data.riderId;
    $('#tb_riderDeliveries').DataTable({
      ajax : {
        url : '/branch/realTimeDelivery',
        type : 'post',
        data : requestData
      },
      columns : [
        {
          data : 'dlvryStateCd',
          render : function ( data, type, row, meta) {
            if( data  == '01' )
              return  '<span class="badge bg-secondary">배차 대기</span>';
            else if( data  == '02')
              return  '<span class="badge bg-warning">배차 완료</span>';
            else if( data  == '03')
              return  '<span class="badge bg-olive">픽업 완료</span>';
            else if( data  == '04')
              return  '<span class="badge bg-success">배달 완료</span>';
            else if( data  == '05')
              return  '<span class="badge bg-danger">배달 취소</span>';
          }
        },
        {
          data : 'stoMtlty'
        },
        {
          data : 'dlvryCusRoadAdres',
          render : function ( data, type, row, meta) {
            return data + ' ' + row.dlvryCusDetlAdres;
          }
        }
      ],
      autoWidth : false,
      paging: false,
      searching: false,
      dom: 't',
      order: [ [1, 'desc'] ],
      language: {
        'emptyTable': '배달 중인 내용이 없습니다.'
      },
      drawCallback : function ( settings ) {
        $("#tb_riderDeliveries thead").remove();
      }
    });
  });
});
