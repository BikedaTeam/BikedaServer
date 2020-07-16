$(document).ready(function () {
  $('#tb_store').DataTable({
    ajax : {
      url : '/branch/stores',
      type : 'post'
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
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-info">상세</button>';
        }
      },
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

  $('#tb_store tbody').on('click', '.bg-info', function () {
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

  //================= storeDetail====================================
  var stateSwap;
  var bizSwap;
  var setSwap;
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


    var sendData = {
      stoId : data.stoId
    };
    serverAjaxSend( '/branch/surcharge', 'post', sendData, function ( datas ) {
      $('#surchargeList').empty();
      var data = datas.data;
      for( var i = 0 ; i < data.length ; i++ ){
        var html =
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        ' <div class="col-12">' +
        '  <input disabled type="checkbox"'+ ( data[i].srchrApplyYn == 'Y' ? 'checked' : '' ) +'>&nbsp;<b>' + data[i].srchrCn + '</b>' +
        '  <a class="float-right">'+ data[i].srchrAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
        ' </div>' +
        '</li>';
        $('#surchargeList').append( html );
      }
    });

    serverAjaxSend( '/branch/setDistance', 'post', sendData, function ( datas ) {
      $('#setDistanceList').empty();
      var data = datas.data;
      for( var i = 0 ; i < data.length ; i++ ){
        var html =
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        ' <div class="col-12">' +
        '  <b>' + data[i].setStdDstnc.toFixed(2) + '(km) ~ ' + data[i].setEndDstnc.toFixed(2) + '(km)</b>' +
        '  <a class="float-right">'+ data[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
        ' </div>' +
        '</li>';
        $('#setDistanceList').append( html );
      }
    });

    serverAjaxSend( '/branch/setArea', 'post', sendData, function ( datas ) {
      $('#setAreaList').empty();
      var data = datas.data;
      for( var i = 0 ; i < data.length ; i++ ){
        var html =
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        ' <div class="col-12">' +
        '  <b>' + data[i].setSbmnc + '&nbsp;' + data[i].setVlg + '</b>' +
        '  <a class="float-right">'+ data[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
        ' </div>' +
        '</li>';
        $('#setAreaList').append( html );
      }
    });

    serverAjaxSend( '/branch/setSpecial', 'post', sendData, function ( datas ) {
      $('#setSpecialList').empty();
      var data = datas.data;
      for( var i = 0 ; i < data.length ; i++ ){
        var html =
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        ' <div class="col-12">' +
        '  <b>' + data[i].setNm + '</b>' +
        '  <a class="float-right">'+ data[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
        ' </div>' +
        '</li>';
        $('#setSpecialList').append( html );
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
    $('#bizDefault').append( bizSwap );
    if( $('#stoBizSeCd').prop('checked') )
      bizSwap = $('#bizCrprt').detach();
    else
      bizSwap = $('#bizPrivate').detach();
  });

  $('#stoSetSeCd').change(function () {
    $('#setDefault').append( setSwap );
    if( $('#stoSetSeCd').prop('checked') )
      setSwap = $('#setDistance').detach();
    else
      setSwap = $('#setArea').detach();
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

      var sendData = {};
      sendData.sdCd = '26';
      sendData.sggCd = '350';
      sendData.emdCd = '103';
      sendData.riCd = '00';
      apiAjaxSend( '/api/common/coordinate', 'get', sendData, function ( result ) {
        if( result.success ) {
          var data = result.data;
          var path = Array();
          for( var i = 0 ; i < data.length ; i++ ){
            path.push( new kakao.maps.LatLng(data[i].crdntLa, data[i].crdntLo) );
          }
          var polygon = new kakao.maps.Polygon({
            path:path, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 1, // 선의 두께입니다
            strokeColor: '#004c80', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid', // 선의 스타일입니다
            fillColor: '#fff', // 채우기 색깔입니다
            fillOpacity: 0.7 // 채우기 불투명도 입니다
          });
          // 지도에 다각형을 표시합니다
          polygon.setMap(map);
        }
      });
    },500);
  });

  var r_bizSwap;
  $('#storeRegister').on('show.bs.modal', function (event) {
    $('#r_stoBizSeCd').bootstrapToggle('on');
  });
  $('#storeRegister').on('hidden.bs.modal', function (event) {
    $('#r_stoBizSeCd').bootstrapToggle('on');
  });
  $('#r_stoBizSeCd').change(function () {
    $('#r_bizDefault').append( r_bizSwap );
    if( $('#r_stoBizSeCd').prop('checked') )
      r_bizSwap = $('#r_bizCrprt').detach();
    else
      r_bizSwap = $('#r_bizPrivate').detach();
  });

  var u_bizSwap;
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
    $('#u_bizDefault').append( u_bizSwap );
    if( $('#u_stoBizSeCd').prop('checked') )
      u_bizSwap = $('#u_bizCrprt').detach();
    else
      u_bizSwap = $('#u_bizPrivate').detach();
  });

  var u_setSwap;
  var tb_area, tb_distance;
  $('#storeModifyFee').on('show.bs.modal', function (event) {
    var reqParam = {};
    reqParam.stoId = data.stoId;
    tb_area = $('#tb_area').DataTable({
      ajax : {
        url : 'http:// .gabia.io/api/store/store-area',
        type : 'get',
        data : reqParam,
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
          visible : false
        },
        {
          data : 'setSdNm'
        },
        {
          data : 'setSggCd',
          visible : false
        },
        {
          data : 'setSggNm'
        },
        {
          data : 'setEmdCd',
          visible : false
        },
        {
          data : 'setEmdNm'
        },
        {
          data : 'setRiCd',
          visible : false
        },
        {
          data : 'setRiNm'
        },
        {
          data : 'setAmnt',
          render : function ( data, type, row, meta) {
            return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    $('#tb_area tbody').on('click','tr',function () {
      var areaRow = tb_area.row($(this)).data();
    });
    apiAjaxSend('/api/common/sido','get',null, function ( result ) {
      if( result.success ) {
        var resultData = result.data;
        for( var i = 0; i < resultData.length; i++ ) {
          $('#setSd').append('<option value="' + resultData[i].sdCd + '">' + resultData[i].sdNm + '</option>');
        }
      }
    });
    $('#setSd').on('change', function () {
      var reqParam = {};
      reqParam.sdCd = $('#setSd').val();
      apiAjaxSend('/api/common/sigungu','get',reqParam, function ( result ) {
        if( result.success ) {
          var resultData = result.data;
          for( var i = 0; i < resultData.length; i++ ) {
            $('#setSgg').append('<option value="' + resultData[i].sdCd + '">' + resultData[i].sdNm + '</option>');
          }
        }
      });
    });

    tb_distance = $('#tb_distance').DataTable({
      ajax : {
        url : 'http://deliverylabapi.gabia.io/api/store/store-distance',
        type : 'get',
        data : reqParam,
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
            return data.toFixed(2);
          }

        },
        {
          data : 'setEndDstnc',
          render : function ( data, type, row, meta) {
            return data.toFixed(2);
          }
        },
        {
          data : 'setAmnt',
          render : function ( data, type, row, meta) {
            return data.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    $('#u_setDefault').append( u_setSwap );
    if( $('#u_stoSetSeCd').prop('checked') ){
      u_setSwap = $('#u_setDistance').detach();
    } else {
      u_setSwap = $('#u_setArea').detach();
    }
  });

});
$(document).on('hidden.bs.modal', function (event) {
	if ($('.modal:visible').length) {
		$('body').addClass('modal-open');
	}
});
