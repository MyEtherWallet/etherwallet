'use strict';
var angular = require('angular'); 
var ethUtil = require('ethereumjs-util');
ethUtil.crypto = require('crypto');
ethUtil.Tx = require('ethereumjs-tx');
window.ethUtil = ethUtil;
var Wallet = require('./myetherwallet');
window.Wallet = Wallet;
var globalFuncs = require('./globalFuncs');
window.globalFuncs = globalFuncs;

var tabsCtrl = require('./controllers/tabsCtrl');
var viewCtrl = require('./controllers/viewCtrl');
var walletGenCtrl = require('./controllers/walletGenCtrl');
var globalService = require('./services/globalService');
var blockiesDrtv = require('./directives/blockiesDrtv');

var app = angular.module('mewApp', []);
app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
}]);
app.factory('globalService', globalService);
app.directive('blockieAddress', blockiesDrtv);
app.controller('tabsCtrl', ['$scope','globalService', tabsCtrl]);
app.controller('viewCtrl', ['$scope','globalService', viewCtrl]);
app.controller('walletGenCtrl', ['$scope', walletGenCtrl]);