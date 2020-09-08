var tb_point;
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
  tb_point = $('#tb_point').DataTable({
    ajax : {
      url : '/branch/branchPoint',
      type : 'post',
      data :  function ( d ) {
        d.stdDate = $('#s_stdDate').val();
        d.endDate = $('#s_endDate').val();
      },
    },
    columns : [
      {
        data : 'pointRegDt',
        width : '200px',
        render : function ( data, type, row, meta) {
          return data.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
        }
      },
      {
        data : 'pointIncrsAmnt',
        width : '150px',
        className: 'text-primary',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'pointDecrsAmnt',
        width : '150px',
        className: 'text-danger',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'pointNote'
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    order : [0],
    language: {
      'emptyTable': '포인트 내역이 존재 하지 않습니다.'
    },
    footerCallback : function ( row, data, start, end, display ) {
      var api = this.api();
      var intVal = function ( i ) {
          return typeof i === 'string' ?
              i.replace(/[\$,]/g, '')*1 :
              typeof i === 'number' ?
                  i : 0;
      };
      var uptotal = api
        .column( 1 )
        .data()
        .reduce( function (a, b) {
            return intVal(a) + intVal(b);
        }, 0 );

      var downtotal = api
        .column( 2 )
        .data()
        .reduce( function (a, b) {
            return intVal(a) + intVal(b);
        }, 0 );
      // Update footer
      $( api.column( 1 ).footer() ).html(
        uptotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          // "적립 금액 : <strong class='text-primary'>" + uptotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong> / 차감 금액 : <strong class='text-danger'>" + downtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong>"
      );
      $( api.column( 2 ).footer() ).html(
        downtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          // "적립 금액 : <strong class='text-primary'>" + uptotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong> / 차감 금액 : <strong class='text-danger'>" + downtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong>"
      );
      ajaxSend( '/branch/branchTotPoint', 'post', true, null, function ( result ) {
        if(result.success) {
          if( result.data[0].totPoint < 0 )
            $('#totPoint').html('잔여 포인트 : <strong class="text-danger">' + result.data[0].totPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>');
          else
            $('#totPoint').html('잔여 포인트 : <strong class="text-primary">' + result.data[0].totPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</strong>');
        } else {
          $('#totPoint').html('잔여 포인트 : <strong>0</strong>' );
        }
      });
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
