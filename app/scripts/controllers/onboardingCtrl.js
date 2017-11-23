'use strict';
var onboardingCtrl = function($scope, globalService, $translate, $sce) {
    $scope.onboardingModal = document.getElementById('onboardingModal') ? new Modal(document.getElementById('onboardingModal')) : null;
    $scope.onboardingModal.open()
    $scope.currentOnboardSlide = 1
};
module.exports = onboardingCtrl;
