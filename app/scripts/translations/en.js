'use strict';
var en = function() {}
en.code = 'en';
en.data = {
  /* Do Not Change */
  translate_version: '0.0',
  CX_version: '2.9',
  MEW_vesion: '2.9',

  /* Navigation */
  NAV_MyWallets: 'My Wallets',
  NAV_AddWallet: 'Add Wallet',
  NAV_SendEther: 'Send Ether',
  NAV_SendTokens: 'Send Tokens',
  NAV_WithdrawDAO: 'Withdraw DAO',
  NAV_ClaimDGD: 'Claim DGD',
  NAV_Help: 'Withdraw DAO',
  NAV_Contracts: 'Contracts',
  NAV_Contact: 'Contact',

  /* General */
  GEN_Download: 'Download',
  GEN_Address: 'Your Address',
  GEN_AddessDesc: 'You may know this as your "Account #" or your "Public Key". It is what you send people so they can send you ETH. That icon is an easy way to recognize your address.',
  GEN_PrivKey: 'Private Key (unencrypted)',
  GEN_PrivKeyDesc: 'This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.',
  GEN_Print: 'Print Paper Wallet',
  GEN_PrintDesc: 'ProTip: Click print and save this as a PDF, even if you do not own a printer!',
  GEN_Keystore: 'Keystore/JSON File (Encrypted &middot; Mist/Geth Format &middot; Recommended)',
  GEN_KeystoreDesc: 'This Keystore / JSON file matches the format used by Mist & Geth so you can easily import it in the future. It is the recommended file to download and back up.',
  GEN_Json: 'JSON File (unencrypted)',
  GEN_JsonDesc: 'This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.',

  GEN_Balance: 'Account Balance',
  GEN_Equiv: 'Equivalent Value',
  GEN_TransHistory: 'Transaction History',

  /* Header */
  MEW_Warning_1: '',
  CX_Warning_1: 'Make sure you have **external backups** of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up.',
  MEW_Tagline: 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension',
	CX_Tagline: 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension',

  /* View Wallet Details */
  VIEWWALLET_Title: 'View Wallet Details',
  VIEWWALLET_Subtitle: 'Download an unencrypted private key, grab your encrypted Mist/Geth Keystore file, or re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). You can also do this with the [MyEtherWallet CX](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm/) and save your wallet for easier and quicker access. If you just want to check your balance, we recommend using a blockchain explorer like <a href="http://etherscan.io/" target="_blank">etherscan.io</a> or <a href="https://live.ether.camp/" target="_blank">live.ether.camp</a>.',
  VIEWWALLET_SuccessMsg: 'Success! Here are your wallet details.',

  /* MEW Wallet Decrypt */

};
module.exports = en;
