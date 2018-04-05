"use strict";
var myWalletsCtrl = function($scope, $sce, $timeout, walletService) {
	$scope.editModal = new Modal(document.getElementById("editWallet"));
	$scope.viewModal = new Modal(document.getElementById("viewWalletDetails"));
	$scope.removeModal = new Modal(document.getElementById("removeWallet"));
	$scope.tokens = Token.popTokens;
	$scope.currentPagination = 25;
	$scope.currentIndex = 0;
	$scope.tokensShown = $scope.tokens.slice(
		$scope.currentIndex,
		$scope.currentPagination
	);

	$scope.qtyPerPage = 25;

	$scope.walletsContainer = document.getElementById("walletsContainer");
	$scope.sideBarTokens = document.getElementById("sideBarTokens");

  $scope.loadingTokens = false;

	$scope.allWallets = [];
	$scope.allWatchOnly = [];
	$scope.nickNames = [];
	$scope.fiatVal = {
		usd: 0,
		eur: 0,
		btc: 0
	};

	$scope.viewWallet = {};
	$scope.ajaxReq = ajaxReq;
	$scope.setNickNames = function() {
		cxFuncs.getAllNickNames(function(nicks) {
			$scope.nickNames = nicks;
		});
	};

	$scope.getLocalTokens = function() {
		cxFuncs.getLocalTokens(function(tokens) {
			if (tokens["localTokens"] === undefined) {
				cxFuncs.setLocalTokens();
				$scope.localTokens = [];
			} else {
				$scope.localTokens = tokens["localTokens"];
			}
		});
	};

	$scope.copy = function(addr) {
		const copyElm = document.createElement("textarea");
		const body = document.getElementsByTagName("body")[0];
		copyElm.style.position = "fixed";
		copyElm.style.opacity = 0;
		copyElm.textContent = addr;
		body.appendChild(copyElm);
		copyElm.select();
		document.execCommand("copy");
		body.removeChild(copyElm);
	};

	function scrollContent () {
		$scope.loadingTokens = true;
		const loadTokens = $timeout(function(){
			$scope.nextPage($scope.qtyPerPage);
		}, 500);
		$scope.loadTokens = false;
	}

	angular.element(function() {
		angular.element($scope.sideBarTokens).bind("scroll", function(e) {
			if(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
				scrollContent();
				$scope.$apply();
			}
		});
	});

	// Update height when height is changed and keep watching height
	$scope.$watch('walletsContainer.clientHeight', function() {
		if($scope.allWatchOnly.length !== 0) {
			angular.element($scope.sideBarTokens).css('maxHeight', (($scope.walletsContainer.clientHeight - 167.200) + 'px'));
		} else {
			angular.element($scope.sideBarTokens).css('maxHeight', (($scope.walletsContainer.clientHeight - 237) + 'px'));
		}
	});

	// Only check if scroll exists once
	const checkForScroll = $scope.$watch('sideBarTokens.scrollHeight', function() {
		if($scope.sideBarTokens.scrollHeight === $scope.sideBarTokens.clientHeight) {
			scrollContent();
		}
		checkForScroll();
	});

	$scope.nextPage = currentIndex => {
		$scope.currentIndex += currentIndex;
		$scope.currentPagination += currentIndex;
		$scope.tokens
			.slice($scope.currentIndex, $scope.currentPagination)
			.forEach(item => {
				$scope.tokensShown.push(item);
			});
	};

	$scope.checkIfExists = arr => {
		return typeof arr === "object";
	};

	$scope.checkIfAdded = token => {
		if ($scope.localTokens && $scope.localTokens.length === 0) {
			return false;
		} else if ($scope.localTokens && $scope.localTokens.length > 0) {
			for (let i = 0; i <= $scope.localTokens.length; i++) {
				if (
					$scope.localTokens.find(function(item) {
						return item.address === token.address;
					}) === undefined
				) {
					return false;
				} else {
					return true;
				}
			}
		}
	};

	$scope.addTokenToLocal = token => {
		if ($scope.localTokens.length === 0) {
			$scope.localTokens.push(token);
		} else {
			if (
				!!$scope.localTokens.find(function(item) {
					return item.address === token.address;
				}) === false
			) {
				$scope.localTokens.push(token);
			}
		}

		chrome.storage.sync.set({ localTokens: $scope.localTokens });
		$scope.setTokens("allWallets");
		$scope.setTokens("allWatchOnly");
	};

	$scope.removeTokenLocal = token => {
		let tokenToRemove = $scope.localTokens.findIndex(locTk => {
			return (
				locTk.address.toLowerCase() === token.address.toLowerCase() &&
				locTk.symbol === token.symbol
			);
		});

		$scope.localTokens.splice(tokenToRemove, 1);
		chrome.storage.sync.set({ localTokens: $scope.localTokens });
		$scope.setTokens("allWallets");
		$scope.setTokens("allWatchOnly");
	};

	$scope.setAllWallets = function() {
		cxFuncs.getWalletsArr(function(wlts) {
			$scope.allWallets = wlts;

			$scope.updateBalance("allWallets");
			$scope.setTokens("allWallets");
		});

		cxFuncs.getWatchOnlyArr(function(wlts) {
			$scope.allWatchOnly = wlts;

			$scope.updateBalance("allWatchOnly");
			$scope.setTokens("allWatchOnly");
		});
	};

	$scope.$watch("ajaxReq.key", function() {
		if ($scope.allWallets) {
			$scope.updateBalance("allWallets");
			$scope.setTokens("allWallets");
		}
		if ($scope.allWatchOnly) {
			$scope.updateBalance("allWatchOnly");
			$scope.setTokens("allWatchOnly");
		}
	});

	$scope.setTokens = function(varWal) {
		for (var j = 0; j < $scope[varWal].length; j++) {
			$scope[varWal][j].tokens = [];
			for (var i = 0; i < $scope.localTokens.length; i++) {
				$scope[varWal][j].tokens.push(
					new Token(
						$scope.localTokens[i].address,
						$scope[varWal][j].addr,
						$scope.localTokens[i].symbol,
						$scope.localTokens[i].decimal
					)
				);
				$scope[varWal][j].tokens[
					$scope[varWal][j].tokens.length - 1
				].setBalance();
			}
		}
	};

	$scope.updateBalance = function(varWal) {
		for (var i = 0; i < $scope[varWal].length; i++) {
			$scope.setBalance($scope[varWal][i].addr, i, varWal);
		}
	};

	$scope.setBalance = function(address, id, varWal) {
		ajaxReq.getBalance(address, function(data) {
			if (data.error) {
				$scope[varWal][id].balance = data.msg;
			} else {
				$scope[varWal][id].balance = etherUnits.toEther(
					data.data.balance,
					"wei"
				);
				$scope[varWal][id].balanceR = new BigNumber(
					$scope[varWal][id].balance
				).toPrecision(5);
				$scope[varWal][id].usd = etherUnits.toFiat(
					$scope[varWal][id].balance,
					"ether",
					$scope.fiatVal.usd
				);
				$scope[varWal][id].eur = etherUnits.toFiat(
					$scope[varWal][id].balance,
					"ether",
					$scope.fiatVal.eur
				);
				$scope[varWal][id].btc = etherUnits.toFiat(
					$scope[varWal][id].balance,
					"ether",
					$scope.fiatVal.btc
				);
			}
		});
	};

	$scope.setViewWalletObj = function(val, type) {
		var vtype = "allWallets";
		if (type == "watchOnly") vtype = "allWatchOnly";
		$scope.viewWallet = {
			nick: $scope[vtype][val].nick,
			addr: $scope[vtype][val].addr,
			id: val,
			type: type
		};
	};

	$scope.editMWallet = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.editModal.open();
	};

	$scope.editSave = function() {
		if ($scope.nickNames.indexOf($scope.viewWallet.nick) !== -1) {
			$scope.notifier.danger(globalFuncs.errorMsgs[13]);
		} else {
			cxFuncs.editNickName(
				$scope.viewWallet.addr,
				$scope.viewWallet.nick,
				function() {
					if (chrome.runtime.lastError)
						$scope.notifier.danger(chrome.runtime.lastError.message);
					else {
						$scope.setAllWallets();
						$scope.setNickNames();
						$scope.editModal.close();
					}
				}
			);
		}
	};

	$scope.viewMWallet = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.viewModal.open();
	};

	$scope.decryptWallet = function() {
		$scope.wallet = null;

		try {
			var priv = $scope.allWallets[$scope.viewWallet.id].priv;
			if (priv.length == 132)
				$scope.wallet = Wallet.fromMyEtherWalletKey(priv, $scope.password);
			else
				$scope.wallet = Wallet.getWalletFromPrivKeyFile(priv, $scope.password);
			$scope.viewModal.close();
			$scope.setWalletInfo();
			$scope.password = "";
		} catch (e) {
			$scope.notifier.danger(globalFuncs.errorMsgs[6] + ":" + e);
		}
	};

	$scope.printQRCode = function() {
		globalFuncs.printPaperWallets(
			JSON.stringify([
				{
					address: $scope.wallet.getChecksumAddressString(),
					private: $scope.wallet.getPrivateKeyString()
				}
			])
		);
	};

	$scope.resetWallet = function() {
		$scope.wallet = null;
		walletService.wallet = null;
		walletService.password = "";
		$scope.blob = $scope.blobEnc = $scope.password = "";
	};

	$scope.setWalletInfo = function() {
		walletService.wallet = $scope.wallet;
		walletService.password = $scope.password;
	};

	$scope.deleteWalletMsg = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.removeModal.open();
	};

	$scope.deleteWallet = function() {
		cxFuncs.deleteAccount($scope.viewWallet.addr, function() {
			$scope.setAllWallets();
			$scope.setNickNames();
			$scope.removeModal.close();
		});
	};

	ajaxReq.getETHvalue(function(data) {
		$scope.fiatVal.usd = data.usd;
		$scope.fiatVal.eur = data.eur;
		$scope.fiatVal.btc = data.btc;
		$scope.setAllWallets();
	});
	$scope.setNickNames();
	$scope.getLocalTokens();
};
module.exports = myWalletsCtrl;
