'use strict'
var signMsgCtrl = function($scope, $sce, walletService) {
	walletService.wallet = null;
	$scope.visibility = "signView";
	$scope.$watch(function() {
		if (walletService.wallet == null) return null
		return walletService.wallet.getAddressString()
	}, function() {
		if (walletService.wallet == null) return
		$scope.wallet = walletService.wallet
	});
	$scope.signMsg = {
		message: '',
		dateTime: '',
		status: '',
		signedMsg: ''
	}
	$scope.verifyMsg = {
		signedMsg: '',
		status: ''
	}
	$scope.generateSignedMsg = function() {
		try {
      var thisMsg    = $scope.signMsg.message
      var thisDate   = $scope.signMsg.dateTime
      var thisSpacer = (thisMsg.length > 0 && thisDate.length > 0) ? ' ' : ''
			var thisMessage = thisMsg + thisSpacer + thisDate
			var hash = ethUtil.sha3(thisMessage)
			var signed = ethUtil.ecsign(hash, $scope.wallet.getPrivateKey())
			var combined = Buffer.concat([Buffer.from(signed.r), Buffer.from(signed.s), Buffer.from([signed.v])])
			var combinedHex = combined.toString('hex')
			$scope.signMsg.signedMsg = JSON.stringify({
				address: $scope.wallet.getChecksumAddressString(),
				msg: thisMessage,
				sig: '0x' + combinedHex
			})
		} catch (e) {
			$scope.notifier.danger(e)
		}
	}
	$scope.verifySignedMessage = function() {
		try{
		  var json = JSON.parse($scope.verifyMsg.signedMsg);
          var sig = new Buffer(ethFuncs.getNakedAddress(json.sig),'hex');
          if(sig.length!=65) throw globalFuncs.errorMsgs[12];
          sig[64] = sig[64]==0||sig[64]==1 ? sig[64]+27 : sig[64];
          var hash = ethUtil.sha3(json.msg);
          var pubKey = ethUtil.ecrecover(hash, sig[64], sig.slice(0,32), sig.slice(32,64));
          if(ethFuncs.getNakedAddress(json.address)!=ethUtil.pubToAddress(pubKey).toString('hex')) throw globalFuncs.errorMsgs[12];
          else $scope.notifier.success(globalFuncs.successMsgs[6]);
		} catch (e){
		  $scope.notifier.danger(e);
		}
	}
	$scope.setVisibility = function(str) {
		$scope.visibility = str;
	}
}
module.exports = signMsgCtrl
