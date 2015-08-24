$(document).ready(function() {
	bindAugurElements();
});

function bindAugurElements() {
	$("#btnpurchaseaugur").click(function() {
		preCreateAugurTransaction();
	});
	$("#accountBalance").bind("DOMSubtreeModified", function() {
		var obj = augurContract.getAmountSent.getTransactionPayload($("#accountAddress").html());
		getEthCall(obj, function(data) {
			if (data.error) {
				$("#augurbalance").html(data.msg);
			} else {
				$("#augurbalance").html(toEther(new BigNumber(data.data).toNumber(), 'wei') + ' ether');
			}
		});
	});
}

function preCreateAugurTransaction() {
	try {
		$("#tarawtx").val("");
		$("#tasignedtx").val("");
		$("#txsendstatus").html('')
		if (PrivKey.length != 64) throw "Invalid Private key, try again";
		if (!$.isNumeric($('#sendtxamount').val()) || $('#sendtxamount').val() <= 0) throw "Invalid amount, try again";
		var etherUnit = $('input[type=radio][name=currencyRadio]:checked').val();
		var weiAmount = toWei($('#sendtxamount').val(), etherUnit);
		var rawobj = augurContract.buyRep.getTransactionPayload({
			from: formatAddress(strPrivateKeyToAddress(PrivKey), 'hex'),
			value: weiAmount,
			gas: 150000
		});
		createTransactionFromRaw(rawobj, PrivKey, function(data) {
			$("#tarawtx").val(data.raw);
			$("#tasignedtx").val(data.signed);
			$("#txcreatestatus").html('<p class="text-center text-success"><strong> Transaction generated</strong></p>').fadeIn(50);
			$("#divtransactionTAs").show();
			$("#divsendtranaction").show();
			$("#confirmAmount").html($('#sendtxamount').val());
			$("#confirmCurrancy").html(etherUnit);
		}, function(err) {
			$("#txcreatestatus").html('<p class="text-center text-danger"><strong> ' + err + '</strong></p>').fadeIn(50).fadeOut(3000);
			$("#divtransactionTAs").hide();
			$("#divsendtranaction").hide();
		});
	} catch (err) {
		$("#txcreatestatus").html('<p class="text-center text-danger"><strong> ' + err + '</strong></p>').fadeIn(50).fadeOut(3000);
		$("#divtransactionTAs").hide();
		$("#divsendtranaction").hide();
	}
}
var augurContract = web3.eth.contract([{
	"name": "addrToFunder(int256)",
	"type": "function",
	"inputs": [{
		"name": "address",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "buyRep()",
	"type": "function",
	"inputs": [],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getAddrByIndex(int256)",
	"type": "function",
	"inputs": [{
		"name": "index",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getAmountSent(int256)",
	"type": "function",
	"inputs": [{
		"name": "address",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getAmtByIndex(int256)",
	"type": "function",
	"inputs": [{
		"name": "index",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getBlockNumByIndex(int256)",
	"type": "function",
	"inputs": [{
		"name": "index",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getBlockNumSent(int256)",
	"type": "function",
	"inputs": [{
		"name": "address",
		"type": "int256"
	}],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getFunderNum()",
	"type": "function",
	"inputs": [],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
},
{
	"name": "getFundsRaised()",
	"type": "function",
	"inputs": [],
	"outputs": [{
		"name": "out",
		"type": "int256"
	}]
}]).at('0xe28e72fcf78647adce1f1252f240bbfaebd63bcc');