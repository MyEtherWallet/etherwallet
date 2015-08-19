var SERVERURL = "https://rpc.myetherwallet.com/api.php";
function getBalance(addr, callback){
    $.post( SERVERURL, { balance: addr }).done(callback);
}
function getTransactionData(addr, callback){
    $.post( SERVERURL, { txdata: addr }).done(callback);
}
function sendRawTx(rawTx, callback){
    $.post( SERVERURL, { rawtx: rawTx }).done(callback);
}