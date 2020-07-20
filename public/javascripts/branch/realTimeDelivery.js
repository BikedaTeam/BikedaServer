$(document).ready(function () {
  var stdDate = new Date();
  stdDate.setDate( stdDate.getDate() - 2 );
  var endDate = new Date();

  var dlvryRecvDtEnd = endDate.yyyymmddhhmiss();
  var dlvryRecvDtStd = stdDate.yyyymmddhhmiss();
  var requestData = {};
  requestData.dlvryRecvDtEnd = dlvryRecvDtEnd;
  requestData.dlvryRecvDtStd = dlvryRecvDtStd;

  ajaxSend( '/branch/realTimedeliveryCount', 'post', true, requestData, function ( result ) {
    if(result.success) {
      $('#dlvryStateCd_01').text('0');
      $('#dlvryStateCd_02').text('0');
      $('#dlvryStateCd_03').text('0');
      $('#dlvryStateCd_04').text('0');
      var resultData = result.data;
      for( var i = 0; i < resultData.length; i++ ) {
        if( resultData[i].dlvryStateCd == '01')
          $('#dlvryStateCd_01').text( resultData[i].dlvryCnt );
        else if( resultData[i].dlvryStateCd == '02')
          $('#dlvryStateCd_02').text( resultData[i].dlvryCnt );
        else if( resultData[i].dlvryStateCd == '03')
          $('#dlvryStateCd_03').text( resultData[i].dlvryCnt );
        else if( resultData[i].dlvryStateCd == '04')
          $('#dlvryStateCd_04').text( resultData[i].dlvryCnt );
      }
    }
  });

  $('#tb_realTimeDelivery').DataTable({
    ajax : {
      url : '/branch/realTimeDelivery',
      type : 'post',
      data : requestData
    },
    columns : [
      {
        data : 'dlvryStateCd',
        width : '70px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<span class="badge bg-secondary">배차 대기</span>';
          else if( data  == '02')
            return  '<span class="badge bg-warning">배차 완료</span>';
          else if( data  == '03')
            return  '<span class="badge bg-olive">픽업 완료</span>';
          else if( data  == '04')
            return  '<span class="badge bg-success">배달 완료</span>';
          else
            return  '<span class="badge bg-danger">배달 취소</span>';
        }
      },
      {
        data : 'dlvryNo',
        visible : false
      },
      {
        data : 'stoBrcofcId',
        visible : false
      },
      {
        data : 'stoId',
        visible : false
      },
      {
        data : 'stoMtlty'
      },
      {
        data : 'stoTelno',
        visible : false
      },
      {
        data : 'dlvryCusTelno',
        visible : false
      },
      {
        data : 'dlvryCusAdres',
        visible : false
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
        data : 'dlvryCusDetlAdres',
        visible : false
      },
      {
        data : 'dlvryCusLa',
        visible : false
      },
      {
        data : 'dlvryCusLo',
        visible : false
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
        data : 'dlvryFoodAmnt',
        visible : false
      },
      {
        data : 'dlvryAmnt',
        visible : false
      },
      {
        data : 'dlvryPickReqTm',
        width : '70px',
      },
      {
        data : 'dlvryRecvDt',
        width : '120px',
        render : function ( data, type, row, meta) {
          return data.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
        }
      },
      {
        data : 'dlvryDsptcDt',
        visible : false
      },
      {
        data : 'dlvryPickDt',
        visible : false
      },
      {
        data : 'dlvryTcDt',
        visible : false
      },
      {
        data : 'dlvryDstnc',
        width : '70px',
      },
      {
        data : 'dlvryReqCn',
        visible : false
      },
      {
        data : 'riderBrcofcId',
        visible : false
      },
      {
        data : 'riderId',
        visible : false
      },
      {
        data : 'riderNm'
      },
      {
        data : 'riderCelno',
        visible : false
      },
      {
        data : null,
        width : '70px',
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-xs bg-info">상세 보기</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          if( row.dlvryStateCd == '01' )
            return '<button type="button" class="btn btn-block btn-xs bg-primary enabled">배차</button>';
          else
            return '<button type="button" class="btn btn-block btn-xs bg-primary disabled">배차</button>';
        }
      },
      {
        data : null,
        width : '50px',
        render : function ( data, type, row, meta) {
          if( row.dlvryStateCd == '01' || row.dlvryStateCd == '02' )
            return '<button type="button" class="btn btn-block btn-xs bg-danger enabled">취소</button>';
          else
            return '<button type="button" class="btn btn-block btn-xs bg-danger disabled">취소</button>';
        }
      }
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    order: [16, 'desc'],
    language: {
      'emptyTable': '배달 대행 접수 내역이 없습니다.'
    }
  });
  $('#tb_dispatchRider').DataTable({
    ajax : {
      url : '/branch/realTimeDispatchRider',
      type : 'post'
    },
    columns : [
      {
        data : 'brcofcId',
        visible : false
      },
      {
        data : 'riderId',
        width : '80px'
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
        data : 'riderDsptCnt',
        width : '70px',
      },

    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    select : {
      style: 'single'
    },
    language: {
      'emptyTable': '배차 가능한 라이더가 없습니다.'
    }
  });

  var table;
  var row;
  var data;
  $('#tb_realTimeDelivery tbody').on('click', '.bg-info', function (){
    table = $('#tb_realTimeDelivery').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();

    $('#dlvryNo').text('');
    $('#stoId').text('');
    $('#stoMtlty').text('');
    $('#stoTelno').text('');
    $('#dlvryCusTelno').text('');
    $('#dlvryCusAdres').text('');
    $('#dlvryCusRoadAdres').text('');
    $('#dlvryCusDetlAdres').text('');
    $('#dlvryFoodAmnt').text('');
    $('#dlvryAmnt').text('');
    $('#riderId').text('');
    $('#riderNm').text('');
    $('#riderCelno').text('');
    $('#dlvryStateCd').text('');
    $('#dlvryStateCd').removeClass('bg-secondary bg-warning bg-olive bg-success bg-danger');
    $('#dlvryPaySeCd').text('');
    $('#dlvryPaySeCd').removeClass('bg-purple bg-navy bg-pink');


    $('#dlvryNo').text( data.dlvryNo );
    $('#stoId').text( data.stoId );
    $('#stoMtlty').text( data.stoMtlty );
    $('#stoTelno').text( phoneFomatter(data.stoTelno) );
    $('#dlvryCusTelno').text( phoneFomatter(data.dlvryCusTelno) );
    $('#dlvryCusAdres').text( data.dlvryCusAdres );
    $('#dlvryCusRoadAdres').text( data.dlvryCusRoadAdres );
    $('#dlvryCusDetlAdres').text( data.dlvryCusDetlAdres );
    $('#dlvryFoodAmnt').text( data.dlvryFoodAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
    $('#dlvryAmnt').text( data.dlvryAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
    $('#riderId').text( data.riderId );
    $('#riderNm').text( data.riderNm );
    $('#riderCelno').text( phoneFomatter(data.riderCelno) );
    $('#dlvryPickReqTm').text( data.dlvryPickReqTm );
    $('#dlvryRecvDt').text( data.dlvryRecvDt.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6') );
    $('#dlvryDstnc').text( data.dlvryDstnc );
    $('#dlvryReqCn').text( data.dlvryReqCn );

    if( data.dlvryStateCd == '01' ) {
      $('#dlvryStateCd').text( '배차 대기' );
      $('#dlvryStateCd').addClass('bg-secondary');
    } else if( data.dlvryStateCd == '02' ) {
      $('#dlvryStateCd').text( '배차 완료' );
      $('#dlvryStateCd').addClass('bg-warning');
    } else if( data.dlvryStateCd == '03' ) {
      $('#dlvryStateCd').text( '픽업 완료' );
      $('#dlvryStateCd').addClass('bg-olive');
    } else if( data.dlvryStateCd == '04' ) {
      $('#dlvryStateCd').text( '배달 완료' );
      $('#dlvryStateCd').addClass('bg-success');
    } else {
      $('#dlvryStateCd').text( '배달 취소' );
      $('#dlvryStateCd').addClass('bg-danger');
    }

    if( data.dlvryPaySeCd == '01' ) {
      $('#dlvryPaySeCd').text( '현금' );
      $('#dlvryPaySeCd').addClass('bg-purple');
    } else if( data.dlvryPaySeCd == '02' ) {
      $('#dlvryPaySeCd').text( '카드' );
      $('#dlvryPaySeCd').addClass('bg-navy');
    } else if( data.dlvryPaySeCd == '03' ) {
      $('#dlvryPaySeCd').text( '선결' );
      $('#dlvryPaySeCd').addClass('bg-pink');
    }
    $('#modalType').val('info');
    $('#realTimeDeliveryDetail').modal('show');
  });


  $('#tb_realTimeDelivery tbody').on('click', '.bg-primary.enabled', function (){
    $('#realTimeDeliveryDispatch').modal('show');
    table = $('#tb_realTimeDelivery').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();

    $("#tb_dispatchRider").DataTable().ajax.reload();
  });
  $('#tb_realTimeDelivery tbody').on('click', '.bg-danger.enabled', function (){
    table = $('#tb_realTimeDelivery').DataTable();
    row = table.row($(this).closest('tr'));
    data = table.row($(this).closest('tr')).data();

    $('#dlvryNo').text('');
    $('#stoId').text('');
    $('#stoMtlty').text('');
    $('#stoTelno').text('');
    $('#dlvryCusTelno').text('');
    $('#dlvryCusAdres').text('');
    $('#dlvryCusRoadAdres').text('');
    $('#dlvryCusDetlAdres').text('');
    $('#dlvryFoodAmnt').text('');
    $('#dlvryAmnt').text('');
    $('#riderId').text('');
    $('#riderNm').text('');
    $('#riderCelno').text('');
    $('#dlvryStateCd').text('');
    $('#dlvryStateCd').removeClass('bg-secondary bg-warning bg-olive bg-success bg-danger');
    $('#dlvryPaySeCd').text('');
    $('#dlvryPaySeCd').removeClass('bg-purple bg-navy bg-pink');


    $('#dlvryNo').text( data.dlvryNo );
    $('#stoId').text( data.stoId );
    $('#stoMtlty').text( data.stoMtlty );
    $('#stoTelno').text( phoneFomatter(data.stoTelno) );
    $('#dlvryCusTelno').text( phoneFomatter(data.dlvryCusTelno) );
    $('#dlvryCusAdres').text( data.dlvryCusAdres );
    $('#dlvryCusRoadAdres').text( data.dlvryCusRoadAdres );
    $('#dlvryCusDetlAdres').text( data.dlvryCusDetlAdres );
    $('#dlvryFoodAmnt').text( data.dlvryFoodAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
    $('#dlvryAmnt').text( data.dlvryAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
    $('#riderId').text( data.riderId );
    $('#riderNm').text( data.riderNm );
    $('#riderCelno').text( phoneFomatter(data.riderCelno) );
    $('#dlvryPickReqTm').text( data.dlvryPickReqTm );
    $('#dlvryRecvDt').text( data.dlvryRecvDt.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6') );
    $('#dlvryDstnc').text( data.dlvryDstnc );
    $('#dlvryReqCn').text( data.dlvryReqCn );

    if( data.dlvryStateCd == '01' ) {
      $('#dlvryStateCd').text( '배차 대기' );
      $('#dlvryStateCd').addClass('bg-secondary');
    } else if( data.dlvryStateCd == '02' ) {
      $('#dlvryStateCd').text( '배차 완료' );
      $('#dlvryStateCd').addClass('bg-warning');
    } else if( data.dlvryStateCd == '03' ) {
      $('#dlvryStateCd').text( '픽업 완료' );
      $('#dlvryStateCd').addClass('bg-olive');
    } else if( data.dlvryStateCd == '04' ) {
      $('#dlvryStateCd').text( '배달 완료' );
      $('#dlvryStateCd').addClass('bg-success');
    } else  {
      $('#dlvryStateCd').text( '배달 취소' );
      $('#dlvryStateCd').addClass('bg-danger');
    }

    if( data.dlvryPaySeCd == '01' ) {
      $('#dlvryPaySeCd').text( '현금' );
      $('#dlvryPaySeCd').addClass('bg-purple');
    } else if( data.dlvryPaySeCd == '02' ) {
      $('#dlvryPaySeCd').text( '카드' );
      $('#dlvryPaySeCd').addClass('bg-navy');
    } else if( data.dlvryPaySeCd == '03' ) {
      $('#dlvryPaySeCd').text( '선결' );
      $('#dlvryPaySeCd').addClass('bg-pink');
    }
    $('#modalType').val('cancel');
    $('#realTimeDeliveryDetail').modal('show');
  });

  $('#tb_dispatchRider tbody').on( 'click', 'tr', function () {
    if($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $("#tb_dispatchRider").DataTable().$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  });

  $('#btn_dispatchRider').on('click', function () {
    var riderData = $("#tb_dispatchRider").DataTable().row('.selected').data();
    if( !riderData ) return;
    Swal.fire({
      title :'배차 처리',
      text : '해당 라이더에게 배차 처리를 진행 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '배차',
      confirmButtonAriaLabel: '배차',
      cancelButtonText: '취소',
      cancelButtonAriaLabel: '취소'
    }).then(function (result) {
      if( result.value ) {
        $("#tb_dispatchRider").DataTable().$('tr.selected').removeClass('selected');
        data.riderBrcofcId = riderData.brcofcId;
        data.riderId = riderData.riderId;
        data.riderNm = riderData.riderNm;
        data.riderCelno = riderData.riderCelno;
        data.dlvryStateCd = '02';
        ajaxSend( '/branch/realTimeDispatch', 'post', true, data, function ( result ) {
          if( result.success ){
            Swal.fire({
              title :'배차 완료',
              text : '배차 처리 되었습니다.',
              icon : 'success',
              heightAuto: false
            }).then(function (result) {
              table.row(row).data(data).draw();
              var dlvryStateCd_01 = $('#dlvryStateCd_01').text();
              var dlvryStateCd_02 = $('#dlvryStateCd_02').text();
              $('#dlvryStateCd_01').text( ( Number(dlvryStateCd_01) - 1 ) );
              $('#dlvryStateCd_02').text( ( Number(dlvryStateCd_02) + 1 ) );
              $('#realTimeDeliveryDispatch').modal('hide');
            });
          }
        });
      }
    });
  });
  $('#realTimeDeliveryDetail').on('show.bs.modal', function (event) {
    var modal = $(this);
    $('#cancel').removeClass("visible invisible");
    $('#btn_cancel').removeClass("visible invisible");
    if( $('#modalType').val() == 'info') {
      $('#cancel').addClass("invisible");
      $('#btn_cancel').addClass("invisible");
    } else {
      $('#cancel').addClass("visible");
      $('#btn_cancel').addClass("visible");
    }
  });
  $('#btn_cancel').on('click', function () {
    Swal.fire({
      title :'배달 취소',
      text : '해당 배달 대행을 취소 하시겠습니까?',
      icon : 'info',
      heightAuto: false,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '취소',
      confirmButtonAriaLabel: '취소',
      cancelButtonText: '닫기',
      cancelButtonAriaLabel: '닫기'
    }).then(function (result) {
      var ogrin_dlvryStateCd = data.dlvryStateCd;
      data.dlvryStateCd = '05';
      ajaxSend( '/branch/realTimeCancelDelivery', 'post', true, data, function ( result ) {
        if( result.success ){
          Swal.fire({
            title :'배달 취소',
            text : '배달 대행 취소 되었습니다.',
            icon : 'success',
            heightAuto: false
          }).then(function (result) {
            table.row(row).data(data).draw();
            if( ogrin_dlvryStateCd == '01') {
              var dlvryStateCd_01 = $('#dlvryStateCd_01').text();
              $('#dlvryStateCd_01').text( ( Number(dlvryStateCd_01) - 1 ) );
            } else if( ogrin_dlvryStateCd == '02') {
                var dlvryStateCd_02 = $('#dlvryStateCd_02').text();
                $('#dlvryStateCd_02').text( ( Number(dlvryStateCd_02) - 1 ) );
            }
            $('#realTimeDeliveryDetail').modal('hide');
          });
        }
      });
    });
  });
});
