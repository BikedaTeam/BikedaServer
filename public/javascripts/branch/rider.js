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
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-olive">설정</button>';
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

  $('#tb_rider tbody').on('click', '.bg-olive', function () {
    table = $('#tb_rider').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();
    // $('#riderModifySurcharge').modal('show');
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
    if(data.riderWthdrBankNm) $('#riderWthdrBankNm').text( data.riderWthdrBankNm );
    if(data.riderWthdrAcnt) $('#riderWthdrAcnt').text( data.riderWthdrAcnt );
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
  });
  $('#btn_modify').on('click', function () {
    data.riderId = $('#u_riderId').val();
    if( $('#u_stoBsnsRgnmb').val() ) data.stoBsnsRgnmb = $('#u_stoBsnsRgnmb').val().replace(/-/g,"");
    data.stoMtlty = $('#u_stoMtlty').val();
    data.stoRprsntvNm = $('#u_stoRprsntvNm').val();
    if( $('#u_stoOpnngYmd').val() ) data.stoOpnngYmd = $('#u_stoOpnngYmd').val().replace(/-/g,"");
    data.stoBsnsPlaceAdres = $('#u_stoBsnsPlaceAdres').val();
    data.stoBizcnd = $('#u_stoBizcnd').val();
    data.stoInduty = $('#u_stoInduty').val();
    if( $('#u_stoTelno').val() ) data.stoTelno = $('#u_stoTelno').val().replace(/-/g,"");
    data.stoVrtlAcnt = $('#u_stoVrtlAcnt').val();
    if( $('#u_stoStateCd').prop('checked') )
      data.stoStateCd = '01';
    else
      data.stoStateCd = '02';

    if( $('#u_stoBizSeCd').prop('checked') ) {
      data.stoBizSeCd = '01';
      if( $('#u_stoBrdYmd').val() ) data.stoBrdYmd = $('#u_stoBrdYmd').val().replace(/-/g,"");
      else data.stoBrdYmd = '';
    } else {
      data.stoBizSeCd = '02';
      if( $('#u_stoCrprtRgnmb').val() ) data.stoCrprtRgnmb = $('#u_stoCrprtRgnmb').val().replace(/-/g,"");
      else data.stoCrprtRgnmb = '';
      data.stoHdofcAdres = $('#u_stoHdofcAdres').val();
    }

    Swal.fire({
      title :'상점 정보 수정',
      text : '상점 정보를 수정 하시겠습니까?',
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
        ajaxSend( '/branch/storeModify', 'post', true, data, function ( result ) {
          if(result.success) {
            Swal.fire({
              title :'수정 완료',
              text : '정상 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              $('#storeModify').modal('hide');
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
