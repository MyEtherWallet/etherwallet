'use strict';
var ensCtrl = function($scope, $sce, walletService) {
  $scope.ajaxReq = ajaxReq;
  walletService.wallet = null;
  $scope.ensConfirmModalModal = new Modal(document.getElementById('ensConfirmModal'));
  $scope.Validator = Validator;
  $scope.tx = {
    gasLimit: '',
    data: '',
    to: '',
    unit: "ether",
    value: 0,
    nonce: null,
    gasPrice: null
  }
}
module.exports = ensCtrl;
