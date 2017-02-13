'use strict';
var swapCtrl = function($scope, $sce, walletService) {
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
    $scope.swapOrder = {
        fromCoin: "ETH",
        toCoin: "BTC",
        isFrom: true,
        fromVal: '',
        toVal: '',
        toAddress: '',
        swapRate: '',
        swapPair: ''
    }

    $scope.setOrderCoin = function(isFrom, coin) {
        if (isFrom) $scope.swapOrder.fromCoin = coin;
        else $scope.swapOrder.toCoin = coin;
        if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
            for (var i in $scope.availableCoins)
                if ($scope.availableCoins[i] != $scope.swapOrder.fromCoin) {
                    $scope.swapOrder.toCoin = $scope.availableCoins[i];
                    break;
                }
        $scope.swapOrder.swapRate = $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    }
    $scope.updateEstimate = function(isFrom) {
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin]).toFixed(bity.decimals));
        $scope.swapOrder.isFrom = isFrom;
    }
    $scope.setFinalPrices = function() {
        try {

            if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];
            else if ($scope.swapOrder.fromVal < 0.01 || $scope.swapOrder.toVal < 0.01) throw globalFuncs.errorMsgs[27];
            $scope.bity.refreshRates(function() {
                $scope.updateEstimate($scope.swapOrder.isFrom);
                $scope.showStage1 = false;
                $scope.showStage2 = true;
            });
        } catch (e) {
            $scope.notifier.danger(e);
        }

    }
    $scope.openOrder = function() {

        if (($scope.swapOrder.toCoin != 'BTC' && $scope.Validator.isValidAddress($scope.swapOrder.toAddress)) || ($scope.swapOrder.toCoin == 'BTC' && $scope.Validator.isValidBTCAddress($scope.swapOrder.toAddress))) {
            var order = {
                amount: $scope.swapOrder.isFrom ? $scope.swapOrder.fromVal : $scope.swapOrder.toVal,
                mode: $scope.swapOrder.isFrom ? 0 : 1,
                pair: $scope.swapOrder.fromCoin + $scope.swapOrder.toCoin,
                destAddress: $scope.swapOrder.toAddress
            }
            $scope.bity.openOrder(order, function(data) {
                if (!data.error) {
                    $scope.orderResult = data.data;
                    $scope.orderResult.timeRemaining = '10:00';
                    var timeRem = setInterval(function() {
                        if ($scope.orderResult.validFor > 0) {
                            $scope.orderResult.validFor--;
                            var minutes = Math.floor($scope.orderResult.validFor / 60);
                            var seconds = $scope.orderResult.validFor - minutes * 60;
                            minutes = minutes < 10 ? '0' + minutes : minutes;
                            seconds = seconds < 10 ? '0' + seconds : seconds;
                            $scope.orderResult.timeRemaining = minutes + ':' + seconds;
                            if (!$scope.$$phase) $scope.$apply();
                        } else {
                            clearInterval(timeRem);
                            timeRem = null;
                        }
                    }, 1000);
                    console.log($scope.orderResult);
                    $scope.showStage2 = false;
                    if ($scope.orderResult.input.currency == 'BTC') $scope.showStage3Btc = true;
                    else {
                        $scope.parentTxConfig = {
                            to: $scope.orderResult.payment_address,
                            value: $scope.orderResult.input.amount,
                            sendMode: $scope.orderResult.input.currency == 'ETH' ? 'ether' : 'token',
                            tokenSymbol: $scope.orderResult.input.currency == 'ETH' ? '' : $scope.orderResult.input.currency
                        }
                        new Modal(document.getElementById('sendTransaction'));
                        $scope.showStage3Eth = true;
                    }
                } else $scope.notifier.danger(data.msg);
                if (!$scope.$$phase) $scope.$apply();
            });
        } else {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
        }
    }
};
module.exports = swapCtrl;
