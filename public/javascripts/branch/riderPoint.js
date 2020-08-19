var tb_point;
$(document).ready(function () {
  var sendData = {};

  ajaxSend('/branch/riders','post', false, null, function ( result ) {
    if( result.success ) {
      $('#s_riderId').empty();
      var resultData = result.data;
      for( var i = 0; i < resultData.length; i++ ) {
        $('#s_riderId').append('<option value="' + resultData[i].riderId + '">' + resultData[i].riderNm + '</option>');
      }
    }
  });

  var today = new Date();
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
  $('#s_stdDate').val( today.yyyymmdd().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
  $('#s_endDate').val( today.yyyymmdd().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3') );
  tb_point = $('#tb_point').DataTable({
    ajax : {
      url : '/branch/riderPoint',
      type : 'post',
      data :  function ( d ) {
        d.riderId = $('#s_riderId').val();
        d.stdDate = $('#s_stdDate').val();
        d.endDate = $('#s_endDate').val();
        d.pointSeCd = $('#s_pointSeCd').val();
      },
    },
    columns : [
      {
        data : 'pointSeCd',
        width : '80px',
        render : function ( data, type, row, meta ) {
          if( data == '01' )
            return '<strong class="text-primary">적립</strong>';
          else if( data == '02' )
            return '<strong class="text-danger">차감</strong>';
          else return '';
        }
      },
      {
        data : 'pointAmnt',
        width : '150px',
        render : function ( data, type, row, meta ) {
          return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      {
        data : 'pointRegDt',
        width : '200px',
        render : function ( data, type, row, meta) {
          return data.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
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
        .reduce( function (a, b, index ) {
            if( api.column( 0 ).data()[index] == '01' ) return intVal(a) + intVal(b);
            else return intVal(a);
        }, 0 );

      var downtotal = api
        .column( 1 )
        .data()
        .reduce( function (a, b, index ) {
            if( api.column( 0 ).data()[index] == '02' ) return intVal(a) + intVal(b);
            else return intVal(a);
        }, 0 );
      // Update footer
      $( api.column( 0 ).footer() ).html(
          "적립 금액 : <strong class='text-primary'>" + uptotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong> / 차감 금액 : <strong class='text-danger'>" + downtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</strong>"
      );

      var sendData = {};
      sendData.riderId = $('#s_riderId').val();
      ajaxSend( '/branch/riderTotPoint', 'post', true, sendData, function ( result ) {
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
