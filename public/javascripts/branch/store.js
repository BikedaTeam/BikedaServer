$(document).ready(function () {
  $('#tb_store').DataTable({
    ajax : {
      url : '/branch/stores',
      type : 'post'
    },
    columns : [
      {
        data : 'stoId',
      },
      {
        data : 'stoBsnsRgnmb'
      },
      {
        data : 'stoMtlty'
      },
      {
        data : 'stoBizSeCd'
      },
      {
        data : 'stoRprsntvNm'
      },
      {
        data : 'stoBsnsPlaceAdres'
      },
      {
        data : 'stoStateCd'
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
});
