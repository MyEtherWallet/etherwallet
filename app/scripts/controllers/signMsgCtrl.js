'use strict'
var signMsgCtrl = function($scope, $sce, walletService) {
  $scope.visibility = "signView";
	$scope.$watch(function() {
		if (walletService.wallet == null) return null
		return walletService.wallet.getAddressString()
	}, function() {
		if (walletService.wallet == null) return
		$scope.wallet = walletService.wallet
	})

  $scope.signMsg = {
    message: '',
    dateTime: '',
    status: '',
    signedMsg: ''
  }
  $scope.verifyMsg = {
    address: '',
    signedMsg: '',
    status: ''
  }

  $scope.generateSignedMsg = function() {
    var thisMessage          = $scope.signMsg.message + ' | ' + $scope.signMsg.dateTime;
    var hash                 = ethUtil.sha3( thisMessage );
    var signed               = ethUtil.ecsign( hash, $scope.wallet.getPrivateKey() );
    var combined             = Buffer.concat([Buffer.from(signed.r), Buffer.from(signed.s), Buffer.from([signed.v])]);
    var combinedHex          = combined.toString('hex');
    $scope.signMsg.signedMsg = JSON.stringify({address: $scope.wallet.getChecksumAddressString(), msg: thisMessage, signature: '0x'+combinedHex});
  }
  $scope.verifySignedMessage = function() {

  }

}
module.exports = signMsgCtrl
