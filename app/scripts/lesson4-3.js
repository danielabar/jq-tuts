'use strict';

(function() {

  var Guardian = {

    init: function() {
      this.url = 'http://content.guardianapis.com/search?show-fields=all&q=fifa&callback=?';
      this.fetch(this.processResults);
    },

    fetch: function(callback) {
      var self = this;
      $.getJSON(this.url, function(data) {
        self.items = self.extractItems(data);
        callback(self.items);
      });
    },

    extractItems: function(data) {
      var self = this;
      return $.map(data.response.results, function(item) {
        return self.extractItem(item);
      });
    },

    extractItem: function(item) {
      return {
        author: item.fields.byline,
        content: item.fields.trailText,
        thumbnail: item.fields.thumbnail,
        url: item.webUrl,
        title: item.webTitle,
        publishDate: item.webPublicationDate
      };
    },

    processResults: function(items) {
      console.log('processResults is called with items: ' + JSON.stringify(items, null, 2));
    }

  };

  Guardian.init();

})();
