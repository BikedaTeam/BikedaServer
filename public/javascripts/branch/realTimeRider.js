$(document).ready(function () {
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(35.19707078036156, 129.11891663441136),
    level: 5
  };
  var map = new kakao.maps.Map(container, options);
  //지점 위치 마커
  var markerPosition  = new kakao.maps.LatLng(35.19707078036156, 129.11891663441136);
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

  $('#tb_realTimeRider').DataTable({
    ajax : {
      url : '/branch/realTimeRider',
      type : 'post'
    },
    columns : [
      {
        data : 'riderBrcofcId',
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
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

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

    $('#tb_riderDeliveries').DataTable({
      ajax : {
        url : '/branch/realTimeDelivery',
        type : 'post'
      },
      columns : [
        {
          data : 'dlvryStateCd',
          visible : false
        },
        {
          data : 'dlvryNo',
          visible : false
        },
        {
          data : 'stoBrcofcId',
          visible : false
        },
        {
          data : 'stoId',
          visible : false
        },
        {
          data : 'stoMtlty'
        },
        {
          data : 'stoTelno',
          visible : false
        },
        {
          data : 'dlvryCusTelno',
          visible : false
        },
        {
          data : 'dlvryCusAdres',
          visible : false
        },
        {
          data : 'dlvryCusRoadAdres'
        },
        {
          data : 'dlvryCusDetlAdres',
          visible : false
        },
        {
          data : 'dlvryCusLa',
          visible : false
        },
        {
          data : 'dlvryCusLo',
          visible : false
        },
        {
          data : 'dlvryPaySeCd',
          visible : false
        },
        {
          data : 'dlvryFoodAmnt',
          visible : false
        },
        {
          data : 'dlvryAmnt',
          visible : false
        },
        {
          data : 'dlvryPickReqTm',
          visible : false
        },
        {
          data : 'dlvryRecvDt',
          visible : false
        },
        {
          data : 'dlvryDsptcDt',
          visible : false
        },
        {
          data : 'dlvryPickDt',
          visible : false
        },
        {
          data : 'dlvryTcDt',
          visible : false
        },
        {
          data : 'dlvryDstnc',
          visible : false
        },
        {
          data : 'dlvryReqCn',
          visible : false
        },
        {
          data : 'riderBrcofcId',
          visible : false
        },
        {
          data : 'riderId',
          visible : false
        },
        {
          data : 'riderNm',
          visible : false
        },
        {
          data : 'riderCelno',
          visible : false
        }
      ],
      autoWidth : false,
      paging: false,
      searching: false,
      dom: 't',
      order: [ [1, 'desc'] ],
      language: {
        'emptyTable': '데이터가 존재 하지 않습니다.'
      },
      drawCallback : function ( settings ) {
        $("#tb_riderDeliveries thead").remove();
      }
    });
  });
});
