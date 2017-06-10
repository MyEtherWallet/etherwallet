'use strict';
var footerCtrl = function($scope, globalService) {
    var gasPriceKey = "gasPrice";
    $scope.footerModal = new Modal(document.getElementById('disclaimerModal'));
    $scope.ethBlockNumber = "loading";
    $scope.etcBlockNumber = "loading";
    $scope.showBlocks = window.location.protocol == "https:";
    $scope.setBlockNumbers = function() {
        if (!$scope.showBlocks) return;
        ajaxReq.getCurrentBlock(function(data) { $scope.currentBlockNumber = data.data; });
    }
    $scope.setBlockNumbers();
    $scope.globalService = globalService;

    $scope.curLang = globalFuncs.curLang;
    $scope.gasChanged = function() {
        localStorage.setItem(gasPriceKey, $scope.gas.value);
        ethFuncs.gasAdjustment = $scope.gas.value;
    }
    var setGasValues = function() {
        $scope.gas = {
            curVal: 21,
            value: localStorage.getItem(gasPriceKey) ? parseInt(localStorage.getItem(gasPriceKey)) : 21,
            max: 50,
            min: 1
        }
        if ($scope.showBlocks) {
            ajaxReq.getTransactionData(globalFuncs.donateAddress, function(data) {
                if (!data.error) {
                    data = data.data;
                    var curVal = new BigNumber(data.gasprice).div(etherUnits.getValueOfUnit('gwei')).toNumber();
                    $scope.gas = {
                        curVal: curVal,
                        value: localStorage.getItem(gasPriceKey) ? parseInt(localStorage.getItem(gasPriceKey)) : 21,
                        max: 50,
                        min: 1
                    }
                    ethFuncs.gasAdjustment = $scope.gas.value;
                }
            });
        }
    }
    setGasValues();
    $scope.gasChanged();
};
module.exports = footerCtrl;
