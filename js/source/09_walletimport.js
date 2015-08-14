function decryptPresaleKey(presaleJson, presalepass) {
	presaleJson = JSON.parse(presaleJson);
	var encSeedBytes = hexToBytes(presaleJson.encseed);
	var iv = hexToCryptoJS(bytesToHex(encSeedBytes.slice(0, 16)));
	var cipherText = hexToCryptoJS(bytesToHex(encSeedBytes.slice(16)));
    var derivedKey = sha256.pbkdf2(stringToBytes(presalepass), stringToBytes(presalepass), 2000, 16);
	/*var derivedKey = CryptoJS.PBKDF2(presalepass, presalepass, {
		keySize: 512 / 32,
		iterations: 2000,
		hasher: CryptoJS.algo.SHA256 //this is painfully slow
	});*/
	var passbytes = hexToBytes(bytesToHex(derivedKey)).slice(0, 16);
	var plainText = CryptoJS.AES.decrypt({
		ciphertext: cipherText,
	}, hexToCryptoJS(bytesToHex(passbytes)), {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
	var plainTextHex = cryptoJSToHex(plainText);
	plainText = hex2str(plainTextHex);
	var ethPriv = CryptoJS.SHA3(plainText, {
		outputLength: 256
	});
	return ethPriv.toString();
}

function decryptGethKeyV3(gethJson, password) {
	gethJson = JSON.parse(gethJson);
    if(gethJson.Crypto==null&&gethJson.crypto!=null)
        gethJson.Crypto = gethJson.crypto;
	var iv = gethJson.Crypto.cipherparams.iv;
	var cipherText = gethJson.Crypto.ciphertext;
	var bytesDerivedKey = getKDFKey(gethJson.Crypto, password);
	var bytesDerivedKey16 = hexToBytes(bytesToHex(bytesDerivedKey)).slice(0, 16);
    console.log(bytesToHex(bytesDerivedKey16));
	var decrypted = CryptoJS.AES.decrypt({
		ciphertext: hexToCryptoJS(cipherText)
	}, hexToCryptoJS(bytesToHex(bytesDerivedKey16)), {
		mode: CryptoJS.mode.CTR,
		padding: CryptoJS.pad.ZeroPadding,
		iv: hexToCryptoJS(iv)
	});
	return cryptoJSToHex(decrypted);
}

/*function decryptGethKeyV1(gethJson, password){
    gethJson = JSON.parse(gethJson);
	var iv = gethJson.Crypto.cipherparams.iv;
    var cipherText = gethJson.Crypto.ciphertext;
    var bytesDerivedKey = getKDFKey(gethJson.Crypto, password);
    var bytesDerivedKey16 = hexToBytes(bytesToHex(bytesDerivedKey)).slice(0, 16);
    var dkey = CryptoJS.SHA3(hexToCryptoJS(bytesToHex(bytesDerivedKey16)), {
		outputLength: 256
	});
    dkey = hexToBytes(cryptoJSToHex(dkey)).slice(0,16);
    console.log(bytesToHex(dkey));
    var decrypted = CryptoJS.AES.decrypt({
		ciphertext: hexToCryptoJS(cipherText)
	}, hexToCryptoJS(bytesToHex(dkey)), {
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7 ,
		iv: hexToCryptoJS(iv)
	});
    return cryptoJSToHex(decrypted);
}*/
function strPrivateKeyToAddress(privkey){
    var public = ethUtil.privateToPublic(hexToBytes(privkey));
    return ethUtil.publicToAddress(public).toString('hex');
}
function getKDFKey(cryptoJson, password) {
	var salt = hexToBytes(cryptoJson.kdfparams.salt);
	var authArr = stringToBytes(password);
	var dklen = cryptoJson.kdfparams.dklen;
	if (cryptoJson.kdf == "scrypt") {
		var n = cryptoJson.kdfparams.n;
		var r = cryptoJson.kdfparams.r;
		var p = cryptoJson.kdfparams.p;
		var scrypt = scrypt_module_factory(33554432 * 10);
		return scrypt.crypto_scrypt(authArr, salt, n, r, p, dklen);
	} else if(cryptoJson.kdf == "pbkdf2"){
        var c = cryptoJson.kdfparams.c;
        var prf = cryptoJson.kdfparams.prf;
        var derivedKey = sha256.pbkdf2(stringToBytes(password), hexToBytes(cryptoJson.kdfparams.salt), c, dklen);
        /*var derivedKey = CryptoJS.PBKDF2(password, hexToCryptoJS(cryptoJson.kdfparams.salt), {
		  keySize: dklen,
		  iterations: c,
		  hasher: CryptoJS.algo.SHA256 //this is painfully slow
	   });*/
      return derivedKey;
	}
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