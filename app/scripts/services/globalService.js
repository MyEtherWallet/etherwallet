'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
  globalFuncs.checkAndRedirectHTTPS();
  ajaxReq.http = $http;
  ajaxReq.postSerializer = $httpParamSerializerJQLike;
  ajaxReq.getETHvalue = nodes.ethPrice.getETHvalue;
  ajaxReq.getRates = nodes.ethPrice.getRates;
var tabs = {
  walletViewCX: {
    id: 0,
    name: "WALL_walletViewCX",
    url: "my-wallet",
    mew: false,
    cx: true
  },
  walletAdd: {
    id: 1,
    name: "WALL_Add",
    url: "add-wallet",
    mew: false,
    cx: true
  },
  txSend: {
    id: 2,
    name: "TX_Send_Title",
    url: "send",
    mew: true,
    cx: true
  },
  txSign: {
    id: 3,
    name: "TX_Sign",
    url: "sign",
    mew: false,
    cx: false
  },
  txBroadcast: {
    id: 4,
    name: "TX_Broadcast",
    url: "broadcast",
    mew: true,
    cx: true
  },
  txView: {
    id: 5,
    name: "TX_View_Short",
    url: "view-tx",
    mew: true,
    cx: true
  },
  swap: {
    id: 6,
    name: "SWAP_Title",
    url: "swap",
    mew: true,
    cx: true
  },
  ens: {
    id: 7,
    name: "ENS_Title",
    url: "ens",
    mew: true,
    cx: true
  },
  contracts: {
    id: 8,
    name: "CONTRACT_Title",
    url: "contracts",
    mew: true,
    cx: true
  },
  walletGenerate: {
    id: 9,
    name: "WALL_Create",
    url: "create-wallet",
    mew: true,
    cx: false
  },
  walletView: {
    id: 10,
    name: "WALL_View",
    url: "view-wallet",
    mew: true,
    cx: false
  },
  signMsg: {
    id: 11,
    name: "MSG_Sign",
    url: "sign-message",
    mew: false,
    cx: false
  },
  bulkGenerate: {
    id: 12,
    name: "BULK_Generate",
    url: "bulk-generate",
    mew: false,
    cx: false
  }
};
var currentTab = 0;
if(typeof chrome != 'undefined')
  currentTab = chrome.windows === undefined ? 0 : 3;
return {
  tabs: tabs,
  currentTab: currentTab
};
};
module.exports = globalService;
