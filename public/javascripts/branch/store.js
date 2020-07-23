$(document).ready(function () {
  var tb_store = $('#tb_store').DataTable({
    ajax : {
      url : '/branch/stores',
      type : 'post',
      data :  function ( d ) {
        d.stoMtlty = $('#stoMtlty').val();
      }
    },
    columns : [
      {
        data : 'stoId',
        width : '70px'
      },
      {
        data : 'stoBsnsRgnmb',
        width : '100px',
        render : function ( data, type, row, meta) {
          return data.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
        }
      },
      {
        data : 'stoMtlty'
      },
      {
        data : 'stoBizSeCd',
        width : '50px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-indigo">개인</span>';
          else if( data  == '02')
            return  '<span class="badge bg-lightblue">법인</span>';
        }
      },
      {
        data : 'stoRprsntvNm'
      },
      {
        data : 'stoBrdYmd',
        visible : false
      },
      {
        data : 'stoCrprtRgnmb',
        visible : false
      },
      {
        data : 'stoOpnngYmd',
        visible : false
      },
      {
        data : 'stoBsnsPlaceAdres'
      },
      {
        data : 'stoHdofcAdres',
        visible : false
      },
      {
        data : 'stoBizcnd',
        visible : false
      },
      {
        data : 'stoInduty',
        visible : false
      },
      {
        data : 'stoTelno',
        width : '100px',
        render : function ( data, type, row, meta) {
          return phoneFomatter(data);
        }
      },
      {
        data : 'stoVrtlAcnt',
        visible : false
      },
      {
        data : 'stoSetSeCd',
        visible : false
      },
      {
        data : 'stoNightSrchrApplyYn',
        visible : false
      },
      {
        data : 'stoNightSrchrStdTm',
        visible : false
      },
      {
        data : 'stoNightSrchrEndTm',
        visible : false
      },
      {
        data : 'stoNightSrchrAmnt',
        visible : false
      },
      {
        data : 'stoLa',
        visible : false
      },
      {
        data : 'stoLo',
        visible : false
      },
      {
        data : 'stoStateCd',
        width : '50px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-purple">정상</span>';
          else if( data  == '02')
            return  '<span class="badge bg-navy">탈회</span>';
        }
      },
      // {
      //   data : null,
      //   width : '50px',
      //   render : function ( data, type, row, meta) {
      //     return '<button type="button" class="btn btn-block btn-xs bg-info">상세</button>';
      //   }
      // },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-success">수정</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-olive">할증</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-maroon">요금</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-lightblue">특수</button>';
        }
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    order: [ [1, 'desc'] ],
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
    }
  });

  $('#btn_search').on('click', function () {
    tb_store.ajax.reload();
  });
  $('#tb_store tbody').on('click','td:not(:has(button))',function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeDetail').modal('show');
  });

  $('#tb_store tbody').on('click', '.bg-success', function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeModify').modal('show');
  });

  $('#tb_store tbody').on('click', '.bg-olive', function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeModifySurcharge').modal('show');
  });

  $('#tb_store tbody').on('click', '.bg-maroon', function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeModifyFee').modal('show');
  });

  $('#tb_store tbody').on('click', '.bg-lightblue', function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeModifySpecial').modal('show');
  });

  //================= storeDetail====================================
  $('#storeDetail').on('show.bs.modal', function (event) {
    $('#stoId').text('');
    $('#brcofcNm').text('');
    $('#stoBsnsRgnmb').text('');
    $('#stoMtlty').text('');
    $('#stoRprsntvNm').text('');
    $('#stoBrdYmd').text('');
    $('#stoCrprtRgnmb').text('');
    $('#stoOpnngYmd').text('');
    $('#stoBsnsPlaceAdres').text('');
    $('#stoHdofcAdres').text('');
    $('#stoBizcnd').text('');
    $('#stoInduty').text('');
    $('#stoTelno').text('');
    $('#stoVrtlAcnt').text('');
    $('#stoSetSeCd').text('');
    $('#stoNightSrchrTm').text('');
    $('#stoNightSrchrAmnt').text('');

    $('#stoId').text( data.stoId );
    $('#brcofcNm').text( data.brcofcNm );
    $('#stoBsnsRgnmb').text( data.stoBsnsRgnmb.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3') );
    $('#stoMtlty').text( data.stoMtlty );
    $('#stoRprsntvNm').text( data.stoRprsntvNm );
    if(data.stoBrdYmd) $('#stoBrdYmd').text( data.stoBrdYmd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
    if(data.stoCrprtRgnmb) $('#stoCrprtRgnmb').text( data.stoCrprtRgnmb.replace(/(\d{6})(\d{7})/, '$1-$2') );
    $('#stoOpnngYmd').text( data.stoOpnngYmd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
    $('#stoBsnsPlaceAdres').text( data.stoBsnsPlaceAdres );
    $('#stoHdofcAdres').text( data.stoHdofcAdres );
    $('#stoBizcnd').text( data.stoBizcnd );
    $('#stoInduty').text( data.stoInduty );
    $('#stoTelno').text( phoneFomatter(data.stoTelno ) );
    $('#stoVrtlAcnt').text( data.stoVrtlAcnt );
    $('#stoNightSrchrTm').text( data.stoNightSrchrStdTm.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3') + ' ~ ' + data.stoNightSrchrEndTm.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3') );
    $('#stoNightSrchrAmnt').text( data.stoNightSrchrAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );

    ajaxSend( '/branch/storeSurcharge', 'post', true, data, function ( result ) {
      if(result.success) {
        $('#surchargeList').empty();
        var resultData = result.data;
        for( var i = 0 ; i < resultData.length ; i++ ){
          var html =
          '<li class="list-group-item d-flex justify-content-between align-items-center">' +
          ' <div class="col-12">' +
          '  <input disabled type="checkbox"'+ ( resultData[i].srchrApplyYn == 'Y' ? 'checked' : '' ) +'>&nbsp;<b>' + resultData[i].srchrCn + '</b>' +
          '  <a class="float-right">'+ resultData[i].srchrAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
          ' </div>' +
          '</li>';
          $('#surchargeList').append( html );
        }
      }
    });



    $('#stoBizSeCd').bootstrapToggle('enable');
    if( data.stoBizSeCd == '01') {
      $('#stoBizSeCd').bootstrapToggle('on');
    } else if( data.stoBizSeCd == '02') {
      $('#stoBizSeCd').bootstrapToggle('off');
    }
    $('#stoBizSeCd').bootstrapToggle('disable');

    $('#stoStateCd').bootstrapToggle('enable');
    if( data.stoStateCd == '01') {
      $('#stoStateCd').bootstrapToggle('on');
    } else if( data.stoStateCd == '02') {
      $('#stoStateCd').bootstrapToggle('off');
    }
    $('#stoStateCd').bootstrapToggle('disable');


    $('#stoNightSrchrApplyYn').bootstrapToggle('enable');
    if( data.stoNightSrchrApplyYn == 'Y') {
      $('#stoNightSrchrApplyYn').bootstrapToggle('on');
    } else if( data.stoNightSrchrApplyYn == 'N') {
      $('#stoNightSrchrApplyYn').bootstrapToggle('off');
    }
    $('#stoNightSrchrApplyYn').bootstrapToggle('disable');


    $('#stoSetSeCd').bootstrapToggle('enable');
    if( data.stoSetSeCd == '01') {
      $('#stoSetSeCd').bootstrapToggle('on');
    } else if( data.stoSetSeCd == '02') {
      $('#stoSetSeCd').bootstrapToggle('off');
    }
    $('#stoSetSeCd').bootstrapToggle('disable');
  });
  $('#storeDetail').on('hidden.bs.modal', function (event) {
    $('#stoBizSeCd').bootstrapToggle('on');
    $('#stoSetSeCd').bootstrapToggle('on');
  });

  $('#stoBizSeCd').change(function () {
    if( $('#stoBizSeCd').prop('checked') ) {
      $('#bizCrprt').hide();
      $('#bizPrivate').show();
    } else {
      $('#bizCrprt').show();
      $('#bizPrivate').hide();
    }
  });

  $('#stoSetSeCd').change(function () {
    if( $('#stoSetSeCd').prop('checked') ) {
      $('#setDistance').hide();
      $('#setArea').show();
    } else {
      $('#setDistance').show();
      $('#setArea').hide();
    }
  });

  $('#storeDetailFee').on('show.bs.modal', function (event) {
    setTimeout(function () {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(data.stoLa, data.stoLo),
        level: 6
      };
      var map = new kakao.maps.Map(container, options);
      //지점 위치 마커
      var markerPosition  = new kakao.maps.LatLng(data.stoLa, data.stoLo);
      var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);

      if( data.stoSetSeCd == '01') {
        ajaxSend( '/branch/storeAreaSetting', 'post', true, data, function ( result ) {
          if(result.success) {
            $('#setAreaList').empty();
            var resultData = result.data;
            for( var i = 0 ; i < resultData.length ; i++ ){
              var html =
              '<li class="list-group-item d-flex justify-content-between align-items-center">' +
              ' <div class="col-12">' +
              '  <b>' + resultData[i].setEmdNm + '&nbsp;' + resultData[i].setRiNm + '</b>' +
              '  <a class="float-right">'+ resultData[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
              ' </div>' +
              '</li>';
              $('#setAreaList').append( html );
              ajaxSend( '/branch/storeAreaSettingCoordinate', 'post', true, resultData[i], function ( result ) {
                if( result.success ) {
                  var resultData = result.data;
                  var path = Array();
                  for( var i = 0 ; i < resultData.length ; i++ ){
                    path.push( new kakao.maps.LatLng(resultData[i].crdntLa, resultData[i].crdntLo) );
                  }
                  var polygon = new kakao.maps.Polygon({
                    path:path, // 그려질 다각형의 좌표 배열입니다
                    strokeWeight: 1, // 선의 두께입니다
                    strokeColor: '#004c80', // 선의 색깔입니다
                    strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid', // 선의 스타일입니다
                    fillColor: '#fff', // 채우기 색깔입니다
                    fillOpacity: 0.3 // 채우기 불투명도 입니다
                  });
                  // 지도에 다각형을 표시합니다
                  polygon.setMap(map);
                }
              });
            }
          }
        });
      } else if( data.stoSetSeCd == '02') {
        ajaxSend( '/branch/storeDistanceSetting', 'post', true, data, function ( result ) {
          if(result.success) {
            $('#setDistanceList').empty();
            var resultData = result.data;
            for( var i = 0 ; i < resultData.length ; i++ ){
              var html =
              '<li class="list-group-item d-flex justify-content-between align-items-center">' +
              ' <div class="col-12">' +
              '  <b>' + resultData[i].setStdDstnc.toFixed(2) + '(km) ~ ' + resultData[i].setEndDstnc.toFixed(2) + '(km)</b>' +
              '  <a class="float-right">'+ resultData[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
              ' </div>' +
              '</li>';
              $('#setDistanceList').append( html );
              var circle = new kakao.maps.Circle({
                  center : new kakao.maps.LatLng(data.stoLa, data.stoLo),  // 원의 중심좌표 입니다
                  radius: (resultData[i].setEndDstnc * 1000) , // 미터 단위의 원의 반지름입니다
                  strokeWeight: 1, // 선의 두께입니다
                  strokeColor: '#004c80', // 선의 색깔입니다
                  strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                  strokeStyle: 'solid', // 선의 스타일입니다
                  fillColor: '#fff', // 채우기 색깔입니다
                  fillOpacity: 0.3 // 채우기 불투명도 입니다
              });
              circle.setMap(map);
            }
          }
        });
      }

      ajaxSend( '/branch/storeSpecialSetting', 'post', true, data, function ( result ) {
        if(result.success) {
          $('#setSpecialList').empty();
          var resultData = result.data;
          for( var i = 0 ; i < resultData.length ; i++ ){
            var html =
            '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            ' <div class="col-12">' +
            '  <b>' + resultData[i].setNm + '</b>' +
            '  <a class="float-right">'+ resultData[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
            ' </div>' +
            '</li>';
            $('#setSpecialList').append( html );
            ajaxSend( '/branch/storeSpecialSettingLocation', 'post', true, resultData[i], function ( result ) {
              if( result.success ) {
                var resultData = result.data;
                var path = Array();
                for( var i = 0 ; i < resultData.length ; i++ ){
                  path.push( new kakao.maps.LatLng(resultData[i].lctnLa, resultData[i].lctnLo) );
                }
                var polygon = new kakao.maps.Polygon({
                  path:path, // 그려질 다각형의 좌표 배열입니다
                  strokeWeight: 1, // 선의 두께입니다
                  strokeColor: '#004c80', // 선의 색깔입니다
                  strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                  strokeStyle: 'solid', // 선의 스타일입니다
                  fillColor: '#fff', // 채우기 색깔입니다
                  fillOpacity: 0.3 // 채우기 불투명도 입니다
                });
                // 지도에 다각형을 표시합니다
                polygon.setMap(map);
              }
            });

          }
        }
      });
    },500);
  });

  $('#storeRegister').on('show.bs.modal', function (event) {
    $('#r_stoBizSeCd').bootstrapToggle('on');
  });
  $('#storeRegister').on('hidden.bs.modal', function (event) {
    $('#r_stoBizSeCd').bootstrapToggle('on');
  });
  $('#r_stoBizSeCd').change(function () {
    if( $('#r_stoBizSeCd').prop('checked') ) {
      $('#r_bizCrprt').hide();
      $('#r_bizPrivate').show();
    } else {
      $('#r_bizCrprt').show();
      $('#r_bizPrivate').hide();
    }
  });

  $('#storeModify').on('show.bs.modal', function (event) {
    $('#u_stoId').val('');
    $('#u_stoBsnsRgnmb').val('');
    $('#u_stoMtlty').val('');
    $('#u_stoRprsntvNm').val('');
    $('#u_stoBrdYmd').val('');
    $('#u_stoCrprtRgnmb').val('');
    $('#u_stoOpnngYmd').val('');
    $('#u_stoBsnsPlaceAdres').val('');
    $('#u_stoHdofcAdres').val('');
    $('#u_stoBizcnd').val('');
    $('#u_stoInduty').val('');
    $('#u_stoTelno').val('');
    $('#u_stoVrtlAcnt').val('');
    $('#u_stoId').val( data.stoId );
    $('#u_stoBsnsRgnmb').val( data.stoBsnsRgnmb.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3') );
    $('#u_stoMtlty').val( data.stoMtlty );
    $('#u_stoRprsntvNm').val( data.stoRprsntvNm );
    if(data.stoBrdYmd) $('#u_stoBrdYmd').val( data.stoBrdYmd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
    if(data.stoCrprtRgnmb) $('#u_stoCrprtRgnmb').val( data.stoCrprtRgnmb.replace(/(\d{6})(\d{7})/, '$1-$2') );
    $('#u_stoOpnngYmd').val( data.stoOpnngYmd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
    $('#u_stoBsnsPlaceAdres').val( data.stoBsnsPlaceAdres );
    $('#u_stoHdofcAdres').val( data.stoHdofcAdres );
    $('#u_stoBizcnd').val( data.stoBizcnd );
    $('#u_stoInduty').val( data.stoInduty );
    $('#u_stoTelno').val( phoneFomatter(data.stoTelno ) );
    $('#u_stoVrtlAcnt').val( data.stoVrtlAcnt );

    if( data.stoBizSeCd == '01') {
      $('#u_stoBizSeCd').bootstrapToggle('on');
    } else if( data.stoBizSeCd == '02') {
      $('#u_stoBizSeCd').bootstrapToggle('off');
    }

    if( data.stoStateCd == '01') {
      $('#u_stoStateCd').bootstrapToggle('on');
    } else if( data.stoStateCd == '02') {
      $('#u_stoStateCd').bootstrapToggle('off');
    }
  });
  $('#storeModify').on('hidden.bs.modal', function (event) {
    $('#u_stoBizSeCd').bootstrapToggle('on');
  });

  $('#u_stoBizSeCd').change(function () {
    if( $('#u_stoBizSeCd').prop('checked') ) {
      $('#u_bizCrprt').hide();
      $('#u_bizPrivate').show();
    } else {
      $('#u_bizCrprt').show();
      $('#u_bizPrivate').hide();
    }
  });
  $('#btn_modify').on('click', function () {
    data.stoId = $('#u_stoId').val();
    if( $('#u_stoBsnsRgnmb').val() ) data.stoBsnsRgnmb = $('#u_stoBsnsRgnmb').val().replace(/-/g,"");
    data.stoMtlty = $('#u_stoMtlty').val();
    data.stoRprsntvNm = $('#u_stoRprsntvNm').val();
    if( $('#u_stoOpnngYmd').val() ) data.stoOpnngYmd = $('#u_stoOpnngYmd').val().replace(/-/g,"");
    data.stoBsnsPlaceAdres = $('#u_stoBsnsPlaceAdres').val();
    data.stoBizcnd = $('#u_stoBizcnd').val();
    data.stoInduty = $('#u_stoInduty').val();
    if( $('#u_stoTelno').val() ) data.stoTelno = $('#u_stoTelno').val().replace(/-/g,"");
    data.stoVrtlAcnt = $('#u_stoVrtlAcnt').val();
    if( $('#u_stoStateCd').prop('checked') )
      data.stoStateCd = '01';
    else
      data.stoStateCd = '02';

    if( $('#u_stoBizSeCd').prop('checked') ) {
      data.stoBizSeCd = '01';
      if( $('#u_stoBrdYmd').val() ) data.stoBrdYmd = $('#u_stoBrdYmd').val().replace(/-/g,"");
      else data.stoBrdYmd = '';
    } else {
      data.stoBizSeCd = '02';
      if( $('#u_stoCrprtRgnmb').val() ) data.stoCrprtRgnmb = $('#u_stoCrprtRgnmb').val().replace(/-/g,"");
      else data.stoCrprtRgnmb = '';
      data.stoHdofcAdres = $('#u_stoHdofcAdres').val();
    }

    Swal.fire({
      title :'상점 정보 수정',
      text : '상점 정보를 수정 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '수정',
      confirmButtonAriaLabel: '수정',
      cancelButtonText: '취소',
      cancelButtonAriaLabel: '취소'
    }).then(function (result) {
      if( result.value ) {
        ajaxSend( '/branch/storeModify', 'post', true, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'수정 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              $('#storeModify').modal('hide');
            });
          } else {
            Swal.fire({
              title :'수정 오류',
              text : result.message,
              icon : 'danger',
              heightAuto: false
            });
          }
        });
      }
    });
  });

  $('#storeModifySurcharge').on('show.bs.modal', function (event) {
    if( data.stoNightSrchrApplyYn == 'Y'){
      $('u_stoNightSrchrApplyYn').bootstrapToggle('on');
    } else {
      $('u_stoNightSrchrApplyYn').bootstrapToggle('off');
    }
    $('#u_stoNightSrchrStdTm').val( data.stoNightSrchrStdTm );
    $('#u_stoNightSrchrEndTm').val( data.stoNightSrchrEndTm );
    $('#u_stoNightSrchrAmnt').val( data.stoNightSrchrAmnt );

    ajaxSend( '/branch/storeSurcharge', 'post', true, data, function ( result ) {
      if(result.success) {
        var resultData = result.data;
        for( var i = 0 ; i < resultData.length ; i++ ){
          $('#u_srchrCn' + i ).val( resultData[i].srchrCn );
          $('#u_srchrAmnt' + i ).val( resultData[i].srchrAmnt );
          if( resultData[i].srchrApplyYn == 'Y')
            $('#u_srchrApplyYn' + i ).bootstrapToggle('on');
          else
            $('#u_srchrApplyYn' + i ).bootstrapToggle('off');
        }
      }
    });
  });
  $('#btn_modifySurcharge').on('click', function () {
    if( $('#u_stoNightSrchrApplyYn').prop('checked') )
      data.stoNightSrchrApplyYn = 'Y';
    else
      data.stoNightSrchrApplyYn = 'N';
    data.stoNightSrchrStdTm = $('#u_stoNightSrchrStdTm').val();
    data.stoNightSrchrEndTm = $('#u_stoNightSrchrEndTm').val();
    data.stoNightSrchrAmnt = $('#u_stoNightSrchrAmnt').val();

    surchargeArray = Array();
    for( var i = 0 ; i < 6 ; i++ ) {
      var surcharge = {};
      surcharge.stoId = data.stoId;
      surcharge.srchrCn = $('#u_srchrCn' + i ).val();
      surcharge.srchrAmnt = $('#u_srchrAmnt' + i ).val();
      surcharge.srchrApplyYn = ( $('#u_srchrApplyYn' + i ).prop('checked') ? 'Y' : 'N' );
      surcharge.srchrSeCd = '0' +(i+1);
      surchargeArray.push(surcharge);
    }
    data.surcharge = surchargeArray;
    Swal.fire({
      title :'상점 할증 수정',
      text : '상점 할증을 수정 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '수정',
      confirmButtonAriaLabel: '수정',
      cancelButtonText: '취소',
      cancelButtonAriaLabel: '취소'
    }).then(function (result) {
      if( result.value ) {

        ajaxSend( '/branch/storeModifyNightSurcharge', 'post', true, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'수정 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              $('#storeModifySurcharge').modal('hide');
            });
          } else {
            Swal.fire({
              title :'수정 오류',
              text : result.message,
              icon : 'danger',
              heightAuto: false
            });
          }
        });
      }
    });
  });

  var tb_area, tb_distance;
  $('#storeModifyFee').on('show.bs.modal', function (event) {
    tb_area = $('#tb_area').DataTable({
      ajax : {
        url : '/branch/storeAreaSetting',
        type : 'post',
        data : data,
        dataSrc :function( data, textStatus, jqXHR ) {
          if( data.success )
            return data.data;
          else
            return null;
        }
      },
      columns : [
        {
          data : 'setSeqNo',
          visible : false
        },
        {
          data : 'stoId',
          visible : false
        },
        {
          data : 'setSdCd',
          width : '180px',
          render : function ( data, type, row, meta) {
            var selectHtml = '<select id="sdCd" class="form-control select2">';
            ajaxSend('/common/sido','post', false, null, function ( result ) {
              if( result.success ) {
                var resultData = result.data;
                for( var i = 0; i < resultData.length; i++ ) {
                  if( resultData[i].sdCd == data ) {
                    selectHtml += '<option value="' + resultData[i].sdCd + '" selected >' + resultData[i].sdNm + '</option>';
                  } else {
                    selectHtml += '<option value="' + resultData[i].sdCd + '">' + resultData[i].sdNm + '</option>';
                  }
                }
              }
              selectHtml += '</select>'

            });
            return selectHtml;
          }
        },
        {
          data : 'setSggCd',
          width : '180px',
          render : function ( data, type, row, meta) {
            var selectHtml = '<select id="sggCd" class="form-control select2">';
            var reqParam = {};
            reqParam.sdCd = row.setSdCd;
            ajaxSend('/common/sigungu','post', false, reqParam, function ( result ) {
              if( result.success ) {
                var resultData = result.data;
                for( var i = 0; i < resultData.length; i++ ) {
                  if( data ) {
                    if( resultData[i].sggCd == data ) {
                      selectHtml += '<option value="' + resultData[i].sggCd + '" selected >' + resultData[i].sggNm + '</option>';
                    } else {
                      selectHtml += '<option value="' + resultData[i].sggCd + '">' + resultData[i].sggNm + '</option>';
                    }
                  } else {
                    if( i == 0 ) {
                      row.setSggCd = resultData[i].sggCd;
                      selectHtml += '<option value="' + resultData[i].sggCd + '" selected >' + resultData[i].sggNm + '</option>';
                    } else {
                      selectHtml += '<option value="' + resultData[i].sggCd + '">' + resultData[i].sggNm + '</option>';
                    }
                  }
                }
              }
              selectHtml += '</select>'

            });
            return selectHtml;
          }
        },
        {
          data : 'setEmdCd',
          width : '120px',
          render : function ( data, type, row, meta) {
            var selectHtml = '<select id="emdCd" class="form-control select2">';
            var reqParam = {};
            reqParam.sdCd = row.setSdCd;
            reqParam.sggCd = row.setSggCd;

            ajaxSend('/common/emd','post', false, reqParam, function ( result ) {
              if( result.success ) {
                var resultData = result.data;
                for( var i = 0; i < resultData.length; i++ ) {
                  if( data ) {
                    if( resultData[i].emdCd == data ) {
                      selectHtml += '<option value="' + resultData[i].emdCd + '" selected >' + resultData[i].emdNm + '</option>';
                    } else {
                      selectHtml += '<option value="' + resultData[i].emdCd + '">' + resultData[i].emdNm + '</option>';
                    }
                  } else {
                    if( i == 0 ) {
                      row.setEmdCd = resultData[i].emdCd;
                      selectHtml += '<option value="' + resultData[i].emdCd + '" selected >' + resultData[i].emdNm + '</option>';
                    } else {
                      selectHtml += '<option value="' + resultData[i].emdCd + '">' + resultData[i].emdNm + '</option>';
                    }
                  }
                }
              }
              selectHtml += '</select>'

            });
            return selectHtml;
          }
        },
        {
          data : 'setRiCd',
          width : '120px',
          render : function ( data, type, row, meta) {
            var selectHtml = '<select id="riCd" class="form-control select2">';
            var reqParam = {};
            reqParam.sdCd = row.setSdCd;
            reqParam.sggCd = row.setSggCd;
            reqParam.emdCd = row.setEmdCd;
            ajaxSend('/common/ri','post', false, reqParam, function ( result ) {
              if( result.success ) {
                var resultData = result.data;
                for( var i = 0; i < resultData.length; i++ ) {
                  if( data ) {
                    if( resultData[i].riCd == data )
                      selectHtml += '<option value="' + resultData[i].riCd + '" selected >' + resultData[i].riNm + '</option>';
                    else
                      selectHtml += '<option value="' + resultData[i].riCd + '">' + resultData[i].riNm + '</option>';
                  } else {
                    if( i == 0 )
                      selectHtml += '<option value="' + resultData[i].riCd + '" selected >' + resultData[i].riNm + '</option>';
                    else
                      selectHtml += '<option value="' + resultData[i].riCd + '">' + resultData[i].riNm + '</option>';
                  }
                }
              }
              selectHtml += '</select>'

            });
            return selectHtml;
          }
        },
        {
          data : 'setAmnt',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setAmnt" value="' + data +'">';
          }
        },
        {
          data : null,
          width : '50px',
          render : function ( data, type, row, meta) {
            return '<button type="button" class="btn btn-block btn-xs bg-danger">삭제</button>';
          }
        }
      ],
      autoWidth : false,
      paging: false,
      searching: false,
      dom: 't',
      order: [ [1, 'desc'] ],
      language: {
        'emptyTable': '지역 요금 설정이 없습니다.'
      }
    });
    $('#tb_area tbody').on('change','#sdCd',function () {
      var row = tb_area.row($(this).closest('tr'));
      var data = tb_area.row($(this).closest('tr')).data();
      data.setSdCd = this.value;
      data.setSggCd = null;
      data.setEmdCd = null;
      data.setRiCd = null;
      tb_area.row(row).data(data).draw();
    });
    $('#tb_area tbody').on('change','#sggCd',function () {
      var row = tb_area.row($(this).closest('tr'));
      var data = tb_area.row($(this).closest('tr')).data();
      data.setSggCd = this.value;
      data.setEmdCd = null;
      data.setRiCd = null;
      tb_area.row(row).data(data).draw();
    });
    $('#tb_area tbody').on('change','#emdCd',function () {
      var row = tb_area.row($(this).closest('tr'));
      var data = tb_area.row($(this).closest('tr')).data();
      data.setEmdCd = this.value;
      data.setRiCd = null;
      tb_area.row(row).data(data).draw();
    });
    $('#tb_area tbody').on('change', '.setAmnt',function () {
      console.log(this.value);
      var row = tb_area.row($(this).closest('tr'));
      var data = tb_area.row($(this).closest('tr')).data();
      data.setAmnt = this.value;
      tb_area.row(row).data(data).draw();
    });
    $('#tb_area tbody').on('click', '.bg-danger', function () {
      var row = tb_area.row($(this).closest('tr'));
      tb_area.row(row).remove().draw();
    });

    tb_distance = $('#tb_distance').DataTable({
      ajax : {
        url : '/branch/storeDistanceSetting',
        type : 'post',
        data : data,
        dataSrc :function( data, textStatus, jqXHR ) {
          if( data.success )
            return data.data;
          else
            return null;
        }
      },
      columns : [
        {
          data : 'setSeqNo',
          visible : false
        },
        {
          data : 'stoId',
          visible : false
        },
        {
          data : 'setStdDstnc',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setStdDstnc" value="' + data +'">';
          }
        },
        {
          data : 'setEndDstnc',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setEndDstnc" value="' + data +'">';
          }
        },
        {
          data : 'setAmnt',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setAmnt" value="' + data +'">';
          }
        },
        {
          data : null,
          width : '50px',
          render : function ( data, type, row, meta) {
            return '<button type="button" class="btn btn-block btn-xs bg-danger">삭제</button>';
          }
        }
      ],
      autoWidth : false,
      paging: false,
      searching: false,
      dom: 't',
      order: [ [1, 'desc'] ],
      language: {
        'emptyTable': '거리 설정 요금이 없습니다.'
      }
    });
    $('#tb_distance tbody').on('change', '.setStdDstnc',function () {
      var row = tb_distance.row($(this).closest('tr'));
      var data = tb_distance.row($(this).closest('tr')).data();
      data.setStdDstnc = this.value;
      tb_distance.row(row).data(data).draw();
    });
    $('#tb_distance tbody').on('change', '.setEndDstnc',function () {
      var row = tb_distance.row($(this).closest('tr'));
      var data = tb_distance.row($(this).closest('tr')).data();
      data.setEndDstnc = this.value;
      tb_distance.row(row).data(data).draw();
    });
    $('#tb_distance tbody').on('change', '.setAmnt',function () {
      var row = tb_distance.row($(this).closest('tr'));
      var data = tb_distance.row($(this).closest('tr')).data();
      data.setAmnt = this.value;
      tb_distance.row(row).data(data).draw();
    });
    $('#tb_distance tbody').on('click', '.bg-danger', function () {
      var row = tb_distance.row($(this).closest('tr'));
      tb_distance.row(row).remove().draw();
    });

    if(data.stoSetSeCd == '01') {
      $('#u_stoSetSeCd').bootstrapToggle('on');
    } else {
      $('#u_stoSetSeCd').bootstrapToggle('off');
    }
  });
  $('#storeModifyFee').on('hidden.bs.modal', function (event) {
    $('#u_stoSetSeCd').bootstrapToggle('on');
    tb_area.destroy().draw();
    tb_distance.destroy().draw();
  });

  $('#u_stoSetSeCd').change(function () {
    if( $('#u_stoSetSeCd').prop('checked') ){
      $('#u_setDistance').hide();
      $('#u_setArea').show();
    } else {
      $('#u_setArea').hide();
      $('#u_setDistance').show();
    }
  });

  $('#btn_distanceInst').on('click', function () {
    tb_distance.row.add({
      setSeqNo : '0',
      stoId : data.stoId,
      setStdDstnc : '0',
      setEndDstnc : '0',
      setAmnt : '0',
    }).draw(false);
  });

  $('#btn_areaInst').on('click', function () {
    tb_area.row.add({
      setSeqNo : '0',
      stoId : data.stoId,
      setSdCd : '26',
      setSggCd : '110',
      setEmdCd : '101',
      setRiCd : '00',
      setAmnt : '0',
    }).draw(false);
  });

  $('#btn_modifyFee').on('click', function () {
    if( $('#u_stoSetSeCd').prop('checked') ) {
      var rowsData = tb_area.rows().data();
      var setDatas = Array();
      for( var i = 0 ; i < rowsData.length; i++ ) {
        var setData = {};
        setData.stoId = rowsData[i].stoId;
        setData.setSeqNo = rowsData[i].setSeqNo;
        setData.setSdCd = rowsData[i].setSdCd;
        setData.setSggCd = rowsData[i].setSggCd;
        setData.setEmdCd = rowsData[i].setEmdCd;
        setData.setRiCd = rowsData[i].setRiCd;
        setData.setAmnt = rowsData[i].setAmnt;
        setDatas.push(setData);
      }
      data.stoSetData = setDatas;
    } else {
      var rowsData = tb_distance.rows().data();
      var setDatas = Array();
      for( var i = 0 ; i < rowsData.length; i++ ) {
        var setData = {};
        setData.stoId = rowsData[i].stoId;
        setData.setSeqNo = rowsData[i].setSeqNo;
        setData.setStdDstnc = rowsData[i].setStdDstnc;
        setData.setEndDstnc = rowsData[i].setEndDstnc;
        setData.setAmnt = rowsData[i].setAmnt;
        setDatas.push(setData);
      }
      data.stoSetData = setDatas;
    }
    data.stoSetSeCd = ( $('#u_stoSetSeCd').prop('checked') ? '01' : '02' );
    Swal.fire({
      title :'상점 요금 저장',
      text : '상점 요금을 저장 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '저장',
      confirmButtonAriaLabel: '저장',
      cancelButtonText: '취소',
      cancelButtonAriaLabel: '취소'
    }).then(function (result) {
      if( result.value ) {
        ajaxSend( '/branch/storeModifyFee', 'post', false, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'저장 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              $('#storeModifyFee').modal('hide');
            });
          } else {
            Swal.fire({
              title :'저장 오류',
              text : result.message,
              icon : 'danger',
              heightAuto: false
            });
          }
        });
      }
    });
  });

  var tb_special;
  var mapRow, mapData;
  $('#storeModifySpecial').on('show.bs.modal', function (event) {
    tb_special = $('#tb_special').DataTable({
      ajax : {
        url : '/branch/storeSpecialSetting',
        type : 'post',
        data : data,
        dataSrc :function( data, textStatus, jqXHR ) {
          if( data.success )
            return data.data;
          else
            return null;
        }
      },
      columns : [
        {
          data : 'setSeqNo',
          visible : false
        },
        {
          data : 'stoId',
          visible : false
        },
        {
          data : 'setNm',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setNm" value="' + data +'">';
          }
        },
        {
          data : 'setAmnt',
          render : function ( data, type, row, meta) {
            return '<input type="text" class="form-control form-control-sm setAmnt" value="' + data +'">';
          }
        },
        {
          data : null,
          width : '80px',
          render : function ( data, type, row, meta) {
            return '<button type="button" class="btn btn-block btn-xs bg-info">지도 보기</button>';
          }
        },
        {
          data : null,
          width : '50px',
          render : function ( data, type, row, meta) {
            return '<button type="button" class="btn btn-block btn-xs bg-danger">삭제</button>';
          }
        }
      ],
      autoWidth : false,
      paging: false,
      searching: false,
      dom: 't',
      order: [ [1, 'desc'] ],
      language: {
        'emptyTable': '특별 설정 요금이 없습니다.'
      }
    });
    $('#tb_special tbody').on('click', '.bg-info',function () {
      mapRow = tb_special.row($(this).closest('tr'));
      mapData = tb_special.row($(this).closest('tr')).data();
      $('#storeModifySpecialMap').modal('show');
    });
    $('#tb_special tbody').on('click', '.bg-danger',function () {
      var row = tb_distance.row($(this).closest('tr'));
      tb_special.row(row).remove().draw();
    });
  });
  $('#storeModifySpecial').on('hidden.bs.modal', function (event) {
    tb_special.destroy().draw();
  });

  var manager;
  $('#storeModifySpecialMap').on('show.bs.modal', function () {
    setTimeout(function () {
      var container = document.getElementById('specialMap');
      var options = {
        center: new kakao.maps.LatLng(data.stoLa, data.stoLo),
        level: 5
      };

      var drawingMap = new kakao.maps.Map(container, options);
      //지점 위치 마커
      var markerPosition  = new kakao.maps.LatLng(data.stoLa, data.stoLo);
      var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(drawingMap);

      var drawingOptions= { // Drawing Manager를 생성할 때 사용할 옵션입니다
          map: drawingMap, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
          drawingMode: [ // Drawing Manager로 제공할 그리기 요소 모드입니다
              kakao.maps.drawing.OverlayType.POLYGON
          ],
          // 사용자에게 제공할 그리기 가이드 툴팁입니다
          // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
          guideTooltip: ['draw', 'drag', 'edit'],
          polygonOptions: {
              draggable: true,
              removable: false,
              editable: true,
              strokeColor: '#39f',
              fillColor: '#39f',
              fillOpacity: 0.5,
              hintStrokeStyle: 'dash',
              hintStrokeOpacity: 0.5
          }
      };

      manager = new kakao.maps.drawing.DrawingManager(drawingOptions);
      ajaxSend( '/branch/storeSpecialSettingLocation', 'post', true, mapData, function ( result ) {
        if( result.success ) {
          var resultData = result.data;
          var path = Array();
          for( var i = 0 ; i < resultData.length ; i++ ){
            path.push( new kakao.maps.LatLng(resultData[i].lctnLa, resultData[i].lctnLo) );
          }
          // 지도에 다각형을 표시합니다
          manager.put(kakao.maps.drawing.OverlayType.POLYGON, path);
        }
      });
    }, 500);
  });

  $('#btn_reDraw').on('click', function () {
    var overlays = manager.getOverlays();
    if( overlays.polygon.length != 0 )  manager.remove(overlays.polygon[0]);
    manager.cancel();
    manager.select(kakao.maps.drawing.OverlayType['POLYGON']);
  });
  $('#btn_specialInst').on('click', function () {
    tb_special.row.add({
      setSeqNo : '0',
      stoId : data.stoId,
      setNm : '0',
      setAmnt : '0',
    }).draw(false);
  });
});
