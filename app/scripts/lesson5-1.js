'use strict';

(function() {

  // can use custom events instead of built-in
  $('body').on('clickityClack', function() {
    console.log('custom event');
  });

  // custom events can be namespaced
  $('body').on('app.clickityClack', function() {
    console.log('custom namespaced event');
  });

  // can also use directory-like syntax
  $('body').on('app/clickityClack', function() {
    console.log('custom directory event');
  });

  // trigger the body click handler
  $('body').trigger('clickityClack');
  $('body').trigger('app.clickityClack');
  $('body').trigger('app/clickityClack');

  // another usage of custom events is for async handling
  $(document).on('news/results', function(e, data) {
    console.log('news results are available');
    console.log(data);
  });

  $.getJSON('http://content.guardianapis.com/search?show-fields=all&q=fifa&callback=?', function(data) {
    // do any processing you want
    // announce to app that data is available
    $(document).trigger('news/results', data);
  });

})();
