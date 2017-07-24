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
    $scope.ajaxReq = ajaxReq;
    $scope.nodeType = $scope.ajaxReq.type
    $scope.$watch('ajaxReq.type', function() { $scope.nodeType = $scope.ajaxReq.type })

    $scope.curLang = globalFuncs.curLang;
};
module.exports = footerCtrl;
