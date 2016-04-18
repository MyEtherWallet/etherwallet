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
			name: "View Wallet Details",
            url: "view-wallet-info"
		},
		sendTransaction: {
			id: 3,
			name: "Send Transaction",
            url: "send-transaction"
		},
		offlineTransaction: {
			id: 4,
			name: "Advanced / Offline Transaction",
            url:"offline-transaction"
		},
		help: {
			id: 5,
			name: "Help",
            url: "help"
		},
		contact: {
			id: 6,
			name: "Contact",
            url: "contact"
		}
	};
	return {
		tabs: tabs,
		currentTab: 0
	};
};
module.exports = globalService;