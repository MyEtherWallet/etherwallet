$(document).ready(function() {});

function generateBulkWallets() {
	var password = $("#bulkgenpassword").val();
	var count = $("#numberwallets").val();
	if (count == "") {
		alert("Please enter the amount of wallets you want to generate.");
		return;
	} else if (count != parseInt(count, 10)) {
		alert("Digits only please");
		return;
	}
	var isencrypted = false;
	if (password != "" && password.length < 7) {
		alert("Your password must be at least 7 characters.");
		return;
	} else if (password != "" && password.length >= 7) {
		isencrypted = true;
	}
	if (isencrypted) $("#bulkIsEnc").html(" (Encrypted)")
	else
	$("#bulkIsEnc").html(" (Unencrypted)")
	$("#generatedbulkwallets").show();
	$('#bulkgentable tr:not(:first)').remove();
	var acc = new Accounts();
	var csv = "";
	var jsonarr = [];
	var printjson = [];
	var txt = "";
	for (var i = 0; i < count; i++) {
		if (isencrypted) {
			var newAccount = acc.new(password);
			var addressHash = cryptoJSToHex(CryptoJS.SHA3(newAccount.address));
			addressHash = addressHash.substr(addressHash.length - 4);
			newAccount.private = newAccount.private + addressHash;
		} else
		var newAccount = acc.new();
		$('#bulkgentable tr:last').after('<tr class="privaddkey"><td><div id="addressIdenticon" class="addressIdenticon-' + i + '"></div></td><td><textarea class="form-control" rows="4" type="text" disabled>' + toChecksumAddress(newAccount.address) + '</textarea></td><td><textarea class="form-control" rows="4" type="text" disabled>' + newAccount.private + '</textarea></td></tr>');
		$(".addressIdenticon-" + i).css("background-image", 'url(' + blockies.create({
			seed: newAccount.address.toLowerCase(),
			size: 8,
			scale: 16
		}).toDataURL() + ')');
		csv += newAccount.address + ',' + newAccount.private + '\n';
		txt += newAccount.address + '\t' + newAccount.private + '\n';
		jsonarr.push({
			address: newAccount.address,
			private: newAccount.private
		});
		printjson.push({
			address: toChecksumAddress(newAccount.address),
			private: acc.get(newAccount.address, password).private
		});
	}
	var csvblob = new Blob([csv], {
		type: "text/csv;charset=UTF-8"
	});
	var txtblob = new Blob([txt], {
		type: "text/plain;charset=UTF-8"
	});
	var jsonblob = new Blob([JSON.stringify(jsonarr)], {
		type: "text/json;charset=UTF-8"
	});
	var fname = "bulk_ether_accounts";
	$("#bulkexportjson").attr('href', window.URL.createObjectURL(jsonblob));
	$("#bulkexportjson").attr('download', fname + '.json');
	$("#bulkexportcsv").attr('href', window.URL.createObjectURL(csvblob));
	$("#bulkexportcsv").attr('download', fname + '.csv');
	$("#bulkexporttxt").attr('href', window.URL.createObjectURL(txtblob));
	$("#bulkexporttxt").attr('download', fname + '.txt');
	$("#bulkwalletprint").unbind();
	$("#bulkwalletprint").click(function() {
		openPrintPaperWallets(JSON.stringify(printjson));
	});
	acc.clear();
}
