'use strict';
var theDaoProposalCtrl = function($scope, $sce, walletService) {
	walletService.wallet = null;
	walletService.password = '';
	$scope.voteModal = new Modal(document.getElementById('voteProposal'));
	$scope.showVoteYes = $scope.showVoteNo = false;
	$scope.AllProposals = [];
	$scope.slockitContract = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";
	$scope.slockitBalance = "0x70a08231";
	$scope.slockitSupply = "0x18160ddd";
	$scope.slockitTransfer = "0xa9059cbb";
	$scope.slockitProposal = "0x013cf08b";
	$scope.slockitminQuorumDivisor = "0x674ed066";
	$scope.slockitABalance = "0x39d1f908";
	$scope.slockitRToken = "0xcdef91d0";
	$scope.slockitVote = "0xc9d27afe";
    $scope.slockitGasIfVoted = "0x2faf080";
	$scope.initValues = function() {
		ajaxReq.getBalance($scope.slockitContract, function(data) {
			if (!data.error) $scope.totRaised = etherUnits.toEther(data.data.balance, 'wei');
			var minq = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitminQuorumDivisor, []);
			ajaxReq.getEthCall(minq, function(data) {
				if (!data.error) $scope.minQuorumDivisor = new BigNumber(data.data).toNumber();
				var actB = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitABalance, []);
				ajaxReq.getEthCall(actB, function(data) {
					if (!data.error) $scope.actualBalance = new BigNumber(data.data).toNumber();
					var rToken = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitRToken, [ethFuncs.getNakedAddress($scope.slockitContract)]);
					ajaxReq.getEthCall(rToken, function(data) {
						if (!data.error) $scope.rewardToken = new BigNumber(data.data).toNumber();
						$scope.getAllProposals();
					});
				});
			});
		});
	}
	$scope.tx = {
		gasLimit: 100000,
		data: '',
		to: $scope.slockitContract,
		unit: "ether",
		value: 0,
		nonce: null,
		gasPrice: null,
		donate: false
	}
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
		$scope.checkVoted();
	});
	$scope.openVote = function(id) {
		$scope.voteID = id;
		$scope.checkVoted();
		$scope.voteTxStatus = $scope.sendTxStatus = "";
		$scope.voteModal.open();
	}
	$scope.checkVoted = function() {
		if ($scope.wallet == null) return;
		var tempVTx = {
			to: $scope.slockitContract,
			from: $scope.wallet.getAddressString(),
			data: $scope.slockitVote + ethFuncs.padLeft(new BigNumber($scope.voteID).toString(16), 64) + ethFuncs.padLeft("0", 64),
			value: '0x0'
		}
        $scope.voteTxStatus = "";
		ajaxReq.getEstimatedGas(tempVTx, function(data) {
			if (!data.error && data.data != $scope.slockitGasIfVoted) {
			     $scope.showVoteYes = $scope.showVoteNo = true;
			} else {
			     $scope.voteTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[18]));
                $scope.showVoteYes = $scope.showVoteNo = false;
			}
		});
	}
	$scope.getAllProposals = function() {
		ajaxReq.getDAOProposals(function(proposals) {
			for (var i = 0; i < proposals.length; i++) {
				$scope.AllProposals.push($scope.getProposalObj(proposals[i]));
			}
			if (globalFuncs.urlGet('id') != null) {
				$scope.showProposal(parseInt(globalFuncs.urlGet('id')));
			}
		});
	}
	$scope.comparator = globalFuncs.urlGet('id') != null;
	$scope.filters = {
		id: globalFuncs.urlGet('id') != null ? parseInt(globalFuncs.urlGet('id')) : '',
		isOpen: globalFuncs.urlGet('open') != null ? globalFuncs.urlGet('open') : (function() {
			return;
		})(),
		split: globalFuncs.urlGet('split') != null ? globalFuncs.urlGet('split') : (function() {
			return;
		})(),
		description: globalFuncs.urlGet('description') != null ? globalFuncs.urlGet('description') : (function() {
			return;
		})()
	};
	if ($scope.filters.id == '' && $scope.filters.isOpen == undefined && $scope.filters.split == undefined && $scope.filters.description == undefined) {
		$scope.filters.split = 'false';
		$scope.filters.isOpen = 'true';
	}
	$scope.$watch('filters', function(newValue, oldValue) {
		if ((newValue.id != oldValue.id) && ($scope.filters.id == '' || $scope.filters.id == null)) {
			$scope.filters = {}
			$scope.comparator = false;
		}
		if (newValue.id != '' && newValue.id != null) {
			$scope.filters = {
				id: newValue.id
			};
			$scope.comparator = true;
		}
	}, true);
	$scope.initValues();
	$scope.showProposal = function(id) {
		if (!$scope.AllProposals[id].showprop) {
			var callProposal = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitProposal, [new BigNumber(id).toString(16)]);
			ajaxReq.getEthCall(callProposal, function(data) {
				var iobj = {
					proposalID: id,
					data: data.data
				};
				$scope.AllProposals[id] = $scope.getProposalObj(iobj);
				$scope.AllProposals[id].showprop = true;
			});
		} else {
			$scope.AllProposals[id].showprop = false;
		}
	}
	$scope.generateVoteTx = function(isYes) {
		if (isYes) $scope.showVoteNo = false;
		else $scope.showVoteYes = false;
		try {
			$scope.tx.to = $scope.slockitContract;
			var id = ethFuncs.padLeft(new BigNumber($scope.voteID).toString(16), 64);
			var vote = isYes ? ethFuncs.padLeft("1", 64) : ethFuncs.padLeft("0", 64);
			$scope.tx.data = $scope.slockitVote + id + vote;
			$scope.tx.value = 0;
			$scope.generateTx();
		} catch (e) {
			$scope.showRaw = false;
			$scope.voteTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.getProposalObj = function(tProposal) {
		var proposal = ethFuncs.contractOutToArray(tProposal.data);
		var objProposal = {
			id: tProposal.proposalID,
			recipient: '0x' + proposal[0],
			amount: etherUnits.toEther('0x' + proposal[1], 'wei'),
			content: proposal[12] == "0" ? "" : proposal.slice(13).join(),
			description: proposal[12] == "0" ? "Proposal ID #" + tProposal.proposalID : globalFuncs.stripTags(globalFuncs.hexToAscii(proposal.slice(13).join('')).replace(/<br>/g, '\n').replace(/\\n/g, '\n')),
			votingDeadline: new Date(new BigNumber("0x" + proposal[3]).toNumber() * 1000),
			today: new Date(),
			open: proposal[4] == '1' ? true : false,
			proposalPassed: proposal[5] == '1' ? true : false,
			proposalHash: '0x' + proposal[6],
			proposalDeposit: etherUnits.toEther('0x' + proposal[7], 'wei'),
			split: proposal[8] == '1' ? true : false,
			yea: etherUnits.toEther('0x' + proposal[9], 'wei'),
			nay: etherUnits.toEther('0x' + proposal[10], 'wei'),
			creator: "0x" + proposal[11],
			show: true,
			showprop: false,
			minQuroum: function() {
				var totalInWei = etherUnits.toWei($scope.totRaised, "ether");
				return etherUnits.toEther(totalInWei / $scope.minQuorumDivisor + (etherUnits.toWei(this.amount, "ether") * totalInWei) / (3 * ($scope.actualBalance + $scope.rewardToken)), "wei");
			},
			data: proposal
		};
		var yeaBN = new BigNumber(objProposal.yea);
		var nayBN = new BigNumber(objProposal.nay);
		objProposal.totalVotes = yeaBN.plus(nayBN)
		objProposal.yeaPer = yeaBN.plus(nayBN).toNumber() == '0' ? 0 : yeaBN.div(objProposal.totalVotes).times(100).toNumber();
		objProposal.nayPer = yeaBN.plus(nayBN).toNumber() == '0' ? 0 : nayBN.div(objProposal.totalVotes).times(100).toNumber();
		objProposal.quorumCurrent = (objProposal.totalVotes * 100) / $scope.totRaised;
		objProposal.quorumPer = (objProposal.minQuroum() * 100) / $scope.totRaised;
        objProposal.isOpen = objProposal.votingDeadline.getTime() > objProposal.today.getTime();
		objProposal.openEnglish = objProposal.isOpen == true ? "Yes" : "No";
		objProposal.splitEnglish = objProposal.split == true ? "Yes" : "No";
		objProposal.proposalPassedEnglish = objProposal.proposalPassed == true ? "Yes" : "No";
		if (objProposal.description.indexOf('\n') > 0) {
			var firstLine = objProposal.description.substring(0, objProposal.description.indexOf('\n'));
			objProposal.descriptionHTML = $sce.trustAsHtml(marked(objProposal.description.substring(firstLine.length + 1) || ""));
			objProposal.description = firstLine;
		}
		return objProposal;
	}
	$scope.generateTx = function() {
		uiFuncs.generateTx($scope, $sce, function() {
			$scope.sendTx();
		});
	}
	$scope.sendTx = function() {
		ajaxReq.sendRawTx($scope.signedTx, function(data) {
			if (data.error) {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg + "<br />" + globalFuncs.errorMsgs[17]));
			} else {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[4] + " " + globalFuncs.successMsgs[2] + " " + data.data));
			}
		});
	}
};
module.exports = theDaoProposalCtrl;
