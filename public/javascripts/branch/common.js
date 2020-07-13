$('#btn_logout').on('click', function () {
  Swal.fire({
    title :'로그 아웃',
    text : '로그 아웃 하시겠습니까?',
    icon : 'info',
    heightAuto: false,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: '로그 아웃',
    confirmButtonAriaLabel: '로그 아웃',
    cancelButtonText: '취소',
    cancelButtonAriaLabel: '취소'
  }).then(function (result) {
    if( result.value ) {
      location.href='/branch/logout';
    }
  });
});
