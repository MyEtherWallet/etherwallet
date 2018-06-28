'use strict';
var onboardingCtrl = function($scope, globalService, $translate, $sce) {

  $scope.onboardModal     = document.getElementById('onboardingModal') ? new Modal(document.getElementById('onboardingModal')) : null

  $scope.onboardMsg       = false  // a msg that displays on the modal if the user hasn't completed onboarding
  $scope.onboardStatus    = 1      // set the status to slide 1 for local storage later
  $scope.showOnboardSlide = 1      // show slide 1

  // if there is onboardStatus in localStorage....
  if ( globalFuncs.localStorage.getItem("onboardStatus", null) != null ) {

    // get the slide number from localStorage
    $scope.onboardStatus = parseInt( globalFuncs.localStorage.getItem("onboardStatus") )

    // if they've seen a few slides...
    if ( $scope.onboardStatus > 0  &&  $scope.onboardStatus < 10 ) {
      $scope.showOnboardSlide = $scope.onboardStatus // set the slide to the last slide they viewed
      $scope.onboardMsg = true                    // show a msg explaining they need to finish it
      $scope.onboardModal.open()                     // show the modal
    }

  // otherwise, show the modal (starts at slide 1 by default, above)
  } else {
    $scope.onboardModal.open()
  }

  // whenever a user clicks a button on the modal...
  $scope.setOnboardStatus = function( slideNum ) {
    $scope.showOnboardSlide = slideNum                                            // show the slide indicated
    globalFuncs.localStorage.setItem("onboardStatus", JSON.stringify( slideNum )) // save number to localStorage for later
  }

  $scope.setOnboardStatus( $scope.onboardStatus )

}
module.exports = onboardingCtrl;
