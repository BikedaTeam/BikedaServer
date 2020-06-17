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
        data : 'brcofcId',
        visible : false
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
            return  '<button type="button" class="btn btn-block btn-xs bg-indigo">개인</button>';
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-xs bg-lightblue">법인</button>';
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
            return  '<button type="button" class="btn btn-block btn-xs bg-purple">정상</button>';
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-xs bg-navy">탈회</button>';
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
          return '<button type="button" class="btn btn-block btn-xs bg-teal">요금</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-olive">할증</button>';
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
    $('#storeDetailModal').modal('show');
  });

  $('#tb_store tbody').on('click', '.bg-info', function () {
    table = $('#tb_store').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#storeDetailModal').modal('show');
  });


  var bizSwap;
  var setSwap;
  $('#storeDetailModal').on('show.bs.modal', function (event) {
    var modal = $(this);
    $('#stoBizSeCd').removeClass('bg-indigo bg-lightblue');
    $('#stoStateCd').removeClass('bg-purple bg-navy');

    if( bizSwap ) $('#bizDefault').append( bizSwap );
    if( data.stoBizSeCd == '01') {
      $('#stoBizSeCd').text( '개인' );
      $('#stoBizSeCd').addClass('bg-indigo');
      bizSwap = $('#bizCrprt').detach();
    } else if( data.stoBizSeCd == '02') {
      $('#stoBizSeCd').text( '법인' );
      $('#stoBizSeCd').addClass('bg-lightblue');
      bizSwap = $('#bizPrivate').detach();
    }

    if( data.stoStateCd == '01') {
      $('#stoStateCd').text( '정상' );
      $('#stoStateCd').addClass('bg-purple');
    } else if( data.stoStateCd == '02') {
      $('#stoStateCd').text( '탈회' );
      $('#stoStateCd').addClass('bg-navy');
    }

    $('#stoNightSrchrApplyYn').bootstrapToggle('enable');
    if( data.stoNightSrchrApplyYn == 'Y') {
      $('#stoNightSrchrApplyYn').bootstrapToggle('on');
    } else if( data.stoNightSrchrApplyYn == 'N') {
      $('#stoNightSrchrApplyYn').bootstrapToggle('off');
    }
    $('#stoNightSrchrApplyYn').bootstrapToggle('disable');

    if( setSwap ) $('#setDefault').append( setSwap );
    $('#stoSetSeCd').bootstrapToggle('enable');
    if( data.stoSetSeCd == '01') {
      $('#stoSetSeCd').bootstrapToggle('on');
      setSwap = $('#setDistance').detach();
    } else if( data.stoSetSeCd == '02') {
      $('#stoSetSeCd').bootstrapToggle('off');
      setSwap = $('#setArea').detach();
    }
    $('#stoSetSeCd').bootstrapToggle('disable');

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
    $('#stoBrdYmd').text( data.stoBrdYmd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
    $('#stoCrprtRgnmb').text( data.stoCrprtRgnmb.replace(/(\d{6})(\d{7})/, '$1-$2') );
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

      var html =
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      ' <div class="col-12">' +
      '  <b>할증 구분</b>' +
      '  <a class="float-right">금액</a>' +
      ' </div>' +
      '</li>';
      $('#surchargeList').append( html );

      for( var i = 0 ; i < data.length ; i++ ){
        html =
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

      var html =
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      ' <div class="col-12">' +
      '  <b>거리 구간</b>' +
      '  <a class="float-right">금액</a>' +
      ' </div>' +
      '</li>';
      $('#setDistanceList').append( html );

      for( var i = 0 ; i < data.length ; i++ ){
        html =
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

      var html =
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      ' <div class="col-12">' +
      '  <b>구역</b>' +
      '  <a class="float-right">금액</a>' +
      ' </div>' +
      '</li>';
      $('#setAreaList').append( html );

      for( var i = 0 ; i < data.length ; i++ ){
        html =
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        ' <div class="col-12">' +
        '  <b>' + data[i].setSbmnc + '&nbsp;' + data[i].setVlg + '</b>' +
        '  <a class="float-right">'+ data[i].setAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a>' +
        ' </div>' +
        '</li>';
        $('#setAreaList').append( html );
      }
    });
  });


  $('#stoReg').on('click',function () {
    $('#storeInputModal').modal('show');
  });
  var r_bizSwap;
  $('#storeInputModal').on('show.bs.modal', function (event) {
    console.log(event);
    $('#r_stoBizSeCd').bootstrapToggle('on');
    $('#r_stoSetSeCd').bootstrapToggle('on');
  });
  $('#storeInputModal').on('hidden.bs.modal', function (event) {
    $('#r_stoBizSeCd').bootstrapToggle('on');
    $('#r_stoSetSeCd').bootstrapToggle('on');
  });
  $('#r_stoBizSeCd').change(function () {
    $('#r_bizDefault').append( r_bizSwap );
    if( $('#r_stoBizSeCd').prop('checked') )
      r_bizSwap = $('#r_bizCrprt').detach();
    else
      r_bizSwap = $('#r_bizPrivate').detach();
  });
  var r_setDefault;
  $('#r_stoSetSeCd').change(function () {
    $('#r_setDefault').append( r_setDefault );
    if( $('#r_stoSetSeCd').prop('checked') )
      r_setDefault = $('#r_setDistance').detach();
    else
      r_setDefault = $('#r_setArea').detach();
  });

});
