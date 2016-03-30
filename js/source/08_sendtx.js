$(document).ready(function() {});

function transferAllBalance() {
    var gasLimit = parseInt($('#gasLimit').val());
	getMaxSendAmount($("#accountAddress").html(),gasLimit, function(data) {
		$('#sendtxamount').val(data);
		$('input[type=radio][name=currencyRadio][value=ether]').prop("checked", true);
		$('#sendtxamount').trigger("keyup");
	}, function(err) {
		$("#txcreatestatus").html('<p class="text-center text-danger"><strong> ' + err + '</strong></p>').fadeIn(50).fadeOut(3000);
	});
}

function donateButtonClick() {
	$("#sendtxaddress").val('0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8');
	$("#donateThanks").show();
	$("#sendtxaddress").trigger("keyup");
}

function onSendTransactionOpens() {
	resetDecryptValues();
	$("#walletselection").detach().appendTo($('#sendTransactionDecryptWallet'));
	$("#decryptdata").attr('onDecrypt', 'walletSendDecryptSuccess');
}

function preSendTransaction() {
	sendTransaction($("#tasignedtx").val(), function(data) {
		$("#txsendstatus").html('<p class="text-center text-success"><strong> Transaction submitted. TX ID: ' + data + '</strong></p>');
		setWalletBalance();
	}, function(err) {
		$("#txsendstatus").html('<p class="text-center text-danger"><strong>' + err + '</strong></p>');
	});
	$('#sendTransaction').modal('hide');
}

function preCreateTransaction() {
	try {
		$("#tarawtx").val("");
		$("#tasignedtx").val("");
		$("#txsendstatus").html('')
		var toAddress = $('#sendtxaddress').val();
		if (PrivKey.length != 64) throw "Invalid Private key, try again";
		if (!validateEtherAddress(toAddress)) throw "Invalid to Address, try again";
		if (!$.isNumeric($('#sendtxamount').val()) || $('#sendtxamount').val() <= 0) throw "Invalid amount, try again";
		var etherUnit = $('input[type=radio][name=currencyRadio]:checked').val();
		var weiAmount = toWei($('#sendtxamount').val(), etherUnit);
        var gasLimit = parseInt($('#gasLimit').val());
		createTransaction(PrivKey, toAddress, weiAmount, gasLimit, function(data) {
			$("#tarawtx").val(data.raw);
			$("#tasignedtx").val(data.signed);
			$("#txcreatestatus").html('<p class="text-center text-success"><strong> Transaction generated</strong></p>').fadeIn(50);
			$("#divtransactionTAs").show();
			$("#divsendtranaction").show();
			$("#confirmAmount").html($('#sendtxamount').val());
			$("#confirmCurrancy").html(etherUnit);
			$("#confirmAddress").html(toAddress);
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

function walletSendDecryptSuccess() {
	var decrytedAdd = formatAddress(strPrivateKeyToAddress(PrivKey), 'hex');
	$("#accountAddress").html(toChecksumAddress(decrytedAdd));
	$('.walletaddressIdenticon').css("background-image", 'url(' + blockies.create({
		seed: decrytedAdd.toLowerCase(),
		size: 8,
		scale: 16
	}).toDataURL() + ')');
	setWalletBalance();
	$("#decryptStatus").html('<p class="text-center text-success"><strong> Wallet successfully decrypted</strong></p>').fadeIn(2000);
	$("#wallettransactions").show();
}
