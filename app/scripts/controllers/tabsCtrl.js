'use strict';
var tabsCtrl = function($scope, globalService) {
	$scope.tabNames = globalService.tabs;
	$scope.activeTab = globalService.currentTab;
	$scope.tabClick = function(id) {
		$scope.activeTab = globalService.currentTab = id;
	}
};
module.exports = tabsCtrl;