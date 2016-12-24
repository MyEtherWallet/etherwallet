'use strict';
var walletGenCtrl = function($scope) {
  $scope.password = "";
  $scope.wallet = null;
  $scope.showWallet = false;
  $scope.blob = $scope.blobEnc = "";
  $scope.isDone = true;
  $scope.showPass = true;
  $scope.genNewWallet = function() {
    if (!$scope.isStrongPass()) {
      alert(globalFuncs.errorMsgs[1]);
    } else if ($scope.isDone) {
      $scope.isDone = false;
      $scope.wallet = Wallet.generate(false);
      $scope.showWallet = true;
      $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
      $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3($scope.password, {
        kdf: globalFuncs.kdf,
        n: globalFuncs.scrypt.n
      }));
      $scope.encFileName = $scope.wallet.getV3Filename();
      if (parent != null)
        parent.postMessage(JSON.stringify({ address: $scope.wallet.getAddressString(), checksumAddress: $scope.wallet.getChecksumAddressString() }), "*");
      $scope.isDone = true;
    }
  }
  $scope.printQRCode = function() {
    globalFuncs.printPaperWallets(JSON.stringify([{
      address: $scope.wallet.getAddressString(),
      private: $scope.wallet.getPrivateKeyString()
    }]));
  }
  $scope.isStrongPass = function() {
    return globalFuncs.isStrongPass($scope.password);
  }
};
module.exports = walletGenCtrl;
