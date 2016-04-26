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
    viewWalletInfo: {
      id: 1,
      name: "View Wallet Info",
            url: "view-wallet-info"
    },
    sendTransaction: {
      id: 2,
      name: "Send Transaction",
            url: "send-transaction"
    },
    offlineTransaction: {
      id: 3,
      name: "Offline Transaction",
            url:"offline-transaction"
    },
    contracts: {
      id: 4,
      name: "Contracts",
            url: "contracts"
    },
    slockitDAO: {
      id: 5,
      name: "Slock.it DAO",
            url: "slockit-dao"
    },
    digix: {
      id: 6,
      name: "Digix",
            url: "digix"
    },
    help: {
      id: 7,
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
