var uts46 = require('idna-uts46');
var registryInterface = require('./ensConfigs/registryABI.json');
var resolverInterface = require('./ensConfigs/resolverABI.json');
var ens = function() {
    var _this = this;
    this.registryABI = {};
    for (var i in registryInterface) this.registryABI[registryInterface[i].name] = registryInterface[i];
    this.resolverABI = {};
    for (var i in resolverInterface) this.resolverABI[resolverInterface[i].name] = resolverInterface[i];
    switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            _this.setCurrentRegistry(ens.registry.ETH);
            break;
        case nodes.nodeTypes.ETC:
            _this.setCurrentRegistry(ens.registry.ETC);
            break;
        case nodes.nodeTypes.Ropsten:
            _this.setCurrentRegistry(ens.registry.ROPSTEN);
            break;
        default:
            _this.setCurrentRegistry(ens.registry.NULL);
    }
}
ens.registry = {
    ETH: require('./ensConfigs/ETHConfig.json'),
    ETC: require('./ensConfigs/ETCConfig.json'),
    ROPSTEN: require('./ensConfigs/ROPConfig.json'),
    NULL: {}
}
ens.normalise = function(name) {
    try {
        return uts46.toUnicode(name, { useStd3ASCII: true, transitional: false });
    } catch (e) {
        uiFuncs.notifier.danger(e.message);
        throw e;
    }
}
ens.prototype.setCurrentRegistry = function(_registry) {
    this.curRegistry = _registry;
}
ens.prototype.getRegistryAddress = function(name) {
    var tld = name.substr(name.lastIndexOf('.') + 1).toLowerCase();
    if(this.curRegistry[tld]) return this.curRegistry[tld].registry;
    else return false;
}

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
ens.getNameHash = function(name) {
    return namehash(name);
}
ens.prototype.getOwnerResolverAddress = function(funcABI, to, name, callback) {
    var _this = this;
    ajaxReq.getEthCall({ to: to, data: _this.getDataString(funcABI, [namehash(name)]) }, function(data) {
        if (data.error) callback(data);
        else {
            var outTypes = funcABI.outputs.map(function(i) {
                return i.type;
            });
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0];
            callback(data);
        }
    });
}
ens.prototype.getOwner = function(name, callback) {
    this.getOwnerResolverAddress(this.registryABI.owner, this.getRegistryAddress(name), name, callback);
}
ens.prototype.getResolver = function(name, callback) {
    this.getOwnerResolverAddress(this.registryABI.resolver, this.getRegistryAddress(name), name, callback);
}
ens.prototype.getAddress = function(name, callback) {
    var _this = this;
    _this.getResolver(name, function(data) {
        if (data.error) callback(data);
        else {
            _this.getOwnerResolverAddress(_this.resolverABI.addr, data.data, name, callback);
        }
    });
}
ens.prototype.getName = function(name, callback) {
    var _this = this;
    _this.getResolver(name, function(data) {
        if (data.error) callback(data);
        else {
            _this.getOwnerResolverAddress(_this.resolverABI.addr, data.data, name, function(data) {
                if (data.error) callback(data);
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
}
ens.prototype.getDataString = function(func, inputs) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func);
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
    var types = typeName.split(',');
    types = types[0] == "" ? [] : types;
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs);
}
module.exports = ens;
