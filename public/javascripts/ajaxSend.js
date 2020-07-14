var ajaxSend = function ( url, type, sendData, callback ) {
  $.ajax({
    type : type,
    url : url,
    data : sendData,
    success: function( data, textStatus, jqXHR ) {
      callback( data );
    },
    error: function ( jqXHR, textStatus, errorThrown  ) {
      callback( JSON.parse(jqXHR.responseText ) );
    }
  });
};
