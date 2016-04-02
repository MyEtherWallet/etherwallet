'use strict';
var globalService = function() {
	var tabs = {
		generateWallet: {
			id: 0,
			name: "Generate Wallet"
		},
		bulkGenerate: {
			id: 1,
			name: "Bulk Generate"
		},
		viewWalletInfo: {
			id: 2,
			name: "View Wallet Details"
		},
		sendTransaction: {
			id: 3,
			name: "Send Transaction"
		},
		offlineTransaction: {
			id: 4,
			name: "Advanced / Offline Transaction"
		},
		help: {
			id: 5,
			name: "Help"
		},
		contact: {
			id: 6,
			name: "Contact"
		}
	};
	return {
		tabs: tabs,
		currentTab: 0
	};
};
module.exports = globalService;