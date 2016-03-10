$(document).ready(function() {
	$('input[type=radio][name=typeOfKeyRadio]').change(function() {
		resetDecryptValues();
		if (this.value == 'fileupload') {
			$("#selectedTypeKey").hide();
			$("#selectedUploadKey").show();
			decryptType = "fupload";
		} else if (this.value == 'pasteprivkey') {
			$("#selectedUploadKey").hide();
			$("#selectedTypeKey").show();
			decryptType = "privkey";
		}
	});
	$('#walletfilepassword').on('paste, keyup', function() {
		if ($('#walletfilepassword').val() != "") {
			$("#uploadbtntxt-wallet").show();
			$("#uploadbtntxt-privkey").hide();
			$("#walletuploadbutton").show();
		} else {
			$("#walletuploadbutton").hide();
		}
	});
	$('input[type=radio][name=currencyRadio]').change(function() {
		$("#sendtxamount").trigger("keyup");
	});
	$('#sendtxamount').on('paste, keyup', function() {
		var amount = $('#sendtxamount').val();
		if ($('#sendtxamount').val() != "" && $.isNumeric(amount) && amount > 0) {
			var etherUnit = $('input[type=radio][name=currencyRadio]:checked').val();
			$("#weiamount").html('<p class="text-success"><strong>' + toWei(amount, etherUnit) + ' wei ( approximately ' + toFiat(amount, etherUnit, usdval) + ' USD/' + toFiat(amount, etherUnit, eurval) + ' EUR )</strong></p>');
		} else if ($('#sendtxamount').val() != "" && !$.isNumeric(amount)) {
			$("#weiamount").html('<p class="text-danger"><strong>Invalid amount</strong></p>');
		} else {
			$("#weiamount").html('');
		}
	});
	$('.validateAddress').on('paste, keyup', function() {
		$('.' + $(this).attr('identicon')).css("background-image", '');
		if (validateEtherAddress($(this).val())) {
			$('.' + $(this).attr('status')).html('<p class="text-success"><strong> Address is valid</strong></p>').fadeIn(50);
			$('.' + $(this).attr('identicon')).css("background-image", 'url(' + blockies.create({
				seed: $(this).val().trim().toLowerCase(),
				size: 8,
				scale: 16
			}).toDataURL() + ')');
		} else if ($(this).val() == "") {
			$('.' + $(this).attr('status')).html('');
		} else {
			$('.' + $(this).attr('status')).html('<p class="text-danger"><strong> Invalid address</strong></p>').fadeIn(50);
		}
	});
	$('#privkeypassword').on('paste, keyup', function() {
		if ($('#privkeypassword').val().length > 6) {
			$("#uploadbtntxt-wallet").hide();
			$("#uploadbtntxt-privkey").show();
			$("#walletuploadbutton").show();
		} else {
			$("#walletuploadbutton").hide();
		}
	});
	$('#manualprivkey').on('paste, keyup, input', function() {
		$("#divprikeypassword").hide();
		$("#walletuploadbutton").hide();
		$("#uploadbtntxt-wallet").hide();
		$("#uploadbtntxt-privkey").hide();
		$("#manualprivkey").val($("#manualprivkey").val().replace(/(?:\r\n|\r|\n| )/g, ''));
		if ($('#manualprivkey').val().length == 128 || $('#manualprivkey').val().length == 132) {
			$("#divprikeypassword").show();
		} else if ($('#manualprivkey').val().length == 64) {
			$("#uploadbtntxt-wallet").hide();
			$("#uploadbtntxt-privkey").show();
			$("#walletuploadbutton").show();
		}
	});
	$('.btn-file :file').change(function() {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported in this browser. Please use a modern browser');
			return;
		}
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});
	$('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		$('#fuploadStatus').empty();
		$('#walletfilepassword').val('');
		PrivKey = "";
		file = $('.btn-file :file')[0].files[0];
		var fr = new FileReader();
		fr.onload = function() {
			try {
				if (walletRequirePass(fr.result)) {
					$("#walletPasdiv").show();
					$("#walletuploadbutton").hide();
				} else {
					$("#walletPasdiv").hide();
					$("#walletuploadbutton").show();
					$("#uploadbtntxt-wallet").show();
					$("#uploadbtntxt-privkey").hide();
				}
			} catch (err) {
				$('#fuploadStatus').append('<p class="text-center text-danger"><strong> ' + err + '</strong></p>');
			}
		};
		fr.readAsText(file);
		var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
		if (input.length) {
			input.val(log);
		} else {
			if (log) {
				$('#fuploadStatus').append('<p class="text-center text-success"><strong> File Selected: ' + log + '</strong></p>');
			}
		}
	});
});

