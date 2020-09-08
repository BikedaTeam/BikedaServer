var tb_rider;
$(document).ready(function () {
  tb_rider = $('#tb_rider').DataTable({
    ajax : {
      url : '/branch/riders',
      type : 'post',
      data :  function ( d ) {
        d.riderNm = $('#s_riderNm').val();
      }
    },
    columns : [
      {
        data : 'riderId',
        width : '70px'
      },
      {
        data : 'riderNm'
      },
      {
        data : 'riderCelno',
        width : '100px',
        render : function ( data, type, row, meta) {
          return phoneFomatter(data);
        }
      },
      {
        data : 'riderStateCd',
        width : '50px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-indigo">정상</span>';
          else if( data  == '02')
            return  '<span class="badge bg-danger">해지</span>';
          else if( data  == '03')
            return  '<span class="badge bg-lightblue">휴무</span>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-success">수정</button>';
        }
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    language: {
      'emptyTable': '라이더가 존재 하지 않습니다.'
    }
  });

  $('#btn_search').on('click', function () {
    tb_rider.ajax.reload();
  });
  $('#tb_rider tbody').on('click','td:not(:has(button))',function () {
    table = $('#tb_rider').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#riderDetail').modal('show');
  });

  $('#tb_rider tbody').on('click', '.bg-success', function () {
    table = $('#tb_rider').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    $('#riderModify').modal('show');
  });

  //================= riderDetail====================================
  $('#riderDetail').on('show.bs.modal', function (event) {
    $('#riderId').text('');
    $('#riderNm').text('');
    $('#riderCelno').text('');
    $('#riderWthdrBankNm').text('');
    $('#riderWthdrAcnt').text('');
    $('#riderMinWthdrAmnt').text('');
    $('#riderCallLimit').text('');
    $('#riderCallDelayTime').text('');

    $('#riderId').text( data.riderId );
    $('#riderNm').text( data.riderNm );
    $('#riderCelno').text( phoneFomatter(data.riderCelno ) );
    $('#riderWthdrBankNm').text( data.riderWthdrBankNm );
    $('#riderWthdrAcnt').text( data.riderWthdrAcnt );
    $('#riderMinWthdrAmnt').text( data.riderMinWthdrAmnt );
    $('#riderCallLimit').text( data.riderCallLimit );
    $('#riderCallDelayTime').text( data.riderCallDelayTime );


    $('#riderStateCd').bootstrapToggle('enable');
    if( data.riderStateCd == '01') {
      $('#riderStateCd').bootstrapToggle('on');
    } else if( data.riderStateCd == '02') {
      $('#riderStateCd').bootstrapToggle('off');
    } else if( data.riderStateCd == '03') {
      $('#riderStateCd').bootstrapToggle('on');
    }
    $('#riderStateCd').bootstrapToggle('disable');

  });
  $('#riderDetail').on('hidden.bs.modal', function (event) {
    $('#riderStateCd').bootstrapToggle('on');
  });
  $('#riderRegister').on('show.bs.modal', function (event) {
    $('#r_riderNm').val('');
    $('#r_riderCelno').val('');
    $('#r_riderWthdrBankNm').val('');
    $('#r_riderWthdrAcnt').val('');
    $('#r_riderMinWthdrAmnt').val('');
    $('#r_riderCallLimit').val('');
    $('#r_riderCallDelayTime').val('');

    ajaxSend('/common/bank','post', false, null, function ( result ) {
      if( result.success ) {
        $('#r_riderWthdrBankCd').empty();
        var resultData = result.data;
        for( var i = 0; i < resultData.length; i++ ) {
          $('#r_riderWthdrBankCd').append('<option value="' + resultData[i].bankCd + '">' + resultData[i].bankNm + '</option>');
        }
      }
    });

  });
  $('#riderRegister').on('hidden.bs.modal', function (event) {
    $('#r_riderStateCd').bootstrapToggle('on');
  });
  $('#btn_register').on('click',function () {
    var data = {};
    data.riderNm = $('#r_riderNm').val();
    if( $('#r_riderCelno').val() ) data.riderCelno = $('#r_riderCelno').val().replace(/-/g,"");
    data.riderWthdrBankCd = $('#r_riderWthdrBankCd').val();
    data.riderWthdrBankNm = $('#r_riderWthdrBankCd option:checked').text();
    data.riderWthdrAcnt = $('#r_riderWthdrAcnt').val();
    data.riderMinWthdrAmnt = $('#r_riderMinWthdrAmnt').val();
    data.riderCallLimit = $('#r_riderCallLimit').val();
    data.riderCallDelayTime = $('#r_riderCallDelayTime').val();
    if( $('#r_riderStateCd').prop('checked') )
      data.riderStateCd = '01';
    else
      data.riderStateCd = '02';
      console.log(data);
    Swal.fire({
      title :'기사 정보 등록',
      text : '기사 정보를 등록 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '등록',
      confirmButtonAriaLabel: '등록',
      cancelButtonText: '취소',
      cancelButtonAriaLabel: '취소'
    }).then(function (result) {
      if( result.value ) {
        ajaxSend( '/branch/riderRegister', 'post', true, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'등록 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              tb_rider.ajax.reload();
              $('#riderRegister').modal('hide');
            });
          } else {
            Swal.fire({
              title :'등록 오류',
              text : result.message,
              icon : 'error',
              heightAuto: false
            });
          }
        });
      }
    });
  })
  $('#riderModify').on('show.bs.modal', function (event) {
    $('#u_riderId').val('');
    $('#u_riderNm').val('');
    $('#u_riderCelno').val('');
    $('#u_riderWthdrBankNm').val('');
    $('#u_riderWthdrAcnt').val('');
    $('#u_riderMinWthdrAmnt').val('');
    $('#u_riderCallLimit').val('');
    $('#u_riderCallDelayTime').val('');

    ajaxSend('/common/bank','post', false, null, function ( result ) {
      if( result.success ) {
        $('#u_riderWthdrBankCd').empty();
        var resultData = result.data;
        for( var i = 0; i < resultData.length; i++ ) {
          $('#u_riderWthdrBankCd').append('<option value="' + resultData[i].bankCd + '">' + resultData[i].bankNm + '</option>');
        }
      }
    });

    $('#u_riderId').val( data.riderId );
    $('#u_riderNm').val( data.riderNm );
    $('#u_riderCelno').val( data.riderCelno );
    if(data.riderWthdrBankCd) $('#u_riderWthdrBankCd').val( data.riderWthdrBankCd );
    if(data.riderWthdrAcnt) $('#u_riderWthdrAcnt').val( data.riderWthdrAcnt );
    $('#u_riderMinWthdrAmnt').val( data.riderMinWthdrAmnt );
    $('#u_riderCallDelayTime').val( data.riderCallDelayTime );
    $('#u_riderCallLimit').val( data.riderCallLimit );

    if( data.riderStateCd == '01') {
      $('#u_riderStateCd').bootstrapToggle('on');
    } else if( data.riderStateCd == '02') {
      $('#u_riderStateCd').bootstrapToggle('off');
    } else if( data.riderStateCd == '03') {
      $('#u_riderStateCd').bootstrapToggle('on');
    }

  });
  $('#riderModify').on('hidden.bs.modal', function (event) {
    $('#u_riderStateCd').bootstrapToggle('on');
    $('#u_riderWthdrBankCd option:eq(0)').attr("selected", "selected");
  });
  $('#btn_modify').on('click', function () {
    data.riderId = $('#u_riderId').val();
    data.riderNm = $('#u_riderNm').val();
    if( $('#u_riderCelno').val() ) data.riderCelno = $('#u_riderCelno').val().replace(/-/g,"");
    data.riderWthdrBankCd = $('#u_riderWthdrBankCd').val();
    data.riderWthdrBankNm = $('#u_riderWthdrBankCd option:checked').text();
    data.riderWthdrAcnt = $('#u_riderWthdrAcnt').val();
    data.riderMinWthdrAmnt = $('#u_riderMinWthdrAmnt').val();
    data.riderCallLimit = $('#u_riderCallLimit').val();
    data.riderCallDelayTime = $('#u_riderCallDelayTime').val();
    if( $('#u_riderStateCd').prop('checked') )
      data.riderStateCd = '01';
    else
      data.riderStateCd = '02';

    Swal.fire({
      title :'기사 정보 수정',
      text : '기사 정보를 수정 하시겠습니까?',
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
        ajaxSend( '/branch/riderModify', 'post', true, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'수정 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              $('#riderModify').modal('hide');
            });
          } else {
            Swal.fire({
              title :'수정 오류',
              text : result.message,
              icon : 'error',
              heightAuto: false
            });
          }
        });
      }
    });
  });
});


$(document).keydown(function(key) {
  if (key.keyCode == 13) {
    tb_rider.ajax.reload();
  }
});
