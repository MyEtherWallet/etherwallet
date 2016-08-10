<?php
define("DAO_ADDR", "0xbb9bc244d798123fde783fcc1c72d3bb8c189413");
define("PROPOSAL_COUNT", "0x8d7af473");
define("PROPOSAL_GET", "0x013cf08b");
define("CACHE_FILE", "proposalCache");
header('Access-Control-Allow-Origin: *');
require_once '../libs/jsonRPCClient.php';
$gethRPC = new jsonRPCClient('http://45.79.107.116:8545');
$req = $_REQUEST['req'];
if ($req == "force") {
    $proposals = array();
    $pCount = getProposalCount();
    for ($i = 0; $i <= $pCount; $i++) {
        $proposals[] = array(
            "proposalID" => $i,
            "data" => getProposal($i),
            );
    }
    file_put_contents(CACHE_FILE, json_encode($proposals, JSON_PRETTY_PRINT));
} 
else if ($req == "update") {
    $proposals = json_decode(file_get_contents(CACHE_FILE), 1);
    $pCount = getProposalCount();
    if ($pCount != count($proposals) - 1) {
        for ($i = count($proposals); $i <= $pCount; $i++) {
            $proposals[] = array(
                "proposalID" => $i,
                "data" => getProposal($i),
            );
        }
        file_put_contents(CACHE_FILE, json_encode($proposals, JSON_PRETTY_PRINT));
    }
}
else {
    header('Content-Type: application/json');
    echo file_get_contents(CACHE_FILE);
}
function getProposal($id)
{
    $getProposal = array(
        "data" => PROPOSAL_GET . str_pad(bcdechex($id), 64, "0", STR_PAD_LEFT),
        "to" => DAO_ADDR,
        );
    return json_decode(getEthCall($getProposal, $GLOBALS['gethRPC']), 1)['data'];
}
function getProposalCount()
{
    $getCount = array(
        "data" => PROPOSAL_COUNT,
        "to" => DAO_ADDR,
        );
    return bchexdec(json_decode(getEthCall($getCount, $GLOBALS['gethRPC']), 1)['data']);
}
function getEthCall($txobj, $gethRPC)
{
    $data = getDefaultResponse();
    try {
        $data['data'] = getRPCResponse($gethRPC->eth_call($txobj, "pending"));
    }
    catch (exception $e) {
        $data['error'] = true;
        $data['msg'] = $e->getMessage();
    }
    return json_encode($data);
}
function bchexdec($hex)
{
    $dec = 0;
    $len = strlen($hex);
    for ($i = 1; $i <= $len; $i++) {
        $dec = bcadd($dec, bcmul(strval(hexdec($hex[$i - 1])), bcpow('16', strval($len -
            $i))));
    }
    return $dec;
}
function bcdechex($dec)
{
    $hex = '';
    do {
        $last = bcmod($dec, 16);
        $hex = dechex($last) . $hex;
        $dec = bcdiv(bcsub($dec, $last), 16);
    } while ($dec > 0);
    return $hex;
}
function getDefaultResponse()
{
    $data['error'] = false;
    $data['msg'] = "";
    $data['data'] = "";
    return $data;
}
function getRPCResponse($result)
{
    if (isset($result['result'])) {
        return $result['result'];
    } else {
        throw new Exception($result['error']['message']);
    }
}
?>