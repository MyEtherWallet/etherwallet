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
    viewWalletInfo: {
      id: 2,
      name: "View Wallet Info",
            url: "view-wallet-info"
    },
    sendTransaction: {
      id: 3,
      name: "Send Transaction",
            url: "send-transaction"
    },
    offlineTransaction: {
      id: 4,
      name: "Offline Transaction",
            url:"offline-transaction"
    },
//    thedao: {
//      id: 5,
//      name: "\"The DAO\"",
//            url: "the-dao"
//    },
    digix: {
      id: 5,
      name: "Digix",
            url: "digix"
    },
//    contracts: {
//      id: 7,
//      name: "Contracts",
//            url: "contracts"
//    },
    help: {
      id: 6,
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
