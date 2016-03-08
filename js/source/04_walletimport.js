function decryptPresaleKey(presaleJson, presalepass) {
	presaleJson = JSON.parse(presaleJson);
	var encSeedBytes = hexToBytes(presaleJson.encseed);
	var iv = hexToCryptoJS(bytesToHex(encSeedBytes.slice(0, 16)));
	var cipherText = hexToCryptoJS(bytesToHex(encSeedBytes.slice(16)));
    var derivedKey = sha256.pbkdf2(stringToBytes(presalepass), stringToBytes(presalepass), 2000, 16);
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
    var privkey = ethPriv.toString();
    if(verifyPrivKey(privkey, presaleJson.ethaddr))
        return privkey;
    else
        throw "Invalid Password";
}

function decryptGethKeyV3(gethJson, password) {
	gethJson = JSON.parse(gethJson);
    if(gethJson.Crypto==null&&gethJson.crypto!=null)
        gethJson.Crypto = gethJson.crypto;
	var iv = gethJson.Crypto.cipherparams.iv;
	var cipherText = gethJson.Crypto.ciphertext;
	var bytesDerivedKey = getKDFKey(gethJson.Crypto, password);
	var bytesDerivedKey16 = hexToBytes(bytesToHex(bytesDerivedKey)).slice(0, 16);
	var decrypted = CryptoJS.AES.decrypt({
		ciphertext: hexToCryptoJS(cipherText)
	}, hexToCryptoJS(bytesToHex(bytesDerivedKey16)), {
		mode: CryptoJS.mode.CTR,
		padding: CryptoJS.pad.ZeroPadding,
		iv: hexToCryptoJS(iv)
	});
    var privkey = cryptoJSToHex(decrypted);
    if(verifyPrivKey(privkey, gethJson.address))
        return privkey;
    else
        throw "Invalid Password";
}
function decryptTxtPrivKey(strkey, password){
    if(strkey.length==128){
        var privatebytes = CryptoJS.AES.decrypt(strkey, password);
        var privkey = hex2str(cryptoJSToHex(privatebytes));
    } else if(strkey.length==132){
        var privatebytes = CryptoJS.AES.decrypt(strkey.substr(0,128), password);
        var privkey = hex2str(cryptoJSToHex(privatebytes));
        var addressHash = strkey.substr(strkey.length-4);
        var address = formatAddress(strPrivateKeyToAddress(privkey), 'hex');
        var generatedHash = cryptoJSToHex(CryptoJS.SHA3(address));
        if(generatedHash.substr(generatedHash.length-4)!=addressHash)
            throw "Invalid Password";
    } else if(strkey.length==64){
        var privkey = strkey;
    } else {
        throw "Error while decrypting your wallet";
    }
    return privkey;
}
function decryptEthWalletJson(ethjson, password){
    ethjson = JSON.parse(ethjson);
    if(ethjson.locked&&ethjson.private.length==128){
        var privatebytes = CryptoJS.AES.decrypt(ethjson.private, password);
        var privkey = hex2str(cryptoJSToHex(privatebytes));
    }else if (ethjson.locked&&ethjson.private.length==132){
        var privatebytes = CryptoJS.AES.decrypt(ethjson.private.substr(0,128), password);
        var privkey = hex2str(cryptoJSToHex(privatebytes));
    }else if(!ethjson.locked&&ethjson.private.length==64){
        var privkey = ethjson.private;
    } else {
        throw "Error while decrypting your wallet";
    }
    if(verifyPrivKey(privkey, formatAddress(ethjson.address, 'raw')))
        return privkey;
    else
        throw "Invalid Password";
}
function walletRequirePass(ethjson){
    var jsonArr;
    try {
        jsonArr = JSON.parse(ethjson);
    } catch(err) {
        throw "not a valid wallet file";
    } 
    if(jsonArr.encseed!=null)
        return true;
    else if(jsonArr.Crypto!=null||jsonArr.crypto!=null)
        return true
    else if(jsonArr.hash!=null&&jsonArr.locked)
        return true;
    else if(jsonArr.hash!=null&&!jsonArr.locked)
        return false;
    else
        throw "Sorry! we dont have a clue what kind of wallet file this is.";
}
function verifyPrivKey(privkey, address){
    if(privkey.length!=64)
        return false;
    if(strPrivateKeyToAddress(privkey)!=address)
        return false;
    else
        return true;
}
function getWalletFilePrivKey(strjson, password){
    var jsonArr = JSON.parse(strjson);
    if(jsonArr.encseed!=null)
        return decryptPresaleKey(strjson, password);
    else if(jsonArr.Crypto!=null||jsonArr.crypto!=null)
        return decryptGethKeyV3(strjson, password);
    else if(jsonArr.hash!=null)
        return decryptEthWalletJson(strjson, password);
    else
        throw "Sorry! we dont have a clue what kind of wallet file this is.";
}
function formatAddress(addr, format){
    if(addr.substr(0, 2) == '0x' && format == 'raw')
        addr = addr.substr(2);  
    if(addr.substr(0, 2) != '0x' && format == 'hex')
        addr = '0x' + addr;
    return addr;
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
    return cryptoJSToHex(decrypted); //doesnt work not sure why, I'll figure it out later
}*/
function strPrivateKeyToAddress(privkey){
    var public = ethUtil.privateToPublic(new Buffer(privkey, 'hex'));
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
function validateEtherAddress(address){
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address))return false;
    else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true;
    else return isChecksumAddress(address);
}
function isChecksumAddress(address) {    
    return address == toChecksumAddress(address);
};
function toChecksumAddress(address) { 
    if (typeof address === 'undefined') return '';
    address = address.toLowerCase().replace('0x','');
    var addressHash = ethUtil.sha3(address).toString('hex');
    var checksumAddress = '0x';
    for (var i = 0; i < address.length; i++ )
        checksumAddress += parseInt(addressHash[i], 16) > 7 ? address[i].toUpperCase() : address[i];
    return checksumAddress;
};
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