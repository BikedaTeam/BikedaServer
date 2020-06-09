$(document).ready(function () {
  // login button
  $('#btn_login').on('click', function () {
    var data = {};
    data.adminId = $('#adminId').val();
    data.adminPassword = $('#adminPassword').val();
    apiAjaxSend( '/api/auth/admin', 'POST', data, function ( data ) {
      if( data.success ) {
        alert( data.data );
        window.location.href="/admin/main";
      } else {
        alert( data.message);
      }
    });
  });
	// menu select event
  $('.dropdown-item').on('click', function() {
  	if( $('#tab_' + $(this).attr('id') ).is('div') ) {
  		$('a[href$="tab_' + $(this).attr('id') + '"').tab('show');
  	} else {
  		if( $('.nav-tabs').children( 'li' ).length < 10 ) {
      		$('.nav-tabs').append($('<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab_' + $(this).attr('id') + '">' + $(this).text() + '<button class="close" type="button" title="Remove this page">×</button></a></li>'));
              $('.tab-content').append($('<div class="tab-pane fade" id="tab_' + $(this).attr('id') + '">'+ $(this).text() +' content</div>'));
              $('a[href$="tab_' + $(this).attr('id') + '"').tab('show');
      	}
  	}
});

// tab close button event
$('.nav-tabs').on('click','.close',function(){
    var tabID = $(this).parents('a').attr('href');
    $(this).parents('li').remove();
    var isShow = $(tabID).hasClass('show');
    $(tabID).remove();
    if( isShow ) {
        var tabFirst = $('.nav-tabs a:first');
        tabFirst.tab('show');
    }
});

    $('#btn').on('click', function() {
		$.toast({
          title: 'Notice',
          subtitle: '11 mins ago',
          content: 'Hello, world! This is a toast message.',
          type: 'info',
          pause_on_hover: false,
          delay: 5000
      });
	});
});
