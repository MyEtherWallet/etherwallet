var uts46 = require('idna-uts46');
var registryInterface = require('./ensConfigs/registryABI.json');
var resolverInterface = require('./ensConfigs/resolverABI.json');
var auctionInterface = require('./ensConfigs/auctionABI.json');
var deedInterface = require('./ensConfigs/deedABI.json');
var subDomainInterface = require('./ensConfigs/subDomainABI.json');
var ens = function() {
    var _this = this;
    this.registryABI = {};
    for (var i in registryInterface) this.registryABI[registryInterface[i].name] = registryInterface[i];
    this.resolverABI = {};
    for (var i in resolverInterface) this.resolverABI[resolverInterface[i].name] = resolverInterface[i];
    this.auctionABI = {};
    for (var i in auctionInterface) this.auctionABI[auctionInterface[i].name] = auctionInterface[i];
    this.deedABI = {};
    for (var i in deedInterface) this.deedABI[deedInterface[i].name] = deedInterface[i];
    this.subDomainABI = {};
    for (var i in subDomainInterface) this.subDomainABI[subDomainInterface[i].name] = subDomainInterface[i];
    switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            _this.setCurrentRegistry(ens.registry.ETH);
            break;
        case nodes.nodeTypes.Rinkeby:
            _this.setCurrentRegistry(ens.registry.Rinkeby);
            break;
        case nodes.nodeTypes.Ropsten:
            _this.setCurrentRegistry(ens.registry.ROPSTEN);
            break;
        default:
            _this.setCurrentRegistry(ens.registry.NULL);
    }
};
ens.uts46 = uts46
ens.registry = {
    ETH: require('./ensConfigs/ETHConfig.json'),
    Rinkeby: require('./ensConfigs/RinkebyConfig.json'),
    ROPSTEN: require('./ensConfigs/ROPConfig.json'),
    NULL: {}
};
ens.normalise = function(name) {
    try {
        return uts46.toUnicode(name, {
            useStd3ASCII: true,
            transitional: false
        });
    } catch (e) {
        throw e;
    }
};
ens.modes = {
    open: 0,
    auction: 1,
    owned: 2,
    forbidden: 3,
    reveal: 4,
    notAvailable: 5
};
ens.prototype.setCurrentRegistry = function(_registry) {
    this.curRegistry = _registry;
};
ens.prototype.getRegistryAddress = function() {
    return this.curRegistry.registry;
};

function namehash(name) {
    name = ens.normalise(name);
    var node = Buffer.alloc(32);
    if (name && name != '') {
        var labels = name.split(".");
        for (var i = labels.length - 1; i >= 0; i--) {
            node = ethUtil.sha3(Buffer.concat([node, ethUtil.sha3(labels[i])]));
        }
    }
    return '0x' + node.toString('hex');
}

