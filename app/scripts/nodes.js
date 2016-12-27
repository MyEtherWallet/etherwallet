'use strict';
var nodes = function() {}
nodes.nodeList = {
    'eth_mew': {
        'name': 'ETH',
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': require('./nodeHelpers/mewEth')
    },
    'etc_mew': {
        'name': 'ETC',
        'eip155': false,
        'chainId': 0,
        'tokenList': require('./tokens/etcTokens.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': require('./nodeHelpers/mewEtc')
    },
    'rop_mew': {
        'name': 'Ropsten',
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': require('./nodeHelpers/mewRopsten')
    },
    'eth_ethscan': {
        'name': 'ETH',
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'estimateGas': false,
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscan')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
