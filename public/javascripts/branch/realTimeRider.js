$(document).ready(function () {
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
        data : 'riderCelno'
      },
      {
        data : 'riderStateCd',
        width : '70px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<button type="button" class="btn btn-block btn-xs bg-primary">정상</button>';
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-xs bg-danger">휴무</button>';
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

      // 라이더 위치 마커
      var api = this.api();
      var rows =  api.rows().data();
      var position = Array( rows.length );
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for( var i = rows.length-1 ; i >= 0; i--) {
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(rows[i].riderLa, rows[i].riderLo), // 마커를 표시할 위치
            title : rows[i].riderNm, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
            clickable: true
        });

        var iwContent = '<div style="padding:5px;">' + rows[i].riderNm + '</div>';
        var iwRemoveable = true;

        var infowindow = new kakao.maps.InfoWindow({
          position : new kakao.maps.LatLng(rows[i].riderLa, rows[i].riderLo),
          content : iwContent
        });
        infowindow.open(map, marker);
        kakao.maps.event.addListener(marker, 'click', function() {

        });
      }
    }
  });
});
