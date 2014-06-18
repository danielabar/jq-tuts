'use strict';

(function() {

  var wrap = $('.wrap');

  // asynchronously load contents of about.html into the main page
  $('#aboutMe').on('click', function(e) {
    wrap.load('lesson6-1-about.html');
    e.preventDefault();
  });

  // asynchronously load contents of contact.html into the main page
  $('#contactMe').on('click', function(e) {
    wrap.load('lesson6-1-contact.html');
    e.preventDefault();
  });

})();
