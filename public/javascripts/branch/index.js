$(document).ready(function () {
  $('#btn_login').on('click', function () {
    login();
  });
  $('#adminId').keydown(function (key) {
    if( key.keyCode == 13)
      login();
  });
  $('#adminPassword').keydown(function (key) {
    if( key.keyCode == 13)
      login();
  });
});
function login() {
  var requestData = {};
  requestData.adminId = $('#adminId').val();
  requestData.adminPassword = $('#adminPassword').val();
  ajaxSend('/branch/login', 'post', true, requestData, function ( result ) {
    if( result.success ) {
      location.href="/branch/main/realTimeDelivery";
    } else {
      Swal.fire({
        title :'로그인 실패',
        text : result.message,
        icon : 'error',
        heightAuto: false
      });
    }
  });
}
