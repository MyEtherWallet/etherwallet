'use strict';
var _ethscan = require('./etherscan');
var rinkeby = {};
for (var attr in _ethscan) {
    rinkeby[attr] = _ethscan[attr];
}
rinkeby.SERVERURL = 'https://rinkeby.etherscan.io/api';
module.exports = rinkeby;
