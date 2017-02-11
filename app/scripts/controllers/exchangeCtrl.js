'use strict';
var exchangeCtrl = function($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.Validator = Validator;
    $scope.bity = new bity();
    $scope.bity.refreshRates(function() {
        $scope.setOrderCoin(true, "ETH");
    });
    $scope.showStage1 = true;
    $scope.showStage2 = $scope.showStage3Eth = $scope.showStage3Btc = false;
    $scope.priceTicker = { ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1 };
    $scope.availableCoins = ["ETH", "BTC", "REP"];
    $scope.exchangeOrder = {
        fromCoin: "ETH",
        toCoin: "BTC",
        isFrom: true,
        fromVal: '',
        toVal: '',
        toAddress: '',
        exchangeRate: '',
        exchangePair: ''
    }
    $scope.setOrderCoin = function(isFrom, coin) {
        if (isFrom) $scope.exchangeOrder.fromCoin = coin;
        else $scope.exchangeOrder.toCoin = coin;
        if ($scope.exchangeOrder.fromCoin == $scope.exchangeOrder.toCoin)
            for (var i in $scope.availableCoins)
                if ($scope.availableCoins[i] != $scope.exchangeOrder.fromCoin) {
                    $scope.exchangeOrder.toCoin = $scope.availableCoins[i];
                    break;
                }
        $scope.exchangeOrder.exchangeRate = $scope.bity.curRate[$scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin];
        $scope.exchangeOrder.exchangePair = $scope.exchangeOrder.fromCoin + "/" + $scope.exchangeOrder.toCoin;
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    }
    $scope.updateEstimate = function(isFrom){
        if(isFrom)  $scope.exchangeOrder.toVal = parseFloat(($scope.bity.curRate[$scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin] * $scope.exchangeOrder.fromVal).toFixed(bity.decimals));
        else $scope.exchangeOrder.fromVal = parseFloat(($scope.exchangeOrder.toVal / $scope.bity.curRate[$scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin]).toFixed(bity.decimals));
        $scope.exchangeOrder.isFrom = isFrom;
    }
    $scope.setFinalPrices = function() {
        $scope.bity.refreshRates(function() {
            $scope.updateEstimate($scope.exchangeOrder.isFrom);
            $scope.showStage1 = false;
            $scope.showStage2 = true;
        });
    }
};
module.exports = exchangeCtrl;
