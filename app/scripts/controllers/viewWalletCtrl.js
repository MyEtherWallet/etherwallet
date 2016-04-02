'use strict';
var viewWalletCtrl = function($scope, walletService) {
	walletService.wallet = null;
	walletService.password = '';
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
        $scope.showEnc = walletService.password != '';
		$scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
		if (walletService.password != '') {
			$scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
				kdf: globalFuncs.kdf,
				n: globalFuncs.scrypt.n
			}));
		}
	});
	$scope.printQRCode = function() {
		globalFuncs.printPaperWallets(JSON.stringify([{
			address: $scope.wallet.getAddressString(),
			private: $scope.wallet.getPrivateKeyString()
		}]));
	}
};
module.exports = viewWalletCtrl;