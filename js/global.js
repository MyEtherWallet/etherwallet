$( document ).ready(function() {
    bindElements();
});
function bindElements() {
	$("#walgen").click(function() {
		hideAllMainContainers();
		$("#walletgenerator").show();
	});
	$("#bulkgen").click(function() {
		hideAllMainContainers();
		$("#bulkgenerater").show();
	});
    $("#generatewallet").click(function() {
		generateSingleWallet();
	});
    $("#printqr").click(function() {
		printQRcode();
	});
}

function hideAllMainContainers() {
	$("#walletgenerator").hide();
	$("#bulkgenerater").hide();
}
function generateSingleWallet(){
    var password = $("#ethgenpassword").val();
    if(password==""){
        alert("Your forgot the password");
        return;
    }
    $("#generatedWallet").show();
    var acc = new Accounts();
    var newAccountEnc = acc.new(password);
    $("#address").val(newAccountEnc.address);
    var newAccountUnEnc = acc.get(newAccountEnc.address, password);
    $("#privkey").val(newAccountUnEnc.private);
    $("#qrcodeAdd").empty();
    new QRCode($("#qrcodeAdd")[0], {
        text: newAccountEnc.address,
        width: $("#qrcode").width(),
        height: $("#qrcode").width(),
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    $("#qrcode").empty();
    new QRCode($("#qrcode")[0], {
        text: newAccountUnEnc.private,
        width: $("#qrcode").width(),
        height: $("#qrcode").width(),
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    var fileType = "application/json;charset=UTF-8";
    var encblob = new Blob( [ JSON.stringify(newAccountEnc) ], { type: fileType } );
    var unencblob = new Blob( [ JSON.stringify(newAccountUnEnc) ], { type: fileType } );
    $("#encdownload").attr('href',window.URL.createObjectURL(encblob));
    $("#encdownload").attr('download',newAccountEnc.address+'-Encrypted.json');
    $("#unencdownload").attr('href',window.URL.createObjectURL(unencblob));
    $("#unencdownload").attr('download',newAccountEnc.address+'-Unencrypted.json');
}
function printQRcode() {
    var address = $("#address").val();
    var qrsourceprivkey = $("#qrcode").html();
    var qrsourceadd = $("#qrcodeAdd").html();
    var html = "<h4>Address ("+address+")</h4><br/>"+qrsourceadd+"<h4>Private Key</h4></br>"+qrsourceprivkey;
    var win = window.open("about:blank","_blank");
    win.document.write(html);
    win.focus();
    win.print();
}
HTMLElement.prototype.click = function() {
   var evt = this.ownerDocument.createEvent('MouseEvents');
   evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
   this.dispatchEvent(evt);
}