'use strict';
var myWalletsCtrl = function($scope, $sce) {
	$scope.editModal = new Modal(document.getElementById('editWallet'));
	$scope.viewModal = new Modal(document.getElementById('viewWalletDetails'));
	$scope.removeModal = new Modal(document.getElementById('removeWallet'));
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
	$scope.setAllWallets = function() {
		cxFuncs.getWalletsArr(function(wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance('allWallets');
			$scope.setTokens('allWallets');
		});
		cxFuncs.getWatchOnlyArr(function(wlts) {
			$scope.allWatchOnly = wlts;
			$scope.updateBalance('allWatchOnly');
            $scope.setTokens('allWatchOnly');
		});
	};
	$scope.$watch('ajaxReq.key', function() {
        if ($scope.allWallets) {
            $scope.updateBalance('allWallets');
			$scope.setTokens('allWallets');
        }
        if($scope.allWatchOnly){
        	$scope.updateBalance('allWatchOnly');
            $scope.setTokens('allWatchOnly');
        }
    });
	$scope.setTokens = function(varWal) {
		for(var j=0;j<$scope[varWal].length; j++){
        $scope.tokens = Token.popTokens;
        $scope[varWal][j].tokens = [];
				for (var i = 0; i < $scope.tokens.length; i++) {
					$scope[varWal][j].tokens.push(new Token($scope.tokens[i].address, $scope[varWal][j].addr, $scope.tokens[i].symbol, $scope.tokens[i].decimal));
                    $scope[varWal][j].tokens[$scope[varWal][j].tokens.length-1].setBalance();
				}
        var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
        for (var i = 0; i < storedTokens.length; i++) {
					$scope[varWal][j].tokens.push(new Token(storedTokens[i].contractAddress, $scope[varWal][j].addr, globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal));
                    $scope[varWal][j].tokens[$scope[varWal][j].tokens.length-1].setBalance();
                }
		}
	}
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
				$scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
                $scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
				$scope[varWal][id].usd = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.usd);
				$scope[varWal][id].eur = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.eur);
				$scope[varWal][id].btc = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.btc);
			}
		});
	};
	$scope.setViewWalletObj = function(val, type) {
		var vtype = 'allWallets';
		if (type == 'watchOnly') vtype = 'allWatchOnly'
		$scope.viewWallet = {
			nick: $scope[vtype][val].nick,
			addr: $scope[vtype][val].addr,
			id: val,
			type: type
		}
	}
	$scope.editMWallet = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.editModal.open();
	}
	$scope.editSave = function() {
		if ($scope.nickNames.indexOf($scope.viewWallet.nick) !== -1) {
			$scope.editStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[13]));
			return;
		} else {
			cxFuncs.editNickName($scope.viewWallet.addr, $scope.viewWallet.nick, function() {
				if (chrome.runtime.lastError) $scope.editStatus = $sce.trustAsHtml(globalFuncs.getDangerText(chrome.runtime.lastError.message));
				else {
					$scope.setAllWallets();
					$scope.setNickNames();
					$scope.editModal.close();
				}
			});
		}
	}
	$scope.viewMWallet = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.viewModal.open();
	}
	$scope.decryptWallet = function() {
		$scope.wallet = null;
		$scope.viewStatus = "";
		try {
		   var priv = $scope.allWallets[$scope.viewWallet.id].priv;
		   if (priv.length==132)
				$scope.wallet = Wallet.fromMyEtherWalletKey(priv, $scope.password);
            else
			     $scope.wallet = Wallet.getWalletFromPrivKeyFile(priv, $scope.password);
			$scope.viewModal.close();
			$scope.setWalletInfo();
            $scope.password = "";
		} catch (e) {
			$scope.viewStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6] + ":" + e));
		}
	};
	$scope.printQRCode = function() {
		globalFuncs.printPaperWallets(JSON.stringify([{
			address: $scope.wallet.getAddressString(),
			private: $scope.wallet.getPrivateKeyString()
		}]));
	}
	$scope.resetWallet = function() {
		$scope.wallet = null;
		$scope.blob = $scope.blobEnc = $scope.password = "";
	}
	$scope.setWalletInfo = function() {
		$scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
		if ($scope.password != '') {
			$scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3($scope.password, {
				kdf: globalFuncs.kdf,
				n: globalFuncs.scrypt.n
			}));
			$scope.encFileName = $scope.wallet.getV3Filename();
		}
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
	$scope.deleteWalletMsg = function(val, type) {
		$scope.setViewWalletObj(val, type);
		$scope.removeModal.open();
	}
	$scope.deleteWallet = function() {
		cxFuncs.deleteAccount($scope.viewWallet.addr, function() {
			$scope.setAllWallets();
			$scope.setNickNames();
			$scope.removeModal.close();
		});
	}
	ajaxReq.getETHvalue(function(data) {
		$scope.fiatVal.usd = data.usd;
		$scope.fiatVal.eur = data.eur;
		$scope.fiatVal.btc = data.btc;
		$scope.setAllWallets();
	});
	$scope.setNickNames();
};
module.exports = myWalletsCtrl;