function decryptData() {
	$("#decryptStatus").html('<p class="text-center text-info"><strong> Please Wait...</strong></p>').fadeIn(10);
	setTimeout(function() {
		decryptFormData();
	}, 100);
}

function onViewWalletOpens() {
	resetDecryptValues();
	$("#walletselection").detach().appendTo($('#viewDetailsDecryptWallet'));
	$("#decryptdata").attr('onDecrypt', 'walletViewDecryptSuccess');
}

function setWalletBalance() {
	getBalance($("#accountAddress").html(), function(result) {
		if (!result.error) {
			var bestCurAmount = getBestEtherKnownUnit(result.data.balance);
			$("[id=accountBalance]").html(bestCurAmount.amount + " " + bestCurAmount.unit);
			getETHvalue('USD', function(value) {
				usdval = value;
				tusdval = toFiat(bestCurAmount.amount, bestCurAmount.unit, value);
				$("[id=accountBalanceUsd]").html(formatCurrency(parseFloat(tusdval), '$') + " USD");
			});
			getETHvalue('EUR', function(value) {
				eurval = value;
				teurval = toFiat(bestCurAmount.amount, bestCurAmount.unit, value);
				$("[id=accountBalanceEur]").html(formatCurrency(parseFloat(teurval), '&euro;') + " EUR");
			});
			getETHvalue('BTC', function(value) {
				btcval = value;
				tbtcval = toFiat(bestCurAmount.amount, bestCurAmount.unit, value);
				$("[id=accountBalanceBtc]").html(tbtcval + " BTC");
			});
		} else
		console.log(result.msg);
	});
}

function formatCurrency(n, currency) {
	return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function walletViewDecryptSuccess() {
	$("#decryptStatus").html('<p class="text-center text-success"><strong> Wallet successfully decrypted</strong></p>').fadeIn(2000);
	var privPass = $('#privkeypassword').val();
	$("#decryptedWalletDetails").show();
	var decrytedAdd = formatAddress(strPrivateKeyToAddress(PrivKey), 'hex');
	$("#accountAddress").html(decrytedAdd);
	setWalletBalance();
	$('.addressIdenticonViewW').css("background-image", 'url(' + blockies.create({
		seed: decrytedAdd.toLowerCase(),
		size: 8,
		scale: 16
	}).toDataURL() + ')');
	$("#addressViewW").val(toChecksumAddress(decrytedAdd));
	$("#privkeyViewW").val(PrivKey);
	$("#qrcodeAddViewW").empty();
	new QRCode($("#qrcodeAddViewW")[0], {
		text: decrytedAdd,
		width: $("#qrcodeAddViewW").width(),
		height: $("#qrcodeAddViewW").width(),
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
	$("#qrcodeViewW").empty();
	new QRCode($("#qrcodeViewW")[0], {
		text: PrivKey,
		width: $("#qrcodeViewW").width(),
		height: $("#qrcodeViewW").width(),
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
	var printjson = [];
	printjson.push({
		address: decrytedAdd,
		private: PrivKey
	});
	$("#printqrViewWallet").unbind();
	$("#printqrViewWallet").click(function() {
		openPrintPaperWallets(JSON.stringify(printjson));
	});
}

function walletDecryptFailed(err) {
	$("#decryptStatus").html('<p class="text-center text-danger"><strong> ' + err + '</strong></p>').fadeIn(50).fadeOut(3000);
	$("#wallettransactions").hide();
}

function decryptFormData() {
	PrivKey = "";
	if (decryptType == 'fupload') {
		file = $('.btn-file :file')[0].files[0];
		var fr = new FileReader();
		fr.onload = function() {
			try {
				PrivKey = getWalletFilePrivKey(fr.result, $('#walletfilepassword').val());
				window[$('#decryptdata').attr('onDecrypt')]();
			} catch (err) {
				walletDecryptFailed(err);
			}
		};
		fr.readAsText(file);
	} else if (decryptType == 'privkey') {
		try {
			PrivKey = decryptTxtPrivKey($('#manualprivkey').val(), $("#privkeypassword").val());
			window[$('#decryptdata').attr('onDecrypt')]();
		} catch (err) {
			walletDecryptFailed("Invalid password");
		}
	}
}
