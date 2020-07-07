$(document).ready(function () {
  $('#btn_login').on('click', function () {
    var adminId = $('#adminId').val();
    var adminPassword = $('#adminPassword').val();

    var adminPasswordHash = CryptoJS.HmacSHA256(adminPassword, 'sha256');

    var requestData = { adminId : adminId, adminPassword : adminPasswordHash };
    console.log(requestData);
    apiAjaxSend('/api/auth/branch', 'post', requestData, function ( result ) {
      if(result.success) {

      } else {
        Swal.fire({
          title :'로그인 실패',
          text : result.message,
          icon : 'error',
          heightAuto: false
        });
      }
    });


  });
});
