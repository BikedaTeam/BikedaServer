var tb_point;
$(document).ready(function () {
  var sendData = {};

  ajaxSend('/branch/riders','post', false, null, function ( result ) {
    if( result.success ) {
      $('#s_riderId').empty();
      var resultData = result.data;
      $('#s_riderId').append('<option value="">전체</option>');
      for( var i = 0; i < resultData.length; i++ ) {
        $('#s_riderId').append('<option value="' + resultData[i].riderId + '">' + resultData[i].riderNm + '</option>');
      }
    }
  });

  tb_point = $('#tb_point').DataTable({
    ajax : {
      url : '/branch/riderPoint',
      type : 'post',
      data :  function ( d ) {
        d.riderId = $('#s_riderId').val();
      },
    },
    columns : [
      {
        data : 'riderId',
        width : '100px'
      },
      {
        data : 'riderNm'
      },
      {
        data : 'riderCelno',
        width : '150px',
        render : function ( data, type, row, meta) {
          return phoneFomatter(data);
        }
      },
      {
        data : null,
        width : '300px',
        render : function ( data, type, row, meta) {
          return row.riderWthdrBankNm + ' / ' + row.riderWthdrAcnt;
        }
      },
      {
        data : 'riderPoint',
        render : function ( data, type, row, meta ) {
          if( data > 0 ) {
              return '<strong class="text-primary">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>';
          } else if( data < 0 ) {
            return '<strong class="text-danger">-' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>';
          } else {
            return '<strong>' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>';
          }

        }
      },
      {
        data : null,
        width : '70px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-primary">입금</button>';
        }
      },
      {
        data : null,
        width : '70px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-danger">출금</button>';
        }
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    order : [0,'asc'],
    language: {
      'emptyTable': '포인트 내역이 존재 하지 않습니다.'
    }
  });
  $('#btn_search').on('click', function () {
    tb_point.ajax.reload();
  });
});
$(document).keydown(function(key) {
  if (key.keyCode == 13) {
    tb_point.ajax.reload();
  }
});
