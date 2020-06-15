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

    $('#stoId').text('');
    $('#stoCelno').text('');
    $('#dlvryCusTelno').text('');

    $('#stoId').text( data.stoId );
    $('#stoMtlty').text( data.stoMtlty );

    $('#stoBizSeCd').text( data.stoBizSeCd );

    $('#storeDetailModal').modal('show');
  });

  var bizSwap;
  $('#storeDetailModal').on('show.bs.modal', function (event) {
    var modal = $(this);
    var bizSeCd = $('#stoBizSeCd').text();
    if( bizSwap ) $('#bizDefault').append(bizSwap);
    if( bizSeCd == '01' ) {
      bizSwap = $('#bizCrprt').detach();
    } else if( bizSeCd == '02' ){
      bizSwap = $('#bizPrivate').detach();
    }
  });
});
