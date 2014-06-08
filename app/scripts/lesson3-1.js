'use strict';

(function() {

  // If user has JS enabled, this will add js class to html
  // Then we can use this in css to hide the form (because we'll show it on js events)
  $('html').addClass('js');

  // Use an object to keep the code organized
  // Within the context of an object, 'this' refers to the object itself
  var contactForm = {

    container: $('#contact'),

    config: {
      effect: 'slideToggle',
      speed: 500
    },

    init: function(config) {

      // extend base config with user supplied value
      $.extend(this.config, config);

      // create a button that displays the contact form
      $('<button></button>', {
        text: 'Contact Me',
        class: 'btn btn-primary'
      })
        .insertAfter('article:first')
        .on('click', this.show);
    },

    show: function() {
      var cf = contactForm,
        container = cf.container,
        config = cf.config;

      // Check if contact form is already displayed
      if (container.is(':hidden')) {
        cf.close.call(container);
        container[config.effect](config.speed);
      }
    },

    close: function() {

      // my hack to cleanup extra elements
      // $('.close').remove();

      var $this = $(this); // #contact

      if ($this.find('span.close').length) {
        return;
      }

      $('<span class="close glyphicon glyphicon-remove"></span>')
        .prependTo(this)
        .on('click', function() {
          // this = span
          $this[contactForm.config.effect](contactForm.config.speed);
        });
    }

  };

  contactForm.init({
    effect: 'fadeToggle',
    speed: 300
  });

})();