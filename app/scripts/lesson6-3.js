'use strict';

(function() {

  var buildSearchOptions = function() {
    var template = $('#qOptionsTpl').html();
    var compiledTemplate = Handlebars.compile(template);
    var context = buildAlphabet();
    var container = $('select#q');
    container.append(compiledTemplate(context));
  };

  var buildAlphabet = function() {
    var l = [];
    for (var i=65; i<=90; i++){
      l.push({
        value: String.fromCharCode(i),
        displayValue: String.fromCharCode(i)
      });
    }
    return l;
  };

  buildSearchOptions();

})();
