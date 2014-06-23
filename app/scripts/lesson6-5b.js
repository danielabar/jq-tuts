'use strict';

(function() {

  // by default, jQuery ajax returns a promise
  $.searchGuardian = function(search) {
    return $.ajax({
      url: 'http://content.guardianapis.com/search?show-fields=all',
      data: {q: search},
      dataType: 'jsonp'
    }).promise();
  };

  // outer is now a promise
  var outer = $.searchGuardian('cats');

  outer.then(
    function(results) {
      console.log(JSON.stringify(results, null, 2));
    },
    function() {
      console.log('search failed');
    }
  );

  // ... somewhere later in the code or another module
  // also have access to results here
  outer.then(function(results) {
    console.log('second time outer.then is called ' + results);
  });

})();
