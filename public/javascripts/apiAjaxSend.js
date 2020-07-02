var apiAjaxSend = function ( url, type, sendData, callback ) {
  $.ajax({
    type : type,
    url : 'http://deliverylabapi.gabia.io' + url,
    data : sendData,
    success: function( data, textStatus, jqXHR ) {
      callback( data );
    },
    error: function ( jqXHR, textStatus, errorThrown  ) {
      console.log( jqXHR.responseText );
      callback( JSON.parse(jqXHR.responseText ) );
    }
  });
};
