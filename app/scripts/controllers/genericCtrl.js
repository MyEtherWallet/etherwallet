'use strict';
var genericCtrl = function($scope, globalService, $sce) {
    $scope.globalService = globalService;
    $scope.notifier = uiFuncs.notifier;
    $scope.notifier.sce = $sce;
    $scope.notifier.scope = $scope;

    $scope.showLoading = true;
   setTimeout(function ()
   {
     $scope.$apply(function()
     {
       $scope.showLoading = false;
     });
   }, 5000);

    $scope.loadingMsg = {
        msg : 'ETC is best ether!', //<----- change me
        website : window.location.href
      };
};
module.exports = genericCtrl;
