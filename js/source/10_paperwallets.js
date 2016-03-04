$(document).ready(function() {});

function openPrintPaperWallets(strjson) {
	var win = window.open("about:blank", "_blank");
	data = "<html><head><link rel=\"stylesheet\" href=\"css\/etherwallet-master.min.css\"\/><script type=\"text\/javascript\" src=\"js\/jquery-1.11.3.min.js\"><\/script><script type=\"text\/javascript\" src=\"js\/etherwallet-static.min.js\"><\/script><script type=\"text\/javascript\">function generateWallets(){    var json = JSON.parse($(\"#printwalletjson\").html());    for(var i=0;i<json.length;i++){        var walletTemplate = $(\'<div\/>\').append($(\"#print-container\").clone());        new QRCode($(walletTemplate).find(\"#paperwalletaddqr\")[0], {\t\t  text: json[i][\'address\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t   });       new QRCode($(walletTemplate).find(\"#paperwalletprivqr\")[0], {\t\t  text: json[i][\'private\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t   });       $(walletTemplate).find(\"#paperwalletadd\").html(json[i][\'address\']);       $(walletTemplate).find(\"#paperwalletpriv\").html(json[i][\'private\']);       walletTemplate = $(walletTemplate).find(\"#print-container\").show();       $(\"body\").append(walletTemplate);    }    setTimeout(function(){window.print();},2000);}<\/script><\/head><body><span id=\"printwalletjson\" style=\"display: none;\">{{WALLETJSON}}<\/span><div class=\"print-container\" style=\"display: none; margin-bottom: 28px;\" id=\"print-container\">        <img src=\"images\/logo-1.png\" class=\"ether-logo-1\" height=\"100%\" width=\"auto\"\/>        <img src=\"images\/logo-2.png\" class=\"ether-logo-2\"\/>        <img src=\"images\/ether-title.png\" height=\"100%\" width=\"auto\" class=\"print-title\"\/>          <div class=\"print-qr-code-1\">          <div id=\"paperwalletaddqr\"><\/div>            <p class=\"print-text\" style=\"padding-top: 25px;\">YOUR ADDRESS<\/p>          <\/div>          <div class=\"print-qr-code-2\">            <div id=\"paperwalletprivqr\"><\/div>            <p class=\"print-text\" style=\"padding-top: 30px;\">YOUR PRIVATE KEY<\/p>          <\/div>          <div class=\"print-notes\">            <img src=\"images\/notes-bg.png\" width=\"90%;\" height=\"auto\" class=\"pull-left\" \/>            <p class=\"print-text\">AMOUNT \/ NOTES<\/p>          <\/div>        <div class=\"print-address-container\">          <p>            <strong>Your Address:<\/strong><br \/>            <span id=\"paperwalletadd\"><\/span>          <\/p>          <p>            <strong>Your Private Key:<\/strong><br \/>            <span id=\"paperwalletpriv\"><\/span>        <\/p>    <\/div><\/div><\/body><\/html>";
	data = data.replace("{{WALLETJSON}}", strjson);
	win.document.write(data);
	$(win).ready(function() {
		win.document.write("<script>generateWallets();</script>");
	});
}

function printQRcode() {
	var address = $("#address").val();
	var privkey = $("#privkey").val();
	var jsonarr = [];
	jsonarr.push({
		address: address,
		private: privkey
	});
	openPrintPaperWallets(JSON.stringify(jsonarr));
}