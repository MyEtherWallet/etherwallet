'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    Ropsten: "ROPSTEN ETH",
    Custom: "CUSTOM ETH"
};
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'estimateGas': false,
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': require('./nodeHelpers/mewEth')
    },
    'etc_mew': {
        'name': 'ETC',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': false,
        'chainId': 0,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': require('./nodeHelpers/mewEtc')
    },
    'rop_mew': {
        'name': 'Ropsten-beta',
        'type': nodes.nodeTypes.Ropsten,
        'blockExplorerTX': 'https://testnet.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://testnet.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/rop', '')
    },
    'eth2_mew': {
        'name': 'ETH-beta',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'estimateGas': true,
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    },
    'eth_ethscan': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'estimateGas': false,
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscan')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
