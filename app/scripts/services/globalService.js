'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
    ajaxReq.http = $http;
    ajaxReq.postSerializer = $httpParamSerializerJQLike;

  var tabs = {
    generateWallet: {
      id: 0,
      name: "Generate Wallet",
      url: "generate-wallet"
    },
    bulkGenerate: {
      id: 1,
      name: "Bulk Generate",
      url: "bulk-generate"
    },
    myWallet: {
      id: 2,
      name: "My Wallets",
      url: "my-wallet"
    },
    addWallet: {
      id: 3,
      name: "Add Wallet",
      url: "add-wallet"
    },
    viewWalletInfo: {
      id: 4,
      name: "View Wallet Info",
      url: "view-wallet-info"
    },
    sendTransaction: {
      id: 5,
      name: "Send Transaction",
      url: "send-transaction"
    },
    offlineTransaction: {
      id: 6,
      name: "Offline Transaction",
      url:"offline-transaction"
    },
    contracts: {
      id: 7,
      name: "Contracts",
      url:"contracts"
    },
    thedao: {
      id: 8,
      name: "\"The DAO\"",
      url: "the-dao"
    },
    digix: {
      id: 9,
      name: "Digix",
      url: "digix"
    },
    help: {
      id: 10,
      name: "Help",
      url: "help"
    }
  };

  return {
    tabs: tabs,
    currentTab: 0
  };
};
module.exports = globalService;


