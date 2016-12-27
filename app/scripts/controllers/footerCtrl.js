'use strict';
var footerCtrl = function($scope, globalService) {
    $scope.footerModal = new Modal(document.getElementById('disclaimerModal'));
	$scope.ethBlockNumber = "loading";
    $scope.etcBlockNumber = "loading";
    $scope.showBlocks = window.location.protocol=="https:";
    $scope.setBlockNumbers = function(){
        if(!$scope.showBlocks) return;
        ajaxReq.getCurrentBlock(function(data){$scope.ethBlockNumber = data.data;});
        ajaxReq.getCurrentBlock(function(data){$scope.etcBlockNumber = data.data;});
    }
    $scope.setBlockNumbers();
    $scope.globalService=globalService;
};
module.exports = footerCtrl;
