'use strict';
var offlineTxCtrl = function($scope, $sce, walletService) {
	//new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
};
module.exports = offlineTxCtrl;