'use strict';

var walletDecryptOfflineDrtv = function() {
	if(!navigator.onLine){ 
	return {
        restrict : "E",
        template : require('./walletDecryptOfflineDrtv.html')
  };
	} else {
	return {
				restrict : "E",
				template : require('./notwalletDecryptOfflineDrtv.html')
			};
	};
};

module.exports = walletDecryptOfflineDrtv;
