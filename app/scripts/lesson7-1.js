'use strict';

(function() {

  // string usage
  $('div.newsString').searchGuardian('strawberry');

  // options usage
  $('div.newsOption').searchGuardian({
    search: 'Syria',
    limit: 5,
    onComplete: function() {
      console.log('client callback');
    }
  });

})();
