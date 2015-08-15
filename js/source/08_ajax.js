var SERVERURL = "http://74.207.253.190/github/etherwallet/php_json_relay/api.php";
function getBalance(addr, callback){
    $.post( SERVERURL, { balance: addr }).done(callback);
}
function sendRawTx(rawTx, callback){
    $.post( SERVERURL, { rawtx: rawTx }).done(callback);
}