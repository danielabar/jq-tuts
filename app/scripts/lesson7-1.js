'use strict';

(function() {

  // string usage
  // $('div.newsString').searchGuardian('strawberry');

  // options usage
  $('div.newsOption').searchGuardian({
    search: 'Syria',
    limit: 5,
    onComplete: function() {
      // console.log('client callback');
    },
    refresh: 20000,
    transition: 'slideToggle'
  });

  var instance = $.data( $('div.newsOption')[0], 'searchGuardian' );
  console.log(instance);

})();
