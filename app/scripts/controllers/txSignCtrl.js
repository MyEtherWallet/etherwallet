'use strict';
var txSignCtrl = function($scope) {
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    walletService.password = '';
    walletService.walletType = null;
    $scope.Validator = Validator;

};
module.exports = txSignCtrl;
