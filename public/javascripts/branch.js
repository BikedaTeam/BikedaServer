$(document).ready(function () {
  $('#realTimeDelivery').DataTable({
    ajax : {
      url : '/branch/delivery',
      type : 'post'
    },
    columns : [
      {data : 'dlvryStateCd'},
      {data : 'dlvryNo'},
      {data : 'stoBrcofcId'},
      {data : 'stoId'},
      {data : 'dlvryCusTelno'},
      {data : 'dlvryCusAdres'},
      {data : 'dlvryCusRoadAdres'},
      {data : 'dlvryCusDetlAdres'},
      {data : 'dlvryCusLa'},
      {data : 'dlvryCusLo'},
      {data : 'dlvryPaySeCd'},
      {data : 'dlvryFoodAmnt'},
      {data : 'dlvryAmnt'},
      {data : 'dlvryPickReqTm'},
      {data : 'dlvryRecvDt'},
      {data : 'dlvryDsptcDt'},
      {data : 'dlvryPickDt'},
      {data : 'dlvryTcDt'},
      {data : 'dlvryDstnc'},

      {data : 'dlvryReqCn'},
      {data : 'riderBrcofcId'},
      {data : 'riderId'}
    ],
    paging: false,
    searching: false,
    dom: 't',
    language: {
      'emptyTable': '데이터가 존재 하지 않습니다.'
    }
  });
});
