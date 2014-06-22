'use strict';

(function() {

  var myVar;

  var setVal = function() {
    // new keyword is optional
    var deferred = new $.Deferred();

    // value of myVar gets assigned in a timeout
    setTimeout(function() {
      myVar = 'my value assigned inside the timeout';
      // When this resolves, any callbacks that are attached will fire
      deferred.resolve();
    }, 2000);

    // I promise to let you know when operation is complete
    // By default, deferred is in state of pending
    return deferred.promise();
  };

  // done will fire when promise is resolved (aka succeeded)
  setVal().done(function() {
    console.log('myVar after promise resolved: ' + myVar);
  });

  var cb1 = function() {
    console.log('cb1 myVar = ' + myVar);
  };

  var cb2 = function() {
    console.log('cb2 myVar = ' + myVar);
  };

  // done with array of callbacks
  setVal().done([cb1, cb2]);

  // can stack multiple callbacks, if promise has already resolved,
  // then this will fire instantly
  setVal().done(function() {
    console.log('another cb stacked, myVar = ' + myVar);
  });

  // Promise can also be rejected
  var setValBad = function() {
    var deferred = $.Deferred();
    setTimeout(function() {
      deferred.reject();
    }, 2000);
    return deferred.promise();
  };

  // done will never fire if promise was rejected
  setValBad().done(function() {
    console.log('execution will never come here');
  });

  // fail will fire when promise is rejected
  setValBad().fail(function() {
    console.log('setValBad failed');
  });

  // always will fire whetehr promise succeeded or failed
  setValBad().always(function() {
    console.log('always callback always runs');
  });

  // Chaining Method 1
  var myChainVal1;
  var setValChain1 = function() {
    var deferred = $.Deferred();
    setTimeout(function() {
      myChainVal1 = 'myChainVal1 has been populated';
      deferred.resolve();
    }, 2000);
    return deferred.promise();
  };

  setValChain1().done(function() {
    console.log('setValChain1 success: ' + myChainVal1);
  }).fail(function() {
    console.log('setValChain1 failed');
  }).always(function() {
    console.log('setValChain1 always runs');
  });

  // Chaining Method 2 - jQuery helper method 'then'
  var myChainVal2;
  var setValChain2 = function() {
    var deferred = $.Deferred();
    setTimeout(function() {
      myChainVal2 = 'myChainVal2 has been populated';
      deferred.resolve();
    }, 2000);
    return deferred.promise();
  };

  setValChain2().then(
    function() {
      console.log('setValChain2 success: ' + myChainVal2);
    },
    function() {
      console.log('setValChain2 failed');
    }
  );

})();
