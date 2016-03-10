$(document).ready(function() {
	$("#privkeyenc,#address,#privkey").click(function() {
		this.focus();
		this.select();
	});
});

function generateSingleWallet() {
	var password = $("#ethgenpassword").val();
	if (password == "") {
		alert("Please enter a password.");
		return;
	}
	if (password.length < 7) {
		alert("Your password must be at least 7 characters");
		return;
	}
	$("#generatedWallet").show();
	var acc = new Accounts();
	var newAccountEnc = acc.new(password);
    var checksummedAdd = toChecksumAddress(newAccountEnc.address);
	$("#address").val(checksummedAdd);
	$('#addressIdenticon').css("background-image", 'url(' + blockies.create({
		seed: newAccountEnc.address.toLowerCase(),
		size: 8,
		scale: 16
	}).toDataURL() + ')');
	var addressHash = cryptoJSToHex(CryptoJS.SHA3(newAccountEnc.address));
	addressHash = addressHash.substr(addressHash.length - 4);
	var newAccountUnEnc = acc.get(newAccountEnc.address, password);
	$("#privkey").val(newAccountUnEnc.private);
	newAccountEnc.private = newAccountEnc.private + addressHash;
	$("#privkeyenc").val(newAccountEnc.private);
	$("#qrcodeAdd").empty();
	new QRCode($("#qrcodeAdd")[0], {
		text: newAccountEnc.address,
		width: $("#qrcode").width(),
		height: $("#qrcode").width(),
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
	$("#qrcode").empty();
	new QRCode($("#qrcode")[0], {
		text: newAccountUnEnc.private,
		width: $("#qrcode").width(),
		height: $("#qrcode").width(),
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
	var fileType = "text/json;charset=UTF-8";
	var encblob = new Blob([JSON.stringify(newAccountEnc)], {
		type: fileType
	});
	var unencblob = new Blob([JSON.stringify(newAccountUnEnc)], {
		type: fileType
	});
	$("#encdownload").attr('href', window.URL.createObjectURL(encblob));
	$("#encdownload").attr('download', newAccountEnc.address + '-Encrypted.json');
	$("#unencdownload").attr('href', window.URL.createObjectURL(unencblob));
	$("#unencdownload").attr('download', newAccountEnc.address + '-Unencrypted.json');
	acc.clear();
}
