$(document).ready(function() {
	$('input[type=radio][name=currencyRadioOffline]').change(function() {
		$("#offlineSendtxamount").trigger("keyup");
	});
	$('#offlineSendtxamount').on('paste, keyup', function() {
		var amount = $(this).val();
		if (amount != "" && $.isNumeric(amount) && amount > 0) {
			var etherUnit = $('input[type=radio][name=currencyRadioOffline]:checked').val();
			$("#offlineweiamount").html(getSuccessText(toWei(amount, etherUnit) + " wei"));
		} else if (amount != "" && !$.isNumeric(amount)) {
			$("#offlineweiamount").html(getDangerText("Invalid amount"));
		} else {
			$("#offlineweiamount").html('');
		}
	});
});

function onOfflineTxOpens() {
	resetDecryptValues();
	$("#walletselection").detach().appendTo($('#sendOfflineTransactionDecryptWallet'));
	$("#decryptdata").attr('onDecrypt', 'offlineTxSuccess');
}

function offlineTxSuccess() {
	$("#decryptStatus").html(getSuccessText('Wallet successfully decrypted')).fadeIn(2000);
}

function sendOfflineTxApprove() {
	sendTransaction($("#offlineSerializedTxPub").val(), function(data) {
		$("#offlineTxPublishStatus").html(getSuccessText('Transaction submitted. TX ID: ' + data));
	}, function(err) {
		$("#offlineTxPublishStatus").html(getDangerText(err));
	});
	$('#sendTransactionOffline').modal('hide');
}

function sendOfflineTx() {
	var serializedTx = $("#offlineSerializedTxPub").val();
	if (serializedTx == "") {
		$("#offlineTxPublishStatus").html(getDangerText("empty transaction, try again")).fadeIn(50).fadeOut(5000);
		return;
	}
	try {
		var rawTx = rawToTransaction(serializedTx);
		var ethVal = toEther(rawTx.value, 'wei');
		var toAdd = rawTx.to;
		$("#offlineConfirmAmount").html(ethVal);
		$("#offlineConfirmAddress").html(toAdd);
		$('#sendTransactionOffline').modal('show');
	} catch (e) {
		$("#offlineTxPublishStatus").html(getDangerText(e)).fadeIn(50).fadeOut(5000);
	}
}

function genSignedOfflineTx() {
	if (!$.isNumeric($('#offlineSendtxamount').val()) || $('#offlineSendtxamount').val() < 0) {
		$("#offlineTxStatus").html(getDangerText("invalid value, try again")).fadeIn(50).fadeOut(5000);
		return;
	}
	var etherUnit = $('input[type=radio][name=currencyRadioOffline]:checked').val();
	var rawTx = {
		nonce: $('#offlineGasNonce').val(),
		gasPrice: $('#offlineGasPrice').val(),
		gasLimit: $('#offlineGasLimit').val(),
		to: $('#offlineToAdd').val(),
		value: toWei($('#offlineSendtxamount').val(), etherUnit),
		data: $('#offlineData').val()
	};
	createTransactionFromRaw(rawTx, PrivKey, function(data) {
		$(".offlineSerializedTx").val(data.signed);
	}, function(error) {
		$("#offlineTxStatus").html(getDangerText(error)).fadeIn(50).fadeOut(5000);
	});
}

function getAddressInfo() {
	var addField = $("#offlineFromAdd");
	var address = addField.val();
	if (!validateEtherAddress(address)) {
		$('.' + addField.attr('status')).html(getDangerText('Invalid Address')).fadeIn(50);
	} else if (address == '') {
		$('.' + addField.attr('status')).html(getDangerText('Enter Address')).fadeIn(50);
	} else {
		getTransactionData(address, function(data) {
			if (data.error) {
				$('.' + addField.attr('status')).html(getDangerText("Error occurred: " + data.msg)).fadeIn(50);
				return;
			}
			data = data.data;
			data.gasprice = new BigNumber(data.gasprice).plus(1000000000).toDigits(2).toString();
			data.nonce = new BigNumber(data.nonce).toString();
			$(".offlineGPrice").val(data.gasprice);
			$(".offlineNonce").val(data.nonce);
			$("#step1Output").show();
		});
	}
}
