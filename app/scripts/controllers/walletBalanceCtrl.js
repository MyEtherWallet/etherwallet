'use strict';
var walletBalanceCtrl = function ($scope, $sce) {
  console.log($scope.wallet)
  var defaultTokensAndNetworkType
  // TODO: Everyone check this now especially Daniel
  try {
    defaultTokensAndNetworkType = globalFuncs.getDefaultTokensAndNetworkType()
  } catch (e) {
    console.log(e)
    return $scope.notifier.danger(e.message);
  }
  console.log(defaultTokensAndNetworkType)
  $scope.ajaxReq = ajaxReq;
  $scope.tokensLoaded = false;
  $scope.localToken = {
    contractAdd: '',
    symbol: '',
    decimals: '',
    network: defaultTokensAndNetworkType.networkType,
    type: 'custom'
  };


  $scope.slide = 3;

  $scope.customTokenField = false;
  $scope.saveTokenToLocal = function () {
    globalFuncs.saveTokenToLocal($scope.localToken, function (data) {
      console.log(data)
      if (!data.error) {
        $scope.localToken = {
          contractAdd: '',
          symbol: '',
          network: defaultTokensAndNetworkType.networkType,    
          decimals: '',
          type: 'custom'
        };
        $scope.wallet.setTokens();
        $scope.validateLocalToken = $sce.trustAsHtml('');
        $scope.customTokenField = false;
      } else {
        $scope.notifier.danger(data.msg);
      }
    });
  };


  
  
  /*
    $scope.$watch('wallet', function() {
        if ($scope.wallet) $scope.reverseLookup();
    });

    $scope.reverseLookup = function() {
        var _ens = new ens();
        _ens.getName($scope.wallet.getAddressString().substring(2) + '.addr.reverse', function(data) {
            if (data.error) uiFuncs.notifier.danger(data.msg);
            else if (data.data == '0x') {
                $scope.showens = false;
            } else {
                $scope.ensAddress = data.data;
                $scope.showens = true;
            }
        });
    }
    */

  $scope.removeTokenFromLocal = function(tokensymbol) {
    globalFuncs.removeTokenFromLocal(tokensymbol, $scope.wallet.tokenObjs);
  };

  $scope.showDisplayOnTrezor = function() {
    return $scope.wallet != null && $scope.wallet.hwType === 'trezor';
  };

  $scope.displayOnTrezor = function() {
    TrezorConnect.ethereumGetAddress($scope.wallet.path, function() {});
  };

  $scope.showDisplayOnLedger = function() {
    return $scope.wallet != null && $scope.wallet.hwType === 'ledger';
  };

  $scope.displayOnLedger = function() {
    var app = new ledgerEth($scope.wallet.getHWTransport());
    app.getAddress($scope.wallet.path, function() {}, true, false);
  };
};
module.exports = walletBalanceCtrl;
