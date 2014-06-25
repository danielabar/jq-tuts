'use strict';

(function() {

  var getNews = function(search) {
    return $.ajax({
      url: 'http://content.guardianapis.com/search?show-fields=all',
      dataType: 'jsonp',
      data: {q: search},
    });
  };

  // jQuery 'when' is used to stack multiple async calls
  $.when(getNews('cats'), getNews('dogs')).done(function(results1, results2) {
    console.log(results1);
    console.log(results2);
  });

})();
