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
      self.url = 'http://content.guardianapis.com/search?show-fields=all';

      // support user passing string or object as option
      if (typeof options === 'string') {
        self.search = options;
      } else {
        // object was passed
        self.search = options.search;
        // allow user to override plugin default options
        self.options = $.extend({}, $.fn.searchGuardian.options, options);
      }
      self.cycle();
    },

    cycle: function() {
      var self = this;
      self.fetch().done(function(data) {
        self.buildFrag(data);
        self.display();
      });
    },

    fetch: function() {
      var self = this;
      return $.ajax({
        url: self.url,
        dataType: 'jsonp',
        data: {q: self.search},
      }).promise();
    },

    buildFrag: function(data) {
      var self = this;
      self.news = $.map(data.response.results, self.buildNewsItem);
      console.log(self.news);
    },

    buildNewsItem: function(item) {
      return {
        author: item.fields.byline,
        content: item.fields.trailText,
        thumbnail: item.fields.thumbnail,
        url: item.webUrl,
        title: item.webTitle,
        publishDate: item.webPublicationDate
      };
    },

    display: function() {
      this.$elem.html( this.news ); // that's available??
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

  // Defaults
  $.fn.searchGuardian.options = {
    search: 'cats'
  };

})(jQuery, window, document);

  // var getNews = function(search) {
  //   return $.ajax({
  //     url: 'http://content.guardianapis.com/search?show-fields=all',
  //     dataType: 'jsonp',
  //     data: {q: search},
  //   });
  // };