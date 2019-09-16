'use strict';
var onboardingCtrl = function($scope, globalService, $translate, $sce) {

  $scope.onboardModal = document.getElementById('deprecationWarning') ? new Modal(document.getElementById('deprecationWarning')) : null
  $scope.onboardModal.open()   
  $scope.closeModal = function() {
    $scope.onboardModal.close()
  }
}
module.exports = onboardingCtrl;
