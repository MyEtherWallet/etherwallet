'use strict';
var contractsCtrl = function($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.visibility = "interactView";
    //$scope.sendContractModal = new Modal(document.getElementById('sendContract'));
    //$scope.sendContractModal.open();
    $scope.showReadWrite = false;
    $scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
    $scope.tx = {
        gasLimit: '',
        data: '',
        to: '',
        unit: "ether",
        value: 0,
        nonce: null,
        gasPrice: null
    }
    $scope.contract = {
        address: '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5',
        abi: '[{"name":"allowance","type":"function","constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"approve","type":"function","constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"balanceOf","type":"function","constant":true,"inputs":[{"name":"address","type":"address"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"decimals","type":"function","constant":true,"inputs":[],"outputs":[{"name":"out","type":"uint256"}]},{"name":"getSeeded","type":"function","constant":true,"inputs":[],"outputs":[{"name":"out","type":"bool"}]},{"name":"name","type":"function","constant":true,"inputs":[],"outputs":[{"name":"out","type":"uint256"}]},{"name":"setSaleDistribution","type":"function","constant":false,"inputs":[{"name":"addresses","type":"address[]"},{"name":"balances","type":"uint256[]"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"symbol","type":"function","constant":true,"inputs":[],"outputs":[{"name":"out","type":"uint256"}]},{"name":"totalSupply","type":"function","constant":true,"inputs":[],"outputs":[{"name":"out","type":"uint256"}]},{"name":"transfer","type":"function","constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"fxpValue","type":"uint256"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"transferFrom","type":"function","constant":false,"inputs":[{"name":"from","type":"address"},{"name":"receiver","type":"address"},{"name":"fxpValue","type":"uint256"}],"outputs":[{"name":"out","type":"uint256"}]},{"name":"Approval(address,address,uint256)","type":"event","inputs":[{"name":"owner","type":"address","indexed":true},{"name":"spender","type":"address","indexed":true},{"name":"fxpValue","type":"uint256","indexed":false}]},{"name":"Transfer(address,address,uint256)","type":"event","inputs":[{"name":"from","type":"address","indexed":true},{"name":"to","type":"address","indexed":true},{"name":"value","type":"uint256","indexed":false}]}]',
        functions: [],
        selectedFunc: null

    }
    $scope.Validator = Validator;
    $scope.showRaw = false;
    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
    });
    $scope.$watch('tx', function(newValue, oldValue) {
        $scope.showRaw = false;
    }, true);
    $scope.$watch('[tx.data]', function() {
        if ($scope.Validator.isValidHex($scope.tx.data) && $scope.tx.data != '') {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function() {
                $scope.estimateGasLimit();
            }, 500);
        }
    }, true);
    $scope.estimateGasLimit = function() {
        var estObj = {
            from: globalFuncs.donateAddress,
            value: '0x00',
            data: ethFuncs.sanitizeHex($scope.tx.data)
        }
        ethFuncs.estimateGas(estObj, function(data) {
            if (!data.error) $scope.tx.gasLimit = data.data;
        });
    }
    $scope.generateTx = function() {
        try {
            if ($scope.wallet == null) throw globalFuncs.errorMsgs[3];
            else if (!ethFuncs.validateHexString($scope.tx.data)) throw globalFuncs.errorMsgs[9];
            else if (!globalFuncs.isNumeric($scope.tx.gasLimit) || parseFloat($scope.tx.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
            $scope.tx.data = ethFuncs.sanitizeHex($scope.tx.data);
            ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
                if (data.error) throw data.msg;
                data = data.data;
                $scope.tx.to = '0xCONTRACT';
                $scope.tx.contractAddr = ethFuncs.getDeteministicContractAddress($scope.wallet.getAddressString(), data.nonce);
                var txData = uiFuncs.getTxData($scope);
                uiFuncs.generateTx(txData, function(rawTx) {
                    if (!rawTx.isError) {
                        $scope.rawTx = rawTx.rawTx;
                        $scope.signedTx = rawTx.signedTx;
                        $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
                        $scope.showRaw = true;
                    } else {
                        $scope.showRaw = false;
                        $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(rawTx.error));
                    }
                });
            });
        } catch (e) {
            $scope.deployContractStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
        }
    }
    $scope.sendTx = function() {
        $scope.sendTxModal.close();
        uiFuncs.sendTx($scope.signedTx, function(resp) {
            if (!resp.isError) {
                $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br /><a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'> ETH TX via EtherScan.io </a> & Contract Address <a href='http://etherscan.io/address/" + $scope.tx.contractAddr + "' target='_blank'>" + $scope.tx.contractAddr + "</a>"));
            } else {
                $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
            }
        });
    }
    $scope.setVisibility = function(str) {
        $scope.visibility = str;
    }
    $scope.selectFunc = function(index) {
        $scope.contract.selectedFunc = { name: $scope.contract.functions[index].name, index: index };
        $scope.dropdown = !$scope.dropdown;
    }
    $scope.readFromContract = function() {
        var curFunc = $scope.contract.functions[$scope.contract.selectedFunc.index];
        var fullFuncName = ethUtil.solidityUtils.transformToFullName(curFunc);
        var funcSig = ethFuncs.getFunctionSignature(fullFuncName);
        var typeName = ethUtil.solidityUtils.extractTypeName(fullFuncName);
        var types = typeName.split(',');
        types = types[0] == "" ? [] : types;
        var values = [];
        for (var i in curFunc.inputs) {
            if (curFunc.inputs[i].value) {
                if (curFunc.inputs[i].type.indexOf('[') !== -1 && curFunc.inputs[i].type.indexOf(']') !== -1) values.push(curFunc.inputs[i].value.split(','));
                else values.push(curFunc.inputs[i].value);
            } else values.push('');
        }
        ajaxReq.getEthCall({ to: $scope.contract.address, data: '0x' + funcSig + ethUtil.solidityCoder.encodeParams(types, values) }, function(data) {
            if (!data.error) {
                var outTypes = curFunc.outputs.map(function(i) {
                    return i.type; });
                var decoded = ethUtil.solidityCoder.decodeParams(outTypes, data.data.replace('0x', ''));
                for(var i in decoded){
                  if(decoded[i] instanceof BigNumber) curFunc.outputs[i].value = decoded[i].toFixed(0);
                  else curFunc.outputs[i].value = decoded[i];
                }
            }

        });
    }
    $scope.initContract = function() {
        try {
            if (!$scope.Validator.isValidAddress($scope.contract.address)) throw globalFuncs.errorMsgs[5];
            else if (!$scope.Validator.isJSON($scope.contract.abi)) throw globalFuncs.errorMsgs[26];
            $scope.contract.functions = [];
            var tAbi = JSON.parse($scope.contract.abi);
            for (var i in tAbi)
                if (tAbi[i].type == "function") $scope.contract.functions.push(tAbi[i]);
            $scope.showReadWrite = true;

        } catch (e) {
            $scope.accessContractStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
        }
    }
}
module.exports = contractsCtrl;