function subnodehash(name) {
    name = ens.normalise(name);
    return '0x' + ethUtil.sha3(name).toString('hex');
}
ens.getNameHash = function(name) {
    return namehash(name);
};
ens.getSubNodeHash = function(name) {
    return subnodehash(name);
};
ens.prototype.getOwnerResolverAddress = function(funcABI, to, name, callback) {
    var _this = this;
    ajaxReq.getEthCall({
        to: to,
        data: _this.getDataString(funcABI, [namehash(name)])
    }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};
ens.prototype.getDeedOwner = function(to, callback) {
    this.getOwnerResolverAddress(this.deedABI.owner, to, '', callback);
};
ens.prototype.getDeedPreviousOwner = function(to, callback) {
    this.getOwnerResolverAddress(this.deedABI.previousOwner, to, '', callback);
};
ens.prototype.getOwner = function(name, callback) {
    this.getOwnerResolverAddress(this.registryABI.owner, this.getRegistryAddress(), name, callback);
};
ens.prototype.getResolver = function(name, callback) {
    this.getOwnerResolverAddress(this.registryABI.resolver, this.getRegistryAddress(), name, callback);
};
ens.prototype.getAddress = function(name, callback) {
    var _this = this;
    _this.getResolver(name, function(data) {
        if (data.error) callback(data);
        else {
            _this.getOwnerResolverAddress(_this.resolverABI.addr, data.data, name, callback);
        }
    });
};
ens.prototype.getName = function(name, callback) {
    var _this = this;
    name = ens.normalise(name);
    _this.getResolver(name, function(data) {
        if (data.error || data.data == '0x') callback(data);
        else {
            ajaxReq.getEthCall({
                to: data.data,
                data: _this.getDataString(_this.resolverABI.name, [namehash(name)])
            }, function(data) {
                if (data.error || data.data == '0x') callback(data);
                else {
                    var outTypes = _this.resolverABI.name.outputs.map(function(i) {
                        return i.type;
                    });
                    data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
                    callback(data);
                }
            });
        }
    });
};
ens.prototype.resolveAddressByName = function(name, callback) {
    var _this = this;
    name = ens.normalise(name);
    _this.getOwner(name, function(data) {
        if (data.error || data.data == '0x') callback(data);
        else {
            var owner = data.data;
            _this.getName(name, function(data) {
                if (data.error || data.data == '0x') {
                    callback({
                        data: owner,
                        error: false
                    });
                } else {
                    callback({
                        data: data.data,
                        error: false
                    });
                }
            });
        }
    });
};
ens.prototype.getAuctionAddress = function() {
    return this.curRegistry.public.ethAuction;
};
ens.prototype.getStartAuctionData = function(name) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.startAuction;
    return _this.getDataString(funcABI, [name]);
};
ens.prototype.getStartAndBidAuctionData = function(name, sealedHash) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.startAuctionsAndBid;
    return _this.getDataString(funcABI, [
        [name], sealedHash
    ]);
};
ens.prototype.getFinalizeAuctionData = function(name) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.finalizeAuction;
    return _this.getDataString(funcABI, [name]);
};
var isSecretHashed = function(secret) {
    return secret.substring(0, 2) == '0x' && secret.length == 66 && Validator.isValidHex(secret);
};
ens.prototype.getRevealBidData = function(name, value, secret) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    secret = isSecretHashed(secret) ? secret : _this.getSHA3(secret);
    var funcABI = _this.auctionABI.unsealBid;
    return _this.getDataString(funcABI, [name, value, secret]);
};
ens.prototype.getSHA3 = function(str) {
    return '0x' + ethUtil.sha3(str).toString('hex');
};
ens.prototype.getNewBidData = function(sealedHash) {
    var _this = this;
    var funcABI = _this.auctionABI.newBid;
    return _this.getDataString(funcABI, [sealedHash]);
};
ens.prototype.getAuctionEntries = function(name, callback) {
    var _this = this;
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.entries;
    ajaxReq.getEthCall({
        to: _this.curRegistry.public.ethAuction,
        data: _this.getDataString(funcABI, [name])
    }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            var res = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
            data.data = {
                status: res[0].toNumber(),
                deed: res[1],
                registrationDate: new Date(res[2].toNumber() * 1000),
                value: res[3],
                highestBid: res[4]
            };
            callback(data);
        }
    });
};
ens.prototype.shaBid = function(hash, owner, value, saltHash, callback) {
    var _this = this;
    var funcABI = _this.auctionABI.shaBid;
    ajaxReq.getEthCall({
        to: _this.curRegistry.public.ethAuction,
        data: _this.getDataString(funcABI, [hash, owner, value, saltHash])
    }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
};
ens.prototype.getAllowedTime = function(name, callback) {
    var _this = this;
    var funcABI = _this.auctionABI.getAllowedTime;
    name = _this.getSHA3(ens.normalise(name));
    ajaxReq.getEthCall({
        to: _this.curRegistry.public.ethAuction,
        data: _this.getDataString(funcABI, [name])
    }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            data.data = new Date(ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0] * 1000);
            callback(data);
        }
    });
};
ens.prototype.getTransferData = function(name, owner) {
    var _this = this;
    //    name = namehash(ens.normalise(name));
    name = _this.getSHA3(ens.normalise(name));
    var funcABI = _this.auctionABI.transfer;
    return _this.getDataString(funcABI, [name, owner]);
};
ens.prototype.getSetOwnerData = function(name, owner) {
    var _this = this;
    name = namehash(ens.normalise(name));
    var funcABI = _this.registryABI.setOwner;
    return _this.getDataString(funcABI, [name, owner]);
};
ens.prototype.getDataString = function(func, inputs) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func);
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
    var types = typeName.split(',');
    types = types[0] == "" ? [] : types;
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs);
};
ens.prototype.getValidDomains = async function(subdomain) {
    var _this = this;
    subdomain = ens.normalise(subdomain);
    var resp = [];
    return new Promise((resolve, reject) => {
        var counter = 0
        for (var domain of _this.curRegistry.public.subDomain.domains) {
            _this.checkDomain(domain, subdomain).then((data) => {
                resp.push(data)
                counter++
                if (counter == _this.curRegistry.public.subDomain.domains.length)
                    resolve({
                        tld: _this.curRegistry.public.subDomain.tld,
                        names: resp
                    })
            })
        }
    })
}
ens.prototype.getSubDomainBuyData = function(domain, subdomain, sender) {
    var _this = this;
    subdomain = ens.normalise(subdomain);
    var funcABI = _this.subDomainABI.register;
    var dataString = ""
    if (domain.version == "0.9")
        dataString = _this.getDataString(funcABI, [_this.getSHA3(domain.name), subdomain, sender, _this.curRegistry.public.resolver, globalFuncs.donateAddress]);
    else
        dataString = _this.getDataString(funcABI, [_this.getSHA3(domain.name), subdomain, sender, globalFuncs.donateAddress, _this.curRegistry.public.resolver]);
    return dataString;
}
ens.prototype.checkDomain = async function(domain, subdomain) {
    var _this = this
    var funcABI = _this.subDomainABI.query;
    var dataString = _this.getDataString(funcABI, [_this.getSHA3(domain.name), subdomain]);
    return new Promise((resolve, reject) => {
        ajaxReq.getEthCall({
            to: domain.registrar,
            data: dataString
        }, function(data) {
            if (data.error) reject(data);
            else {
                var outTypes = funcABI.outputs.map(function(i) {
                    return i.type;
                });
                data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
                resolve({
                    domain: domain,
                    data: data.data
                });
            }
        });
    })
}
module.exports = ens;
