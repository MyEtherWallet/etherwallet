'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
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
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscan')
    },
    'eth_infura': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://mainnet.infura.io/mew')
    },
    'eth_giveth': {
        'name': 'ETH',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'Giveth.io',
        'lib': new nodes.customNode('https://mew.giveth.io', '')
    },
    'etc_epool': {
        'name': 'ETC',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'service': 'Epool.io',
        'lib': new nodes.customNode('https://mewapi.epool.io', '')
    },
    'rop_mew': {
        'name': 'Ropsten',
        'type': nodes.nodeTypes.Ropsten,
        'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://api.myetherapi.com/rop', '')
    },
    'rop_infura': {
        'name': 'Ropsten',
        'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.Ropsten,
        'eip155': true,
        'chainId': 3,
        'tokenList': require('./tokens/ropstenTokens.json'),
        'abiList': require('./abiDefinitions/ropstenAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://ropsten.infura.io/mew')
    },
    'kov_ethscan': {
        'name': 'Kovan',
        'type': nodes.nodeTypes.Kovan,
        'blockExplorerTX': 'https://kovan.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://kovan.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 42,
        'tokenList': require('./tokens/kovanTokens.json'),
        'abiList': require('./abiDefinitions/kovanAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanKov')
    },
    'kov_infura': {
        'name': 'Kovan',
        'type': nodes.nodeTypes.Kovan,
        'blockExplorerTX': 'https://kovan.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://kovan.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 42,
        'tokenList': require('./tokens/kovanTokens.json'),
        'abiList': require('./abiDefinitions/kovanAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://kovan.infura.io/mew')
    },
    'rin_ethscan': {
        'name': 'Rinkeby',
        'type': nodes.nodeTypes.Rinkeby,
        'blockExplorerTX': 'https://rinkeby.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://rinkeby.etherscan.io/address/[[address]]',
        'eip155': true,
        'chainId': 4,
        'tokenList': require('./tokens/rinkebyTokens.json'),
        'abiList': require('./abiDefinitions/rinkebyAbi.json'),
        'service': 'Etherscan.io',
        'lib': require('./nodeHelpers/etherscanRin')
    },
    'rin_infura': {
        'name': 'Rinkeby',
        'blockExplorerTX': 'https://rinkeby.etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://rinkeby.etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.Rinkeby,
        'eip155': true,
        'chainId': 4,
        'tokenList': require('./tokens/rinkebyTokens.json'),
        'abiList': require('./abiDefinitions/rinkebyAbi.json'),
        'service': 'infura.io',
        'lib': new nodes.infuraNode('https://rinkeby.infura.io/mew')
    },
    'exp': {
        'name': 'EXP',
        'blockExplorerTX': 'http://www.gander.tech/tx/[[txHash]]',
        'blockExplorerAddr': 'http://www.gander.tech/address/[[address]]',
        'type': nodes.nodeTypes.EXP,
        'eip155': true,
        'chainId': 2,
        'tokenList': require('./tokens/expTokens.json'),
        'abiList': require('./abiDefinitions/expAbi.json'),
        'estimateGas': true,
        'service': 'Expanse.tech',
        'lib': new nodes.customNode('https://node.expanse.tech/', '')
    },
    'ubq': {
        'name': 'UBQ',
        'blockExplorerTX': 'https://ubiqscan.io/en/tx/[[txHash]]',
        'blockExplorerAddr': 'https://ubiqscan.io/en/address/[[address]]',
        'type': nodes.nodeTypes.UBQ,
        'eip155': true,
        'chainId': 8,
        'tokenList': require('./tokens/ubqTokens.json'),
        'abiList': require('./abiDefinitions/ubqAbi.json'),
        'estimateGas': true,
        'service': 'ubiqscan.io',
        'lib': new nodes.customNode('https://pyrus2.ubiqscan.io', '')
    },
    'poa': {
        'name': 'POA',
        'blockExplorerTX': 'https://core-explorer.poa.network/tx/[[txHash]]',
        'blockExplorerAddr': 'https://core-explorer.poa.network/account/[[address]]',
        'type': nodes.nodeTypes.POA,
        'eip155': true,
        'chainId': 99,
        'tokenList': require('./tokens/poaTokens.json'),
        'abiList': require('./abiDefinitions/poaAbi.json'),
        'estimateGas': true,
        'service': 'core.poa.network',
        'lib': new nodes.customNode('https://core.poa.network', '')
    },
    'tomo': {
        'name': 'TOMO',
        'blockExplorerTX': 'https://explorer.tomocoin.io/#/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.tomocoin.io/#/address/[[address]]',
        'type': nodes.nodeTypes.TOMO,
        'eip155': true,
        'chainId': 40686,
        'tokenList': require('./tokens/tomoTokens.json'),
        'abiList': require('./abiDefinitions/tomoAbi.json'),
        'estimateGas': true,
        'service': 'core.tomocoin.io',
        'lib': new nodes.customNode('https://core.tomocoin.io', '')
    },
    'ella': {
        'name': 'ELLA',
        'blockExplorerTX': 'https://explorer.ellaism.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.ellaism.org/addr/[[address]]',
        'type': nodes.nodeTypes.ELLA,
        'eip155': true,
        'chainId': 64,
        'tokenList': require('./tokens/ellaTokens.json'),
        'abiList': require('./abiDefinitions/ellaAbi.json'),
        'estimateGas': true,
        'service': 'ellaism.org',
        'lib': new nodes.customNode('https://jsonrpc.ellaism.org', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
