<?php
header('Access-Control-Allow-Origin: *');
require_once 'libs/jsonRPCClient.php';
$gethRPC = new jsonRPCClient('http://45.79.107.116:8545');
if(isset($_REQUEST['balance'])){
    header('Content-Type: application/json');
    echo getBalance($_REQUEST['balance'],$gethRPC);
} else if(isset($_REQUEST['rawtx'])){
    header('Content-Type: application/json');
    echo sendRawTransaction($_REQUEST['rawtx'],$gethRPC);
} else if(isset($_REQUEST['txdata'])){
    header('Content-Type: application/json');
    echo getTransactionData($_REQUEST['txdata'],$gethRPC);
} else if(isset($_REQUEST['estimatedGas'])){
    header('Content-Type: application/json');
    echo getEstimatedGas($_REQUEST['estimatedGas'],$gethRPC);
} else if(isset($_REQUEST['ethCall'])){
    header('Content-Type: application/json');
    echo getEthCall($_REQUEST['ethCall'],$gethRPC);
}
function getEstimatedGas($txobj, $gethRPC){
    $data = getDefaultResponse();
    try {
        $data['data'] = getRPCResponse($gethRPC->eth_estimateGas($txobj,
        "pending"));
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function getEthCall($txobj, $gethRPC){
    $data = getDefaultResponse();
    try {
        $data['data'] = getRPCResponse($gethRPC->eth_call($txobj,
        "pending"));
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function getTransactionData($addr, $gethRPC){
    $data = getDefaultResponse();
    try {
        $addr = formatAddress($addr);
        $balance = getRPCResponse($gethRPC->eth_getBalance($addr,
            "pending"));
        $nonce = getRPCResponse($gethRPC->eth_getTransactionCount($addr,
            "pending"));
        $gasprice = getRPCResponse($gethRPC->eth_gasPrice());
        $balance=bchexdec($balance);
        $tarr['address'] = $addr;
        $tarr['balance'] = $balance;
        $tarr['nonce'] = $nonce;
        $tarr['gasprice'] = $gasprice;
        $data['data'] = $tarr;
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function getBalance($addr, $gethRPC)
{
    $data = getDefaultResponse();
    try {
        $addr = formatAddress($addr);
        $balancehex = getRPCResponse($gethRPC->eth_getBalance($addr,
            "pending"));
        $balance=bchexdec($balancehex);
        $tarr['address'] = $addr;
        $tarr['balance'] = $balance;
        $tarr['balancehex'] = $balancehex;
        $data['data'] = $tarr;
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function getRPCResponse($result){
    if(isset($result['result'])){
        return $result['result'];
    } else {
        throw new Exception($result['error']['message']);
    }
}
function sendRawTransaction($rawtx,$gethRPC){
    $data = getDefaultResponse();
    try {
        $data['data'] = getRPCResponse($gethRPC->eth_sendRawTransaction($rawtx));
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function formatAddress($addr){
    if (substr($addr, 0, 2) == "0x")
        return $addr;
    else
        return "0x".$addr;
}
function getDefaultResponse(){
    $data['error'] = false;
    $data['msg'] = "";
    $data['data'] = "";
    return $data;
}
function bchexdec($hex)
{
    $dec = 0;
    $len = strlen($hex);
    for ($i = 1; $i <= $len; $i++) {
        $dec = bcadd($dec, bcmul(strval(hexdec($hex[$i - 1])), bcpow('16', strval($len - $i))));
    }
    return $dec;
}
?>