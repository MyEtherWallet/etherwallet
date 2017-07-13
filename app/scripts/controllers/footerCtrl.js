'use strict';
var footerCtrl = function($scope, $interval, globalService) {
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
    $interval(function(){
      if (navigator.onLine) {
        $scope.oLogo = 'Online.png';
      } else {
        $scope.oLogo = 'Offline.png';
      }
    },5000);
    $scope.curLang = globalFuncs.curLang;
};
module.exports = footerCtrl;
