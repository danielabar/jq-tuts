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
      this.registerHandlers();
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

    registerHandlers: function() {
      this.registerSearchHandler();
      this.registerOptionChangeHander();
      this.registerModal();
    },

    registerModal: function() {
      $('#actorDetailModal').on('hidden.bs.modal', function () {
        $('#actorDetailModal .detailContainer').empty();
      });
    },

    registerSearchHandler: function() {
      var self = this;
      this.searchElement.on('click', function(e) {
        self.cleanUp(self);
        var q = self.optionsContainer.val();
        self.searchByLastName(q, self);
        e.preventDefault();
      });
    },

    registerOptionChangeHander: function() {
      var self = this;
      this.optionsContainer.on('change', function() {
        self.cleanUp(self);
        self.searchByLastName(this.value, self);
      });
    },

    cleanUp: function(self) {
      $('#searchError').addClass('hidden');
      self.resultsContainer.empty();
    },

    searchByLastName: function(q, self) {
      $.ajax({
        url: '/actor/' + q,
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
          self.displaySearchResults(data, self);
        },
        error: function(jqXHR) {
          self.displayError(jqXHR);
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

    displayError: function(jqXHR) {
      var serverError = JSON.parse(jqXHR.responseText);
      var errorMessage = serverError.message;
      console.dir(errorMessage);
      $('.searchErrorText').text(errorMessage);
      $('#searchError').removeClass('hidden');
    },

    registerActorDetailModalHandler: function() {
      var self = this;
      $('a.openActorModal').on('click', function() {
        var actorId = $(this).data('actorId');
        self.getActorDetails(actorId, self);
      });
    },

    getActorDetails: function(actorId, self) {
      $.ajax({
        url: '/actordetail/' + actorId,
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
          self.displayActorDetails(data.response[0], self);
        },
        error: function(error) {
          self.displayError(error);
        }
      });
    },

    displayActorDetails: function(data) {
      $('#actorDetailModal .detailContainer').empty();
      var compiledTemplate = Handlebars.compile($('#detailsTpl').html());
      $('#actorDetailModal .modal-content').append(compiledTemplate(data));
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
