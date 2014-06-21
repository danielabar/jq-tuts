'use strict';

(function() {

  var ActorService = {

    init: function(config) {
      this.optionsTemplate = config.optionsTemplate;
      this.optionsContainer = config.optionsContainer;
      this.searchElement = config.searchElement;
      this.initSearchOptions();
      this.registerSearchHandler();
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
    },

    registerSearchHandler: function() {
      var self = this;
      this.searchElement.on('click', function(e) {
        var q = self.optionsContainer.val();
        self.searchByLastName(q, self);
        e.preventDefault();
      });
    },

    searchByLastName: function(q, self) {
      $.ajax({
        url: '/actor/' + q,
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
          self.displaySearchResults(response);
        },
        error: function(error) {
          self.displayError(error);
        }
      });
    },

    displaySearchResults: function(response) {
      console.log(response);
    },

    displayError: function(error) {
      console.log(error);
    }

  };

  ActorService.init({
    optionsTemplate: $('#qOptionsTpl').html(),
    optionsContainer: $('select#q'),
    searchElement: $('button#search')
  });


})();
