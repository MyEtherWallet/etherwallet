'use strict';
var footerCtrl = function($scope) {
	$scope.ethBlockNumber = "loading";
    $scope.etcBlockNumber = "loading";
    $scope.showBlocks = window.location.protocol=="https:";
    $scope.setBlockNumbers = function(){
        if(!$scope.showBlocks) return;
        ajaxReq.getCurrentBlock(function(data){$scope.ethBlockNumber = data.data;});
        ajaxReq.getCurrentClassicBlock(function(data){$scope.etcBlockNumber = data.data;});
    }
    $scope.setBlockNumbers();
    setInterval($scope.setBlockNumbers,3000);
};
module.exports = footerCtrl;