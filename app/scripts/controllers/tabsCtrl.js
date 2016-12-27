'use strict';
var tabsCtrl = function($scope, globalService, $translate) {
  $scope.tabNames = globalService.tabs;
  $scope.curLang = 'English';
  $scope.customNodeModal = new Modal(document.getElementById('customNodeModal'));
  $scope.customNodeModal.open();
  $scope.tokenFiles = {
    'eth' : 'tokens-eth.js',
    'etc' : 'tokens-etc.js',
    'rop' : 'tokens-rop.js',
  }
  $scope.node = [{
      'eth_mew' : {
        'name'        : 'ETH',
        'eip155'      : true,
        'chainId'     : '1',
        'tokenList'   : $scope.tokenFiles.eth,
        'estimateGas' : true,
        'service'     : 'MyEtherWallet',
        'url'         : '',
        'port'        : ''
      },
      'etc_mew' : {
        'name'        : 'ETC',
        'eip155'      : false,
        'chainId'     : false,
        'tokenList'   : $scope.tokenFiles.etc,
        'estimateGas' : true,
        'service'     : 'MyEtherWallet',
        'url'         : '',
        'port'        : ''
      },
      'tst_mew' : {
        'name'        : 'Ropsten',
        'eip155'      : true,
        'chainId'     : '3',
        'tokenList'   : $scope.tokenFiles.rop,
        'estimateGas' : true,
        'service'     : 'MyEtherWallet',
        'url'         : '',
        'port'        : ''
      },
      'eth_ethscan' : {
        'name'        : 'ETH',
        'eip155'      : true,
        'chainId'     : '1',
        'tokenList'   : $scope.tokenFiles.eth,
        'estimateGas' : false,
        'service'     : 'Etherscan.io',
        'url'         : '',
        'port'        : ''
      }
  }];
  $scope.curNodeKey = 'eth_mew';
  $scope.curNode = $scope.node.eth_mew;

  $scope.customNode = [];

  var hval = window.location.hash;

  $scope.setArrowVisibility = function() {
    setTimeout(function() {
      $scope.showLeftArrow = false;
      $scope.showRightArrow = !(document.querySelectorAll('.nav-inner')[0].clientWidth <= document.querySelectorAll('.nav-scroll')[0].clientWidth);
      $scope.$apply();
    }, 200);
  }
  $scope.setArrowVisibility();

  $scope.changeNode = function(key) {
    $scope.curNode = $scope.node[key];
    $scope.dropdownNode = false;
    localStorage.setItem('curNode', JSON.stringify({
      key: key
    }));
  }


  $scope.setCurNodeFromStorage = function() {
    var node = localStorage.getItem('curNode');
    if (node == null) {
      $scope.changeNode($scope.curNodeKey);
    } else {
      node = JSON.parse(node);
      var key = globalFuncs.stripTags(node.key);
      if ($scope.node.indexOf(key) > -1) {
        $scope.changeNode(key);
      } else {
        $scope.changeNode($scope.curNodeKey);
      }
    }
  }
  $scope.setCurNodeFromStorage();


  $scope.saveCustomNodesFromStorage = function() {
    var localNodes = localStorage.getItem('localNodes');
    if (localNodes != null) {
      localNodes = JSON.parse(localNodes)
      alert(localNodes);
      $scope.node.push( localNodes );
    }
  }
  $scope.saveCustomNodesFromStorage();


  $scope.saveCustomNode = function() {
    var customNode = $scope.customNode;
    if(customNode.options == 'eth') {
      customNode.eip155 = true;
      customNode.chainId = '1';
      customNode.tokenList = $scope.tokenFiles.eth;
    } else if(customNode.options == 'etc') {
      customNode.eip155 = false;
      customNode.chainId = false;
      customNode.tokenList = $scope.tokenFiles.etc;
    }
    var d = new Date();
    var localNodeIndex = 'custom' + d.getTime();

    var localNodes = localStorage.getItem('localNodes');
    if (localNodes == null) {
      localNodes = [];
    } else {
      localNodes = JSON.parse(localNodes)
    }

    var newNode = {
      localNodeIndex : {
        'name'        : customNode.name,
        'eip155'      : customNode.eip155,
        'chainId'     : customNode.chainId,
        'tokenList'   : customNode.tokenList,
        'estimateGas' : customNode.estimateGas,
        'service'     : customNode.service,
        'url'         : customNode.url,
        'port'        : customNode.port,
        'options'     : customNode.options
      }
    };
    localNodes.push( newNode );
    localStorage.setItem("localTokens", JSON.stringify(localNodes));
    $scope.node.push( localNodes );

    localStorage.setItem('curNode', JSON.stringify({
      key: localNodeIndex
    }));

  }

  $scope.removeNodeFromLocal = function(localNodeIndex) {
    var localNodes = localStorage.getItem('localNodes');
    if (localNodes != null) {
      localNodes = JSON.parse(localNodes)
    } else {
      localNodes = [];
    }

    if (localNodes.indexOf(localNodeIndex) > -1) {
      localNodes.splice(index, 1);
    }
    localStorage.setItem('localNodes', JSON.stringify( localNodes ));
  }



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
  }
  $scope.setTab(hval);

  $scope.tabClick = function(id) {
    $scope.activeTab = globalService.currentTab = id;
    for (var key in $scope.tabNames) {
      if ($scope.tabNames[key].id == id) location.hash = $scope.tabNames[key].url;
    }
  }

  $scope.setLanguageVal = function(id, varName, pos) {
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
      if (key.indexOf('GETH_') === 0) {
        $scope.setLanguageVal(key, 'gethErrorMsgs', key);
      }
    }
  }

  $scope.setParityErrMsgLanguage = function() {
    globalFuncs.parityErrorMsgs = {};
    for (var s in globalFuncs.parityErrors) {
      var key = globalFuncs.parityErrors[s];
      if (key.indexOf('PARITY_') === 0) {
        $scope.setLanguageVal(key, 'parityErrorMsgs', key);
      }
    }
  }

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
    localStorage.setItem('language', JSON.stringify({
      key: key,
      value: value
    }));
  }
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

  $scope.setOnScrollArrows = function() {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    $scope.showLeftArrow = ele.scrollLeft > 0;
    $scope.showRightArrow = document.querySelectorAll('.nav-inner')[0].clientWidth > (ele.clientWidth + ele.scrollLeft);
    $scope.$apply();
  }

  $scope.scrollLeft = function(val) {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    ele.scrollLeft -= val;
  }

  $scope.scrollRight = function(val) {
    var ele = document.querySelectorAll('.nav-scroll')[0];
    ele.scrollLeft += val;
  }

  angular.element(document.querySelectorAll('.nav-scroll')[0]).bind('scroll', $scope.setOnScrollArrows);
  globalFuncs.changeHash = $scope.setHash;

};
module.exports = tabsCtrl;
