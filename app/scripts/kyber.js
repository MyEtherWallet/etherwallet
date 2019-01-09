const mainKyberNetworkABI = require('./kyberConfig/KyberNetworkABI.json')
const KyberReserveABI = require('./kyberConfig/KyberReserveABI.json')
//todo convert from callbacks to async (or promise)
const kyberFuncs = function () {
    var _this = this
    this.kyberNetworkABI = {}
    for (let i in mainKyberNetworkABI) this.kyberNetworkABI[mainKyberNetworkABI[i].name] = mainKyberNetworkABI[i]
    this.kyberReserveABI = {}
    for (let i in KyberReserveABI) this.kyberReserveABI[KyberReserveABI[i].name] = KyberReserveABI[i]
    this.tokenABIs = {}
    switch (ajaxReq.type) {
        case nodes.nodeTypes.ETH:
            this.nodeType = 'ETH'
            _this.setCurrentNetwork(kyberFuncs.networks.ETH)

            for (let key in kyberFuncs.networkTokenABIs.ETH) {
                this.tokenABIs[key] = {}
                for (let i in kyberFuncs.networkTokenABIs.ETH[key]) {
                    this.tokenABIs[key][kyberFuncs.networkTokenABIs.ETH[key][i].name] = kyberFuncs.networkTokenABIs.ETH[key][i]
                }
            }

            break
        case nodes.nodeTypes.Ropsten:
            this.nodeType = 'ROPSTEN'
            _this.setCurrentNetwork(kyberFuncs.networks.ROPSTEN)

            for (let key in kyberFuncs.networkTokenABIs.ROPSTEN) {
                this.tokenABIs[key] = {}
                for (let i in kyberFuncs.networkTokenABIs.ROPSTEN[key]) {
                    this.tokenABIs[key][kyberFuncs.networkTokenABIs.ROPSTEN[key][i].name] = kyberFuncs.networkTokenABIs.ROPSTEN[key][i]
                }
            }
            break
        default:
            _this.setCurrentNetwork(kyberFuncs.networks.NULL)
            this.tokenABIs = {}
    }
}
kyberFuncs.defaultValues = {
    gasLimit: 300000,
    gasPrice: 2000000000, // 2 Gwei
    maxGasPrice: 30000000000 // 30 Gwei
}
kyberFuncs.priceLoaded = false
kyberFuncs.currRates = {}
kyberFuncs.ETH_TOKEN_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' //todo: this is redundant (look to remove)
kyberFuncs.mainTokens = []
kyberFuncs.networks = {
    ETH: require('./kyberConfig/EthConfig.json'),
    ROPSTEN: require('./kyberConfig/RopConfig.json'),
    NULL: require('./kyberConfig/NullConfig.json'),
}
kyberFuncs.networkTokenABIs = {
    ETH: require('./kyberConfig/EthTokenABIs.json'),
    ROPSTEN: require('./kyberConfig/RopTokenABIs.json'),
    NULL: {}
}

kyberFuncs.kyberUnavailablePhrasing = function (fromCoin, toCoin) {
    let _pair = kyberFuncs.toPairKey(fromCoin, toCoin)
    return `The pair ${_pair} is temporarily unavailable.  Please try again in a moment.`
}

kyberFuncs.prototype.buildPairList = function (tokens) {
    let forRates = {}
    tokens.forEach((_token) => {
        tokens.forEach((_token2) => {
            if (_token !== _token2) {
                forRates[_token + '/' + _token2] = 0
            }
        })
    })
    return forRates
}

kyberFuncs.toPairKey = function (_from, _to) {
    return _from + '/' + _to
}

kyberFuncs.fromPairKey = function (_pairKey) {
    return _pairKey.split('/')
}

kyberFuncs.BnToNumber = function (bn) {
    return bn.toNumber()
}

kyberFuncs.prototype.setCurrentNetwork = function (_network) {
    var _this = this
    if (_network) {

        _this.currentNetwork = _network
        _this.tokenDetails = _network.tokens
        _this.mainTokens = Object.keys(_network.tokens)
        _this.kyberRates = this.buildPairList(_this.mainTokens)
        if (this.nodeType === 'ETH') {
            _this.getMainNetAddress()
        } else {
            _this.KyberNetworkAddress = _network.network
        }
    }
}

kyberFuncs.prototype.getMainNetAddress = function () {
    var _this = this
    let ens = new window.ens()
    ens.getAddress('kybernetwork.eth', function (data) {
        _this.KyberNetworkAddress = data.data
        _this.currentNetwork.network = _this.KyberNetworkAddress
    })
}

kyberFuncs.prototype.setDefaultValues = function (_network) {
    var _this = this
    // kyberFuncs.defaultValues.maxGasPrice = _network["max gas price"] ? _network["max gas price"] : 50000000000;// 50 Gwei
}

