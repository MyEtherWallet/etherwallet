'use strict';
var tabsCtrl = function($scope, globalService, $translate, $sce) {
  $scope.gService = globalService;
  $scope.tabNames = $scope.gService.tabs;
  $scope.curLang = 'English';
  $scope.customNodeModal = document.getElementById('customNodeModal') ? new Modal(document.getElementById('customNodeModal')) : null;
  $scope.Validator = Validator;
  $scope.nodeList = nodes.nodeList;
  $scope.defaultNodeKey = 'eth_mew';
  $scope.customNode = {
    options: 'eth',
    name: '',
    url: '',
    port: '',
    httpBasicAuth: null,
    eip155: false,
    chainId: ''
  };
  $scope.customNodeCount = 0;
  $scope.nodeIsConnected = true;
  $scope.gasPriceMsg = false;
  $scope.browserProtocol = window.location.protocol;
  var hval = window.location.hash;
  $scope.notifier = uiFuncs.notifier;
  $scope.notifier.sce = $sce;
  $scope.notifier.scope = $scope;
  $scope.ajaxReq = ajaxReq;
  $scope.nodeType = $scope.ajaxReq.type;
  $scope.nodeService = $scope.ajaxReq.service;
  $scope.$watch('ajaxReq.type', function() { $scope.nodeType = $scope.ajaxReq.type; });
  $scope.$watch('ajaxReq.service', function() { $scope.nodeService = $scope.ajaxReq.service; });
  $scope.setArrowVisibility = function() {
    setTimeout(function() {
      if (document.querySelectorAll('.nav-inner')[0] && document.querySelectorAll('.nav-scroll')[0]) {
        $scope.showLeftArrow = false;
        $scope.showRightArrow = !(document.querySelectorAll('.nav-inner')[0].clientWidth <= document.querySelectorAll('.nav-scroll')[0].clientWidth);
        $scope.$apply();
      }
    }, 200);
  };
  $scope.setArrowVisibility();

  var gasPriceKey = 'gasPrice';
  $scope.gasChanged = function() {
    globalFuncs.localStorage.setItem(gasPriceKey, $scope.gas.value);
    ethFuncs.gasAdjustment = $scope.gas.value;
    $scope.gasPriceMsg = ethFuncs.gasAdjustment < 41 ? true : false;
  };
  var setGasValues = function() {
    $scope.gas = {
      curVal: 41,
      value: globalFuncs.localStorage.getItem(gasPriceKey, null) ? parseInt(globalFuncs.localStorage.getItem(gasPriceKey)) : 41,
      max: 99,
      min: 1,
      step: 1
    };

    var curNode = globalFuncs.localStorage.getItem('curNode', null);

    ethFuncs.gasAdjustment = $scope.gas.value;
    $scope.gasPriceMsg = ethFuncs.gasAdjustment < 41 ? true : false;
  };
  setGasValues();
  $scope.gasChanged();

  function makeNewNode(key) {
    var curNode;
    if ($scope.nodeList[key]) {
      curNode = $scope.nodeList[key];
    } else {
      curNode = $scope.nodeList[$scope.defaultNodeKey];
    }
    return curNode;
  }

  var networkHasChanged = false;
  $scope.changeNode = function(key) {
    var newNode = makeNewNode(key);
    if (!$scope.curNode) {
      networkHasChanged = false;
      $scope.curNode = newNode;
    } else {
      if ($scope.curNode.type !== newNode.type) {
        networkHasChanged = true;
      } else {
        networkHasChanged = false;
      }
      $scope.curNode = newNode;
    }

    $scope.dropdownNode = false;
    Token.popTokens = $scope.curNode.tokenList;
    ajaxReq['key'] = key;
    for (var attrname in $scope.curNode.lib) ajaxReq[attrname] = $scope.curNode.lib[attrname];
    for (var attrname in $scope.curNode)
      if (attrname != 'name' && attrname != 'tokenList' && attrname != 'lib')
        ajaxReq[attrname] = $scope.curNode[attrname];
    globalFuncs.localStorage.setItem('curNode', JSON.stringify({
      key: key
    }));
    if (nodes.ensNodeTypes.indexOf($scope.curNode.type) == -1) $scope.tabNames.ens.cx = $scope.tabNames.ens.mew = false;
    if (nodes.domainsaleNodeTypes.indexOf($scope.curNode.type) == -1) $scope.tabNames.domainsale.cx = $scope.tabNames.domainsale.mew = false;
    else $scope.tabNames.ens.cx = $scope.tabNames.ens.mew = true;
    ajaxReq.getCurrentBlock(function(data) {
      if (data.error) {
        $scope.nodeIsConnected = false;
        $scope.notifier.danger(globalFuncs.errorMsgs[32]);
      } else {
        $scope.nodeIsConnected = true;
        $scope.notifier.info(globalFuncs.successMsgs[5] + '<br /> URL: <strong>' + globalFuncs.stripTags(window.location.href) + '</strong> <br /> Network: <strong>' + $scope.nodeType + ' </strong> provided by <strong>' + $scope.nodeService + '</strong>', 10000);
      }
    });
    networkHasChanged && window.setTimeout(function() {
      if (window.location.search.length > 0) {
        window.location = window.location.href.replace(window.location.search, '');
      } else {
        window.location.reload();
      }

    }, 250);
  };
  $scope.checkNodeUrl = function(nodeUrl) {
    return $scope.Validator.isValidURL(nodeUrl);
  };
  $scope.setCurNodeFromStorage = function() {
    var node = globalFuncs.localStorage.getItem('curNode', null);
    if (node === JSON.stringify({'key': 'eth_metamask'})) {
      node = JSON.stringify({'key': 'eth_infura'});
    }

    var requestedNetwork = globalFuncs.urlGet('network');
    if (requestedNetwork && nodes.nodeList.hasOwnProperty(requestedNetwork)) {
      node = JSON.stringify({'key': requestedNetwork});
    }

    if (node == null) {
      $scope.changeNode($scope.defaultNodeKey);
    } else {
      node = JSON.parse(node);
      var key = globalFuncs.stripTags(node.key);
      $scope.changeNode(key);
    }
  };
  $scope.addCustomNodeToList = function(nodeInfo) {
    var tempObj = null;
    if (nodeInfo.options == 'eth') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.eth_ethscan));
    else if (nodeInfo.options == 'etc') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.etc_epool));
    else if (nodeInfo.options == 'rop') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.rop_mew));
    else if (nodeInfo.options == 'kov') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.kov_ethscan));
    else if (nodeInfo.options == 'rin') tempObj = JSON.parse(JSON.stringify(nodes.nodeList.rin_ethscan));
    else if (nodeInfo.options == 'cus') {
      tempObj = JSON.parse(JSON.stringify(nodes.customNodeObj));
      tempObj.eip155 = nodeInfo.eip155;
      tempObj.chainId = parseInt(nodeInfo.chainId);
    }
    if (tempObj) {
      tempObj.name = nodeInfo.name + ':' + nodeInfo.options;
      tempObj.service = 'Custom';
      tempObj.lib = new nodes.customNode(nodeInfo.url, nodeInfo.port, nodeInfo.httpBasicAuth);
      $scope.nodeList['cus_' + nodeInfo.options + '_' + $scope.customNodeCount] = tempObj;
      $scope.customNodeCount++;
    }
  };
  $scope.getCustomNodesFromStorage = function() {
    for (var key in $scope.nodeList) {
      if (key.indexOf('cus_') != -1) delete $scope.nodeList[key];
    }
    var localNodes = globalFuncs.localStorage.getItem('localNodes', null);
    if (localNodes) {
      localNodes = JSON.parse(localNodes);
      for (var i = 0; i < localNodes.length; i++) $scope.addCustomNodeToList(localNodes[i]);
    }
  };
  $scope.getCustomNodesFromStorage();
  $scope.setCurNodeFromStorage();

  $scope.saveCustomNode = function() {
    try {
      if (!$scope.Validator.isAlphaNumericSpace($scope.customNode.name)) throw globalFuncs.errorMsgs[22];
      else if (!$scope.checkNodeUrl($scope.customNode.url)) throw globalFuncs.errorMsgs[23];
      else if (!$scope.Validator.isPositiveNumber($scope.customNode.port) && $scope.customNode.port != '') throw globalFuncs.errorMsgs[24];
      else if ($scope.customNode.eip155 && !$scope.Validator.isPositiveNumber($scope.customNode.chainId)) throw globalFuncs.errorMsgs[25];
      else if ($scope.customNode.httpBasicAuth && ($scope.customNode.httpBasicAuth.user == '' || $scope.customNode.httpBasicAuth.password == '')) throw globalFuncs.errorMsgs[29];
    } catch (e) {
      $scope.notifier.danger(e);
      return;
    }
    var customNode = $scope.customNode;
    var localNodes = globalFuncs.localStorage.getItem('localNodes', null);
    localNodes = !localNodes ? [] : JSON.parse(localNodes);
    localNodes.push(customNode);
    $scope.addCustomNodeToList(customNode);
    $scope.changeNode('cus_' + customNode.options + '_' + ($scope.customNodeCount - 1));
    globalFuncs.localStorage.setItem('localNodes', JSON.stringify(localNodes));
    $scope.customNodeModal.close();
    $scope.customNode = {
      options: 'eth',
      name: '',
      url: '',
      port: '',
      httpBasicAuth: null,
      eip155: false,
      chainId: ''
    };
  };

  $scope.removeNodeFromLocal = function(localNodeName) {
    var localNodes = globalFuncs.localStorage.getItem('localNodes', null);
    localNodes = !localNodes ? [] : JSON.parse(localNodes);
    for (var i = 0; i < localNodes.length; i++) {
      if (localNodes[i].name + ':' + localNodes[i].options == localNodeName) localNodes.splice(i, 1);
    }
    globalFuncs.localStorage.setItem('localNodes', JSON.stringify(localNodes));
    $scope.getCustomNodesFromStorage();
    $scope.setCurNodeFromStorage();
  };

  $scope.setTab = function(hval) {
    if (hval != '') {
      hval = hval.replace('#', '');
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
  };
  $scope.setTab(hval);

  $scope.tabClick = function(id) {
    // $scope.MEWconnectActive = false;
    // $scope.newTabOpenedMEWconnect();
    globalService.tokensLoaded = false;
    $scope.activeTab = globalService.currentTab = id;
    for (var key in $scope.tabNames) {
      if ($scope.tabNames[key].id == id) location.hash = $scope.tabNames[key].url;
    }
  };

  $scope.setLanguageVal = function(id, varName, pos) {
    $translate(id).then(function(paragraph) {
      globalFuncs[varName][pos] = paragraph;
    }, function(translationId) {
      globalFuncs[varName][pos] = translationId;
    });
  };

  $scope.setErrorMsgLanguage = function() {
    for (var i = 0; i < globalFuncs.errorMsgs.length; i++) $scope.setLanguageVal('ERROR_' + i, 'errorMsgs', i);
    for (var i = 0; i < globalFuncs.successMsgs.length; i++) $scope.setLanguageVal('SUCCESS_' + (i + 1), 'successMsgs', i);
    for (var i = 0; i < globalFuncs.phishingWarning.length; i++) $scope.setLanguageVal('PHISHING_Warning_' + (i + 1), 'phishingWarning', i);
  };

  $scope.setGethErrMsgLanguage = function() {
    globalFuncs.gethErrorMsgs = {};
    for (var s in globalFuncs.gethErrors) {
      var key = globalFuncs.gethErrors[s];
      if (key.indexOf('GETH_') === 0) {
        $scope.setLanguageVal(key, 'gethErrorMsgs', key);
      }
    }
  };

  $scope.setParityErrMsgLanguage = function() {
    globalFuncs.parityErrorMsgs = {};
    for (var s in globalFuncs.parityErrors) {
      var key = globalFuncs.parityErrors[s];
      if (key.indexOf('PARITY_') === 0 || key.indexOf('ERROR_17') === 0) {
        $scope.setLanguageVal(key, 'parityErrorMsgs', key);
      }
    }
  };

  $scope.changeLanguage = function(key, value) {
    $translate.use(key);
    $scope.setErrorMsgLanguage();
    if (globalFuncs.getEthNodeName() == 'geth')
      $scope.setGethErrMsgLanguage();
    else
      $scope.setParityErrMsgLanguage();
    $scope.curLang = value;
    $scope.setArrowVisibility();
    $scope.dropdown = false;
    globalFuncs.localStorage.setItem('language', JSON.stringify({
      key: key,
      value: value
    }));
    globalFuncs.curLang = key;
  };
  $scope.setLanguageFromStorage = function() {
    var lang = globalFuncs.localStorage.getItem('language', null);
    if (lang == null) lang = '{"key":"en","value":"English"}';
    lang = JSON.parse(lang);
    var key = globalFuncs.stripTags(lang.key);
    var value = globalFuncs.stripTags(lang.value);
    $scope.changeLanguage(key, value);
  };
  $scope.setLanguageFromStorage();

  $scope.setHash = function(hash) {
    location.hash = hash;
    $scope.setTab(hash);
    $scope.$apply();
  };

  $scope.scrollHoverIn = function(isLeft, val) {
    clearInterval($scope.sHoverTimer);
    $scope.sHoverTimer = setInterval(function() {
      if (isLeft) $scope.scrollLeft(val);
      else $scope.scrollRight(val);
    }, 20);
  };

  $scope.scrollHoverOut = function() {
    clearInterval($scope.sHoverTimer);
  };

  $scope.setOnScrollArrows = function() {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    $scope.showLeftArrow = ele.scrollLeft > 0;
    $scope.showRightArrow = document.querySelectorAll('.nav-inner')[0].clientWidth > (ele.clientWidth + ele.scrollLeft);
    $scope.$apply();
  };

  $scope.scrollLeft = function(val) {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    ele.scrollLeft -= val;
  };

  $scope.scrollRight = function(val) {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    ele.scrollLeft += val;
  };

  angular.element(document.querySelectorAll('.nav-scroll')[0]).bind('scroll', $scope.setOnScrollArrows);
  globalFuncs.changeHash = $scope.setHash;

  $scope.displayMEWconnectState = function(state) {
    $scope.MEWconnectState = state;
  };

  $scope.newTabOpenedMEWconnect = function(show) {
    $scope.MEWconnectActive = show;
  };

  globalFuncs.MEWconnectStatus.registerNewTabOpener($scope.newTabOpenedMEWconnect.bind(this));
  globalFuncs.MEWconnectStatus.register($scope.displayMEWconnectState.bind(this));
};
module.exports = tabsCtrl;
