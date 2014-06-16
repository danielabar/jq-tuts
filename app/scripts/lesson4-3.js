'use strict';

(function() {

  var Guardian = {

    // config object specifies where in the DOM the template is
    // good practice, to avoid having the JS dependent on DOM structure
    init: function(config) {
      this.url = 'http://content.guardianapis.com/search?show-fields=all&q=fifa&callback=?';
      this.template = config.template;
      this.container = config.container;
      this.fetch(this.processResults);
    },

    fetch: function(callback) {
      var self = this;
      $.getJSON(this.url, function(data) {
        self.items = self.extractItems(data);
        callback(self.items, self.template, self.container);
      });
    },

    extractItems: function(data) {
      return $.map(data.response.results, this.extractItem);
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

    processResults: function(context, template, container) {
      var compiledTemplate = Handlebars.compile(template);
      container.append(compiledTemplate(context));
    }

  };

  Guardian.init({
    template: $('#template').html(),
    container: $('ul.newsItems')
  });

})();
