$(document).ready(function () {
  $('#tb_realTimeDelivery').DataTable({
    ajax : {
      url : '/branch/realTimeDelivery',
      type : 'post'
    },
    columns : [
      {
        data : 'dlvryStateCd',
        width : '70px',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<button type="button" class="btn btn-block btn-xs bg-secondary">배차 대기</button>';
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-xs bg-warning">배차 완료</button>';
          else if( data  == '03')
            return  '<button type="button" class="btn btn-block btn-xs bg-olive">픽업 완료</button>';
          else if( data  == '04')
            return  '<button type="button" class="btn btn-block btn-xs bg-success">배달 완료</button>';
          else
            return  '<button type="button" class="btn btn-block btn-xs bg-danger">배달 취소</button>';
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
        data : 'stoCelno',
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
        data : 'dlvryCusRoadAdres'
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
            return  '<button type="button" class="btn btn-block btn-xs bg-purple">현금</button>';
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-xs bg-navy">카드</button>';
          else if( data  == '03')
            return  '<button type="button" class="btn btn-block btn-xs bg-pink">선결</button>';
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
    order: [ [1, 'desc'] ],
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
    }
  });

  $('#tb_dispatchRider').DataTable({
    ajax : {
      url : '/branch/dispatchRider',
      type : 'post'
    },
    columns : [
      {
        data : 'riderBrcofcId',
        visible : false
      },
      {
        data : 'riderId'
      },
      {
        data : 'riderNm'
      },
      {
        data : 'riderCelno'
      },
      {
        data : 'riderDsptCnt'
      },
    ],
    autoWidth : false,
    paging: false,
    searching: false,
    dom: 't',
    select : {
      style: 'single'
    },
    order: [ [1, 'asc'] ],
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
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
    $('#stoCelno').text('');
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
    $('#dlvryStateCd').removeClass('bg-secondary bg-warning bg-olive bg-success');
    $('#dlvryPaySeCd').text('');
    $('#dlvryPaySeCd').removeClass('bg-purple bg-navy bg-pink');


    $('#dlvryNo').text( data.dlvryNo );
    $('#stoId').text( data.stoId );
    $('#stoMtlty').text( data.stoMtlty );
    $('#stoCelno').text( data.stoCelno );
    $('#dlvryCusTelno').text( data.dlvryCusTelno );
    $('#dlvryCusAdres').text( data.dlvryCusAdres );
    $('#dlvryCusRoadAdres').text( data.dlvryCusRoadAdres );
    $('#dlvryCusDetlAdres').text( data.dlvryCusDetlAdres );
    $('#dlvryFoodAmnt').text( data.dlvryFoodAmnt );
    $('#dlvryAmnt').text( data.dlvryAmnt );
    $('#riderId').text( data.riderId );
    $('#riderNm').text( data.riderNm );
    $('#riderCelno').text( data.riderCelno );
    $('#dlvryPickReqTm').text( data.dlvryPickReqTm );
    $('#dlvryRecvDt').text( data.dlvryRecvDt );
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
    $('#deliveryDetailModal').modal('show');
  });


  $('#tb_realTimeDelivery tbody').on('click', '.bg-primary.enabled', function (){
    $('#deliveryDispatchModal').modal('show');
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
    $('#stoCelno').text('');
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
    $('#dlvryStateCd').removeClass('bg-secondary bg-warning bg-olive bg-success');
    $('#dlvryPaySeCd').text('');
    $('#dlvryPaySeCd').removeClass('bg-purple bg-navy bg-pink');


    $('#dlvryNo').text( data.dlvryNo );
    $('#stoId').text( data.stoId );
    $('#stoMtlty').text( data.stoMtlty );
    $('#stoCelno').text( data.stoCelno );
    $('#dlvryCusTelno').text( data.dlvryCusTelno );
    $('#dlvryCusAdres').text( data.dlvryCusAdres );
    $('#dlvryCusRoadAdres').text( data.dlvryCusRoadAdres );
    $('#dlvryCusDetlAdres').text( data.dlvryCusDetlAdres );
    $('#dlvryFoodAmnt').text( data.dlvryFoodAmnt );
    $('#dlvryAmnt').text( data.dlvryAmnt );
    $('#riderId').text( data.riderId );
    $('#riderNm').text( data.riderNm );
    $('#riderCelno').text( data.riderCelno );
    $('#dlvryPickReqTm').text( data.dlvryPickReqTm );
    $('#dlvryRecvDt').text( data.dlvryRecvDt );
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
    $('#deliveryDetailModal').modal('show');
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
    $("#tb_dispatchRider").DataTable().$('tr.selected').removeClass('selected');
    data.riderBrcofcId = riderData.riderBrcofcId;
    data.riderId = riderData.riderId;
    data.riderNm = riderData.riderNm;
    data.riderCelno = riderData.riderCelno;
    data.dlvryStateCd = '02';
    table.row(row).data(data).draw();
    $('#deliveryDispatchModal').modal('hide');
  });
  $('#deliveryDetailModal').on('show.bs.modal', function (event) {
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
    data.dlvryStateCd = '09';
    table.row(row).data(data).draw();
    $('#deliveryDetailModal').modal('hide');
  });
});
