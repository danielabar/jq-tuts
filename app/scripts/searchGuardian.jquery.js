'use strict';

// Polyfill Object.create
// sample code from course doesn't work on Chrome
// if ( typeof Object.create !== 'function') {
//   Object.create = function(obj) {
//     function F();
//     F.prototype = obj;
//     return new F();
//   };
// }

(function($, window, document, undefined) {

  var Guardian = {

    init: function(options, elem) {
      // self refers to the instance of Guardian
      var self = this;
      self.elem = elem;
      self.$elem = $(elem);
    }

  };

  // Within plugins, 'this' is the jQuery object, for example,
  //  if user called: $('div.news').searchGuardian();
  //  then 'this' will be the div.news DOM node
  // options can be string or an object
  $.fn.searchGuardian = function(options) {
    return this.each(function() {
      // Object.create does the following:
      //  1. Create a new function
      //  2. Take all of Guardian objects methods and set them
      //      on the new function's prototype
      //  3. Return that new function
      // Object.create only works in modern browsers,
      //    therefore need a polyfill for older browsers
      var guardian = Object.create(Guardian);
      guardian.init(options, this);
    });
  };

  $.fn.searchGuardian.options = {

  };

})(jQuery, window, document);

  // var getNews = function(search) {
  //   return $.ajax({
  //     url: 'http://content.guardianapis.com/search?show-fields=all',
  //     dataType: 'jsonp',
  //     data: {q: search},
  //   });
  // };