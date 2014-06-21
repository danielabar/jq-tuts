'use strict';

(function() {

  var ActorService = {

    init: function(config) {
      this.optionsTemplate = config.optionsTemplate;
      this.optionsContainer = config.optionsContainer;
      this.searchElement = config.searchElement;
      this.resultsContainer = config.resultsContainer;
      this.resultsTemplate = config.resultsTemplate;
      this.resultsContainer.hide();
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
        success: function(data) {
          self.displaySearchResults(data, self);
        },
        error: function(error) {
          self.displayError(error);
        }
      });
    },

    displaySearchResults: function(data, self) {
      self.resultsContainer.empty();
      var compiledTemplate = Handlebars.compile(self.resultsTemplate);
      self.resultsContainer.append(compiledTemplate({actors: data.response}));
      self.resultsContainer.show();
      self.registerActorDetailModalHandler();
    },

    displayError: function(error) {
      console.log(error);
    },

    registerActorDetailModalHandler: function() {
      var self = this;
      $('a.openActorModal').on('click', function() {
        var actorId = $(this).data('actorId');
        self.getActorDetails(actorId);
      });
    },

    getActorDetails: function(actorId) {
      console.log('getting details for actorId: ' + actorId);
    }

  };

  ActorService.init({
    optionsTemplate: $('#qOptionsTpl').html(),
    optionsContainer: $('select#q'),
    searchElement: $('button#search'),
    resultsContainer: $('.search-results tbody'),
    resultsTemplate: $('#resultsTpl').html()
  });


})();
