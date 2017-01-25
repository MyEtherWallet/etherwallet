'use strict';
var addWalletCtrl = function($scope, $sce) {
	$scope.showBtnGen = $scope.showBtnUnlock = $scope.showBtnAdd = $scope.showBtnAddWallet = $scope.showAddWallet = $scope.requireFPass = $scope.requirePPass = $scope.showPassTxt = false;
	$scope.nickNames = [];
	$scope.filePassword = $scope.fileContent = "";
	$scope.wallet = null;
	$scope.addAccount = {
		address: "",
		nickName: "",
		encStr: "",
		password: ""
	};
	$scope.HDWallet = {
		numWallets: 0,
		walletsPerDialog: 5,
		wallets: [],
		id: 0,
		hdk: null,
		dPath: '',
		defaultDPath     : "m/44'/60'/0'/0", // first address: m/44'/60'/0'/0/0
		alternativeDPath : "m/44'/60'/0'", // first address: m/44'/60'/0'/0
		customDPath      : "m/44'/60'/1'/0"
	};
	$scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
	$scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
	$scope.onCustomHDDPathChange = function() {
		$scope.HDWallet.dPath = $scope.HDWallet.customDPath;
	}
	$scope.onPrivKeyChange = function() {
		$scope.addWalletStats = "";
		$scope.requirePPass = $scope.manualprivkey.length == 128 || $scope.manualprivkey.length == 132;
		$scope.showBtnUnlock = $scope.manualprivkey.length == 64;
	};
	$scope.onPrivKeyPassChange = function() {
		$scope.showBtnUnlock = $scope.privPassword.length > 6;
	};
	$scope.onMnemonicChange = function() {
		$scope.addWalletStats = "";
		$scope.showBtnUnlock = $scope.showDPaths = hd.bip39.validateMnemonic($scope.manualmnemonic);
	};
	$scope.showContent = function($fileContent) {
		$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name));
		try {
			$scope.requireFPass = Wallet.walletRequirePass($fileContent);
			$scope.showBtnUnlock = !$scope.requireFPass;
			$scope.fileContent = $fileContent;
		} catch (e) {
			$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	};
	$scope.openFileDialog = function($fileContent) {
		$scope.addWalletStats = "";
		document.getElementById('fselector').click();
	};
	$scope.onFilePassChange = function() {
		$scope.showBtnUnlock = $scope.filePassword.length > 1;
	};
	$scope.setHDAddresses = function(start, limit) {
		$scope.HDWallet.wallets = [];
		for (var i = start; i < start + limit; i++) {
			$scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive($scope.HDWallet.dPath + "/" + i)._privateKey));
			$scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
		}
		$scope.HDWallet.id = 0;
		$scope.HDWallet.numWallets = start + limit;
	}
	$scope.AddRemoveHDAddresses = function(isAdd) {
		if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
		else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
	}
	$scope.setHDWallet = function() {
		$scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
		$scope.mnemonicModel.close();
		$scope.addAccount.address = $scope.wallet.getAddressString();
		$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
		$scope.showAddWallet = true;
		$scope.showPassTxt = $scope.addAccount.password == '';
		$scope.setBalance();
	}
	$scope.decryptWallet = function() {
		$scope.wallet = null;
		$scope.addWalletStats = "";
		try {
			if ($scope.walletType == "pasteprivkey" && $scope.requirePPass) {
				$scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
				$scope.addAccount.password = $scope.privPassword;
			} else if ($scope.walletType == "pasteprivkey" && !$scope.requirePPass) {
				$scope.wallet = new Wallet($scope.manualprivkey);
				$scope.addAccount.password = '';
			} else if ($scope.walletType == "fileupload") {
				$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
				$scope.addAccount.password = $scope.filePassword;
			} else if ($scope.walletType == "pastemnemonic") {
				$scope.mnemonicModel.open();
				$scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim()));
				$scope.HDWallet.numWallets = 0;
				$scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
			}
		} catch (e) {
			$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6] + e));
		}
		if ($scope.wallet != null) {
			$scope.addAccount.address = $scope.wallet.getAddressString();
			$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
			$scope.showAddWallet = true;
			$scope.showPassTxt = $scope.addAccount.password == '';
			$scope.setBalance();
		}
	};
	$scope.setNickNames = function() {
		cxFuncs.getAllNickNames(function(nicks) {
			$scope.nickNames = nicks;
		});
	};
	$scope.setNickNames();
	$scope.newWalletChange = function(varStatus, shwbtn) {
		if ($scope.addAccount.nickName != "" && $scope.nickNames.indexOf($scope.addAccount.nickName) == -1 && $scope.addAccount.password.length > 8) $scope[shwbtn] = true;
		else $scope[shwbtn] = false;
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) $scope[varStatus] = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[13]));
		else $scope[varStatus] = "";
	}
	$scope.watchOnlyChange = function() {
		if ($scope.addAccount.address != "" && $scope.addAccount.nickName != "" && $scope.nickNames.indexOf($scope.addAccount.nickName) == -1 && ethFuncs.validateEtherAddress($scope.addAccount.address)) $scope.showBtnAdd = true;
		else $scope.showBtnAdd = false;
		if ($scope.addAccount.address != "" && !ethFuncs.validateEtherAddress($scope.addAccount.address)) $scope.watchOnlyStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		else if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) $scope.watchOnlyStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[13]));
		else $scope.watchOnlyStatus = "";
	}
	$scope.addWatchOnly = function() {
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) {
			$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[13]));
			return;
		} else if ($scope.nickNames.indexOf(ethUtil.toChecksumAddress($scope.addAccount.address)) !== -1) {
			$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[16]));
			return;
		}
		cxFuncs.addWatchOnlyAddress($scope.addAccount.address, $scope.addAccount.nickName, function() {
			if (chrome.runtime.lastError) {
				$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getDangerText(chrome.runtime.lastError.message));
			} else {
				$scope.addWalletStats = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[3] + $scope.addAccount.address));
				$scope.setNickNames();
			}
			$scope.$apply();
		});
	}
	$scope.isStrongPass = function(pass) {
		return pass.length > 3;
	}
	$scope.$watch('walletType', function() {
		$scope.showBtnGen = $scope.showBtnUnlock = $scope.showBtnAdd = $scope.showAddWallet = false;
		$scope.addNewNick = $scope.addNewPass = "";
		$scope.addWalletStats = "";
	});
	$scope.addWalletToStorage = function(status) {
		if ($scope.nickNames.indexOf($scope.addAccount.nickName) !== -1) {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[13]));
			return;
		} else if ($scope.nickNames.indexOf(ethUtil.toChecksumAddress($scope.addAccount.address)) !== -1) {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[16]));
			return;
		}
		cxFuncs.addWalletToStorage($scope.addAccount.address, $scope.addAccount.encStr, $scope.addAccount.nickName, function() {
			if (chrome.runtime.lastError) {
				$scope[status] = $sce.trustAsHtml(globalFuncs.getDangerText(chrome.runtime.lastError.message));
			} else {
				$scope[status] = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[3] + $scope.addAccount.address));
				$scope.setNickNames();
			}
			$scope.$apply();
		});
	}
	$scope.importWalletToStorage = function() {
		var wStr = $scope.wallet.toV3($scope.addAccount.password, {
			kdf: globalFuncs.kdf,
			n: globalFuncs.scrypt.n
		});
		$scope.addAccount.encStr = JSON.stringify(wStr);
		$scope.addWalletToStorage('addStatus');
	}
	$scope.generateWallet = function() {
		var wallet = Wallet.generate(false);
		var wStr = wallet.toV3($scope.addAccount.password, {
			kdf: globalFuncs.kdf,
			n: globalFuncs.scrypt.n
		});
		$scope.addAccount.encStr = JSON.stringify(wStr);
		$scope.addAccount.address = wallet.getAddressString();
		$scope.addWalletToStorage('addWalletStats');
	}
	$scope.setBalance = function() {
		ajaxReq.getBalance($scope.wallet.getAddressString(), function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.etherBalance = etherUnits.toEther(data.data.balance, 'wei');
				ajaxReq.getETHvalue(function(data) {
					$scope.usdBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.usd);
					$scope.eurBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.eur);
					$scope.btcBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.btc);
				});
			}
		});
	}
};
module.exports = addWalletCtrl;
