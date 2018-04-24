'use strict';
var swapCtrl = function ($scope, $sce, walletService) {
    var lStorageKey = "swapOrder";
    $scope.ajaxReq = ajaxReq;
    $scope.showedMinMaxError = false;
    $scope.Validator = Validator;
    $scope.bity = new bity();
    $scope.kyber = new kyber();
    $scope.kyberNetworkEnabled = true;
    $scope.kyber.refreshRates();
    $scope.isKyberSwap = false;

    $scope.bityOptions = ["ETH", "REP", "BTC"];
    $scope.toExclude = [];
    $scope.fromExclude = [];

    // Currently Not Really Used (kept for usage in a future feature)
    $scope.showInFromList = function (coin) {
        if (coin == 'REP') return false;
        return true;
        // if ($scope.fromExclude.indexOf(coin) > -1) return false;
        // else return true;
    };

    // Currently Not Really Used (kept for usage in a future feature)
    $scope.showInToList = function (coin) {
        return true;
        // if ($scope.toExclude.indexOf(coin) > -1) return false;
        // else return true;

    };


    setInterval(function () {
        $scope.bity.refreshRates();
        $scope.kyber.refreshRates();
        $scope.checkKyberNetwork();
    }, 30000);
    $scope.priceTicker = {ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1};

    $scope.availableCoins = ["ETH", "BTC", "REP"];
    $scope.availableTokens = [];
    $scope.availableOptions = [...$scope.availableCoins, ...$scope.availableTokens];

    var initValues = function () {
        $scope.bity.refreshRates(function () {
            $scope.setOrderCoin(true, "ETH");
        });
        $scope.kyberInit();
        $scope.kyberPriceTicker = {};
        Object.keys($scope.kyber.kyberRates).forEach(kkey => {
            $scope.kyberPriceTicker[kkey] = 1
        });
        $scope.availableTokens = $scope.kyber.getTokenList();
        $scope.availableTokens.slice($scope.availableTokens.indexOf("ETH"), 1);
        $scope.availableFromOptions = [...$scope.availableCoins];
        $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];

        $scope.showStage1 = true;
        $scope.showStage2 = $scope.showStage3Eth = $scope.showStage3Btc = false;
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
        };

    };


    $scope.resetErrorShownStates = function () {
        $scope.showedMinMaxError = false;
        if ($scope.showedKyberPairAvailableError) $scope.showedKyberPairAvailableError = false
    };


    $scope.verifyMinMaxValues = function () {
        if ($scope.checkIfKyber()) {
            return $scope.verifyKyberMinMaxValues();
        } else {
            return $scope.verifyBityMinMaxValues();
        }
    };

    $scope.verifyBityMinMaxValues = function () {
        if($scope.swapOrder.toVal=='' || $scope.swapOrder.fromVal == '' || $scope.swapOrder.toVal=='0' || $scope.swapOrder.fromVal == '0' || $scope.showedMinMaxError ) return false;
        var errors = {
            priceNotLoaded: 0,
            lessThanMin: 1,
            greaterThanMax: 2,
            noErrors: 3
        }
        var verify = function() {
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
    // todo: devise a Cleaner method

    $scope.setOrderCoin = function (isFrom, coin) {
        $scope.kyberSwapRateDisplay();
        let bityOptions = ["ETH", "BTC", "REP"];
        let kyberOptions = $scope.availableTokens;
        let isBity = (_coin) => {
            return bityOptions.indexOf(_coin) > -1;
        }
        if (isFrom) {
            $scope.availableToOptions = []
            if (isBity(coin)) {
                bityOptions.forEach((_item) => {
                    if (_item != coin) $scope.availableToOptions.push(_item)
                })
                if (coin == "ETH") {
                    kyberOptions.forEach((_item) => {
                        $scope.availableToOptions.push(_item)
                    })
                }
            } else {
                $scope.availableToOptions = ["ETH"]
            }
            $scope.swapOrder.fromCoin = coin;
        } else {
            $scope.availableFromOptions = []
            if (isBity(coin)) {
                if (coin == "ETH") {
                    bityOptions.forEach((_item) => {
                        if (_item != coin && _item != "REP") $scope.availableFromOptions.push(_item)
                    })
                    kyberOptions.forEach((_item) => {
                        $scope.availableFromOptions.push(_item)
                    })
                } else {
                    bityOptions.forEach((_item) => {
                        if (_item != coin && _item != "REP") $scope.availableFromOptions.push(_item)
                    })
                }
            } else {
                if($scope.swapOrder.fromCoin == "ETH"){
                    // console.log(coin); //todo remove dev item
                    bityOptions.forEach((_item) => {
                        if (_item != coin) $scope.availableToOptions.push(_item)
                    })
                    kyberOptions.forEach((_item) => {
                        $scope.availableToOptions.push(_item)
                    })
                } else {
                    $scope.availableToOptions = ["ETH"]
                }
            }
            $scope.swapOrder.toCoin = coin;
        }


        if (isBity($scope.swapOrder.toCoin) && isBity($scope.swapOrder.fromCoin)) {
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


    };

    $scope.setBityOrderCoin = function (isFrom) {
        $scope.swapOrder.swapRate = $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateBityEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    };


    $scope.updateEstimate = function (isFrom) {
        if ($scope.checkIfKyber()) {
            $scope.updateKyberEstimate(isFrom);
        } else {
            $scope.updateBityEstimate(isFrom);
        }
    };


    $scope.updateBityEstimate = function (isFrom) {
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin]).toFixed(bity.decimals));
        $scope.swapOrder.isFrom = isFrom;
    };


    $scope.setFinalPrices = function () {
        $scope.showedMinMaxError = false;
        if ($scope.checkIfKyber()) {
            $scope.setKyberFinalPrices();
            // if ($scope.canSetKyberFinal) $scope.setKyberFinalPrices();
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
    };

    var getProgressBarArr = function (index, len) {
        var tempArr = [];
        for (var i = 0; i < len; i++) {
            if (i < index) tempArr.push('progress-true');
            else if (i == index) tempArr.push('progress-active');
            else tempArr.push('');
        }
        return tempArr;
    }

    // Only Bity orders are stored in local storage
    var isStorageOrderExists = function () {
        var order = globalFuncs.localStorage.getItem(lStorageKey, null);
        return order && $scope.Validator.isJSON(order);
    }

    // Only Bity orders are stored in local storage
    var setOrderFromStorage = function () {
        var order = JSON.parse(globalFuncs.localStorage.getItem(lStorageKey, null));
        $scope.orderResult = order;
        $scope.swapOrder = order.swapOrder;
        processOrder();
    }

    // Only Bity orders are stored in local storage
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
                            var bExStr = `<a href="${url}" target=" _blank" rel="noopener "> View your transaction </a>`;
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
            // console.log(document.getElementById('sendTransaction')); //todo remove dev item
            // new Modal(document.getElementById('sendTransaction'));
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
                    saveOrderToStorage(orderResult); //todo uncomment after dev
                    processOrder();
                } else $scope.notifier.danger(data.msg);
                if (!$scope.$$phase) $scope.$apply();
            });
        } else {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
        }
    }

    //=========================================================================================================================================================
    ////////////////////////// KYBER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //=========================================================================================================================================================

    // --------------------------------- Setup Variables -----------------------------------------------------------

    $scope.kyberStatus = {
        initial: "READY",
        eth: {
            initial: "READY",
            prepare: "OPEN_ETH",
            open: "OPEN_ETH",
            send: "SEND_ETH",
            complete: "TRANSMITTED"
        },
        token: {
            initial: "READY",
            prepareApprove: "GENERATE_APPROVAL_TRANSACTION",
            prepare: "GENERATE_SWAP_TRANSACTION",
            open: "APPROVE_TOKENS",
            approve: "AWAITING_TOKEN_APPROVAL",
            send: "TOKENS_APPROVED",
            complete: "TRANSMITTED"
        }
    };

    $scope.kyberInit = function () {
        $scope.checkKyberNetwork();
        $scope.receiveDecimals = 6;
        $scope.sendDecimals = 6;
        $scope.showedKyberPairAvailableError = false;
        $scope.kyberReturnToStart = false;
        $scope.isKyberSwap = false;
        $scope.showStage2Kyber = false;
        $scope.showStage3Kyber = false;
        $scope.showStage4Kyber = false;
        $scope.kyberEthToToken = false;
        $scope.canSetKyberFinal = true;
        $scope.adv = false;
        $scope.checkTokenBalance = false;
        $scope.balanceOk = false;
        $scope.swapStarted = false;
        $scope.walletKyber = null;
        $scope.wallet = null;
        walletService.wallet = null;
        $scope.kyberTransaction = {
            ethTx: null,
            ethRawTx: null,
            ethTxHash: null,
            ethTxLink: null,
            tokenApproveTx: null,
            tokenApproveRawTx: null,
            tokenApproveTxHash: null,
            tokenApproveTxLink: null,
            tokenTx: null,
            tokenRawTx: null,
            tokenTxHash: null,
            tokenTxLink: null
        };
        $scope.kyberOrderResult = {
            validFor: 6000,
            timestamp_created: new Date().getTime(),
            progress: {
                status: "READY"
            },
            input: {
                amount: "",  // $scope.swapOrder.fromVal
                currency: "" //$scope.swapOrder.fromCoin
            },
            output: {
                amount: "", //$scope.swapOrder.toVal
                currency: "" //$scope.swapOrder.toCoin
            }
        };
    };


    /* ------------------------- MAIN SWAP PAGE FUNCTIONALITY TIE-INs  (START) ------------------------------------- */

    // called in setOrderCoin if selected pair is a kyber network pair
    $scope.setKyberOrderCoin = function (isFrom) {
        $scope.isKyberPairAvailable();
        $scope.swapOrder.swapRate = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)];
        $scope.swapOrder.swapPair = $scope.swapOrder.fromCoin + "/" + $scope.swapOrder.toCoin;
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    };

    $scope.isKyberPairAvailable = function () {
        if ($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] == 0 ||
            $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] == "0") {
            $scope.displayKyberErrorMessage("unAvailable");
            return false;
        } else {
            return true;
        }
    };

    // calculates the rate for display when a kyber pair is selected
    $scope.kyberSwapRateDisplay = function () {
        if ($scope.checkIfKyber()) $scope.kyberSwapRateDisplayValue = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)]
    };

    //used in updateEstimate and verifyBityMinMaxValues
    $scope.checkIfKyber = function () {
        return (($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0 || $scope.swapOrder.fromCoin == "ETH") && ($scope.availableTokens.indexOf($scope.swapOrder.toCoin) >= 0 || $scope.swapOrder.toCoin == "ETH"));
        // return $scope.isKyberSwap;
    };

    // Only Bity orders are stored in local storage
    $scope.verifyKyberMinMaxValues = function () {
        // check if pair is available. Display message if is is not;
        if ($scope.swapOrder.toVal == '' || $scope.swapOrder.fromVal == '' || $scope.swapOrder.toVal == '0' || $scope.swapOrder.fromVal == '0' || $scope.showedMinMaxError) return false;
        var errors = {
            priceNotLoaded: 0,
            lessThanMin: 1,
            greaterThanMax: 2,
            noErrors: 3,
            pairNotAvailable: 4
        };
        let verify = function () {
            if (!$scope.kyber.priceLoaded) return errors.priceNotLoaded;
            else if ($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] == 0) return errors.pairNotAvailable;
            else if ($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] == "0") return errors.pairNotAvailable;
            return errors.noErrors;
        }
        var vResult = verify();
        if (vResult == errors.noErrors) return true;
        else if (vResult == errors.priceNotLoaded) return false;
        else if (vResult == errors.pairNotAvailable) {
            $scope.displayKyberErrorMessage("unAvailable");
            $scope.showedMinMaxError = true;
            $scope.showedKyberPairAvailableError = true;
            return false;
        }
    };

    // called in updateEstimate if selected pair is a kyber network pair
    $scope.updateKyberEstimate = function (isFrom) {
        try {
            if (/,/.test($scope.swapOrder.fromVal) || /,/.test($scope.swapOrder.toVal)) {
                $scope.displayKyberErrorMessage("commas");
            }

            if (isFrom) {
                let toDecimalsToUse = $scope.kyber.tokenDetails[$scope.swapOrder.toCoin].decimals < bity.decimals ? $scope.kyber.tokenDetails[$scope.swapOrder.toCoin].decimals : bity.decimals;
                let _toVal = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] * $scope.swapOrder.fromVal;
                $scope.swapOrder.toVal = parseFloat((_toVal).toFixed(toDecimalsToUse));
            }
            else {
                let fromDecimalsToUse = $scope.kyber.tokenDetails[$scope.swapOrder.fromCoin].decimals < bity.decimals ? $scope.kyber.tokenDetails[$scope.swapOrder.fromCoin].decimals : bity.decimals;
                let _fromVal = $scope.swapOrder.toVal / $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)];
                $scope.swapOrder.fromVal = parseFloat((_fromVal).toFixed(fromDecimalsToUse));
            }

            if ($scope.swapOrder.fromVal == Infinity) {
                $scope.swapOrder.fromVal = "";
            }
            $scope.swapOrder.isFrom = isFrom;
        } catch (e) {
        }
    };

    // called in setFinalPrices if selected pair is a kyber network pair
    $scope.setKyberFinalPrices = function () {
        $scope.showedMinMaxError = false;
        $scope.isKyberSwap = $scope.checkIfKyber();
        if ($scope.validKyberPair()) {
            if (!$scope.$$phase) $scope.$apply();
            try {
                if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw "Invalid Value Present";
                else if (!$scope.verifyMinMaxValues()) throw "Invalid Value Present";

                $scope.updateFinalKyberEstimate($scope.swapOrder.isFrom, function () {
                    // $scope.canSetKyberFinal = true;
                    if ($scope.swapOrder.finalRate > 0) {
                        $scope.showStage1 = false;
                        $scope.swapOrder.swapRate = $scope.swapOrder.finalRate;
                        $scope.prepareKyber();
                    } else {
                        $scope.displayKyberErrorMessage("zeroRate");
                    }
                });
            } catch (e) {
                console.error(e);
                if (e == "Invalid Value Present") {
                    $scope.displayKyberErrorMessage("tryCatch", {e: "$scope.displayKyberErrorMessage(\"tryCatch\", {e: e});"});
                }
                // $scope.canSetKyberFinal = true;
                $scope.displayKyberErrorMessage("tryCatch", {e: e});
            }
        } else {
            $scope.displayKyberErrorMessage("invalidPair");
        }
    };

    // called with actual transaction source value to provide the most accurate estimate through the confirmation stages
    // added callback so the progression waits for getExpected rate to return a value
    $scope.updateFinalKyberEstimate = function (isFrom, callback) {
        try {
            $scope.kyber.getExpectedRate($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin, $scope.swapOrder.fromVal, function (_rates) {
                let finalRate = $scope.kyber.convertToTokenBase(_rates.data.slippageRate, "ETH");
                // todo: provide message and option to return if the rate value for the specified qty is 0.
                // todo: or just provide the message and don't 'route' to the next page (I like this better)
                $scope.swapOrder.finalRate = finalRate;
                if (isFrom) {
                    $scope.receiveDecimals = $scope.kyber.tokenDetails[$scope.swapOrder.toCoin].decimals < bity.decimals ? $scope.kyber.tokenDetails[$scope.swapOrder.toCoin].decimals : bity.decimals;
                    let _toVal = finalRate * $scope.swapOrder.fromVal;
                    $scope.swapOrder.toVal = parseFloat((_toVal).toFixed(bity.decimals));
                }
                else {
                    $scope.sendDecimals = 6;

                    let fromDecimalsToUse = $scope.kyber.tokenDetails[$scope.swapOrder.fromCoin].decimals < bity.decimals ? $scope.kyber.tokenDetails[$scope.swapOrder.fromCoin].decimals : bity.decimals;
                    let _fromVal = $scope.swapOrder.toVal / finalRate;
                    $scope.swapOrder.fromVal = parseFloat((_fromVal).toFixed(bity.decimals));
                }
                if ($scope.swapOrder.fromVal == Infinity) {
                    $scope.swapOrder.fromVal = "";
                }
                $scope.swapOrder.isFrom = isFrom;
                callback();
            });
        } catch (e) {
            console.error(e);
        }
    };

    /*  (END) MAIN SWAP PAGE FUNCTIONALITY TIE-INs  */

    /* ------------------------------------- KYBER CHECKS ------------------------------------- */

    $scope.checkKyberNetwork = function () {
        $scope.kyber.kyberNetworkState(function (data) {
            $scope.kyberNetworkEnabled = data.data;
        })
    };

    // if user cap is below the entered amount allow the user to go back and change their inputs
    $scope.returnToStart = function () {
        $scope.showStage1 = true;
        $scope.showStage2Kyber = false;
        $scope.showStage3Kyber = false;
        $scope.showStage4Kyber = false;
        $scope.checkTokenBalance = false;
        $scope.updateEstimate(true);
        $scope.balanceOk = false;
        $scope.checkTokenBalance = false;
        $scope.kyberReturnToStart = false;
    };


    $scope.checkIfUserCanDo = function (_userAddress) {
        // console.log("checkIfUserCanDo 1", $scope.checkTokenBalance); //todo remove dev item
        try {

            if ($scope.checkTokenBalance) {
                // console.log("checkIfUserCanDo 2", $s/cope.checkTokenBalance); //todo remove dev item
                $scope.indicatorhacked = [];
                var makeIndicator = setInterval(function () {
                    $scope.indicatorhacked.push(".");
                    if ($scope.indicatorhacked.length > 10) $scope.indicatorhacked = [];
                }, 100);
                $scope.checkTokenBalance = false;
                $scope.checkUserCap(_userAddress, function (result) {
                    // console.log("checkIfUserCanDo result", result); //todo remove dev item
                    if (!result.error) {
                        $scope.kyber.getBalance($scope.swapOrder.fromCoin, _userAddress, function (_result) {
                            // console.log(_result); //todo remove dev item
                            let userTokenBalance = new BigNumber($scope.kyber.convertToTokenBase(_result.data, $scope.swapOrder.fromCoin));
                            let enoughTokens = userTokenBalance.gte($scope.swapOrder.fromVal);
                            // console.log(userTokenBalance); //todo remove dev item
                            if (enoughTokens) {
                                clearInterval(makeIndicator);
                                $scope.balanceOk = true;
                            } else {
                                clearInterval(makeIndicator);
                                $scope.kyberReturnToStart = true;
                                $scope.displayKyberErrorMessage("tokenBalance", {userTokenBalance: userTokenBalance});
                                $scope.userTokenBalanceChecked = userTokenBalance.toNumber();
                            }
                        });
                    } else {
                        clearInterval(makeIndicator);
                        $scope.kyberReturnToStart = true;
                        $scope.displayKyberErrorMessage("userCap", {
                            isFrom: result.data.isFrom,
                            originalValue: result.data.originalValue,
                            userCap: result.data.userCap
                        });
                    }
                });
            }
        } catch (e) {
            clearInterval(makeIndicator);
            console.error(e);
        }
    };

    $scope.checkUserCap = function (_userAddress, callback) {
        let swapValue, isFrom;
        if ($scope.swapOrder.fromCoin == "ETH") {
            swapValue = $scope.swapOrder.fromVal;
            isFrom = true;
        } else if ($scope.swapOrder.toCoin == "ETH") {
            swapValue = $scope.swapOrder.toVal;
            isFrom = false;
        } else {
            callback({
                error: true,
                data: {
                    isFrom: false,
                    userCap: 0,
                    originalValue: 0,
                    result: false
                }
            });
        }
        // ETH cap for transactions from ETH & to ETH (i.e. the ETH amount cannot be greater than the cap)
        $scope.kyber.checkUserCap(_userAddress, swapValue, isFrom, callback)
    };


    $scope.validKyberPair = function () {
        let hasEth = ($scope.swapOrder.fromCoin == "ETH" || $scope.swapOrder.toCoin == "ETH");
        let notBTC = ($scope.swapOrder.fromCoin !== "BTC" || $scope.swapOrder.toCoin !== "BTC");
        let notREP = ($scope.swapOrder.fromCoin !== "REP" || $scope.swapOrder.toCoin !== "REP");
        return (hasEth && notBTC && notREP);
    };


    /* ------------------------------------- KYBER SPECIFIC (tx related) ------------------------------------- */
    $scope.prepareKyber = function () {
        try {
            $scope.showStage2Kyber = true;
            $scope.kyberOrderResult.input = {
                amount: $scope.swapOrder.fromVal,
                currency: $scope.swapOrder.fromCoin
            };
            $scope.kyberOrderResult.output = {
                amount: $scope.swapOrder.toVal,
                currency: $scope.swapOrder.toCoin
            };
            $scope.setKyberStatus($scope.kyberStatus.initial);
        } catch (e) {
            console.error(e);
        }
    };


    /* ----------- Kyber ETH & TOKEN ----------- */

    // Setup the kyber transaction at the point where the user enters the destAddress (enter address stage)
    $scope.startKyber = function () {
        try {
            // console.log("startKyber 1", walletService.wallet); //todo remove dev item
            // Enable checking if user can proceed
            $scope.checkTokenBalance = true;
            $scope.wd = false;

            // If the user's walled is unlocked then check here
            if (walletService.wallet != null) {
                $scope.checkIfUserCanDo(walletService.wallet.getAddressString());
            }
            $scope.kyberModal = new Modal(document.getElementById('kyberTransaction'));
            if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
                // console.log("startKyber 2"); //todo remove dev item

                $scope.showStage2Kyber = false;
                $scope.showStage3Kyber = true;
                $scope.startKyberTokenSwap();
            } else {
                $scope.showStage2Kyber = false;
                $scope.showStage3Kyber = true;
                $scope.startKyberEthSwap();
            }

        } catch (e) {
            console.error(e);
        }
    };

    // Set status to reflect a token to ETH (or Token to Token) swap to trigger proper UI elements and processing flow
    $scope.startKyberTokenSwap = function () {
        $scope.kyberOrderResult.progress = $scope.buildKyberOrderResultProgress();
        $scope.setKyberStatus($scope.kyberStatus.token.prepare);
        if (!$scope.$$phase) $scope.$apply();
    };

    // Stage 3 'Start Swap'. Based on selected swap pair determine which processing flow to follow
    $scope.openKyberOrder = function (wallet) {
        // console.log($scope.walletKyber); //todo remove dev item
        $scope.wallet = walletService.wallet;
        if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
            $scope.approveTokenKyber($scope.wallet);
        } else {
            $scope.openKyberEthOrder();
        }
    };

    /* ----------- Kyber [ETH -> Token] (specific functions) ----------- */

    // Set status to reflect a ETH to token swap to trigger proper UI elements and processing flow
    $scope.startKyberEthSwap = function () {
        try {
            $scope.kyberEthToToken = true;
            $scope.kyberOrderResult.progress = $scope.buildKyberOrderResultProgress();
            $scope.setKyberStatus($scope.kyberStatus.eth.prepare);//OPEN_ETH
            if (!$scope.$$phase) $scope.$apply();
        } catch (e) {
            console.error(e);
        }
    };

    // Initiate ETH to Token Swap flow
    $scope.openKyberEthOrder = function () {
        try {
            $scope.addressString = $scope.walletKyber.getAddressString();
            $scope.tx = $scope.buildTransactionObject($scope.kyber.getTradeData($scope.swapOrder, $scope.swapOrder.swapRate), $scope.kyber.getKyberNetworkAddress(), $scope.swapOrder.fromVal);
            var txData = uiFuncs.getTxData($scope);
            txData.nonce = txData.gasPrice = null;

            $scope.generateKyberTransaction(txData, "OPEN_ETH");
        } catch (e) {
            console.error(e);
        }
    };

    /* ----------- Kyber [Token -> ETH] (specific functions) ----------- */

    // Initiate Token to ETH (or Token to Token) Swap flow
    // Build the Approve transaction to send to the Token Contract of the 'from' Token
    $scope.approveTokenKyber = function () {
        try {
            $scope.tx = $scope.buildTransactionObject($scope.kyber.approveKyber($scope.swapOrder.fromCoin, $scope.swapOrder.fromVal), $scope.kyber.getTokenAddress($scope.swapOrder.fromCoin));
            var txData = uiFuncs.getTxData($scope);

            txData.nonce = txData.gasPrice = null;
            $scope.generateKyberTransaction(txData, $scope.kyberStatus.token.prepareApprove);
        } catch (e) {
            console.error(e);
        }
    };

    // Build the Swap transaction to send to the Kyber Network Contract to execute the swap
    $scope.openKyberTokenOrder = function (nonce, gasPrice) {
        try {
            $scope.tx = $scope.buildTransactionObject($scope.kyber.getTradeData($scope.swapOrder, $scope.swapOrder.swapRate), $scope.kyber.getKyberNetworkAddress());
            var txData = uiFuncs.getTxData($scope);
            if (nonce) {
                let newNonce = parseInt(ethFuncs.hexToDecimal(nonce));
                txData.nonce = "0x" + ethFuncs.decimalToHex(newNonce + 1);
                txData.gasPrice = gasPrice;
            } else {
                txData.nonce = txData.gasPrice = null;
            }
            $scope.generateKyberTransaction(txData, $scope.kyberStatus.token.prepare);
        } catch (e) {
            console.error(e);
        }
    };

    /* ----------- Kyber (common functions) ----------- */

    // generate the transaction object based on the specific flow stage
    $scope.generateKyberTransaction = function (txData, stage) {
        try {
            uiFuncs.generateTx(txData, function (rawTx) {
                if (!rawTx.isError) {
                    switch (stage) {
                        case "GENERATE_APPROVAL_TRANSACTION":
                            $scope.kyberTransaction.tokenApproveTx = rawTx;
                            // Build the Swap transaction in the same flow
                            $scope.openKyberTokenOrder(rawTx.nonce, rawTx.gasPrice);
                            break;
                        case "GENERATE_SWAP_TRANSACTION":
                            $scope.kyberTransaction.tokenTx = rawTx;
                            // update status to reflect transaction generation and prompting of user for approval
                            $scope.setKyberStatus($scope.kyberStatus.token.open); //APPROVE_TOKENS
                            $scope.sendKyberModal();
                            break;
                        case "OPEN_ETH":
                            $scope.kyberTransaction.ethTx = rawTx;
                            $scope.setKyberStatus($scope.kyberStatus.eth.send); //SEND_ETH
                            $scope.sendKyberModal();
                            break;
                        default:

                            break;
                    }
                } else {

                    $scope.notifier.danger(rawTx.error);
                }
                if (!$scope.$$phase) $scope.$apply();
            });
        } catch (e) {
            console.error(e);
        }
    };

    // Trigger the opening of the modal for user review and authorization to proceed
    $scope.sendKyberModal = function () {
        try {
            switch ($scope.kyberOrderResult.progress.status) {
                case "APPROVE_TOKENS":
                    // Generate the content to populate the modal that prompts of user for approval
                    $scope.parseKyberSignedTx($scope.kyberTransaction.tokenTx.signedTx);
                    $scope.kyberModal.open();
                    break;
                case "SEND_ETH":
                    $scope.parseKyberSignedTx($scope.kyberTransaction.ethTx.signedTx);
                    $scope.kyberModal.open();
                    break;
                default:

                    break;
            }
        } catch (e) {
            console.error(e);
        }
    };

    // call the send function with content specific to the transaction object related to the specific flow stage
    $scope.sendKyberTransaction = function () {
        try {
            switch ($scope.kyberOrderResult.progress.status) {
                case "APPROVE_TOKENS":
                    $scope.showStage4Kyber = true;
                    $scope.showStage3Kyber = false;
                    // set the status to trigger polling of token contract for approval of tokens for swap
                    $scope.setKyberStatus($scope.kyberStatus.token.approve); //AWAITING_TOKEN_APPROVAL
                    $scope.sendKyberTx($scope.kyberTransaction.tokenApproveTx.signedTx);
                    $scope.kyberModal.close();
                    break;
                case "TOKENS_APPROVED":
                    $scope.sendKyberTx($scope.kyberTransaction.tokenTx.signedTx);
                    break;
                case "SEND_ETH":
                    $scope.showStage4Kyber = true;
                    $scope.showStage3Kyber = false;
                    $scope.sendKyberTx($scope.kyberTransaction.ethTx.signedTx);
                    $scope.kyberModal.close();
                    break;
                default:

                    break;
            }
        } catch (e) {
            console.error(e);
        }
    };

    // Send the transaction, call functions related to the specific flow stage, and update the UI
    $scope.sendKyberTx = function (signedTx) {
        try {
            uiFuncs.sendTx(signedTx, function (resp) {
                if (!resp.isError) {
                    let notCustomNode = $scope.ajaxReq.type != nodes.nodeTypes.Custom;
                    switch ($scope.kyberOrderResult.progress.status) {
                        case "TOKENS_APPROVED":
                            $scope.kyberTransaction.tokenTxHash = notCustomNode ? resp.data : "";
                            $scope.kyberTransaction.tokenTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                            $scope.displayTxHash(resp, $scope.kyberTransaction.tokenTxLink);
                            $scope.kyberOrderResult.progress.bar = getProgressBarArr(5, 5);
                            break;
                        case "AWAITING_TOKEN_APPROVAL":
                            $scope.kyberTransaction.tokenApproveTxHash = notCustomNode ? resp.data : "";
                            $scope.kyberTransaction.tokenApproveTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                            $scope.checkForTokenApproveKyber($scope.walletKyber.getAddressString());
                            break;
                        case "SEND_ETH":
                            $scope.kyberTransaction.ethTxHash = notCustomNode ? resp.data : "";
                            $scope.kyberTransaction.ethTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                            $scope.kyberOrderResult.progress.bar = getProgressBarArr(5, 5);
                            $scope.displayTxHash(resp, $scope.kyberTransaction.ethTxLink);
                            break;
                        default:

                            break;
                    }
                } else {
                    // console.error(resp.error); //todo remove dev item
                    $scope.notifier.danger(resp.error);
                }
            });
        } catch (e) {
            console.error(e);
        }
    };

    /* ----------- Kyber [Token -> ETH] (Polling For Token Approval) ----------- */

    // Poll token contract for approval, then trigger the Kyber Network Contract portion of the flow
    $scope.checkForTokenApproveKyber = function (address) {
        try {
            // var checkValue = etherUnits.toWei($scope.swapOrder.fromVal, "ether");
            var checkValue = $scope.kyber.convertToTokenWei($scope.swapOrder.fromVal, $scope.swapOrder.fromCoin);
            $scope.indicatorhacked = [];
            var orderResult = $scope.kyberOrderResult;
            orderResult.progress.startTime = new Date().getTime();
            var progressCheck = setInterval(function () {
                if ($scope.indicatorhacked.length > 10) $scope.indicatorhacked = [];
                if (!orderResult.progress.pendingStatusReq) {
                    orderResult.progress.pendingStatusReq = true;
                    $scope.kyber.allowance($scope.swapOrder.fromCoin, address, function (data) {
                        if (data.error) $scope.notifier.danger(data.msg);
                        else {

                            data = data.data;
                            if (data >= checkValue) {
                                orderResult.progress.bar = getProgressBarArr(3, 5);
                                $scope.setKyberStatus($scope.kyberStatus.token.send); //TOKENS_APPROVED
                                clearInterval(progressCheck);
                                $scope.sendKyberTransaction();
                            } else {
                                $scope.indicatorhacked.push(". ");
                            }
                            if (!$scope.$$phase) $scope.$apply();
                        }
                        orderResult.progress.pendingStatusReq = false;
                    });
                }
            }, orderResult.progress.checkDelay);
        } catch (e) {
            console.error(e);
        }
    };

    /* ---------------------------------------- MISC./UTIL  --------------------------------------------------------- */

    // Build a $scope.tx object with supplied parameters
    $scope.buildTransactionObject = function (data, to, value, gasPrice) {
        return {
            gasLimit: kyber.defaultValues.gasLimit,
            data: data,
            to: to,
            unit: "ether",
            value: value ? value : 0,
            sendMode: "ether",
            gasPrice: gasPrice ? gasPrice : kyber.defaultValues.gasPrice
        };
    };

    // Build a $scope.orderResult.progress object with initial values
    $scope.buildKyberOrderResultProgress = function () {
        return {
            bar: getProgressBarArr(1, 5),
            weiValue: $scope.kyber.convertToTokenBase($scope.swapOrder.fromVal, "ETH"),
            pendingStatusReq: false,
            checkDelay: 1000,
            startTime: ""
        };
    };

    $scope.displayTxHash = function (resp, txHashInject) {
        var emailLink = '<a class="strong" href="#" target="_blank" rel="noopener noreferrer">Confused? Email Us.</a>'; // email link
        var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? `<a class="strong" href="${txHashInject}" target="_blank" rel="noopener"> View your transaction </a>` : "";
        $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<p>" + resp.data + "</p><p>" + bExStr + "</p><p>" + emailLink + "</p>";
        $scope.notifier.success($scope.sendTxStatus);
    };

    $scope.displayKyberErrorMessage = function (type, params) {
        switch (type) {
            case "userCap":
                let message;
                if (params.isFrom) {
                    message = `The Supplied ETH value of ${params.originalValue} is Greater than your current Kyber Network Maximum of ${params.userCap}. `;
                } else {
                    message = `The Resulting ETH value of ${params.originalValue} is Greater than your current Kyber Network Maximum of ${params.userCap}. `;

                }
                uiFuncs.notifier.danger(message, 2500);

                break;
            case "zeroRate":
                uiFuncs.notifier.danger(`Kyber Network does not support a trade of value ${$scope.swapOrder.fromVal} ${$scope.swapOrder.fromCoin} to ${$scope.swapOrder.toCoin}`, 5000);
                break;
            case "tokenBalance":
                uiFuncs.notifier.danger(` The Supplied ${$scope.swapOrder.fromCoin} value of ${$scope.swapOrder.fromVal} is Greater than your current ${$scope.swapOrder.fromCoin} Balance of ${params.userTokenBalance.toString()} ${$scope.swapOrder.fromCoin}. `, 5000);
                break;
            case "commas":
                uiFuncs.notifier.danger(" Commas are not allowed in the input values.");
                break;
            case "invalidPair":
                console.error("NOT A SWAPPABLE KYBER NETWORK PAIR")
                break;
            case "tryCatch":
                $scope.notifier.danger(params.e);
                break;
            case "unAvailable":
                uiFuncs.notifier.danger(kyber.kyberUnavailablePhrasing($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin), 3500);
                break;

        }

    }


    $scope.setKyberStatus = function (status) {
        $scope.kyberOrderResult.progress.status = status;
    };


    $scope.parseKyberSignedTx = function (signedTx) {
        $scope.parsedKyberTx = $scope.parseKyberSignedTransaction(signedTx);
        if (!$scope.kyberEthToToken) {
            $scope.parsedKyberTokenTx = $scope.parseKyberSignedTransaction($scope.kyberTransaction.tokenApproveTx.signedTx);
            // Calculate Combined Values
            $scope.parsedTx = {};
            $scope.parsedTx.totalTxFee = {};
            $scope.parsedTx.totalTxFee.wei = new BigNumber($scope.parsedKyberTx.txFee.wei).plus(new BigNumber($scope.parsedKyberTokenTx.txFee.wei));
            $scope.parsedTx.totalTxFee.gwei = new BigNumber($scope.parsedKyberTx.txFee.gwei).plus(new BigNumber($scope.parsedKyberTokenTx.txFee.gwei));
            $scope.parsedTx.totalTxFee.eth = new BigNumber($scope.parsedKyberTx.txFee.eth).plus(new BigNumber($scope.parsedKyberTokenTx.txFee.eth));
            $scope.parsedTx.avgGasPrice = {};
            $scope.parsedTx.avgGasPrice.wei = new BigNumber($scope.parsedKyberTx.gasPrice.wei).plus(new BigNumber($scope.parsedKyberTokenTx.gasPrice.wei)).div(2);
            $scope.parsedTx.avgGasPrice.gwei = new BigNumber($scope.parsedKyberTx.gasPrice.gwei).plus(new BigNumber($scope.parsedKyberTokenTx.gasPrice.gwei)).div(2);
            $scope.parsedTx.avgGasPrice.eth = new BigNumber($scope.parsedKyberTx.gasPrice.eth).plus(new BigNumber($scope.parsedKyberTokenTx.gasPrice.eth)).div(2);
            $scope.parsedTx.totalGasLimit = new BigNumber($scope.parsedKyberTokenTx.gasLimit).plus(new BigNumber($scope.parsedKyberTx.gasLimit));

            if ($scope.swapOrder.fromCoin == "ETH") {
                $scope.parsedTx.approximateFinalBalance = new BigNumber($scope.parsedKyberTx.balance).minus(new BigNumber($scope.parsedTx.totalTxFee.eth)).minus(new BigNumber($scope.swapOrder.toVal));
            } else if ($scope.swapOrder.toCoin == "ETH") {
                $scope.parsedTx.approximateFinalBalance = new BigNumber($scope.parsedKyberTx.balance).minus(new BigNumber($scope.parsedTx.totalTxFee.eth)).plus(new BigNumber($scope.swapOrder.fromVal));
            } else {
                $scope.parsedTx.approximateFinalBalance = new BigNumber($scope.parsedKyberTx.balance).minus(new BigNumber($scope.parsedTx.totalTxFee.eth));
            }
        }
    };

    $scope.parseKyberSignedTransaction = function (signedTx) {
        var txData = {}
        var isJSON = false;
        let parsedKyberTx = {}
        if (Validator.isJSON(signedTx)) {
            txData = new ethUtil.Tx(JSON.parse(signedTx));
            isJSON = true;
        } else {
            if (signedTx.slice(0, 2) == "0x") signedTx = signedTx.slice(2, signedTx.length)
            txData = new ethUtil.Tx(signedTx)
        }
        parsedKyberTx.gasPrice = {}
        parsedKyberTx.txFee = {}
        parsedKyberTx.balance = $scope.walletKyber.getBalance()
        parsedKyberTx.from = isJSON ? $scope.walletKyber.getChecksumAddressString() : ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.from.toString('hex')))
        parsedKyberTx.to = ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.to.toString('hex')))
        parsedKyberTx.value = (txData.value == '0x' || txData.value == '' || txData.value == null) ? '0' : etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.value.toString('hex'))).toString(), 'wei')
        parsedKyberTx.gasLimit = new BigNumber(ethFuncs.sanitizeHex(txData.gasLimit.toString('hex'))).toString()
        parsedKyberTx.gasPrice.wei = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString()
        parsedKyberTx.gasPrice.gwei = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).div(etherUnits.getValueOfUnit('gwei')).toString()
        parsedKyberTx.gasPrice.eth = etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString(), 'wei')
        parsedKyberTx.txFee.wei = new BigNumber(parseInt(parsedKyberTx.gasLimit)).times(new BigNumber(parseInt(parsedKyberTx.gasPrice.wei)))
        parsedKyberTx.txFee.gwei = new BigNumber(parsedKyberTx.txFee.wei).div(etherUnits.getValueOfUnit('gwei')).toString()
        parsedKyberTx.txFee.eth = etherUnits.toEther(parseInt(parsedKyberTx.txFee.wei), 'wei').toString()
        parsedKyberTx.nonce = (txData.nonce == '0x' || txData.nonce == '' || txData.nonce == null) ? '0' : new BigNumber(ethFuncs.sanitizeHex(txData.nonce.toString('hex'))).toString()
        parsedKyberTx.data = (txData.data == '0x' || txData.data == '' || txData.data == null) ? '(none)' : ethFuncs.sanitizeHex(txData.data.toString('hex'))
        return parsedKyberTx;
    };

    var applyScope = function () {
        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function (oldVal, newVal, scpe) {
        // console.log("$watch", oldVal); //todo remove dev item
        // console.log("$watch", newVal); //todo remove dev item
        if (walletService.wallet == null) return;
        if (oldVal) {
            $scope.wd = true;
            $scope.checkIfUserCanDo(oldVal);
        }
        $scope.walletKyber = walletService.wallet;
        // $scope.walletKyber.setBalance(applyScope);
        // $scope.walletKyber.setTokens();

    });

    ///////////////////////// KYBER (end) //////////////////////////////////////////////////////////////////

    $scope.newSwap = function () {
        globalFuncs.localStorage.setItem(lStorageKey, '');
        initValues();
    };
    initValues();
    if (isStorageOrderExists()) {
        $scope.isKyberSwap = false;
        $scope.showStage1 = false;
        setOrderFromStorage();
    }
};
module.exports = swapCtrl;
