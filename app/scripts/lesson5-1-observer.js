'use strict';

// Create a pub/sub API
(function($) {

  // pass an empty object to jQuery returns an instance of jQuery
  var o = $( {} );

  $.each({
    trigger: 'publish',
    on: 'subscribe',
    off: 'unsubscribe'
  }, function(key, val) {
    jQuery[val] = function() {
      // JavaScript apply:
      //  first arg is value of 'this', here we pass jQuery instance
      //  second arg is array of arguments
      o[key].apply(o, arguments);
    };
  });

})(jQuery);

// Now let's use the above defined API
$.getJSON('http://content.guardianapis.com/search?show-fields=all&q=fifa&callback=?', function(data) {
  $.publish('news/results', data);
});

$.subscribe('news/results', function(e, data) {
  console.dir(e);
  console.dir(data);
});
