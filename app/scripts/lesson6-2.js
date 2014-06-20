'use strict';

(function() {

  $('form').on('submit', function(e) {
    var data = $(this).serialize(); //content=hello
    $.post('/content', data, function() {
      console.log('form submitted successfully!');
    });
    e.preventDefault();
  });

})();
