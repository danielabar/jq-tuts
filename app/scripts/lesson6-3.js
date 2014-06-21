'use strict';

(function() {

  var ActorService = {

    init: function(config) {
      this.optionsTemplate = config.optionsTemplate;
      this.optionsContainer = config.optionsContainer;
      this.initSearchOptions();
    },

    initSearchOptions: function() {
      var compiledTemplate = Handlebars.compile(this.optionsTemplate);
      this.optionsContainer.append(compiledTemplate(this.generateAlphabet()));
    },

    generateAlphabet: function() {
      var results = [];
      for (var i=65; i<=90; i++){
        results.push({
          value: String.fromCharCode(i),
          displayValue: String.fromCharCode(i)
        });
      }
      return results;
    }

  };

  ActorService.init({
    optionsTemplate: $('#qOptionsTpl').html(),
    optionsContainer: $('select#q')
  });


})();
