'use strict';
var sendTxCtrl = function($scope, $sce, walletService) {
	walletService.wallet = null;
	walletService.password = '';
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
        ajaxReq.getBalance($scope.wallet.getAddressString(), function(data){
            if(data.error){
                $scope.etherBalance = data.msg;
            } else {
                $scope.etherBalance = etherUnits.toEther(data.data.balance,'wei');
                ajaxReq.getETHvalue(function(data){
                    $scope.usdBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.usd);
                    $scope.eurBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.eur);
                    $scope.btcBalance =  etherUnits.toFiat($scope.etherBalance,'ether',data.btc);
                });
            }
        });
	});
    $scope.validateAddress = function(){
        if(ethFuncs.validateEtherAddress($scope.toAddress)){
            $scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
        } else {
            $scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
        }
    }
};
module.exports = sendTxCtrl;