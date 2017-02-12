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
    $scope.updateEstimate = function(isFrom) {
        if (isFrom) $scope.exchangeOrder.toVal = parseFloat(($scope.bity.curRate[$scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin] * $scope.exchangeOrder.fromVal).toFixed(bity.decimals));
        else $scope.exchangeOrder.fromVal = parseFloat(($scope.exchangeOrder.toVal / $scope.bity.curRate[$scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin]).toFixed(bity.decimals));
        $scope.exchangeOrder.isFrom = isFrom;
    }
    $scope.setFinalPrices = function() {
        try {
            $scope.stage1Status = '';
            if (!$scope.Validator.isPositiveNumber($scope.exchangeOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.exchangeOrder.toVal)) throw globalFuncs.errorMsgs[0];
            else if ($scope.exchangeOrder.fromVal < 0.01 || $scope.exchangeOrder.toVal < 0.01) throw globalFuncs.errorMsgs[27];
            $scope.bity.refreshRates(function() {
                $scope.updateEstimate($scope.exchangeOrder.isFrom);
                $scope.showStage1 = false;
                $scope.showStage2 = true;
            });
        } catch (e) {
            $scope.stage1Status = $sce.trustAsHtml(globalFuncs.getDangerText(e));
        }

    }
    $scope.openOrder = function() {
        $scope.stage2Status = '';
        if (($scope.exchangeOrder.toCoin != 'BTC' && $scope.Validator.isValidAddress($scope.exchangeOrder.toAddress)) || ($scope.exchangeOrder.toCoin == 'BTC' && $scope.Validator.isValidBTCAddress($scope.exchangeOrder.toAddress))) {
            var order = {
                amount: $scope.exchangeOrder.isFrom ? $scope.exchangeOrder.fromVal : $scope.exchangeOrder.toVal,
                mode: $scope.exchangeOrder.isFrom ? 0 : 1,
                pair: $scope.exchangeOrder.fromCoin + $scope.exchangeOrder.toCoin,
                destAddress: $scope.exchangeOrder.toAddress
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
                            tokenSymbol: $scope.orderResult.input.currency == 'ETH' ? '' : orderResult.input.currency
                        }
                        $scope.showStage3Eth = true;
                    }
                } else $scope.stage2Status = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg));
                if (!$scope.$$phase) $scope.$apply();
            });
        } else {
            $scope.stage2Status = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
        }
    }
};
module.exports = exchangeCtrl;