kyberFuncs.prototype.setCurrentTokenABIs = function (_tokenABIs) {
    var _this = this
    _this.tokenABIs = _tokenABIs
}

kyberFuncs.prototype.getKyberNetworkAddress = function () {
    var _this = this
    var kyberAddressExists = (_this.KyberNetworkAddress !== '' && _this.KyberNetworkAddress !== undefined && _this.KyberNetworkAddress !== null)
    return kyberAddressExists ? _this.KyberNetworkAddress : _this.currentNetwork.network
}

kyberFuncs.prototype.getTokenAddress = function (_token) {
    var _this = this
    return _this.tokenDetails[_token].address
}

kyberFuncs.prototype.getTokenList = function () {
    var _this = this
    return _this.mainTokens.filter(_tok => _tok !== 'ETH')
}

kyberFuncs.prototype.getDataString = function (func, inputs) {
    var fullFuncName = ethUtil.solidityUtils.transformToFullName(func)
    var funcSig = ethFuncs.getFunctionSignature(fullFuncName)
    var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName)
    var types = typeName.split(',')
    types = types[0] == '' ? [] : types
    return '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, inputs)
}

kyberFuncs.prototype.findBestRate = function (srcToken, destToken, srcQty, callback) {
    /*returns (uint expectedRate, uint slippageRate)*/
    var _this = this
    var srcTokenAddress = _this.getTokenAddress(srcToken)
    var destTokenAddress = _this.getTokenAddress(destToken)
    var funcABI = _this.kyberNetworkABI.findBestRate
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [srcTokenAddress, destTokenAddress, srcQty])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })

            data.data = {
                'bestReserve': ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0].toString(), // NOTE: was toNumber()
                'bestRate': ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[1].toString() // NOTE: was toNumber()
            }
            callback(data)
        }
    })
}

kyberFuncs.prototype.ethCall = function (funcABI, inputArray) {
    var _this = this
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, inputArray)
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0]
            callback(data)
        }
    })
}

kyberFuncs.prototype.setKyberRate = function (_from, _to) {
    var _this = this
    return new Promise((resolve, reject) => {
        _this.getExpectedRate(_from, _to, 1, (_results) => {
            let _returnedRate = _this.convertToTokenBase(_results.data.expectedRate, 'ETH')
            _this.kyberRates[kyber.toPairKey(_from, _to)] = _returnedRate
            _this.priceLoaded = true
            resolve(_returnedRate)
        })
    })
}

kyberFuncs.prototype.refreshRates = function () {
    var _this = this

    let keys = Object.keys(_this.kyberRates)
    keys.forEach(function (_key) {
        let pairContents = kyberFuncs.fromPairKey(_key)
        let fromToken = pairContents[0]
        let toToken = pairContents[1]
        _this.getExpectedRate(fromToken, toToken, 1, (_results) => {
            //
            _this.kyberRates[_key] = _this.convertToTokenBase(_results.data.expectedRate, 'ETH')
        })
    })
    _this.priceLoaded = true
}

// For tokens with less than 18 decimals convert the raw balance to use 18 decimals for comparison (i.e. the values are converted to eth like decimals) [temporary]
// Todo: convert all conversion points to use convertToTokenWei or convertToTokenBase

kyberFuncs.prototype.convertToTokenWei = function (_value, _token) {
    var _this = this
    if (_value == '' || _value == undefined) {
        _value = 0
    }
    let decimal = _this.tokenDetails[_token].decimals
    if (decimal < 18) {
        return new BigNumber(String(_value)).times(new BigNumber(10).pow(decimal)).toString()
    } else {
        return etherUnits.toWei(_value, 'ether')
    }

}

kyberFuncs.prototype.convertToTokenBase = function (_value, _token) {
    var _this = this
    if (_value == '' || _value == undefined) {
        _value = 0
    }
    let decimal = _this.tokenDetails[_token].decimals
    if (decimal < 18) {
        let numnum = new BigNumber(String(_value)).div(new BigNumber(10).pow(decimal)).toString() // NOTE: was toNumber()

        return numnum
    } else {
        return etherUnits.toEther(_value, 'wei')
    }
}

kyberFuncs.prototype.getBalance = async function (_token, userAddress, callback) {
    var _this = this
    // returns int
    var _tokenAddress = _this.getTokenAddress(_token)
    var funcABI = _this.kyberNetworkABI.getBalance
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [_tokenAddress, userAddress])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })

            // console.log(data.data)
            // was returning a number rounded, thus
            // data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0].toNumber();
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0].toString()
            callback(data)
        }
    })
}

