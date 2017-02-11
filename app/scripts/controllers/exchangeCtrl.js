'use strict';
var exchangeCtrl = function($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.Validator = Validator;
    $scope.bity = new bity();
    $scope.priceTicker = { ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1 };

};
module.exports = exchangeCtrl;
