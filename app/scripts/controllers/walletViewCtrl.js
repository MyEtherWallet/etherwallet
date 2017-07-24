'use strict';
var walletViewCtrl = function($scope, $interval, walletService) {
    $scope.usdBalance = "loading";
    $scope.gbpBalance = "loading";
    $scope.eurBalance = "loading";
    $scope.btcBalance = "loading";
    $scope.etherBalance = "loading";
    $scope.tokenVisibility = "hidden";
    $scope.pkeyVisible = false;
    $scope.offlineSignModal = new Modal(document.getElementById('offlineDecrypt'));
    walletService.wallet = null;
    walletService.password = '';
    //set online initially
    $scope.onlyOffline ={
      isOnline  : '',
      isOffline : 'disabled',
      offMsg    : 'ERROR_38',
      onMsg     : 'TX_Broadcast'
  };

    $scope.ajaxReq = ajaxReq;
    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.showEnc = walletService.password != '';
        if (walletService.wallet.type == "default") $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
        if (walletService.password != '') {
            $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
                kdf: globalFuncs.kdf,
                n: globalFuncs.scrypt.n
            }));
            $scope.encFileName = $scope.wallet.getV3Filename();
        }
        $scope.wallet.setBalance();
        $scope.wallet.setTokens();
    });
    $interval(function(){
      if (navigator.onLine) {
        $scope.onlyOffline ={
          isOnline  : '',
          isOffline : 'disabled',
          offMsg    : 'ERROR_38',
          onMsg     : 'TX_Broadcast'
      };
      if ($scope.wd == false) {
      $scope.wallet = walletService.wallet;
      $scope.wd = true;
      $scope.showEnc = walletService.password != '';
      if (walletService.wallet.type == "default") $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
      if (walletService.password != '') {
          $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
              kdf: globalFuncs.kdf,
              n: globalFuncs.scrypt.n
          }));
          $scope.encFileName = $scope.wallet.getV3Filename();
      }
      $scope.wallet.setBalance();
      $scope.wallet.setTokens();
    }
    } else {
      $scope.wd = false;
      $scope.onlyOffline = {
      isOnline : 'disabled',
      isOffline :'',
      offMsg    : 'WALL_View',
      onMsg     : 'ERROR_39'
      }
     }
   },2000);

    $scope.$watch('ajaxReq.key', function() {
        if ($scope.wallet) {
            $scope.wallet.setBalance();
            $scope.wallet.setTokens();
        }
    });

    $scope.printQRCode = function() {
        globalFuncs.printPaperWallets(JSON.stringify([{
            address: $scope.wallet.getChecksumAddressString(),
            private: $scope.wallet.getPrivateKeyString()
        }]));
    }
    $scope.cleanClose = function() {
      $scope.offlineSignModal.close();
    }
    $scope.showHidePkey = function() {
        $scope.pkeyVisible = !$scope.pkeyVisible;
    }
    $scope.resetWallet = function() {
        $scope.wallet = null;
        walletService.wallet = null;
        walletService.password = '';
        $scope.blob = $scope.blobEnc = $scope.password = "";
    }
};
module.exports = walletViewCtrl;
