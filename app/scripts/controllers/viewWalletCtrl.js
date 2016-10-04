'use strict';
var viewWalletCtrl = function($scope, walletService) {
  $scope.tokenVisibility = "hidden";
  walletService.wallet = null;
  walletService.password = '';
  $scope.$watch(function() {
    if (walletService.wallet == null) return null;
    return walletService.wallet.getAddressString();
  }, function() {
    if (walletService.wallet == null) return;
    $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.showEnc = walletService.password != '';
    $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
    if (walletService.password != '') {
      $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
        kdf: globalFuncs.kdf,
        n: globalFuncs.scrypt.n
      }));
            $scope.encFileName =  $scope.wallet.getV3Filename();
    }
        ajaxReq.getBalance($scope.wallet.getAddressString(), false, function(data){
            if(data.error){
                $scope.etherBalance = data.msg;
            } else {
                $scope.etherBalance = etherUnits.toEther(data.data.balance,'wei');
                ajaxReq.getETHvalue(function(data){
                    $scope.usdBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.usd);
                    $scope.eurBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.eur);
                    $scope.btcBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.btc);
                });
            }
        });
        $scope.setTokens();
  });

  // Populate token list + from local storage
  $scope.setTokens = function() {
    $scope.tokenObjs = [];
    $scope.tokens = Token.popTokens;
    for (var i = 0; i < $scope.tokens.length; i++) {
      $scope.tokenObjs.push(new Token($scope.tokens[i].address, $scope.wallet.getAddressString(), $scope.tokens[i].symbol, $scope.tokens[i].decimal, $scope.tokens[i].type));
    }
    var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
    for (var i = 0; i < storedTokens.length; i++) {
      $scope.tokenObjs.push(new Token(storedTokens[i].contractAddress, $scope.wallet.getAddressString(), globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal, storedTokens[i].type));
    }
  }

  // Remove tokens from localstorage when they click the 'X'
  $scope.removeTokenFromLocal = function(tokenSymbol) {
    var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];

    // remove from localstorage so it doesn't show up on refresh
    for (var i =0; i < storedTokens.length; i++)
    if (storedTokens[i].symbol === tokenSymbol) {
      storedTokens.splice(i,1);
      break;
    }
    localStorage.setItem("localTokens",JSON.stringify(storedTokens));

    // remove from tokenObj so it removes from display
    for (var i =0; i < $scope.tokenObjs.length; i++)
    if ($scope.tokenObjs[i].symbol === tokenSymbol) {
      $scope.tokenObjs.splice(i,1);
      break;
    }

  }

  $scope.printQRCode = function() {
    globalFuncs.printPaperWallets(JSON.stringify([{
      address: $scope.wallet.getAddressString(),
      private: $scope.wallet.getPrivateKeyString()
    }]));
  }
};
module.exports = viewWalletCtrl;
