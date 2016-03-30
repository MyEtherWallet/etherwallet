var digixContract = "0xf0160428a8552ac9bb7e050d90eeade4ddd52843";
var digixUserInfo = {to: digixContract , data: "0x1959a002000000000000000000000000"};
function bindDigixElements() {
	$("#accountBalance").bind("DOMSubtreeModified", function() {
        var obj = digixUserInfo; 
        obj.data = obj.data+$("#accountAddress").html().toLowerCase().replace('0x', '');
		getEthCall(obj, function(data) {
			if (data.error) {
				$("#decryptStatus").html(data.msg);
			} else {
                digixObj = processDigixInfo(data.data);
                $("#Dcentstotal").html(digixObj.centstotal);
                $("#Dweitotal").html(digixObj.weitotal);
                $("#Dshare").html(digixObj.share);
                $("#Dbadges").html(digixObj.badges);
                $("#Dclaimed").html(digixObj.claimed.toString());
			}
		});
	});
}
function processDigixInfo(data){
    data = data.replace('0x','');
    var values = data.match(/.{1,64}/g);
    var digixObj = {centstotal: new BigNumber('0x'+values[0]).div(100).toString(),
                    weitotal: new BigNumber('0x'+values[1]).div(getValueOfUnit('ether')).toString(),
                    share: new BigNumber('0x'+values[2]).div(1000000000).toString(),
                    badges: new BigNumber('0x'+values[3]).toString(),
                    claimed: new BigNumber('0x'+values[4]).toString()== '1'};
    return digixObj;
}