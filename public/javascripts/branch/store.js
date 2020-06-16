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
        width : '70px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-info">상세 보기</button>';
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

  });
});