/*ERC20 src, ERC20 dest, uint srcQty*/
// rate/10**18between 1 eth and 1 token base
kyberFuncs.prototype.getExpectedRate = function (srcToken, destToken, srcQty /* In ETH or Whole Token*/, callback) {
    var _this = this
    // returns int
    var srcTokenAddress = _this.getTokenAddress(srcToken)
    var destTokenAddress = _this.getTokenAddress(destToken)
    var valueInWei = _this.convertToTokenWei(srcQty, srcToken)
    var funcABI = this.kyberNetworkABI.getExpectedRate
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [srcTokenAddress, destTokenAddress, valueInWei])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })

            data.data = {
                'expectedRate': ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0].toString(), // NOTE: was toNumber()
                'slippageRate': ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[1].toString() // NOTE: was  toNumber()
            }
            callback(data)
        }
    })
}

kyberFuncs.prototype.getUserCapInWei = function (address, callback) {
    var _this = this
    // returns int
    var funcABI = _this.kyberNetworkABI.getUserCapInWei
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [address])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })

            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0]
            callback(data)
        }
    })
}

kyberFuncs.prototype.checkUserCap = function (_userAddress, swapValue /* In ETH or Whole Token*/, isFrom, callback) {
    var _this = this
    let weiValue = _this.convertToTokenWei(swapValue, 'ETH')

    _this.getUserCapInWei(_userAddress, function (data) {
        let numberAsBN = new BigNumber(weiValue)
        let nineFivePct = data.data.times(0.95)
        let nineFivePctUserCap = _this.convertToTokenWei(nineFivePct, 'ETH')
        if (nineFivePct.gt(numberAsBN)) {
            callback({
                error: false,
                data: {
                    isFrom: isFrom,
                    userCap: nineFivePctUserCap,
                    originalValue: swapValue,
                    result: nineFivePct.gt(numberAsBN)
                }
            })
        } else {
            callback({
                error: true,
                data: {
                    isFrom: isFrom,
                    userCap: nineFivePctUserCap,
                    originalValue: swapValue,
                    result: nineFivePct.gt(numberAsBN)
                }
            })
        }
    })
}

kyberFuncs.prototype.kyberNetworkState = async function (callback) {
    var _this = this
    var funcABI = _this.kyberNetworkABI.enabled
    ajaxReq.getEthCall({
        to: _this.currentNetwork.network,
        data: _this.getDataString(funcABI, [''])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })
            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0]

            callback(data)
        }
    })
}

kyberFuncs.prototype.approveKyber = function (srcToken, value) {
    var _this = this
    var funcABI
    if (_this.tokenABIs[srcToken]) {
        funcABI = _this.tokenABIs[srcToken].approve
    } else {
        funcABI = _this.tokenABIs['ERC20'].approve
    }

    var weiValue = _this.convertToTokenWei(value, srcToken)
    return _this.getDataString(funcABI, [_this.getKyberNetworkAddress(), weiValue])
}

kyberFuncs.prototype.allowance = function (_srcToken, userAddress, callback) {
    var _this = this

    var funcABI
    if (_this.tokenABIs[_srcToken]) {
        funcABI = _this.tokenABIs[_srcToken].allowance
    } else {
        funcABI = _this.tokenABIs['ERC20'].allowance
    }
    // var funcABI = _this.tokenABIs[_srcToken].allowance;

    var srcTokenAddress = _this.getTokenAddress(_srcToken)

    ajaxReq.getEthCall({
        to: srcTokenAddress,
        data: _this.getDataString(funcABI, [userAddress, _this.getKyberNetworkAddress()])
    }, function (data) {
        if (data.error) callback(data)
        else {
            var outTypes = funcABI.outputs.map(function (i) {
                return i.type
            })

            data.data = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''))[0].toString() // NOTE: was toNumber()

            callback(data)
        }
    })
}

kyberFuncs.prototype.getTradeData = function (swapOrder, minRate) {
    var _this = this
    if (minRate && minRate > 0) {
        var funcABI = _this.kyberNetworkABI.trade
        var srcTokenAddress = _this.getTokenAddress(swapOrder.fromCoin)
        var destTokenAddress = _this.getTokenAddress(swapOrder.toCoin)
        let walletId = '0x4247951c2eb6d0bA38d233fe7d542c8c80c9d46A'
        let minConversionRate = _this.convertToTokenWei(minRate, 'ETH') // Uses slippagePrice with fallback to MarketRate.  1 => Market Rate, but we could also set this as the quoted rate
        let srcAmount = _this.convertToTokenWei(swapOrder.fromVal, swapOrder.fromCoin) //etherUnits.toWei(swapOrder.fromVal, "ether");
        let maxDestAmount = 2 ** 200 //100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000; // Really big number (like a googol)

        if (swapOrder.toAddress) {
            return _this.getDataString(funcABI, [srcTokenAddress, srcAmount, destTokenAddress, swapOrder.toAddress, maxDestAmount, minConversionRate, walletId])
        } else {
            uiFuncs.notifier.danger(' No Deposit address specified')
        }
    } else {
        uiFuncs.notifier.danger(`No Rate Available for pair ${swapOrder.fromCoin}/${swapOrder.toCoin} with source quantity ${swapOrder.fromVal}`)
    }
}

module.exports = kyberFuncs
