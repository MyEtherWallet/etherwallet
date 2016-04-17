'use strict';
var walletGenCtrl = function($scope) {
	$scope.password = "";
	$scope.wallet = null;
	$scope.showWallet = false;
	$scope.blob = $scope.blobEnc = "";
    $scope.isDone = true;
	$scope.genNewWallet = function() {
		if ($scope.password.length < 7) {
			alert(globalFuncs.errorMsgs[1]);
		} else if($scope.isDone){
            $scope.isDone = false;
			$scope.wallet = Wallet.generate(false);
			$scope.showWallet = true;
			$scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
			$scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3($scope.password, {
				kdf: globalFuncs.kdf,
                n: globalFuncs.scrypt.n
			}));
            $scope.encFileName =  $scope.wallet.getV3Filename();
            $scope.isDone =  true;
		}
	}
	$scope.printQRCode = function() {
		globalFuncs.printPaperWallets(JSON.stringify([{
			address: $scope.wallet.getAddressString(),
			private: $scope.wallet.getPrivateKeyString()
		}]));
	}
};
module.exports = walletGenCtrl;