'use strict';
var tabsCtrl = function($scope, globalService, $translate) {
	$scope.tabNames = globalService.tabs;
	$scope.curLang = "English";
	var hval = window.location.hash;
	$scope.setTab = function(hval) {
		if (hval != "") {
			hval = hval.replace("#", '');
			for (var key in $scope.tabNames) {
				if ($scope.tabNames[key].url == hval) {
					$scope.activeTab = globalService.currentTab = $scope.tabNames[key].id;
					break;
				}
				$scope.activeTab = globalService.currentTab;
			}
		} else {
			$scope.activeTab = globalService.currentTab;
		}
	}
    $scope.setTab(hval);
	$scope.tabClick = function(id) {
		$scope.activeTab = globalService.currentTab = id;
		for (var key in $scope.tabNames) {
			if ($scope.tabNames[key].id == id) location.hash = $scope.tabNames[key].url;
		}
	}
	$scope.changeLanguage = function(key, value) {
		$translate.use(key);
		$scope.curLang = value;
	};
    $scope.setHash = function(hash){
        location.hash = hash;
        $scope.setTab(hash);
        $scope.$apply();
    }
    globalFuncs.changeHash = $scope.setHash;
};
module.exports = tabsCtrl;