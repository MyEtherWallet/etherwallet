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
        // console.log($scope.kyberPriceTicker); //todo remove dev item
        $scope.kyber.getGas();
        // $scope.kyber.getBalance("POWR", "0xc3982F1DbAB6DA9d95F579B9A5f9c5CAb13F8cfC", function (data) {
        //     console.log(data);
        // });
    };

    $scope.bityOptions = ["ETH", "REP", "BTC"];
    $scope.toExclude = [];
    $scope.fromExclude = [];


    $scope.showInFromList = function (coin) {
        // console.log("showInFromList", coin, $scope.showInFromLista(coin)); //todo remove dev item
        if (coin == 'REP') return false;
        else return true;
        // else {
        //     if ($scope.availableTokens.indexOf(coin) >= 0 && coin !== "ETH") {
        //         // if ($scope.availableTokens.indexOf(coin) >= 0) {
        //         return $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, coin)] != 0;
        //     } else if($scope.validBityPairs.indexOf(kyber.toPairKey($scope.swapOrder.fromCoin, coin)) ){
        //         return true;
        //     }
        // }


        // if ($scope.fromExclude.indexOf(coin) > -1) return false;
/*        if(coin === "ETH") return true;
        if (coin !== 'REP') {
            if ($scope.availableTokens.indexOf(coin) >= 0 && coin !== "ETH") {
                // if ($scope.availableTokens.indexOf(coin) >= 0) {
                return $scope.kyber.kyberRates[kyber.toPairKey(coin, $scope.swapOrder.toCoin)] != 0;
            }
            return true;
        }
        return false;*/
    };

    $scope.showInToList = function (coin) {
        // console.log("showInToList", coin,  $scope.showInToLista(coin)); //todo remove dev item
        return true;
        // if ($scope.availableTokens.indexOf(coin) >= 0 && coin !== "ETH") {
        //     // if ($scope.availableTokens.indexOf(coin) >= 0) {
        //     return $scope.kyber.kyberRates[kyber.toPairKey(coin, $scope.swapOrder.toCoin)] != 0;
        // } else {
        //     return true;
        // }


        // if ($scope.toExclude.indexOf(coin) > -1) return false;
/*        if(coin === "ETH") return true;
        if (coin !== $scope.swapOrder.fromCoin) {
            if ($scope.swapOrder.fromCoin == "BTC") {
                return $scope.bityOptions.indexOf(coin) >= 0;
            } else
            if ($scope.availableTokens.indexOf(coin) >= 0) {
                return $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, coin)] != 0;
            }

            return true;
        }
        return false;*/
    };



    $scope.showInFromLista = function (coin) {

        // if ($scope.fromExclude.indexOf(coin) > -1) return false;
        if(coin === "ETH") return true;
        if (coin !== 'REP') {
            if ($scope.availableTokens.indexOf(coin) >= 0  && coin !== "ETH") {
                // if ($scope.availableTokens.indexOf(coin) >= 0) {
                return $scope.kyber.kyberRates[kyber.toPairKey(coin, $scope.swapOrder.toCoin)] != 0;
            }
            return true;
        }
        return false;
    };
    $scope.showInToLista = function (coin) {
        // if ($scope.toExclude.indexOf(coin) > -1) return false;
        if(coin === "ETH") return true;
        if (coin !== $scope.swapOrder.fromCoin) {
            if ($scope.availableTokens.indexOf(coin) >= 0 && coin !== "ETH") {
                return $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, coin)] != 0;
            }
            return true;
        }
        return false;
    };



    setInterval(function () {
        $scope.bity.refreshRates();
        $scope.kyber.refreshRates();
        $scope.checkKyberNetwork();
    }, 30000);
    $scope.priceTicker = {ETHBTC: 1, ETHREP: 1, BTCREP: 1, BTCETH: 1, REPBTC: 1, REPETH: 1};
    $scope.validBityPairs = ["ETH/BTC", "ETH/REP", "BTC/REP", "BTC/ETH", "REP/BTC", "REP/ETH"];

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

    /*    $scope.availableToOptions = $scope.availableOptions.filter(value => {
            if(value === coin) return false;
            if(coin === "BTC") return bityOptions.indexOf(coin) >= 0;
            if ($scope.availableTokens.indexOf(coin) >= 0){
                if(value === "ETH") return true;
                if(bityOptions.indexOf(coin) >= 0) return false;
            }
            if(bityOptions.indexOf(coin) >= 0 && coin != "BTC") return true;
        });*/
    // $scope.setOrderCoin = function (isFrom, coin) {
    //     $scope.kyberSwapRateDisplay();
    //     let bityOptions = ["ETH", "REP", "BTC"];
    //     let nonKyberOptions = ["REP", "BTC"];
    //     console.log("swapCtrl:122", $scope.toExclude); //todo remove dev item
    //     console.log("swapCtrl:123", $scope.fromExclude); //todo remove dev item
    //     if(isFrom){
    //
    //         let setValFunc = function(toSet){
    //             if($scope.swapOrder.fromCoin != toSet){
    //                 $scope.swapOrder.fromCoin = toSet;
    //             }
    //         }
    //         if(coin === "BTC"){
    //             $scope.availableToOptions = ["ETH", "REP"];
    //             $scope.swapOrder.toCoin = "ETH";
    //             setValFunc(coin);
    //         } else if(coin === "ETH"){
    //             $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];
    //             setValFunc(coin);
    //         } else {
    //             if ($scope.availableTokens.indexOf(coin) >= 0 && nonKyberOptions.indexOf($scope.swapOrder.toCoin)) {
    //                 $scope.swapOrder.fromCoin = "ETH";
    //                 setValFunc(coin);
    //             } else {
    //                 setValFunc(coin);
    //                 $scope.availableToOptions = ["ETH"];
    //             }
    //
    //         }
    //
    //
    //
    //     } else {
    //
    //         let setValToFunc = function(toSet){
    //             if($scope.swapOrder.toCoin != toSet){
    //                 $scope.swapOrder.toCoin = toSet;
    //             }
    //         };
    //
    //         if(coin === "REP") {
    //             $scope.availableFromOptions = ["ETH", "BTC"];
    //             setValToFunc(coin);
    //         } /*else if(coin === "BTC"){
    //
    //         }*/ else if(coin === "ETH"){
    //             $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
    //         } else {
    //             if ($scope.availableTokens.indexOf(coin) >= 0 && nonKyberOptions.indexOf($scope.swapOrder.fromCoin)) {
    //                 $scope.swapOrder.toCoin = "ETH";
    //             } else {
    //                 setValToFunc(coin);
    //                 $scope.availableFromOptions = ["ETH"];
    //                 // $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
    //             }
    //
    //         }
    //
    //         // if($scope.swapOrder.fromCoin != coin){
    //         //     $scope.swapOrder.toCoin = coin;
    //         // } else if(coin == "ETH"){
    //         //     $scope.swapOrder.toCoin = "BTC";
    //         // }
    //
    //
    //
    //     }
    //
    //     if (bityOptions.indexOf($scope.swapOrder.toCoin) > -1 && bityOptions.indexOf($scope.swapOrder.fromCoin) > -1) {
    //         // if ($scope.swapOrder.fromCoin == $scope.swapOrder.toCoin)
    //         //     for (var i in bityOptions)
    //         //         if (bityOptions[i] != $scope.swapOrder.fromCoin) {
    //         //             $scope.swapOrder.toCoin = bityOptions[i];
    //         //             break;
    //         //         }
    //         $scope.setBityOrderCoin(isFrom);
    //     } else {
    //         $scope.setKyberOrderCoin(isFrom);
    //     }
    // };
    // todo, account for unavailable token pairings when calculating the available options
        $scope.setOrderCoin = function (isFrom, coin) {
            $scope.kyberSwapRateDisplay();
            let bityOptions = ["ETH",  "BTC", "REP"];
      console.log("swapCtrl:122", $scope.toExclude); //todo remove dev item
              console.log("swapCtrl:123", $scope.fromExclude); //todo remove dev item
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
                          $scope.swapOrder.toCoin = "ETH";
                          // Setup For Full Token To Token
                          $scope.toExclude.push("BTC");
                          $scope.toExclude.push("REP");
                          // check and set toCoin as ETH if it is either BTC or REP and fromCoin is A Token. (Which if desired could be swapped for the replaced coin...)
                          if ($scope.swapOrder.toCoin === "BTC" || $scope.swapOrder.toCoin === "REP") {
                              $scope.swapOrder.toCoin = "ETH";
                              $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                          }
                          $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                      }

                      // $scope.availableToOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                  }
              } else {
                  $scope.fromExclude = [coin];
                  // Prevent Invaid pairing
                  if($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0){
                      if(coin == "BTC" || coin == "REP"){
                          $scope.swapOrder.fromCoin = "ETH";
                      }
                  } else

                  // check if the selected coin is a token. If it is exclude invalid options from the opposing side.
                  if ($scope.availableTokens.indexOf(coin) >= 0) {
                      if($scope.isKyberPairAvailable()){
                          $scope.swapOrder.toCoin = coin;
                      } else {
                          $scope.swapOrder.toCoin = "ETH";
                      }
                      $scope.swapOrder.FromCoin = "ETH";
                      // Setup For Full Token To Token
                      $scope.toExclude.push("BTC");
                      $scope.toExclude.push("REP");
                      // check if an invalid option already exists on the opposing side. If it does replace with a valid option.
                      // (i.e. if from BTC, then replace the token in the toCoin slot)
                      if ($scope.swapOrder.fromCoin === "BTC") {
                          $scope.swapOrder.toCoin = "ETH";
                          $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                      } else {
                          $scope.swapOrder.toCoin = coin;
                      }



                      // set the selected coin as excluded from the opposing side
                      $scope.fromExclude = [coin];
                      // $scope.swapOrder.toCoin = coin;
                  } else {
                      // Prevent Invaid pairing
                      if($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0){
                          if(coin == "BTC" || coin == "REP"){
                              $scope.swapOrder.fromCoin = "ETH";
                              $scope.availableFromOptions = [...$scope.availableCoins, ...$scope.availableTokens];
                          } else if(coin != "ETH"){
                              $scope.swapOrder.toCoin = "ETH";
                          }
                      }
                      // set the selected coin as excluded from the opposing side

                  }


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
        if (isFrom) {
            $scope.swapOrder.toVal = parseFloat(($scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
        }
        else {
            $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.bity.curRate[$scope.swapOrder.fromCoin + $scope.swapOrder.toCoin]).toFixed(bity.decimals));
        }
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
    // todo re-implement
    var setOrderFromStorage = function () {
        var order = JSON.parse(globalFuncs.localStorage.getItem(lStorageKey, null));
        $scope.orderResult = order;
        $scope.swapOrder = order.swapOrder;
        processOrder();
    }
    // todo re-implement
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
                            var bExStr = "<a href="
                            " + url + "
                            " target="
                            _blank
                            " rel="
                            noopener
                            "> View your transaction </a>";
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
    // todo: change to a staging model (i.e. stage1 -> choose path, stage2 -> choose path, ...)
    let kyberStatusIndicatorsList = ["READY", "OPEN_ETH", "SEND_ETH", "APPROVE_TOKENS", "AWAITING_TOKEN_APPROVAL", "TOKENS_APPROVED", "OPEN_TOKEN", "PREPARE_TOKEN_TX", "TRANSMITTED", "CONFIRMED"];
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
        $scope.showedKyberPairAvailableError = false;
        $scope.kyberReturnToStart = false;
        $scope.isKyberSwap = false;
        $scope.showStage2Kyber = false;
        // $scope.showStage2Kyber = true;
        $scope.showStage3Kyber = false;
        $scope.showStage4Kyber = false;
        $scope.kyberEthToToken = false;
        $scope.kyberSwapStatus = "PRE";
        $scope.adv = false;
        // $scope.tx = {};
        $scope.wallet = null;
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


    // ---------------------------------- Update Variables ----------------------------------------------------------


    /* ------------------------- MAIN SWAP PAGE FUNCTIONALITY TIE-INs  (START) ------------------------------------- */


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

    $scope.kyberSwapRateDisplay = function () {
        if ($scope.isKyberSwap) $scope.kyberSwapRateDisplayValue = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)]
    }

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
        console.log($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)]); //todo remove dev item
        if (isFrom) {
            let _toVal = $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] * $scope.swapOrder.fromVal;
            $scope.swapOrder.toVal = parseFloat((_toVal).toFixed(bity.decimals));
        }
        else {
            let _fromVal = $scope.swapOrder.toVal / $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)];
            $scope.swapOrder.fromVal = parseFloat((_fromVal).toFixed(bity.decimals));
            // $scope.swapOrder.toVal = parseFloat(($scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)] * $scope.swapOrder.fromVal).toFixed(bity.decimals));
            $scope.swapOrder.fromVal = parseFloat(($scope.swapOrder.toVal / $scope.kyber.kyberRates[kyber.toPairKey($scope.swapOrder.fromCoin, $scope.swapOrder.toCoin)]).toFixed(bity.decimals));
        }
        if ($scope.swapOrder.fromVal == Infinity) {
            $scope.swapOrder.fromVal = "";
        }
        $scope.swapOrder.isFrom = isFrom;
    };

    $scope.setKyberFinalPrices = function () {
        $scope.showedMinMaxError = false;
        if ($scope.validKyberPair()) {
            if (!$scope.$$phase) $scope.$apply();
            try {
                if (!$scope.Validator.isPositiveNumber($scope.swapOrder.fromVal) || !$scope.Validator.isPositiveNumber($scope.swapOrder.toVal)) throw globalFuncs.errorMsgs[0];
                else if (!$scope.verifyMinMaxValues()) throw globalFuncs.errorMsgs[27];
                $scope.updateKyberEstimate($scope.swapOrder.isFrom);
                $scope.showStage1 = false;
                $scope.prepareKyber();
            } catch (e) {
                console.error(e);
                $scope.notifier.danger(e);
            }
        } else {
            console.error("NOT A SWAPPABLE KYBER NETWORK PAIR")
        }

    };

    /*  (END) MAIN SWAP PAGE FUNCTIONALITY TIE-INs  */

    /* ------------------------------------- KYBER CHECKS ------------------------------------- */

    $scope.checkKyberNetwork = function () {
        $scope.kyber.kyberNetworkState(function (data) {
            console.log("kyberNetworkState", data); //todo remove dev item
            $scope.kyberNetworkEnabled = data.data;
        })
    };

    // if user cap is below the entered amount allow the user to go back and change their inputs
    $scope.returnToStart = function () {
        $scope.showStage1 = true;
        $scope.showStage2Kyber = false;
        $scope.updateEstimate(true);
        $scope.kyberReturnToStart = false;
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
            callback(true);
        }
        // ETH cap for transactions from ETH & to ETH (i.e. the ETH amount cannot be greater than the cap)
        $scope.kyber.checkUserCap(_userAddress, swapValue, isFrom, function (result) {
            callback(result);
        })
    };

    $scope.checkUserTokenBalance = function (_FromValue, _token, _userAddress, callback) {
        $scope.kyber.getBalance(_token, _userAddress, function (_result) {
            let userTokenBalance = new BigNumber(etherUnits.toEther(_result.data, "wei"));
            let enoughTokens = userTokenBalance.gte(_FromValue);
            console.log(userTokenBalance.toString()); //todo remove dev item
            console.log(_FromValue); //todo remove dev item
            callback({tokenBalance: userTokenBalance, hasEnough: enoughTokens});
        });
    };

    $scope.validKyberPair = function () {
        let hasEth = ($scope.swapOrder.fromCoin == "ETH" || $scope.swapOrder.toCoin == "ETH");
        let notBTC = ($scope.swapOrder.fromCoin !== "BTC" || $scope.swapOrder.toCoin !== "BTC");
        let notREP = ($scope.swapOrder.fromCoin !== "REP" || $scope.swapOrder.toCoin !== "REP");
        return (hasEth && notBTC && notREP);
    };


    /* ------------------------------------- KYBER SPECIFIC (tx related) ------------------------------------- */
    $scope.prepareKyber = function () {
        $scope.showStage2Kyber = true;
        // TODO: truncate the displayed rate to the same decimal places as the toVal (~.output.amount)
        $scope.kyberOrderResult.input = {
            amount: $scope.swapOrder.fromVal,
            currency: $scope.swapOrder.fromCoin
        };

        $scope.kyberOrderResult.output = {
            amount: $scope.swapOrder.toVal,
            currency: $scope.swapOrder.toCoin
        };
        $scope.setKyberStatus($scope.kyberStatus.initial);
    };


    /* Kyber ETH & TOKEN */
    // Setup the kyber transaction at the point where the user enters the destAddress (enter address stage)
    $scope.startKyber = function () {
        // check user cap
        $scope.wd = false;
        $scope.checkUserCap($scope.swapOrder.toAddress, function (result) {
            if (!result.error) {

                $scope.kyberModal = new Modal(document.getElementById('kyberTransaction'));
                if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
                    $scope.checkUserTokenBalance($scope.swapOrder.fromVal, $scope.swapOrder.fromCoin, $scope.swapOrder.toAddress, function (_result) {
                        if (_result.hasEnough) {
                            $scope.showStage2Kyber = false;
                            $scope.showStage3Kyber = true;
                            $scope.startKyberTokenSwap();
                        } else {
                            uiFuncs.notifier.danger(` The Supplied ${$scope.swapOrder.fromCoin} value of ${$scope.swapOrder.fromVal} is Greater than your current Token Balance of ${_result.tokenBalance}. `, 5000);
                            $scope.kyberReturnToStart = true;
                        }
                    })
                } else {
                    $scope.showStage2Kyber = false;
                    $scope.showStage3Kyber = true;
                    $scope.startKyberEthSwap();
                }
            } else {
                $scope.displayKyberUserCapError(result.data.isFrom, result.data.originalValue, result.data.userCap);
            }
        });
    };

    // Set status to reflect a token to ETH (or Token to Token) swap to trigger proper UI elements and processing flow
    $scope.startKyberTokenSwap = function () {
        $scope.kyberOrderResult.progress = $scope.buildKyberOrderRequestProgress();
        $scope.setKyberStatus($scope.kyberStatus.token.prepare);
        if (!$scope.$$phase) $scope.$apply();
    };

    // Set status to reflect a ETH to token swap to trigger proper UI elements and processing flow
    $scope.startKyberEthSwap = function () {
        $scope.kyberEthToToken = true;
        $scope.kyberOrderResult.progress = $scope.buildKyberOrderRequestProgress();
        $scope.setKyberStatus($scope.kyberStatus.eth.prepare);//OPEN_ETH
        if (!$scope.$$phase) $scope.$apply();
    };


    // split point
    // Stage 3 'Start Swap'. Based on selected swap pair determine which processing flow to follow
    $scope.openKyberOrder = function (wallet) {
        // $scope.showStage4Kyber = true;
        if ($scope.availableTokens.indexOf($scope.swapOrder.fromCoin) >= 0) {
            $scope.approveTokenKyber(wallet);
        } else {
            $scope.openKyberEthOrder();
        }
    };

    /* Kyber ETH [ETH -> Token]*/

    // Initiate ETH to Token Swap flow
    $scope.openKyberEthOrder = function (wallet) {
        $scope.addressString = $scope.wallet.getAddressString();
        $scope.tx = $scope.buildTransactionObject($scope.kyber.getTradeData($scope.swapOrder), $scope.kyber.getKyberNetworkAddress(), $scope.swapOrder.fromVal);
        var txData = uiFuncs.getTxData($scope);
        txData.nonce = txData.gasPrice = null;
        console.log(txData); //todo remove dev item
        $scope.generateKyberTransaction(txData, "OPEN_ETH");
    };

    // Initiate Token to ETH (or Token to Token) Swap flow
    // Build the Approve transaction to send to the Token Contract of the 'from' Token
    $scope.approveTokenKyber = function (wallet) {
        // $scope.wallet = wallet;
        $scope.tx = $scope.buildTransactionObject($scope.kyber.approveKyber($scope.swapOrder.fromCoin, $scope.swapOrder.fromVal), $scope.kyber.getTokenAddress($scope.swapOrder.fromCoin));
        var txData = uiFuncs.getTxData($scope);
        console.log(txData); //todo remove dev item
        txData.nonce = txData.gasPrice = null;
        $scope.generateKyberTransaction(txData, $scope.kyberStatus.token.prepareApprove);
    }

    // Build the Swap transaction to send to the Kyber Network Contract to execute the swap
    $scope.openKyberTokenOrder = function (nonce, gasPrice) {
        $scope.tx = $scope.buildTransactionObject($scope.kyber.getTradeData($scope.swapOrder), $scope.kyber.getKyberNetworkAddress());
        var txData = uiFuncs.getTxData($scope);
        if (nonce) {
            let newNonce = parseInt(ethFuncs.hexToDecimal(nonce));
            txData.nonce = "0x" + ethFuncs.decimalToHex(newNonce + 1);
            console.log(txData); //todo remove dev item
            txData.gasPrice = gasPrice;
        } else {
            txData.nonce = txData.gasPrice = null;
        }
        $scope.generateKyberTransaction(txData, $scope.kyberStatus.token.prepare);
    };

    // generate the transaction object based on the specific flow stage
    $scope.generateKyberTransaction = function (txData, stage) {
        uiFuncs.generateTx(txData, function (rawTx) {
            if (!rawTx.isError) {
                switch (stage) {
                    case "GENERATE_APPROVAL_TRANSACTION": //$scope.kyberStatus.token.prepareApprove (~equivalent)
                        $scope.kyberTransaction.tokenApproveTx = rawTx;
                        // Build the Swap transaction in the same flow
                        $scope.openKyberTokenOrder(rawTx.nonce, rawTx.gasPrice);
                        break;
                    case "GENERATE_SWAP_TRANSACTION": //$scope.kyberStatus.token.prepare (~equivalent)
                        $scope.kyberTransaction.tokenTx = rawTx;
                        // update status to reflect transaction generation and prompting of user for approval
                        $scope.setKyberStatus($scope.kyberStatus.token.open); //APPROVE_TOKENS
                        $scope.sendKyberModal();
                        break;
                    case "OPEN_ETH": //$scope.kyberStatus.eth.prepare
                        $scope.kyberTransaction.ethTx = rawTx;
                        $scope.setKyberStatus($scope.kyberStatus.eth.send); //SEND_ETH
                        $scope.sendKyberModal();
                        break;
                    default:
                        console.log("default stage", stage); //todo remove dev item
                        break;
                }
            } else {
                console.error(rawTx.error); //todo remove dev item
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    }

    // Trigger the opening of the modal for user review and authorization to proceed
    $scope.sendKyberModal = function () {
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
                console.log("default $scope.kyberOrderResult.progress.status", $scope.kyberOrderResult.progress.status); //todo remove dev item
                break;
        }
    };

    // call the send function with content specific to the transaction object related to the specific flow stage
    $scope.sendKyberTransaction = function () {
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
                console.log("default $scope.kyberOrderResult.progress.status", $scope.kyberOrderResult.progress.status); //todo remove dev item
                break;
        }
    };

    // Send the transaction, call functions related to the specific flow stage, and update the UI
    $scope.sendKyberTx = function (signedTx) {
        // console.log()
        uiFuncs.sendTx(signedTx, function (resp) {
            if (!resp.isError) {
                let notCustomNode = $scope.ajaxReq.type != nodes.nodeTypes.Custom;
                switch ($scope.kyberOrderResult.progress.status) {
                    case "TOKENS_APPROVED":
                        $scope.kyberTransaction.tokenTxHash = notCustomNode ? resp.data : "";
                        $scope.kyberTransaction.tokenTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                        $scope.displayTxHash(resp, $scope.kyberTransaction.tokenTxLink);
                        $scope.kyberOrderResult.progress.bar = getProgressBarArr(5, 5);
                        console.log("$scope.kyberTransaction.tokenTxHash", $scope.kyberTransaction.tokenTxHash);
                        break;
                    case "AWAITING_TOKEN_APPROVAL":
                        $scope.kyberTransaction.tokenApproveTxHash = notCustomNode ? resp.data : "";
                        $scope.kyberTransaction.tokenApproveTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                        $scope.checkForTokenApproveKyber($scope.wallet.getAddressString());
                        console.log("$scope.kyberTransaction.tokenApproveTxHash", $scope.kyberTransaction.tokenApproveTxHash);
                        break;
                    case "SEND_ETH":
                        $scope.kyberTransaction.ethTxHash = notCustomNode ? resp.data : "";
                        $scope.kyberTransaction.ethTxLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                        $scope.kyberOrderResult.progress.bar = getProgressBarArr(5, 5);
                        $scope.displayTxHash(resp, $scope.kyberTransaction.ethTxLink);
                        break;
                    default:
                        console.log("default $scope.kyberOrderResult.progress.status", $scope.kyberOrderResult.progress.status); //todo remove dev item
                        break;
                }
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    };


    // Poll token contract for approval, then trigger the Kyber Network Contract portion of the flow
    $scope.checkForTokenApproveKyber = function (address) {
        var checkValue = etherUnits.toWei($scope.swapOrder.fromVal, "ether");

        var orderResult = $scope.kyberOrderResult;
        var progressCheck = setInterval(function () {
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
                            $scope.notifier.danger(globalFuncs.errorMsgs[5]); //todo Replace with a accurate descriptive error
                        }
                        if (!$scope.$$phase) $scope.$apply();
                    }
                    orderResult.progress.pendingStatusReq = false;
                });
            }
        }, orderResult.progress.checkDelay);
    };

    /* MISC./UTIL */

    // Build a $scope.tx object with supplied parameters
    $scope.buildTransactionObject = function (data, to, value, gasPrice) {
        return {
            gasLimit: '500000',
            data: data,
            to: to,
            unit: "ether",
            value: value ? value : 0,
            sendMode: "ether",
            gasPrice: gasPrice ? gasPrice : kyber.defaultValues.gasPrice
        };
    };

    // Build a $scope.orderResult.progress object with initial values
    $scope.buildKyberOrderRequestProgress = function () {
        return {
            bar: getProgressBarArr(1, 5),
            weiValue: etherUnits.toEther($scope.swapOrder.fromVal, "wei"),
            pendingStatusReq: false,
            checkDelay: 1000
        };
    };

    $scope.displayTxHash = function (resp, txHashInject) {
        var emailLink = '<a class="strong" href="#" target="_blank" rel="noopener noreferrer">Confused? Email Us.</a>'; // email link
        // let txHashInject = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
        var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? `<a class="strong" href="${txHashInject}" target="_blank" rel="noopener"> View your transaction </a>` : "";
        $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<p>" + resp.data + "</p><p>" + bExStr + "</p><p>" + emailLink + "</p>";
        $scope.notifier.success($scope.sendTxStatus);
    };

    $scope.displayKyberUserCapError = function (isFrom, originalValue, userCap) {
        let message;
        if (isFrom) {
            message = ` The Supplied ETH value of ${originalValue} is Greater than your current Kyber Network Maximum of ${userCap}. `;
        } else {
            message = ` The Resulting ETH value of ${originalValue} is Greater than your current Kyber Network Maximum of ${userCap}. `;
        }
        uiFuncs.notifier.danger(message, 2500);
        $scope.kyberReturnToStart = true;
    };


    $scope.setKyberStatus = function (status) {
        $scope.kyberOrderResult.progress.status = status;
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
        parsedKyberTx.balance = $scope.wallet.getBalance()
        parsedKyberTx.from = isJSON ? $scope.wallet.getChecksumAddressString() : ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.from.toString('hex')))
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


    var applyScope = function () {
        if (!$scope.$$phase) $scope.$apply();
    }

    $scope.$watch(function () {
        console.log("swap Watch 1", $scope.wallet);
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function () {
        console.log("swap Watch 2", $scope.wallet);
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance(applyScope);
        $scope.wallet.setTokens();

    });
    ///////////////////////////////////////////////////////////////////////////////////////////

    $scope.newSwap = function () {
        globalFuncs.localStorage.setItem(lStorageKey, '');
        initValues();
    };
    initValues();
    if (isStorageOrderExists()) {
        $scope.showStage1 = false;//todo uncomment after dev
        setOrderFromStorage(); //todo uncomment after dev
    }
};
module.exports = swapCtrl;
