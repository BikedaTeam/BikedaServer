$(document).ready(function () {
  $('#realTimeDelivery').DataTable({
    ajax : {
      url : '/branch/delivery',
      type : 'post'
    },
    columns : [
      {
        data : 'dlvryStateCd',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<button type="button" class="btn btn-block btn-sm bg-secondary">배차 대기</button>'
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-sm bg-warning">배차 완료</button>'
          else if( data  == '03')
            return  '<button type="button" class="btn btn-block btn-sm bg-olive">배차 완료</button>'
          else if( data  == '04')
            return  '<button type="button" class="btn btn-block btn-sm bg-success">배차 완료</button>'
        }
      },
      {
        data : 'dlvryNo',
        visible : false,
      },
      {
        data : 'stoBrcofcId',
        visible : false,
      },
      {
        data : 'stoId'
      },
      {
        data : 'dlvryCusTelno',
        visible : false,
      },
      {
        data : 'dlvryCusAdres'
      },
      {
        data : 'dlvryCusRoadAdres',
        visible : false,
      },
      {
        data : 'dlvryCusDetlAdres',
        visible : false,
      },
      {
        data : 'dlvryCusLa',
        visible : false,
      },
      {
        data : 'dlvryCusLo',
        visible : false,
      },
      {
        data : 'dlvryPaySeCd',
        render : function ( data, type, row, meta) {
          if( data  == '01' )
            return  '<button type="button" class="btn btn-block btn-sm bg-purple">현금</button>'
          else if( data  == '02')
            return  '<button type="button" class="btn btn-block btn-sm bg-navy">카드</button>'
          else if( data  == '03')
            return  '<button type="button" class="btn btn-block btn-sm bg-pink">선결</button>'
        }
      },
      {
        data : 'dlvryFoodAmnt',
        visible : false,
      },
      {
        data : 'dlvryAmnt'
      },
      {
        data : 'dlvryPickReqTm'
      },
      {
        data : 'dlvryRecvDt'
      },
      {
        data : 'dlvryDsptcDt',
        visible : false,
      },
      {
        data : 'dlvryPickDt',
        visible : false,
      },
      {
        data : 'dlvryTcDt',
        visible : false,
      },
      {
        data : 'dlvryDstnc'
      },
      {
        data : 'dlvryReqCn',
        visible : false,
      },
      {
        data : 'riderBrcofcId',
        visible : false,
      },
      {
        data : 'riderId'
      },
      {
        data : null,
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-sm bg-info">상세 보기</button>'
        }
      },
      {
        data : null,
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-sm bg-primary">배차</button>'
        }
      },
      {
        data : null,
        render : function ( data, type, row, meta) {
          return '<button type="button" class="btn btn-block btn-sm bg-danger">취소</button>'
        }
      }
    ],
    paging: false,
    searching: false,
    dom: 't',
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
    }
  });
  $('#realTimeDelivery tbody').on('click', '.bg-info', function (){
    var table = $('#realTimeDelivery').DataTable();
    console.log( table.row($(this).closest('tr')).data() );
  });
  $('#realTimeDelivery tbody').on('click', '.bg-primary', function (){
      alert('primary');
  });
  $('#realTimeDelivery tbody').on('click', '.bg-danger', function (){
      alert('danger');
  });
});
