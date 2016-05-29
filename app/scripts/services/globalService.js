'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
    globalFuncs.checkAndRedirectHTTPS();
    ajaxReq.http = $http;
    ajaxReq.postSerializer = $httpParamSerializerJQLike;

  var tabs = {
    generateWallet: {
      id: 0,
      name: "Generate Wallet",
      url: "generate-wallet",
      mew: true,
      cx: false
    },
    bulkGenerate: {
      id: 1,
      name: "Bulk Generate",
      url: "bulk-generate",
      mew: false,
      cx: false
    },
    viewWalletInfo: {
      id: 2,
      name: "View Wallet Info",
      url: "view-wallet-info",
      mew: true,
      cx: false
    },
    myWallet: {
      id: 3,
      name: "My Wallets",
      url: "my-wallet",
      mew: false,
      cx: true
    },
    addWallet: {
      id: 4,
      name: "Add Wallet",
      url: "add-wallet",
      mew: false,
      cx: true
    },
    sendTransaction: {
      id: 5,
      name: "Send Transaction",
      url: "send-transaction",
      mew: true,
      cx: true
    },
    offlineTransaction: {
      id: 6,
      name: "Offline Transaction",
      url:"offline-transaction",
      mew: true,
      cx: false
    },
    dao: {
      id: 7,
      name: "The DAO",
      url: "the-dao",
      mew: true,
      cx: true
    },
    daoproposals: {
      id: 8,
      name: "DAO Proposals",
      url: "dao-proposals",
      mew: true,
      cx: true
    },
    digix: {
      id: 9,
      name: "Digix",
      url: "digix",
      mew: true,
      cx: true
    },
    contracts: {
      id: 10,
      name: "Contracts",
      url:"contracts",
      mew: false,
      cx: false
    },
    help: {
      id: 11,
      name: "Help",
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


