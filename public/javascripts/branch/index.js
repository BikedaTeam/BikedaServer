$(document).ready(function () {
  $('#btn_login').on('click', function () {
    var adminId = $('#adminId').val();
    var adminPassword = $('#adminPassword').val();

    var adminPasswordHash = CryptoJS.SHA256(adminPassword);
    var requestData = { adminId : adminId, adminPassword : adminPasswordHash.toString() };

    apiAjaxSend('/api/auth/branch', 'post', requestData, function ( result ) {
      if(result.success) {
        result.data.logined = true;
        var form = document.createElement('form');
        form.setAttribute('charset', 'UTF-8');
        form.setAttribute('method', 'post');  //Post 방식
        form.setAttribute('action', '/branch/main'); //요청 보낼 주소
        hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', 'data');
        hiddenField.setAttribute('value', result.data);
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
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
