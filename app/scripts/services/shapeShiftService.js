'use strict';

let SOFT_MIN_CAP_ETH = 0.0001;
let SOFT_MIN_CAP_BTC = 0.00001;
let API_KEY =
  '0ca1ccd50b708a3f8c02327f0caeeece06d3ddc1b0ac749a987b453ee0f4a29bdb5da2e53bc35e57fb4bb7ae1f43c93bb098c3c4716375fc1001c55d8c94c160';
let SHAPE_SHIFT_BASE_URL = 'https://shapeshift.io';

var shapeShiftService = function($http) {
  return {
    // Status: No Deposits Received
    // {
    //   status:"no_deposits",
    //   address:[address]           //matches address submitted
    // }
    //
    // Status: Received (we see a new deposit but have not finished processing it)
    // {
    //   status:"received",
    //   address:[address]           //matches address submitted
    // }
    //
    // Status: Complete
    // {
    //   status : "complete",
    //   address: [address],
    //   withdraw: [withdrawal address],
    //   incomingCoin: [amount deposited],
    //   incomingType: [coin type of deposit],
    //   outgoingCoin: [amount sent to withdrawal address],
    //   outgoingType: [coin type of withdrawal],
    //   transaction: [transaction id of coin sent to withdrawal address]
    // }
    //
    // Status: Failed
    // {
    //   status : "failed",
    //   error: [Text describing failure]
    // }
    checkStatus: function(address) {
      return $http.get(`${SHAPE_SHIFT_BASE_URL}/txStat/${address}`).then(function(resp) {
        return resp.data;
      });
    },

    // pair: [pair],
    // withdrawal: [Withdrawal Address], //-- will match address submitted in post
    // withdrawalAmount: [Withdrawal Amount], // Amount of the output coin you will receive
    // deposit: [Deposit Address (or memo field if input coin is BTS / BITUSD)],
    // depositAmount: [Deposit Amount], // Exact amount of input coin to send in
    // expiration: [timestamp when this will expire],
    // quotedRate: [the exchange rate to be honored]
    // apiPubKey: [public API attached to this shift, if one was given]
    sendAmount: function(withdrawal, originKind, destinationKind, destinationAmount) {
      let pair = originKind.toLowerCase() + '_' + destinationKind.toLowerCase();
      return $http({
        url: `${SHAPE_SHIFT_BASE_URL}/sendamount`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { withdrawal: withdrawal, pair: pair, amount: destinationAmount, apiKey: API_KEY }
      }).then(function(resp) {
        return resp.data.success;
      });
    },

    getMarketInfo: function() {
      return $http.get(`${SHAPE_SHIFT_BASE_URL}/marketinfo`).then(function(resp) {
        return resp.data;
      });
    },

    getPairRateFromMarketInfo: function(originKind, destinationKind, marketInfo) {
      let pair = originKind.toUpperCase() + '_' + destinationKind.toUpperCase();
      let filteredArray = marketInfo.filter(function(obj) {
        return obj.pair === pair;
      });
      if (filteredArray.length > 0) {
        let pairData = filteredArray[0];
        if (originKind === 'ETH') {
          if (pairData.min < SOFT_MIN_CAP_ETH) {
            pairData.min = SOFT_MIN_CAP_ETH;
          }
        }
        if (originKind === 'BTC') {
          if (pairData.min < SOFT_MIN_CAP_BTC) {
            pairData.min = SOFT_MIN_CAP_BTC;
          }
        }
        return pairData;
      } else {
        return {
          min: 0,
          limit: 0,
          maxLimit: 0,
          rate: 0,
          pair: pair
        }
      }
    },

    getTimeRemaining: function(address) {
      return $http.get(`${SHAPE_SHIFT_BASE_URL}/timeremaining/${address}`).then(function(resp) {
        return resp.data;
      });
    },

    onlyAvailableCoins: function(coinsObj) {
      let coinObjCopy = angular.copy(coinsObj);
      Object.keys(coinObjCopy).forEach(function(key) {
        if (!(coinObjCopy[key].status === 'available')) {
          delete coinObjCopy[key];
        }
      });
      return coinObjCopy;
    },

    getAvailableCoins: function(whiteListSymbolArray) {
      let that = this;
      return $http.get(`${SHAPE_SHIFT_BASE_URL}/getcoins`).then(function(resp) {
        let availableCoins = that.onlyAvailableCoins(resp.data);
        let whiteListedAvailableCoins = that.getWhiteListedCoins(
          availableCoins,
          whiteListSymbolArray
        );
        return that
          .attachRatesToCoins(whiteListedAvailableCoins, Object.keys(whiteListedAvailableCoins))
          .then(function(coinDataWithRates) {
            return coinDataWithRates;
          });
      });
    },

    getWhiteListedCoins: function(coinsObj, whiteListSymbolArray) {
      let filteredObj = {};
      whiteListSymbolArray.forEach(function(each) {
        let coin = coinsObj[each];
        if (coin) {
          filteredObj[each] = coin;
        }
      });
      return filteredObj;
    },

    attachRateToCoin: function(coinsObj, coinSymbol, originKind, marketInfo) {
      let destinationKind = coinsObj[coinSymbol].symbol;
      let pairRate = this.getPairRateFromMarketInfo(originKind, destinationKind, marketInfo);
      if (!coinsObj[coinSymbol]['RATES']) {
        coinsObj[coinSymbol]['RATES'] = {};
      }
      coinsObj[coinSymbol]['RATES'][originKind] = pairRate;
    },

    clean: function(obj) {
      for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
    },

    attachRatesToCoins: function(coinsObj, originKindArray) {
      let defaultOrigin = ['BTC', 'ETH'];
      if (!originKindArray) {
        originKindArray = ['BTC', 'ETH'];
      }
      let that = this;
      return this.getMarketInfo().then(function(marketInfo) {
        Object.keys(coinsObj).forEach(function(coinSymbol) {
          originKindArray.forEach(function(originKind) {
            if (originKind !== coinSymbol) {
              that.attachRateToCoin(coinsObj, coinSymbol, originKind, marketInfo);
              that.clean(coinsObj[coinSymbol]['RATES'][originKind]);
            }
          });
          defaultOrigin.forEach(function(defaultOriginKind) {
            if (defaultOriginKind !== coinSymbol) {
              that.attachRateToCoin(coinsObj, coinSymbol, defaultOriginKind, marketInfo);
            }
            that.clean(coinsObj[coinSymbol]['RATES'][defaultOriginKind]);
          });
        });
        return coinsObj;
      });
    }
  };
};

module.exports = shapeShiftService;
