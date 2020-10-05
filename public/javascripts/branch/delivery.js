var tb_delivery
$(document).ready(function () {
  var today = new Date();
  var stdDay = new Date();
  stdDay.setDate( 1 );
  $('#s_stdDate').datetimepicker({
    format: 'YYYY-MM-DD',
    locale: moment.locale('ko'),
    showClose : true
  });
  $('#s_endDate').datetimepicker({
    format: 'YYYY-MM-DD',
    locale: moment.locale('ko'),
    showClose : true
  });
  $('#s_stdDate').val( stdDay.yyyymmdd().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
  $('#s_endDate').val( today.yyyymmdd().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );


  tb_delivery = $('#tb_delivery').DataTable({
    ajax : {
      url : '/branch/deliverys',
      type : 'post',
      data :  function ( d ) {
        d.stdDate = $('#s_stdDate').val();
        d.endDate = $('#s_endDate').val();
      },
    },
    columns : [
      {
        data : 'dlvryNo',
        width : '70px'
      },
      {
        data : 'stoMtlty',
        render : function ( data, type, row, meta ) {
          if( row.shareYn == 'Y' ) return '(공유)' + data;
          else return data;
        }
      },
      {
        data : 'dlvryCusRoadAdres',
        render : function ( data, type, row, meta) {
          if( row.dlvryCusDetlAdres )
            return data + ' ' + row.dlvryCusDetlAdres;
          else
            return data;
        }
      },
      {
        data : 'dlvryPaySeCd',
        width : '50px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-purple">현금</span>';
          else if( data  == '02')
            return  '<span class="badge bg-navy">카드</span>';
          else if( data  == '03')
            return  '<span class="badge bg-pink">선결</span>';
        }
      },
      {
        data : 'dlvryTcDt',
        width : '120px',
        render : function ( data, type, row, meta) {
          return data.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
        }
      },
      {
        data : 'dlvryAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'dlvryVatAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'dlvryFeeAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'dlvryBrcofcFeeAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'dlvryRiderFeeAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'dlvryShareFeeAmnt',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'riderNm'
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    order: [1, 'desc'],
    language: {
      'emptyTable': '배달 대행 내역이 없습니다.'
    }
  });

  $('#btn_search').on('click', function () {
    tb_delivery.ajax.reload();
  });

});
$(document).keydown(function(key) {
  if (key.keyCode == 13) {
    tb_delivery.ajax.reload();
  }
});
