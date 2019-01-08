'use strict';
var walletBalanceCtrl = function($scope, $sce, $rootScope) {
    $scope.ajaxReq = ajaxReq;
    $scope.tokensLoaded = false;
    $scope.showAllTokens = false;
    $scope.localToken = {
        contractAdd: "",
        symbol: "",
        decimals: "",
        type: "custom",
    };

    $scope.slide = 1;

    $scope.customTokenField = false;

    $scope.saveTokenToLocal = function() {
        globalFuncs.saveTokenToLocal($scope.localToken, function(data) {
            if (!data.error) {
                $scope.addressDrtv.ensAddressField = "";
                $scope.localToken = {
                    contractAdd: "",
                    symbol: "",
                    decimals: "",
                    type: "custom"
                };
                $scope.wallet.setTokens();
                $scope.validateLocalToken = $sce.trustAsHtml('');
                $scope.customTokenField = false;
            } else {
                $scope.notifier.danger(data.msg);
            }
        });
    }


    $scope.setAndVerifyBalance = function(token) {
      if ( token.balance == 'Click to Load' ) {
        token.balance='loading';

        token.setBalance(function() {
           var autoTokens = globalFuncs.localStorage.getItem('autoLoadTokens')
           $scope.autoLoadTokens = autoTokens ? JSON.parse(autoTokens) : [];

          if ( parseInt(token.balance) > 0 ) {
            $scope.autoLoadTokens.push( token.contractAddress );
            globalFuncs.localStorage.setItem( 'autoLoadTokens', JSON.stringify($scope.autoLoadTokens) );
          }
        });
      }
    }

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
        $rootScope.rootScopeShowRawTx = false;
    }

    $scope.showDisplayOnTrezor = function() {
        return ($scope.wallet != null && $scope.wallet.hwType === 'trezor');
    }

    $scope.displayOnTrezor = function() {
        TrezorConnect.ethereumGetAddress({
            path: $scope.wallet.path,
            showOnTrezor: true
        });
    }

    $scope.showDisplayOnLedger = function() {
        return ($scope.wallet != null && $scope.wallet.hwType === 'ledger');
    }

    $scope.displayOnLedger = function() {
        var app = new ledgerEth($scope.wallet.getHWTransport());
        app.getAddress($scope.wallet.path, function(){}, true, false);
    }

};

module.exports = walletBalanceCtrl;
