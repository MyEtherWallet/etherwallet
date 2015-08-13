function decryptPresaleKey(presaleJson, presalepass) {
	presaleJson = JSON.parse(presaleJson);
	var encSeedBytes = hexToBytes(presaleJson.encseed);
	var iv = hexToCryptoJS(bytesToHex(encSeedBytes.slice(0, 16)));
	var cipherText = hexToCryptoJS(bytesToHex(encSeedBytes.slice(16)));
	var derivedKey = CryptoJS.PBKDF2(presalepass, presalepass, {
		keySize: 512 / 32,
		iterations: 2000,
		hasher: CryptoJS.algo.SHA256
	});
	var passbytes = hexToBytes(cryptoJSToHex(derivedKey)).slice(0, 16);
	var plainText = CryptoJS.AES.decrypt({
		ciphertext: cipherText,
	}, hexToCryptoJS(bytesToHex(passbytes)), {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
    var plainTextHex = cryptoJSToHex(plainText);
    plainText = hex2str(plainTextHex);
    var ethPriv = CryptoJS.SHA3(plainText, { outputLength: 256 });
    return ethPriv.toString();
}

function hexToCryptoJS(x) {
	return CryptoJS.enc.Hex.parse(x);
}

function cryptoJSToHex(x) {
	return CryptoJS.enc.Hex.stringify(x);
}

function hex2str(hex) {
	var hex = hex.toString();
	var str = '';
	for (var i = 0; i < hex.length; i += 2)
	str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

function bytesToHex(bytes) {
	for (var hex = [], i = 0; i < bytes.length; i++) {
		hex.push((bytes[i] >>> 4).toString(16));
		hex.push((bytes[i] & 0xF).toString(16));
	}
	return hex.join("");
}

function hexToBytes(hex) {
	for (var bytes = [], c = 0; c < hex.length; c += 2)
	bytes.push(parseInt(hex.substr(c, 2), 16));
	return bytes;
}

function stringToBytes(str) {
	var bytes = [];
	for (var i = 0; i < str.length; ++i) {
		bytes.push(str.charCodeAt(i));
	}
	return bytes;
}