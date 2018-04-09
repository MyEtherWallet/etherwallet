const mainKyberABI = require('./kyberConfig/mainABI.json');
const kyberFuncs = function () {}

kyberFuncs.prototype.getRate = async function (to, from ,reservedIndex) {
  // return rate, expBlock, balance
}

module.exports = kyberFuncs;
