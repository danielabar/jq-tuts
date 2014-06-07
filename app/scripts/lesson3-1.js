'use strict';

(function() {

  // If user has JS enabled, this will add js class to html
  // Then we can use this in css to hide the form (because we'll show it on js events)
  $('html').addClass('js');

  // Use an object to keep the code organized
  // Within the context of an object, 'this' refers to the object itself
  var contactForm = {

    container: $('#contact'),

    init: function() {
      // create a button that displays the contact form
      $('<button></button>', {
        text: 'Contact Me',
        class: 'btn btn-primary'
      })
        .insertAfter('article:first')
        .on('click', this.show);
    },

    show: function() {
      contactForm.close.call(contactForm.container);
      contactForm.container.show();
    },

    close: function() {
      var $this = $(this); // #contact
      $('<span class="close glyphicon glyphicon-remove"></span>')
        .prependTo(this)
        .on('click', function() {
          // this = span
          $this.hide();
        });
    }

  };

  contactForm.init();

})();