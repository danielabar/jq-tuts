'use strict';

(function() {

  // When the page loads, display the last saved user content from the server
  $.get('/content', function(response) {
    $('#content').text(response.message);
  });

  $('form').on('submit', function(e) {
    var data = $(this).serialize(); //content=hello
    $.post('/content', data, function(response) {
      console.log(JSON.stringify(response, null, 2));
      toastr.success('Server response is: ' + response.message);
    });
    e.preventDefault();
  });

})();
