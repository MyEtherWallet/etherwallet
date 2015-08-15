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
}
function getBalance($addr, $gethRPC)
{
    $data['error'] = false;
    $data['msg'] = "";
    $data['data'] = "";
    try {
        $addr = formatAddress($addr);
        $balance = getHexString($gethRPC->eth_getBalance($addr,
            "latest"));
        if($balance=="ed40d94a820f497e1a")
            throw new Exception('Invalid Address');
        $balance=hexdec($balance);
        $tarr['address'] = $addr;
        $tarr['balance'] = $balance;
        $data['data'] = $tarr;
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = nl2br($e->getMessage());
    }
    return json_encode($data);
}
function sendRawTransaction($rawtx){
    $data['error'] = false;
    $data['msg'] = "";
    $data['data'] = "";
    try {
        $addr = formatAddress($addr);
        $info = getHexString($gethRPC->eth_sendRawTransaction($rawtx));
        $data['data'] = $info;
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = nl2br($e->getMessage());
    }
    return json_encode($data);
}
function getHexString($str)
{
    if (substr($str, 0, 2) == "0x")
        return substr($str, 2);
}

function formatAddress($addr){
    if (substr($addr, 0, 2) == "0x")
        return $addr;
    else
        return "0x".$addr;
}

?>