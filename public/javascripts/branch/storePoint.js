var tb_point;
$(document).ready(function () {
  var sendData = {};

  ajaxSend('/branch/stores','post', false, null, function ( result ) {
    if( result.success ) {
      $('#s_storeId').empty();
      var resultData = result.data;
      $('#s_storeId').append('<option value="">전체</option>');
      for( var i = 0; i < resultData.length; i++ ) {
        $('#s_storeId').append('<option value="' + resultData[i].stoId + '">' + resultData[i].stoMtlty + '</option>');
      }
    }
  });

  tb_point = $('#tb_point').DataTable({
    ajax : {
      url : '/branch/storePoint',
      type : 'post',
      data :  function ( d ) {
        d.storeId = $('#s_storeId').val();
      },
    },
    columns : [
      {
        data : 'stoId',
        width : '100px'
      },
      {
        data : 'stoMtlty'
      },
      {
        data : 'stoRprsntvNm'
      },
      {
        data : 'stoTelno',
        width : '150px',
        render : function ( data, type, row, meta) {
          return phoneFomatter(data);
        }
      },
      {
        data : 'stoPoint',
        width : '150px',
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
