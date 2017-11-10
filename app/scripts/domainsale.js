var ens = require('./ens');
var domainsaleInterface = require('./domainsaleConfigs/domainsaleABI.json');

var domainsale = function() {
    var _this = this;
    this.domainsaleABI = {};
    for (var i in domainsaleInterface) this.domainsaleABI[domainsaleInterface[i].name] = domainsaleInterface[i];
    switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            _this.setContractAddress('0xc67247454E720328714C4e17bEC7640572657bEE');
            break;
        case nodes.nodeTypes.Rinkeby:
            _this.setContractAddress('0x00');
            break;
        case nodes.nodeTypes.Ropsten:
            _this.setContractAddress('0xe8E98228Ca36591952Efdf6F645C5B229E6Cf688');
            break;
        default:
            _this.setContractAddress('0x00');
    }
};

domainsale.prototype.setContractAddress = function(_address) {
    this.contractAddress = _address;
};
domainsale.prototype.getContractAddress = function() {
    return this.contractAddress;
};
domainsale.prototype.getSale = function(name, callback) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.sale;
    ajaxReq.getEthCall({ to: _this.getContractAddress(), data: _this.getDataString(funcABI, [name]) }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            var res = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
            
            data.data = {
                price: res[0],
                priceEth: Number(etherUnits.toEther(res[0].toString(), 'wei')),
                reserve: res[1],
                reserveEth: Number(etherUnits.toEther(res[1].toString(), 'wei')),
                lastBid: res[2],
                lastBidEth: Number(etherUnits.toEther(res[2].toString(), 'wei')),
                lastBidder: res[3],
                auctionStarted: new Date(res[4].toNumber() * 1000),
                auctionEnds: new Date(res[5].toNumber() * 1000)
            };
            callback(data);
        }
    });
};
domainsale.prototype.getMinimumBid = function(name, callback) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.minimumBid;
    ajaxReq.getEthCall({ to: _this.getContractAddress(), data: _this.getDataString(funcABI, [name]) }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            var res = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
            
            data.data = {
                minimumBid: res[0],
                minimumBidEth: Number(etherUnits.toEther(res[0].toString(), 'wei'))
            };
            callback(data);
        }
    });
}
domainsale.prototype.getBalance = function(address, callback) {
    var _this = this;
    var funcABI = _this.domainsaleABI.balance;
    ajaxReq.getEthCall({ to: _this.getContractAddress(), data: _this.getDataString(funcABI, [address]) }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            var res = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));

            data.data = {
                balance: res[0],
                balanceEth: Number(etherUnits.toEther(res[0].toString(), 'wei'))
            };
            callback(data);
        }
    });
}

domainsale.prototype.getOfferData = function(name, price, reserve, referrer) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.offer;
    return _this.getDataString(funcABI, [name, price, reserve, referrer]);
};

domainsale.prototype.getBuyData = function(name, referrer) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.buy;
    return _this.getDataString(funcABI, [name, referrer]);
};

domainsale.prototype.getCancelData = function(name) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.cancel;
    return _this.getDataString(funcABI, [name]);
};

domainsale.prototype.getBidData = function(name, referrer) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.bid;
    return _this.getDataString(funcABI, [name, referrer]);
};

domainsale.prototype.getFinishData = function(name) {
    var _this = this;
    name = ens.normalise(name);
    var funcABI = _this.domainsaleABI.finish;
    return _this.getDataString(funcABI, [name]);
};

domainsale.prototype.getWithdrawData = function() {
    var _this = this;
    var funcABI = _this.domainsaleABI.withdraw;
    return _this.getDataString(funcABI, []);
};

domainsale.prototype.getDataString = function(func, inputs) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func);
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
    var types = typeName.split(',');
    types = types[0] == "" ? [] : types;
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs);
};
domainsale.modes = {
        ineligible: 0,
        nottransferred: 1,
        notoffered: 2,
        available: 3,
        auctioning: 4,
        closed: 5
};
domainsale.transactions = {
        transfer: 1,
        offer: 2,
        buy: 3,
        bid: 4,
        cancel: 5,
        withdraw: 6
};
module.exports = domainsale;
