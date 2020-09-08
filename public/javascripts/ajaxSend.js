var ajaxSend = function ( url, type, async, sendData, callback ) {
  $.ajax({
    type : type,
    url : url,
    data : sendData,
    async: async,
    success: function( data, textStatus, jqXHR ) {
      callback( data );
    },
    error: function ( jqXHR, textStatus, errorThrown  ) {
      console.log(jqXHR.responseText);
      callback( JSON.parse(jqXHR.responseText ) );
    }
  });
};
