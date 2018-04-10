const mainKyberNetworkABI = require('./kyberConfig/mainABI.json');
//todo convert from callbacks to async (or promise)
const kyberFuncs = function () {
    var _this = this;
    this.kyberNetworkABI = {};
    for (var i in mainKyberNetworkABI) this.kyberNetworkABI[mainKyberNetworkABI[i].name] = mainKyberNetworkABI[i];
    switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            _this.setCurrentNetwork(kyberFuncs.networks.ETH);
            break;
        case nodes.nodeTypes.Ropsten:
            _this.setCurrentNetwork(kyberFuncs.networks.ROPSTEN);
            break;
        default:
            _this.setCurrentNetwork(kyberFuncs.registry.NULL);
    }
};
kyberFuncs.networks = {
    ETH: require('./kyberConfig/EthConfig.json'),
    Ropsten: require('./kyberConfig/RopConfig.json'),
    NULL: {}
};

kyberFuncs.mainTokens = ["ETH", "OMG", "KNC", "POWR", "GIFT",
    "MANA", "REQ", "BAT", "EOS", "SNT", "ELF", "BQX", "SALT", "APPC",
    "RDN", "ENG", "RCN", "ZIL", "LINK", "ADX", "AST"];

/*
kyberFuncs.min = 0.01; // there is a min I'm fairly sure (like
kyberFuncs.max = 3;
*/

kyberFuncs.maxGasPrice = 50000000000; // 50 Gwei
kyberFuncs.ETH_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

kyberFuncs.prototype.setCurrentNetwork = function (_network) {
    var _this = this;
    this.currentNetwork = _network;
    this.tokenDetails = _network.tokens;
    // _this.setTokenDetails(this.currentNetwork.tokens);
}

// kyberFuncs.prototype.setTokenDetails = function(_tokens){
//     var _this = this;
//     Object.keys(_tokens);
// };

kyberFuncs.prototype.getTokenAddress = function(_token){
    var _this = this;
    return _this.tokenDetails[_token].address;
};

kyberFuncs.prototype.getDataString = function (func, inputs, callback) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func);
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
    var types = typeName.split(',');
    types = types[0] == "" ? [] : types;
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs);
};

kyberFuncs.prototype.findBestRate = function (srcToken, destToken, srcQty, callback) {
    /*returns (uint expectedRate, uint slippageRate)*/
    var _this = this;
    var srcTokenAddress = _this.getTokenAddress(srcToken);
    var destTokenAddress = _this.getTokenAddress(destToken);
    var funcABI = this.kyberNetworkABI.findBestRate;
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [srcTokenAddress, destTokenAddress, srcQty])
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });

            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};

kyberFuncs.prototype.ethCall = function(funcABI, inputArray){
    var _this = this;
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, inputArray)
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};


kyberFuncs.prototype.refreshRates = function (fromCoin) {
    var _this = this;
    if (!fromCoin) {
        fromCoin = "ETH"
    }
    let ratePairResult = {"expectedPrice": 0, "slippagePrice": 0};
    let tokenDetails = _this.currentNetwork.tokens;
    let pairs = [];
    var funcABI = this.kyberNetworkABI.findBestRate;
    // this will place a high load on a server (15 calls per token)
    _this.mainTokens.forEach((_tok) => {
        if (_tok !== fromCoin) {
            _this.findBestRate(fromCoin, tokenDetails[_tok], 1, function (_results) {
                // do something with results
            })
        }

    })

}


kyberFuncs.prototype.getRate = async function (to, from, reservedIndex) {
    var _this = this;
    // return rate, expBlock, balance
}


kyberFuncs.prototype.getBalance = async function (_token, userAddress, callback) {
    var _this = this;
    // returns int
    var _tokenAddress = _this.getTokenAddress(_token);
    var funcABI = this.kyberNetworkABI.getBalance;
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [_tokenAddress, userAddress])
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};

/*ERC20 src, ERC20 dest, uint srcQty*/
kyberFuncs.prototype.getExpectedRate = function (srcToken, destToken, srcQty, callback) {
    var _this = this;
    // returns int
    var srcTokenAddress = _this.getTokenAddress(srcToken);
    var destTokenAddress = _this.getTokenAddress(destToken);
    var funcABI = this.kyberNetworkABI.getExpectedRate;
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [srcTokenAddress, destTokenAddress, srcQty])
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });

            console.log("getExpectedRate", ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', '')));
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            console.log("getExpectedRate2", data.data.toNumber());

            callback(data);
        }
    });
};


kyberFuncs.prototype.getUserCapInWei = function (address, callback) {
    var _this = this;
    // returns int
    var funcABI = this.kyberNetworkABI.getUserCapInWei;
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [address])
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};

kyberFuncs.prototype.trade = async function (srcToken, srcAmount, destToken, destAddress, callback) {
    var _this = this;
    var funcABI = this.kyberNetworkABI.trade;
    var srcTokenAddress = _this.getTokenAddress(srcToken);
    var destTokenAddress = _this.getTokenAddress(destToken);
    let walletId = 0; // This could change, but is not a user input value (as far as I can tell)
    let minConversionRate = 1; // 1-> Market Rate, but we could also set this as the quoted rate
    let maxDestAmount = 10 ** 200; //100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000; // Really big number (like a googol)
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [srcTokenAddress, srcAmount, destTokenAddress, destAddress, maxDestAmount, minConversionRate, walletId])
    }, function (data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
}

module.exports = kyberFuncs;
