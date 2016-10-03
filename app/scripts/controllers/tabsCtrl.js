'use strict';
var tabsCtrl = function($scope, globalService, $translate) {
	$scope.tabNames = globalService.tabs;
	$scope.curLang = "English";
	var hval = window.location.hash;
    if(document.getElementById("langDrop"))
        document.getElementById("langDrop").setAttribute("style", "");
	$scope.setArrowVisibility = function() {
		setTimeout(function() {
			$scope.showLeftArrow = false;
			$scope.showRightArrow = !(document.querySelectorAll(".nav-inner")[0].clientWidth <= document.querySelectorAll(".nav-scroll")[0].clientWidth);
			$scope.$apply();
		}, 200);
	}
	$scope.setArrowVisibility();
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
	$scope.setLanguageVal = function (id, varName, pos) {
		$translate(id).then(function(paragraph) {
			globalFuncs[varName][pos] = paragraph;
		}, function(translationId) {
			globalFuncs[varName][pos] = translationId;
		});
	}
	$scope.setErrorMsgLanguage = function() {
		for (var i = 0; i < globalFuncs.errorMsgs.length; i++) $scope.setLanguageVal('ERROR_' + (i + 1), 'errorMsgs', i);
		for (var i = 0; i < globalFuncs.successMsgs.length; i++) $scope.setLanguageVal('SUCCESS_' + (i + 1), 'successMsgs', i);
	}
	$scope.setGethErrMsgLanguage = function() {
		globalFuncs.gethErrorMsgs = {};
		for (var s in globalFuncs.gethErrors) {
			var key = globalFuncs.gethErrors[s];
			if (key.indexOf("GETH_") === 0) {
				$scope.setLanguageVal(key,'gethErrorMsgs',key);
			}
		}
	}
	$scope.changeLanguage = function(key, value) {
		$translate.use(key);
		$scope.setErrorMsgLanguage();
		$scope.setGethErrMsgLanguage();
		$scope.curLang = value;
		$scope.setArrowVisibility();
		$scope.dropdown = false;
		localStorage.setItem("language", JSON.stringify({
			key: key,
			value: value
		}));
	};
	$scope.setLanguageFromStorage = function() {
		var lang = localStorage.getItem('language');
		if (lang == null) return;
		lang = JSON.parse(lang);
		var key = globalFuncs.stripTags(lang.key);
		var value = globalFuncs.stripTags(lang.value);
		$scope.changeLanguage(key, value);
	}
	$scope.setLanguageFromStorage();
	$scope.setHash = function(hash) {
		location.hash = hash;
		$scope.setTab(hash);
		$scope.$apply();
	}
	$scope.scrollHoverIn = function(isLeft, val) {
		clearInterval($scope.sHoverTimer);
		$scope.sHoverTimer = setInterval(function() {
			if (isLeft) $scope.scrollLeft(val);
			else $scope.scrollRight(val);
		}, 20);
	}
	$scope.scrollHoverOut = function() {
		clearInterval($scope.sHoverTimer);
	}
    $scope.setOnScrollArrows = function(){
        var ele = document.querySelectorAll(".nav-scroll")[0];
  		$scope.showLeftArrow = ele.scrollLeft > 0;
		$scope.showRightArrow = document.querySelectorAll(".nav-inner")[0].clientWidth > (ele.clientWidth + ele.scrollLeft);
        $scope.$apply();
    }
	$scope.scrollLeft = function(val) {
		var ele = document.querySelectorAll(".nav-scroll")[0];
		ele.scrollLeft -= val;
	}
	$scope.scrollRight = function(val) {
		var ele = document.querySelectorAll(".nav-scroll")[0];
		ele.scrollLeft += val;
	}
    angular.element(document.querySelectorAll(".nav-scroll")[0]).bind('scroll',$scope.setOnScrollArrows);
	globalFuncs.changeHash = $scope.setHash;
};
module.exports = tabsCtrl;
