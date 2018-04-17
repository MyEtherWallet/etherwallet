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


    $scope.demoKyber = function () {
        console.log($scope.kyberPriceTicker); //todo remove dev item
        // $scope.kyber.getBalance("POWR", "0xc3982F1DbAB6DA9d95F579B9A5f9c5CAb13F8cfC", function (data) {
        //     console.log(data);
        // });
    };

    $scope.toExclude = [];
    $scope.fromExclude = [];
    $scope.showInToList = function (coin) {
        if ($scope.toExclude.indexOf(coin) > -1) return false;
        if (coin !== $scope.swapOrder.fromCoin) {
            if ($scope.kyber.mainTokens.indexOf(coin) >= 0 && coin !== "ETH") {
                return $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, coin)] !== 0;
            }
            return true;
        }
        return false;
    };

    $scope.showInFromList = function (coin) {
        if ($scope.fromExclude.indexOf(coin) > -1) return false;
        if (coin !== 'REP') {
            if ($scope.kyber.mainTokens.indexOf(coin) >= 0 && coin !== "ETH") {
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
        $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
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
        if ($scope.swapOrder.toVal == '' || $scope.swapOrder.fromVal == '' || $scope.swapOrder.toVal == '0' || $scope.swapOrder.fromVal == '0' || $scope.showedMinMaxError) return false;
        var errors = {
            priceNotLoaded: 0,
            lessThanMin: 1,
            greaterThanMax: 2,
            noErrors: 3
        }
        let verify = function () {
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


    // todo, account for unavailable token pairings when calculating the available options
    $scope.setOrderCoin = function (isFrom, coin) {
        console.log("swapCtrl:122", $scope.toExclude); //todo remove dev item
        console.log("swapCtrl:123", $scope.fromExclude); //todo remove dev item
        let bityOptions = ["ETH", "REP", "BTC"];
        if (isFrom) {
            // set the selected coin as excluded from the opposing side
            $scope.toExclude = [coin];
            $scope.swapOrder.fromCoin = coin;
            if (coin === "BTC") {
                $scope.availableToOptions = ["ETH", "REP"];
                // if toCoin is a token and BTC is selected, remove the token as the toCoin. Place ETH (Which if desired could be swapped for the token...)
                if ($scope.availableTokens.indexOf($scope.swapOrder.toCoin) >= 0) {
                    $scope.swapOrder.toCoin = "ETH";
                }

                if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
                    for (var i in bityOptions)
                        if (bityOptions[i] != $scope.swapOrder.fromCoin) {
                            $scope.swapOrder.toCoin = bityOptions[i];
                            break;
                        }
                $scope.swapOrder.fromCoin = coin;
            } else {
                // check if the selected coin is a token. If it is exclude invalid options from the opposing side.
                if ($scope.availableTokens.indexOf(coin) >= 0) {
                    $scope.toExclude.push("BTC");
                    $scope.toExclude.push("REP");
                    // check and set toCoin as ETH if it is either BTC or REP and fromCoin is A Token. (Which if desired could be swapped for the replaced coin...)
                    if ($scope.swapOrder.toCoin === "BTC" || $scope.swapOrder.toCoin === "REP") {
                        $scope.swapOrder.toCoin = "ETH";
                    }
                }

                $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];
            }
        } else {
            // check if the selected coin is a token. If it is exclude invalid options from the opposing side.
            if ($scope.availableTokens.indexOf(coin) >= 0) {
                $scope.toExclude.push("BTC");
                $scope.toExclude.push("REP");
                // check if an invalid option already exists on the opposing side. If it does replace with a valid option.
                // (i.e. if from BTC, then replace the token in the toCoin slot)
                if ($scope.swapOrder.fromCoin === "BTC") {
                    $scope.swapOrder.toCoin = "ETH";
                }

            }
            // set the selected coin as excluded from the opposing side
            $scope.fromExclude = [coin];
            $scope.swapOrder.toCoin = coin;
        }


        if (bityOptions.indexOf($scope.swapOrder.toCoin) > -1 && bityOptions.indexOf($scope.swapOrder.fromCoin) > -1) {
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
        $scope.updateEstimate(isFrom);
        $scope.dropdownFrom = $scope.dropdownTo = false;
    };


    $scope.updateEstimate = function (isFrom) {
        if ($scope.checkIfKyber()) {
            console.log("swapCtrl:199 UPDATE KYBER ESTIMATE", $scope.swapOrder); //todo remove dev item
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
        if ($scope.isKyberSwap) {
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
                    // saveOrderToStorage(orderResult); //todo uncomment after dev
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

    let kyberStatusIndicatorsList = ["READY", "OPEN_ETH", "SEND_ETH", "APPROVE_TOKENS", "AWAITING_TOKEN_APPROVAL", "TOKENS_APPROVED", "OPEN_TOKEN", "TRANSMITTED", "CONFIRMED"];
    // todo use or remove
    $scope.kyberStatusIndicators = {
        eth: {},
        token: {
            initial: "",
            approve: "",
            approved: "",

        }
    };

    /* MAIN SWAP PAGE FUNCTIONALITY TIE-INs  (START) */
    $scope.kyberInit = function(){
        $scope.checkKyberNetwork();
        $scope.showedKyberPairAvailableError = false;
        $scope.kyberReturnToStart = false;
        $scope.isKyberSwap = false;
        $scope.showStage2Kyber = false;
        $scope.showStage3Kyber = false;
        $scope.kyberSwapStatus = "PRE";
        $scope.kyberTransaction = {
            ethSignedTx: null,
            tokenApproveSignedTx: null,
            tokenSignedTx: null
        };
    };

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
            uiFuncs.notifier.danger(kyber.kyberUnavailablePhrasing($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin), 3500);
            return false;
        } else {
            return true;
        }
    };

    //used in updateEstimate and verifyBityMinMaxValues
    $scope.checkIfKyber = function () {
        $scope.isKyberSwap = (($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0 || $scope.swapOrder.fromCoin == "ETH") && ($scope.availableTokens.indexOf($scope.swapOrder.toCoin) >= 0 || $scope.swapOrder.toCoin == "ETH"));
        return $scope.isKyberSwap;
    };


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
            uiFuncs.notifier.danger(kyber.kyberUnavailablePhrasing($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin), 2500);
            $scope.showedMinMaxError = true;
            $scope.showedKyberPairAvailableError = true;
            return false;
        }
    };

    $scope.updateKyberEstimate = function (isFrom) {
        if (isFrom) $scope.swapOrder.toVal = parseFloat(($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        else $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)]).toFixed(bity.decimals));
        if ($scope.swapOrder.fromVal == Infinity) {
            $scope.swapOrder.fromVal = "";
        }
        $scope.swapOrder.isFrom = isFrom;
    };


    $scope.setKyberFinalPrices = function () {
        $scope.showedMinMaxError = false;

        if (!$scope.$$phase) $scope.$apply();
        try {
            if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];
            else if (!$scope.verifyMinMaxValues()) throw globalFuncs.errorMsgs[27];
            $scope.updateKyberEstimate($scope.swapOrder.isFrom);
            $scope.showStage1 = false;
            $scope.prepareKyber();
        } catch (e) {
            console.log(e);
            $scope.notifier.danger(e);
        }
    };

    /* MAIN SWAP PAGE FUNCTIONALITY TIE-INs  (END) */

    /* KYBER CHECKS */

    $scope.checkKyberNetwork = function(){
        $scope.kyber.kyberNetworkState(function(data){
            console.log("kyberNetworkState", data); //todo remove dev item
            $scope.kyberNetworkEnabled = data.data;
        })
    };

    $scope.checkUserCap = function(_userAddress, callback){
        let swapValue, isFrom;
        if($scope.swapOrder.fromCoin == "ETH"){
            swapValue = $scope.swapOrder.fromVal;
            isFrom = true;
            console.log("fromVal", $scope.swapOrder.fromVal); //todo remove dev item
        } else if($scope.swapOrder.toCoin == "ETH"){
            swapValue = $scope.swapOrder.toVal;
            isFrom = false;
            console.log("toVal", $scope.swapOrder.toVal); //todo remove dev item
        } else {
            callback(true);
        }
        // ETH cap for transactions from ETH & to ETH (i.e. the ETH amount cannot be greater than the cap)
        $scope.kyber.checkUserCap(_userAddress, swapValue, isFrom, function(result){
            callback(result);
        })
    };


    /* KYBER SPECIFIC (tx related) */
    $scope.prepareKyber = function () {
        $scope.showStage2Kyber = true;
        $scope.orderResult = {
            validFor: 6000,
            timestamp_created: new Date().getTime(),
            progress: {
                // status: "READY"
            },
            input: {
                currency: $scope.swapOrder.fromCoin
            },
            output: {
                amount: $scope.swapOrder.toVal,
                currency: $scope.swapOrder.toCoin
            }
        };
        $scope.setKyberStatus("READY");
    };

    /* Kyber ETH & TOKEN */
    $scope.startKyber = function () {
        console.log("start kyber"); //todo remove dev item
        // check user cap
        $scope.checkUserCap($scope.swapOrder.toAddress, function(result){
            if(!result.error){
                $scope.showStage2Kyber = false;
                $scope.showStage3Kyber = true;
                $scope.kyberModal = new Modal(document.getElementById('kyberTransaction'));
                if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
                    $scope.startKyberTokenSwap();
                } else {
                    $scope.startKyberEthSwap();
                }
            } else {
                let message;
                if(result.data.isFrom){
                    message = ` The Supplied ETH value of ${result.data.originalValue} is Greater than your current Kyber Network Maximum of ${result.data.userCap}. `;
                } else {
                    message = ` The Resulting ETH value of ${result.data.originalValue} is Greater than your current Kyber Network Maximum of ${result.data.userCap}. `;
                }
                uiFuncs.notifier.danger( message ,2500);
                $scope.kyberReturnToStart = true;
            }

        });
    };

    $scope.returnToStart = function(){
        $scope.showStage1 = true;
        $scope.showStage2Kyber = false;
        $scope.updateEstimate(true);
        $scope.kyberReturnToStart = false;
    };


    $scope.openKyberOrder = function () {
        if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
            $scope.openKyberTokenOrder();
        } else {
            $scope.openKyberEthOrder();
        }
    };

    /* Kyber ETH [ETH -> Token]*/
    $scope.startKyberEthSwap = function () {
        console.log($scope.swapOrder.fromCoin); //todo remove dev item
        $scope.orderResult.progress = {
            bar: getProgressBarArr(1, 5),
            showTimeRem: true,
            weiValue: etherUnits.toEther($scope.swapOrder.fromVal, "wei"),
            timeRemaining: '10:00',
            secsRemaining: $scope.orderResult.validFor - parseInt((new Date().getTime() - new Date($scope.orderResult.timestamp_created).getTime()) / 1000),
            pendingStatusReq: false,
            checkDelay: 1000
        };
        $scope.setKyberStatus("OPEN_ETH");
        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.openKyberEthOrder = function (wallet) {
        console.log($scope.wallet); //todo remove dev item
        $scope.addressString = $scope.wallet.getAddressString();
        console.log($scope.wallet.tokenObjs); //todo remove dev item
        // $scope.kyber.getBalance($scope.swapOrder.toCoin, $scope.addressString, function (data) {
        //     $scope.currentFrombalance = data.data;
        // });
        $scope.setKyberStatus("SEND_ETH");
        $scope.tx = {
            gasLimit: '500000',
            data: $scope.kyber.getTradeData($scope.swapOrder),
            to: $scope.kyber.getKyberNetworkAddress(),
            unit: "ether",
            value: $scope.swapOrder.fromVal,
            gasPrice: null
        };
        console.log($scope.tx); //todo remove dev item
        var txData = uiFuncs.getTxData($scope);
        txData.nonce = txData.gasPrice = null;
        $scope.generateKyberTransaction(txData);
    };

    /**
     * Make a custom Modal Template that expands on the standard to include information regarding the swap
     */

    /* Kyber TOKEN [Token -> (ETH or Token)]*/
    $scope.startKyberTokenSwap = function () {
        console.log($scope.swapOrder.fromCoin); //todo remove dev item
        $scope.orderResult.progress = {
            bar: getProgressBarArr(1, 5),
            showTimeRem: true,
            weiValue: etherUnits.toEther($scope.swapOrder.fromVal, "wei"),
            timeRemaining: '10:00',
            secsRemaining: $scope.orderResult.validFor - parseInt((new Date().getTime() - new Date($scope.orderResult.timestamp_created).getTime()) / 1000),
            pendingStatusReq: false,
            checkDelay: 1000
        };
        $scope.setKyberStatus("APPROVE_TOKENS");
        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.approveTokenKyber = function (wallet) {
        $scope.wallet = wallet;
        // return function(){
        $scope.tx = {
            gasLimit: '500000',
            data: $scope.kyber.approveKyber($scope.swapOrder.fromCoin, $scope.swapOrder.fromVal),
            to: $scope.kyber.getTokenAddress($scope.swapOrder.fromCoin),
            unit: "ether",
            sendMode: "ether",
            value: 0,
            gasPrice: null
        };
        // console.log($scope.tx); //todo remove dev item
        // console.log($scope.wallet); //todo remove dev item
        var txData = uiFuncs.getTxData($scope);
        txData.nonce = txData.gasPrice = null;
        $scope.generateKyberTransaction(txData);
    }


    /* OPEN KYBER TOKEN ORDER*/
    $scope.openKyberTokenOrder = function (wallet) {
        console.log($scope.wallet); //todo remove dev item
        $scope.tx = {
            gasLimit: '500000',
            data: $scope.kyber.getTradeData($scope.swapOrder),
            to: $scope.kyber.getKyberNetworkAddress(),
            unit: "ether",
            value: 0,
            sendMode: "ether",
            gasPrice: null
        };
        console.log($scope.tx); //todo remove dev item
        var txData = uiFuncs.getTxData($scope);
        txData.nonce = txData.gasPrice = null;
        $scope.generateKyberTransaction(txData);
    };


    // CENTRALIZATION OF OPERATIONAL PATHS
    $scope.generateKyberTransaction = function (txData) {
        uiFuncs.generateTx(txData, function (rawTx) {
            if (!rawTx.isError) {
                console.log(rawTx); //todo remove dev item
                $scope.parseKyberSignedTx(rawTx.signedTx);
                $scope.kyberRawTxData = rawTx;
                $scope.generatedTx = rawTx.signedTx;
                switch ($scope.orderResult.progress.status) {
                    case "APPROVE_TOKENS":
                        $scope.kyberTransaction.tokenApproveSignedTx = rawTx.signedTx;
                        console.log($scope.kyberTransaction); //todo remove dev item
                        console.log("$scope.generatedTx", $scope.generatedTx); //todo remove dev item
                        $scope.sendKyberTransaction();
                        break;
                    case "SEND_ETH":
                        $scope.kyberTransaction.ethSignedTx = rawTx.signedTx;
                        $scope.parseKyberSignedTx(rawTx.signedTx);
                        $scope.generatedTx = rawTx.signedTx;
                        console.log($scope.kyberTransaction); //todo remove dev item
                        $scope.kyberModal.open();
                        break;
                    case "TOKENS_APPROVED":
                        $scope.kyberTransaction.tokenSignedTx = rawTx.signedTx;
                        $scope.parseKyberSignedTx(rawTx.signedTx);
                        $scope.generatedTx = rawTx.signedTx;
                        console.log($scope.kyberTransaction); //todo remove dev item
                        console.log("$scope.generatedTx", $scope.generatedTx); //todo remove dev item
                        break;
                }
            } else {
                console.error(rawTx.error); //todo remove dev item
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    };

    $scope.sendKyberModal = function () {
        switch ($scope.orderResult.progress.status) {
            case "APPROVE_TOKENS":
                $scope.parseKyberSignedTx($scope.kyberRawTxData.signedTx);
                $scope.kyberModal.open();
                break;
            case "OPEN_ETH":
                $scope.openKyberEthOrder();
                break;
            case "TOKENS_APPROVED":
                $scope.openKyberTokenOrder();
                $scope.kyberModal.open();
                break;
        }
    };

    $scope.sendKyberTransaction = function () {
        console.log($scope.kyberTransaction); //todo remove dev item
        switch ($scope.orderResult.progress.status) {
            case "APPROVE_TOKENS":
                $scope.setKyberStatus("AWAITING_TOKEN_APPROVAL");
                console.log("$scope.kyberTransaction", $scope.kyberTransaction); //todo remove dev item
                $scope.sendKyberTx($scope.kyberTransaction.tokenApproveSignedTx);
                break;
            case "SEND_ETH":
                console.log("$scope.kyberTransaction", $scope.kyberTransaction); //todo remove dev item
                $scope.sendKyberTx($scope.kyberTransaction.ethSignedTx);
                $scope.kyberModal.close();
                break;
            case "TOKENS_APPROVED":
                console.log("$scope.kyberTransaction", $scope.kyberTransaction); //todo remove dev item
                $scope.sendKyberTx($scope.kyberTransaction.tokenSignedTx);
                $scope.kyberModal.close();
                break;
        }
    };

    $scope.sendKyberTx = function (signedTx) {
        console.log(signedTx); //todo remove dev item
        console.log("$scope.orderResult.progress.status", $scope.orderResult.progress.status); //todo remove dev item
        uiFuncs.sendTx(signedTx, function (resp) {
            console.log(resp); //todo remove dev item
            if (!resp.isError) {
                var emailLink = '<a class="strong" href="#" target="_blank" rel="noopener noreferrer">Confused? Email Us.</a>'; // email link
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a class='strong' href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank' rel='noopener'> View your transaction </a>" : '';
                $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<p>" + resp.data + "</p><p>" + bExStr + "</p><p>" + emailLink + "</p>";
                $scope.notifier.success($scope.sendTxStatus);
                console.log($scope.orderResult.progress.status); //todo remove dev item
                if ($scope.orderResult.progress.status == "AWAITING_TOKEN_APPROVAL") {
                    $scope.checkForTokenApproveKyber($scope.wallet.getAddressString());
                }
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    };


    /* STATUS CHECKS */
    $scope.checkForTokenApproveKyber = function (address) {
        var checkValue = etherUnits.toWei($scope.swapOrder.fromVal, "ether");
        console.log(address); //todo remove dev item
        var orderResult = $scope.orderResult;

        var timeRem = setInterval(function () {
            if (!orderResult) clearInterval(timeRem);
            if (orderResult.progress.secsRemaining > 0) {
                if (orderResult.progress.status == "AWAITING_TOKEN_APPROVAL")
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
            // if (!orderResult) clearInterval(progressCheck);
            console.log("APPROVE_TOKENS CHECK"); //todo remove dev item
            if (!orderResult.progress.pendingStatusReq) {
                orderResult.progress.pendingStatusReq = true;
                $scope.kyber.allowance($scope.swapOrder.fromCoin, address, function (data) {
                    if (data.error) $scope.notifier.danger(data.msg);
                    else {
                        data = data.data;
                        console.log(data); //todo remove dev item
                        if (data >= checkValue) {
                            orderResult.progress.bar = getProgressBarArr(3, 5);
                            // $scope.showKyberTokenAuth = false;
                            $scope.setKyberStatus("TOKENS_APPROVED");
                            console.log("APPROVAL CONFIRMED"); //todo remove dev item
                            clearInterval(progressCheck);
                            clearInterval(timeRem);
                            $scope.openKyberTokenOrder();
                        } else if ($scope.orderResult.progress.status = "OPEN_ETH") {
                            clearInterval(progressCheck);
                            clearInterval(timeRem);
                        }
                        if (!$scope.$$phase) $scope.$apply();
                    }
                    orderResult.progress.pendingStatusReq = false;
                });
            }
        }, orderResult.progress.checkDelay);
    };

    $scope.checkForEthTransferKyber = function (address) {
        // var checkValue = etherUnits.toWei($scope.swapOrder.fromVal, "ether");
        // console.log(address);
        // var orderResult = $scope.orderResult;
        //
        // var timeRem = setInterval(function () {
        //     if (!orderResult) clearInterval(timeRem);
        //     if (orderResult.progress.secsRemaining > 0) {
        //         if (orderResult.progress.status == "AWAITING_TOKEN_APPROVAL")
        //             orderResult.progress.secsRemaining--;
        //         else
        //             orderResult.progress.secsRemaining++;
        //         var minutes = Math.floor(orderResult.progress.secsRemaining / 60);
        //         var seconds = orderResult.progress.secsRemaining - minutes * 60;
        //         minutes = minutes < 10 ? '0' + minutes : minutes;
        //         seconds = seconds < 10 ? '0' + seconds : seconds;
        //         orderResult.progress.timeRemaining = minutes + ':' + seconds;
        //         if (!$scope.$$phase) $scope.$apply();
        //     } else {
        //         orderResult.progress.timeRemaining = "00:00";
        //         clearInterval(timeRem);
        //     }
        // }, 1000);
        // var progressCheck = setInterval(function () {
        //     // if (!orderResult) clearInterval(progressCheck);
        //     if (!orderResult.progress.pendingStatusReq) {
        //         orderResult.progress.pendingStatusReq = true;
        //         $scope.kyber.getBalance($scope.swapOrder.toCoin, $scope.addressString, function (data) {
        //             if (data.error) $scope.notifier.danger(data.msg);
        //             else {
        //                 data = data.data;
        //                 console.log(data); //todo remove dev item
        //                 if (data >= $scope.currentFrombalance) {
        //                     orderResult.progress.bar = getProgressBarArr(3, 5);
        //                     $scope.showKyberTokenAuth = false;
        //                     $scope.orderResult.progress.status = "TOKENS_APPROVED";
        //                     console.log("APPROVAL CONFIRMED"); //todo remove dev item
        //                     // $scope.openKyberOrder();
        //                     clearInterval(progressCheck);
        //                     clearInterval(timeRem);
        //                 } else if ($scope.orderResult.progress.status = "OPEN_ETH") {
        //                     clearInterval(progressCheck);
        //                     clearInterval(timeRem);
        //                 }
        //
        //
        //                 if (!$scope.$$phase) $scope.$apply();
        //             }
        //             orderResult.progress.pendingStatusReq = false;
        //             $scope.currentFrombalance = data.data;
        //         });
        //
        //     }
        // }, orderResult.progress.checkDelay);
    };


    /* MISC./UTIL */

    $scope.setKyberStatus = function (status) {
        $scope.kyberStatus = status;
        $scope.orderResult.progress.status = status;
    };


    $scope.parseKyberSignedTx = function (signedTx) {
        var txData = {}
        var isJSON = false;
        $scope.parsedSignedKyberTx = {}
        if (Validator.isJSON(signedTx)) {
            txData = new ethUtil.Tx(JSON.parse(signedTx));
            isJSON = true;
        } else {
            if (signedTx.slice(0, 2) == "0x") signedTx = signedTx.slice(2, signedTx.length)
            txData = new ethUtil.Tx(signedTx)
        }
        $scope.parsedSignedKyberTx.gasPrice = {}
        $scope.parsedSignedKyberTx.txFee = {}
        $scope.parsedSignedKyberTx.balance = $scope.wallet.getBalance()
        $scope.parsedSignedKyberTx.from = isJSON ? $scope.wallet.getChecksumAddressString() : ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.from.toString('hex')))
        $scope.parsedSignedKyberTx.to = ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.to.toString('hex')))
        $scope.parsedSignedKyberTx.value = (txData.value == '0x' || txData.value == '' || txData.value == null) ? '0' : etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.value.toString('hex'))).toString(), 'wei')
        $scope.parsedSignedKyberTx.gasLimit = new BigNumber(ethFuncs.sanitizeHex(txData.gasLimit.toString('hex'))).toString()
        $scope.parsedSignedKyberTx.gasPrice.wei = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString()
        $scope.parsedSignedKyberTx.gasPrice.gwei = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).div(etherUnits.getValueOfUnit('gwei')).toString()
        $scope.parsedSignedKyberTx.gasPrice.eth = etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString(), 'wei')
        $scope.parsedSignedKyberTx.txFee.wei = new BigNumber(parseInt($scope.parsedSignedKyberTx.gasLimit)).times(new BigNumber(parseInt($scope.parsedSignedKyberTx.gasPrice.wei)))
        $scope.parsedSignedKyberTx.txFee.gwei = new BigNumber($scope.parsedSignedKyberTx.txFee.wei).div(etherUnits.getValueOfUnit('gwei')).toString()
        $scope.parsedSignedKyberTx.txFee.eth = etherUnits.toEther(parseInt($scope.parsedSignedKyberTx.txFee.wei), 'wei').toString()
        $scope.parsedSignedKyberTx.nonce = (txData.nonce == '0x' || txData.nonce == '' || txData.nonce == null) ? '0' : new BigNumber(ethFuncs.sanitizeHex(txData.nonce.toString('hex'))).toString()
        $scope.parsedSignedKyberTx.data = (txData.data == '0x' || txData.data == '' || txData.data == null) ? '(none)' : ethFuncs.sanitizeHex(txData.data.toString('hex'))


    }


    var applyScope = function () {
        if (!$scope.$$phase) $scope.$apply();
    }

    $scope.$watch(function () {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance(applyScope);
        $scope.wallet.setTokens();
        // if ($scope.parentTxConfig) {
        //     var setTxObj = function () {
        //         $scope.addressDrtv.ensAddressField = $scope.parentTxConfig.to;
        //         $scope.tx.value = $scope.parentTxConfig.value;
        //         $scope.tx.sendMode = $scope.parentTxConfig.sendMode ? $scope.parentTxConfig.sendMode : 'ether';
        //         $scope.tx.tokensymbol = $scope.parentTxConfig.tokensymbol ? $scope.parentTxConfig.tokensymbol : '';
        //         $scope.tx.gasPrice = $scope.parentTxConfig.gasPrice ? $scope.parentTxConfig.gasPrice : null;
        //         $scope.tx.nonce = $scope.parentTxConfig.nonce ? $scope.parentTxConfig.nonce : null;
        //         $scope.tx.data = $scope.parentTxConfig.data ? $scope.parentTxConfig.data : $scope.tx.data;
        //         $scope.tx.readOnly = $scope.addressDrtv.readOnly = $scope.parentTxConfig.readOnly ? $scope.parentTxConfig.readOnly : false;
        //         if ($scope.parentTxConfig.gasLimit) {
        //             $scope.tx.gasLimit = $scope.parentTxConfig.gasLimit;
        //             $scope.gasLimitChanged = true;
        //         }
        //     }
        //     console.log($scope.wallet); //todo remove dev item
        //     $scope.$watch('parentTxConfig', function () {
        //         setTxObj();
        //     }, true);
        // }
        // $scope.setTokenSendMode();
        // defaultInit();
    });
    ///////////////////////////////////////////////////////////////////////////////////////////

    $scope.newSwap = function () {
        globalFuncs.localStorage.setItem(lStorageKey, '');
        initValues();
    };
    initValues();
    if (isStorageOrderExists()) {
        // $scope.showStage1 = false;//todo uncomment after dev
        // setOrderFromStorage(); //todo uncomment after dev
    }
};
module.exports = swapCtrl;

/*
*
*
*     $scope.approveTokenKyber = function () {
        console.log($scope.orderResult); //todo remove dev item

        $scope.showKyberTokenAuth = true;
        $scope.orderResult = {};
        $scope.orderResult.progress = {
            status: "AWAITING_TOKEN_APPROVAL",
            bar: getProgressBarArr(1, 5),
            showTimeRem: true,
            weiValue: etherUnits.toEther($scope.swapOrder.fromVal, "wei"),
            timeRemaining: '10:00',
            secsRemaining: $scope.orderResult.validFor - parseInt((new Date().getTime() - new Date($scope.orderResult.timestamp_created).getTime()) / 1000),
            pendingStatusReq: false,
            checkDelay: 1000
        };
        $scope.kyber.approve($scope.swapOrder.fromCoin, etherUnits.toEther($scope.swapOrder.fromVal, "wei"), function () {
            $scope.checkForTokenApproveKyber();
        })
    };


    */