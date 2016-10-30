'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
    globalFuncs.checkAndRedirectHTTPS();
    ajaxReq.http = $http;
    ajaxReq.postSerializer = $httpParamSerializerJQLike;

  var tabs = {
    generateWallet: {
      id: 0,
      name: "NAV_GenerateWallet",
      url: "generate-wallet",
      mew: true,
      cx: false,
    },
    bulkGenerate: {
      id: 1,
      name: "NAV_BulkGenerate",
      url: "bulk-generate",
      mew: false,
      cx: false
    },
    myWallet: {
      id: 2,
      name: "NAV_MyWallets",
      url: "my-wallet",
      mew: false,
      cx: true
    },
    addWallet: {
      id: 3,
      name: "NAV_AddWallet",
      url: "add-wallet",
      mew: false,
      cx: true
    },
    sendTransaction: {
      id: 4,
      name: "NAV_SendEther",
      url: "send-transaction",
      mew: true,
      cx: true
    },
    offlineTransaction: {
      id: 5,
      name: "NAV_Offline",
      url:"offline-transaction",
      mew: true,
      cx: false
    },
    dao: {
      id: 6,
      name: "NAV_WithdrawDAO",
      url: "the-dao",
      mew: true,
      cx: true
    },
    digix: {
      id: 7,
      name: "NAV_ClaimDGD",
      url: "digix",
      mew: true,
      cx: true
    },
    deployContract: {
      id: 8,
      name: "NAV_DeployContract",
      url: "deploy-contract",
      mew: true,
      cx: true
    },
    viewWalletInfo: {
      id: 9,
      name: "NAV_ViewWallet",
      url: "view-wallet-info",
      mew: true,
      cx: false
    },
    help: {
      id: 10,
      name: "NAV_Help",
      url: "help",
      mew: true,
      cx: true
    }
  };
  var currentTab = 0;
  if(typeof chrome != 'undefined')
    currentTab = chrome.windows === undefined ? 0 : 3;
  return {
    tabs: tabs,
    currentTab: currentTab
  };
};
module.exports = globalService;


