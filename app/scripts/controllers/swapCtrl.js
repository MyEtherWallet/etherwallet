'use strict';
var swapCtrl = function ($scope, $sce, walletService) {
    var lStorageKey = "swapOrder";
    $scope.ajaxReq = ajaxReq;
    $scope.showedMinMaxError = false;
    $scope.Validator = Validator;
    $scope.bity = new bity();
    $scope.kyber = new kyber();

    $scope.kyber.refreshRates();


    $scope.demoKyber = function () {
        // $scope.kyber.getExpectedRate("ETH", "OMG", 1, function(result){
        //     console.log(result);
        // } )
        $scope.openKyberOrder();
    };

    $scope.showInToList = function(coin){
        if(coin !== $scope.swapOrder.fromCoin){
            if($scope.kyber.mainTokens.indexOf(coin) >= 0 && coin !== "ETH"){
                return $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, coin)] !== 0;
            }
            return true;
        }
        return false;
    };
    $scope.showInFromList = function(coin){
        if(coin !== 'REP'){
            if($scope.kyber.mainTokens.indexOf(coin) >= 0 && coin !== "ETH"){
                return $scope.kyber.kyberRates[kyber.toPairKey(coin, $scope.swapOrder.toCoin)] !== 0;
            }
            return true;
        }
        return false;
    };


    setInterval(function () {
        $scope.bity.refreshRates();
        $scope.kyber.refreshRates();
    }, 30000);
    $scope.priceTicker = {ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1};



    $scope.availableCoins = ["ETH", "BTC", "REP"];
    $scope.availableTokens = ["OMG", "KNC", "POWR", "GIFT",
        "MANA", "REQ", "BAT", "EOS", "SNT", "ELF", "BQX", "SALT", "APPC",
        "RDN", "ENG", "RCN", "ZIL", "LINK", "ADX", "AST"];
    $scope.availableOptions = [...$scope.availableCoins, ...$scope.availableTokens];
    $scope.availableFromOptions = $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];

    var initValues = function () {
        $scope.bity.refreshRates(function () {
            $scope.setOrderCoin(true, "ETH");
        });
        $scope.kyberPriceTicker = {};
        Object.keys($scope.kyber.kyberRates).forEach(kkey => {
            $scope.kyberPriceTicker[kkey] = 1
        });

        $scope.showStage1 = true;
        $scope.showStage2 = $scope.showStage3Eth = $scope.showStage3Btc = false;
        $scope.showStage2Kyber = $scope.showStage3Kyber = false;
        $scope.isKyberSwap = true;
        $scope.orderResult = null;
        $scope.swapOrder = {
            fromCoin: "ETH",
            toCoin: "BTC",
            isFrom: true,
            fromVal: '',
            toVal: '',
            toAddress: '',
            swapRate: '',
            swapPair: ''
        }
    };


    $scope.verifyMinMaxValues = function () {
        if ($scope.swapOrder.toVal == '' || $scope.swapOrder.fromVal == '' || $scope.swapOrder.toVal == '0' || $scope.swapOrder.fromVal == '0' || $scope.showedMinMaxError) return false;
        var errors = {
            priceNotLoaded: 0,
            lessThanMin: 1,
            greaterThanMax: 2,
            noErrors: 3
        }
        var verify = function () {
            if (!$scope.bity.priceLoaded) return errors.priceNotLoaded;
            else if ($scope.swapOrder.toVal < bity.min || $scope.swapOrder.fromVal < bity.min) return errors.lessThanMin;
            else if (($scope.swapOrder.toCoin == "BTC" && $scope.swapOrder.toVal > bity.max) || ($scope.swapOrder.fromCoin == "BTC" && $scope.swapOrder.fromVal > bity.max)) return errors.greaterThanMax;
            else if (($scope.swapOrder.toCoin == "ETH" && $scope.swapOrder.toVal * $scope.bity.curRate['ETHBTC'] > bity.max) || ($scope.swapOrder.fromCoin == "ETH" && $scope.swapOrder.fromVal * $scope.bity.curRate['ETHBTC'] > bity.max)) return errors.greaterThanMax;
            else if (($scope.swapOrder.toCoin == "REP" && $scope.swapOrder.toVal * $scope.bity.curRate['REPBTC'] > bity.max) || ($scope.swapOrder.fromCoin == "REP" && $scope.swapOrder.fromVal * $scope.bity.curRate['REPBTC'] > bity.max)) return errors.greaterThanMax;
            return errors.noErrors;
        }
        var vResult = verify();
        if (vResult == errors.noErrors) return true;
        else if (vResult == errors.priceNotLoaded) return false;
        else if (vResult == errors.lessThanMin || vResult == errors.greaterThanMax) {
            if (!isStorageOrderExists()) {
                uiFuncs.notifier.danger((globalFuncs.errorMsgs[27] + bity.max + " BTC, " + (bity.max / $scope.bity.curRate['ETHBTC']).toFixed(3) + " ETH, or " + (bity.max / $scope.bity.curRate['REPBTC']).toFixed(3) + " REP"), 2500);
                $scope.showedMinMaxError = true;
            }
            return false;
        }
    };


    // $scope.selectableOption = 0;
    // $scope.setOrderCoin = function (isFrom, coin) {
    //     if ($scope.availableTokens.indexOf(coin) >= 0) {
    //         $scope.isKyberSwap = true;
    //         $scope.availableOptions = ["ETH", ...$scope.availableTokens];
    //         // $scope.availableOptions.slice($scope.availableOptions.indexOf("BTC"), 1);
    //         // $scope.availableOptions.slice($scope.availableOptions.indexOf("REP"), 1);
    //         $scope.setKyberOrderCoin(isFrom, coin);
    //     } else {
    //         if(coin !== "ETH" && !isFrom){
    //             $scope.isKyberSwap = false;
    //             $scope.availableOptions = $scope.availableCoins;
    //         }
    //         if(coin === "ETH" && isFrom){
    //             $scope.isKyberSwap = false;
    //             $scope.availableOptions = [...$scope.availableCoins, ...$scope.availableTokens];
    //         }
    //
    //         if (isFrom) {
    //             $scope.swapOrder.fromCoin = coin;
    //         } else {
    //             $scope.swapOrder.toCoin = coin;
    //         }
    //         if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
    //             for (var i in $scope.availableOptions)
    //                 if ($scope.availableOptions[i] != $scope.swapOrder.fromCoin) {
    //                     $scope.swapOrder.toCoin = $scope.availableOptions[i];
    //                     break;
    //                 }
    //         $scope.swapOrder.swapRate = $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin];
    //         $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
    //         $scope.updateEstimate(isFrom);
    //         $scope.dropdownFrom = $scope.dropdownTo = false;
    //     }
    //
    // };


    // This setup isn't letting me change the initial from coin without some playing with combinations.
    // (Like having to select a to token first, [or just another to token to start]
    // ALSO, It is NOT preventing duplicates
    $scope.setOrderCoin = function (isFrom, coin) {
        let bityOptions = ["ETH", "REP", "BTC"];
        if(isFrom){
            if(coin === "BTC"){
                $scope.availableToOptions = ["ETH", "REP"];
                if($scope.swapOrder.toCoin !== "ETH" || $scope.swapOrder.toCoin !== "REP" ){
                    if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
                        for (var i in bityOptions)
                            if (bityOptions[i] != $scope.swapOrder.fromCoin) {
                                $scope.swapOrder.toCoin = bityOptions[i];
                                break;
                            }
                }
                $scope.swapOrder.fromCoin = coin;
            }
            if(coin === "ETH"){
                $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                $scope.availableFromOptions.slice($scope.availableFromOptions.indexOf("ETH"));
                $scope.swapOrder.fromCoin = coin;
            }
            if ($scope.availableTokens.indexOf(coin) >= 0) {
                // if a token is selected as the starting coin. Then default to ETH as the ending coin if either BTC or REP is currently selected
                if(($scope.swapOrder.toCoin === "BTC") || ($scope.swapOrder.toCoin === "REP")){
                    $scope.swapOrder.toCoin = "ETH";
                }
                $scope.availableToOptions = ["ETH", ...$scope.availableTokens];
                $scope.availableFromOptions.slice($scope.availableFromOptions.indexOf(coin));
                if($scope.swapOrder.fromCoin !== $scope.swapOrder.toCoin){
                    $scope.swapOrder.fromCoin = coin;
                }
            }
        } else {
            if ($scope.availableTokens.indexOf(coin) >= 0) {
                if($scope.swapOrder.fromCoin !== $scope.swapOrder.toCoin){
                    $scope.swapOrder.toCoin = coin;
                }
            } else {
                $scope.swapOrder.toCoin = coin;
            }

        }

        if(bityOptions.indexOf($scope.swapOrder.toCoin) > -1 && bityOptions.indexOf($scope.swapOrder.fromCoin) > -1){
                if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
                    for (var i in bityOptions)
                        if (bityOptions[i] != $scope.swapOrder.fromCoin) {
                            $scope.swapOrder.toCoin = bityOptions[i];
                            break;
                        }
            $scope.setBityOrderCoin(isFrom);
        } else {
            $scope.setKyberOrderCoin(isFrom);
        }


        // if ($scope.availableTokens.indexOf(coin) >= 0) {
        //     $scope.isKyberSwap = true;
        //     $scope.availableOptions = ["ETH", ...$scope.availableTokens];
        //     // $scope.availableOptions.slice($scope.availableOptions.indexOf("BTC"), 1);
        //     // $scope.availableOptions.slice($scope.availableOptions.indexOf("REP"), 1);
        //     $scope.setKyberOrderCoin(isFrom, coin);
        // } else {
        //     if(coin !== "ETH" && !isFrom){
        //         $scope.isKyberSwap = false;
        //         $scope.availableOptions = $scope.availableCoins;
        //     }
        //     if(coin === "ETH" && isFrom){
        //         $scope.isKyberSwap = false;
        //         $scope.availableOptions = [...$scope.availableCoins, ...$scope.availableTokens];
        //     }
        //
        //     if (isFrom) {
        //         $scope.swapOrder.fromCoin = coin;
        //     } else {
        //         $scope.swapOrder.toCoin = coin;
        //     }
        //     if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
        //         for (var i in $scope.availableOptions)
        //             if ($scope.availableOptions[i] != $scope.swapOrder.fromCoin) {
        //                 $scope.swapOrder.toCoin = $scope.availableOptions[i];
        //                 break;
        //             }
        //
        // }

    };

    $scope.swapCoinOrders = function(){
        if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
            for (var i in $scope.availableOptions)
                if ($scope.availableOptions[i] != $scope.swapOrder.fromCoin) {
                    $scope.swapOrder.toCoin = $scope.availableOptions[i];
                    break;
                }
    }

    $scope.setBityOrderCoin = function (isFrom) {
        $scope.swapOrder.swapRate = $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    }




    $scope.setKyberOrderCoin = function (isFrom) {
        // if a token is selected as the starting coin. Then default to ETH as the ending coin if either BTC or REP is currently selected
        // if(($scope.swapOrder.toCoin === "BTC") || ($scope.swapOrder.toCoin === "REP")){
        //     $scope.swapOrder.toCoin = "ETH";
        // }

        // if (isFrom) {
        //     $scope.swapOrder.fromCoin = coin;
        // } else {
        //     $scope.swapOrder.toCoin = coin;
        // }
        // if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
        //     for (var i in $scope.availableOptions)
        //         if ($scope.availableOptions[i] != $scope.swapOrder.fromCoin) {
        //             $scope.swapOrder.toCoin = $scope.availableOptions[i];
        //             break;
        //         }

        $scope.swapOrder.swapRate = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin , $scope.swapOrder.toCoin)];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateKyberEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    };

    $scope.updateEstimate = function (isFrom) {
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin]).toFixed(bity.decimals));
        $scope.swapOrder.isFrom = isFrom;
    }
    $scope.setFinalPrices = function () {
        $scope.showedMinMaxError = false;
        if ($scope.isKyberSwap ) {
            $scope.setKyberFinalPrices();
        } else {
            try {

                if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];
                else if (!$scope.verifyMinMaxValues()) throw globalFuncs.errorMsgs[27];
                $scope.updateEstimate($scope.swapOrder.isFrom);
                $scope.showStage1 = false;
                $scope.showStage2 = true;
            } catch (e) {
                $scope.notifier.danger(e);
            }

        }

    }

    var getProgressBarArr = function (index, len) {
        var tempArr = [];
        for (var i = 0; i < len; i++) {
            if (i < index) tempArr.push('progress-true');
            else if (i == index) tempArr.push('progress-active');
            else tempArr.push('');
        }
        return tempArr;
    }
    var isStorageOrderExists = function () {
        var order = globalFuncs.localStorage.getItem(lStorageKey, null);
        return order && $scope.Validator.isJSON(order);
    }
    var setOrderFromStorage = function () {
        var order = JSON.parse(globalFuncs.localStorage.getItem(lStorageKey, null));
        $scope.orderResult = order;
        $scope.swapOrder = order.swapOrder;
        processOrder();
    }
    var saveOrderToStorage = function (order) {
        globalFuncs.localStorage.setItem(lStorageKey, JSON.stringify(order));
    }
    var processOrder = function () {
        var orderResult = $scope.orderResult;
        orderResult.progress = {
            status: "OPEN",
            bar: getProgressBarArr(1, 5),
            showTimeRem: true,
            timeRemaining: '10:00',
            secsRemaining: orderResult.validFor - parseInt((new Date().getTime() - new Date(orderResult.timestamp_created).getTime()) / 1000),
            pendingStatusReq: false,
            checkDelay: 1000
        };
        var timeRem = setInterval(function () {
            if (!orderResult) clearInterval(timeRem);
            if (orderResult.progress.secsRemaining > 0) {
                if (orderResult.progress.status == "OPEN")
                    orderResult.progress.secsRemaining--;
                else
                    orderResult.progress.secsRemaining++;
                var minutes = Math.floor(orderResult.progress.secsRemaining / 60);
                var seconds = orderResult.progress.secsRemaining - minutes * 60;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                orderResult.progress.timeRemaining = minutes + ':' + seconds;
                if (!$scope.$$phase) $scope.$apply();
            } else {
                orderResult.progress.timeRemaining = "00:00";
                clearInterval(timeRem);
            }
        }, 1000);
        var progressCheck = setInterval(function () {
            if (!orderResult) clearInterval(progressCheck);
            if (!orderResult.progress.pendingStatusReq) {
                orderResult.progress.pendingStatusReq = true;
                $scope.bity.getStatus({orderid: orderResult.id}, function (data) {
                    if (data.error) $scope.notifier.danger(data.msg);
                    else {
                        data = data.data;
                        if (bity.validStatus.indexOf(data.status) != -1) orderResult.progress.status = "RCVE";
                        if (orderResult.progress.status == "OPEN" && bity.validStatus.indexOf(data.input.status) != -1) {
                            orderResult.progress.secsRemaining = 1;
                            orderResult.progress.showTimeRem = false;
                            orderResult.progress.status = "RCVE";
                            orderResult.progress.bar = getProgressBarArr(3, 5);
                        } else if (orderResult.progress.status == "RCVE" && bity.validStatus.indexOf(data.output.status) != -1) {

                            orderResult.progress.status = "FILL";
                            orderResult.progress.bar = getProgressBarArr(5, 5);
                            orderResult.progress.showTimeRem = false;
                            var url = orderResult.output.currency == 'BTC' ? bity.btcExplorer.replace("[[txHash]]", data.output.reference) : bity.ethExplorer.replace("[[txHash]]", data.output.reference)
                            var bExStr = "<a href='" + url + "' target='_blank' rel='noopener'> View your transaction </a>";
                            $scope.notifier.success(globalFuncs.successMsgs[2] + data.output.reference + "<br />" + bExStr);
                            clearInterval(progressCheck);
                            clearInterval(timeRem);
                        } else if (bity.invalidStatus.indexOf(data.status) != -1) {
                            orderResult.progress.status = "CANC";
                            orderResult.progress.bar = getProgressBarArr(-1, 5);
                            $scope.notifier.danger("Time has run out. If you have already sent, please wait 1 hour. If your order has not be processed after 1 hour, please press the orange 'Issue with your Swap?' button.");
                            orderResult.progress.secsRemaining = 0;
                            clearInterval(progressCheck);
                        }
                        if (!$scope.$$phase) $scope.$apply();
                    }
                    orderResult.progress.pendingStatusReq = false;
                });
            }
        }, orderResult.progress.checkDelay);
        $scope.showStage2 = false;
        if ($scope.orderResult.input.currency == 'BTC') $scope.showStage3Btc = true;
        else {
            $scope.parentTxConfig = {
                to: ethUtil.toChecksumAddress($scope.orderResult.payment_address),
                value: $scope.orderResult.input.amount,
                sendMode: $scope.orderResult.input.currency == 'ETH' ? 'ether' : 'token',
                tokensymbol: $scope.orderResult.input.currency == 'ETH' ? '' : $scope.orderResult.input.currency,
                readOnly: true
            }
            new Modal(document.getElementById('sendTransaction'));
            $scope.showStage3Eth = true;
        }
    }


    $scope.openOrder = function () {

        if (($scope.swapOrder.toCoin != 'BTC' && $scope.Validator.isValidAddress($scope.swapOrder.toAddress)) || ($scope.swapOrder.toCoin == 'BTC' && $scope.Validator.isValidBTCAddress($scope.swapOrder.toAddress))) {
            var order = {
                amount: $scope.swapOrder.isFrom ? $scope.swapOrder.fromVal : $scope.swapOrder.toVal,
                mode: $scope.swapOrder.isFrom ? 0 : 1,
                pair: $scope.swapOrder.fromCoin + $scope.swapOrder.toCoin,
                destAddress: $scope.swapOrder.toAddress
            }
            $scope.bity.openOrder(order, function (data) {
                if (!data.error) {
                    $scope.orderResult = data.data;
                    $scope.orderResult.swapOrder = $scope.swapOrder;
                    var orderResult = $scope.orderResult;
                    saveOrderToStorage(orderResult);
                    processOrder();
                } else $scope.notifier.danger(data.msg);
                if (!$scope.$$phase) $scope.$apply();
            });
        } else {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
        }
    }
    ////////////////////////// KYBER /////////////////////////////////////////////////////////////////
    
    // $scope.setKyberOrderCoin = function (isFrom, coin) {
    //     // if a token is selected as the starting coin. Then default to ETH as the ending coin if either BTC or REP is currently selected
    //     if(($scope.swapOrder.toCoin === "BTC") || ($scope.swapOrder.toCoin === "REP")){
    //         $scope.swapOrder.toCoin = "ETH";
    //     }
    //
    //     if (isFrom) {
    //         $scope.swapOrder.fromCoin = coin;
    //     } else {
    //         $scope.swapOrder.toCoin = coin;
    //     }
    //     if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
    //         for (var i in $scope.availableOptions)
    //             if ($scope.availableOptions[i] != $scope.swapOrder.fromCoin) {
    //                 $scope.swapOrder.toCoin = $scope.availableOptions[i];
    //                 break;
    //             }
    //
    //     $scope.swapOrder.swapRate = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin , $scope.swapOrder.toCoin)];
    //     $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
    //     $scope.updateKyberEstimate(isFrom);
    //     $scope.dropdownFrom = $scope.dropdownTo = false;
    // };

    $scope.updateKyberEstimate = function (isFrom) {
        console.log("swapCtrl:286", $scope.kyber.kyberRates, $scope.swapOrder.fromCoin + $scope.swapOrder.toCoin); //todo remove dev item
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin , $scope.swapOrder.toCoin)] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin , $scope.swapOrder.toCoin)]).toFixed(bity.decimals));
        $scope.swapOrder.isFrom = isFrom;
    };

    $scope.verifyKyberValues = function () {

    };

    $scope.setKyberFinalPrices = function () {
        $scope.showedMinMaxError = false;
        try {

            if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];
            else if (!$scope.verifyMinMaxValues()) throw globalFuncs.errorMsgs[27];
            $scope.updateKyberEstimate($scope.swapOrder.isFrom);
            $scope.showStage1 = false;
            $scope.showStage2 = true;
        } catch (e) {
            $scope.notifier.danger(e);
        }

    }

    $scope.openKyberOrder = function (nonce, gasPrice) {
        let isError = false; //todo remove dev item
        //---------------------------------------
        if (isError) $scope.notifier.danger(data);
        else {
            $scope.tx.data = $scope.kyber.getTradeData($scope.dev.swapOrder);
            $scope.tx.to = $scope.kyber.getKyberNetworkAddress();
            $scope.tx.value = 0.000001; //$scope.dev.swapOrder.fromCoin === "ETH" ? etherUnits.toWei($scope.dev.swapOrder.fromVal, "ether") : 0;
            console.log($scope.tx);
            var txData = uiFuncs.getTxData($scope);
            //     $scope.parentTxConfig = {
            //         to: ethUtil.toChecksumAddress($scope.kyber.getKyberNetworkAddress()),
            //         value: $scope.orderResult.input.amount,
            //         sendMode: $scope.orderResult.input.currency == 'ETH' ? 'ether' : 'token',
            //         tokensymbol: $scope.orderResult.input.currency == 'ETH' ? '' : $scope.orderResult.input.currency,
            //         data: $scope.kyber.getTradeData($scope.swapOrder),
            //         readOnly: true
            // }
            // txData.nonce = 52; //49
            // txData.gasPrice = 300000;

            if (nonce && gasPrice) {
                txData.nonce = nonce; // getting nonce ? (ask kosala)[vs going on a hunt]
                txData.gasPrice = gasPrice;
            } else txData.nonce = txData.gasPrice = null;
            uiFuncs.generateTx(txData, function (rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTx = rawTx.signedTx;
                    console.log($scope.generatedTx);
                    // $scope.sendKyberTx();
                } else {
                    console.error(rawTx.error);
                    $scope.notifier.danger(rawTx.error);
                }
                if (!$scope.$$phase) $scope.$apply();
            });
        }
    };

    $scope.prepareKyberTx = function () {
        $scope.parentTxConfig = {
            to: ethUtil.toChecksumAddress($scope.orderResult.payment_address),
            value: $scope.orderResult.input.amount,
            sendMode: $scope.orderResult.input.currency == 'ETH' ? 'ether' : 'token',
            tokensymbol: $scope.orderResult.input.currency == 'ETH' ? '' : $scope.orderResult.input.currency,
            data: '',
            readOnly: true
        };
        new Modal(document.getElementById('sendTransaction'));
        $scope.showStage3Eth = true;
    }


    $scope.sendKyberTx = function () {
        // $scope.ensConfirmModalModal.close();
        // $scope.ensFinalizeModal.close();
        var signedTx = $scope.generatedTx;
        uiFuncs.sendTx(signedTx, function (resp) {
            console.log(resp);
            if (!resp.isError) {
                var emailLink = '<a class="strong" href="#" target="_blank" rel="noopener noreferrer">Confused? Email Us.</a>'; // email link
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a class='strong' href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank' rel='noopener'> View your transaction </a>" : '';
                $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<p>" + resp.data + "</p><p>" + bExStr + "</p><p>" + emailLink + "</p>";
                $scope.notifier.success($scope.sendTxStatus);
                if ($scope.generatedTxs.length) $scope.sendTx();
                else $scope.sendTxStatus = ''
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    };
    ///////////////////////////////////////////////////////////////////////////////////////////

    $scope.newSwap = function () {
        globalFuncs.localStorage.setItem(lStorageKey, '');
        initValues();
    }
    initValues();
    if (isStorageOrderExists()) {
        $scope.showStage1 = false;
        setOrderFromStorage();
    }
};
module.exports = swapCtrl;