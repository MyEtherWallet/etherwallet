var express = require('express');
var bodyParser = require('body-parser');
var response = require('./response');
var wait = require('wait.for');
var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.get('/api.mew', function(req, res) {
	wait.launchFiber(handleRequest, req, res);
});
app.post('/api.mew', function(req, res) {
	wait.launchFiber(handleRequest, req, res);
});
var handleRequest = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Content-Type', 'application/json');
	req = req.body;
    if(req["isClassic"]===undefined || req["isClassic"]=="false") req["isClassic"] = false;
    if ("balance" in req) res.write(response.getBalance(req["balance"], req["isClassic"]));
    else if ("rawtx" in req) res.write(response.sendRawTransaction(req["rawtx"], req["isClassic"]));
    else if ("txdata" in req) res.write(response.getTransactionData(req["txdata"], req["isClassic"]));
    else if ("estimatedGas" in req) res.write(response.getEstimatedGas(req["estimatedGas"], req["isClassic"]));
    else if ("ethCall" in req) res.write(response.getEthCall(req["ethCall"], req["isClassic"]));
    else res.status(400).send();
    res.end();
}
exports.app = app;