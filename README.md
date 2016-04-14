## https://www.myetherwallet.com - Content of MyEtherWallet.com is served directly from github.

### MyEtherWallet

MyEtherWallet is an open source, javascript, client-side tool for generating Ether wallets. It was created, and is maintained, by [kvhnuke](https://github.com/kvhnuke) and [tayvano](https://github.com/tayvano) aka [insomniasexx](https://www.reddit.com/user/insomniasexx).

- Official link: https://www.myetherwallet.com
- Original, non-SSL link: http://kvhnuke.github.io/etherwallet/

### Purpose

MyEtherWallet was created because many users were having immense trouble setting up the command-line ethereum client on their computers. Therefore, created this browser-based GUI wallet to...
- Import client wallet files and presale wallet files.
- Generate wallets completely client side and provide raw private keys, JSON files, and paper version of the account.
- Bulk generate wallets
- Generate & send transactions
- We hope that it'll help most of us to accomplish day to day tasks without having a fully running client.


### Contact
If you can think of any other features or run into bugs, let us know. You can fork, open a PR, open an issue, [message kvhnuke on reddit](https://www.reddit.com/message/compose/?to=kvhnuke), [email tayvano](mailto:tayvano@gmail.com) or [in any of these ways](https://www.myetherwallet.com/#contact).

### TODO / In Progress

#### .com & CX
- Send Transactions - display in whatever the radio button says, not WEI
- Send Transactions - Add optional custom gas limit / data on standard send transaction tab
- Global - Modularize the JS to use across .com and CX
- Generate Wallet / Bulk Generate - When generating a new wallet, the password is shown in plaintext instead of dots. I would rather have them shown as dots, perhaps with a optional ticker to show the plaintext. (from reddit thread)

#### just .com
- View Wallet Details - Add unencrypted JSON option
- View Wallet Details - Add unencrypted -> Encrypted option
- Offline Transactions "Would be great to have a feature where it automatically generates QR code for signed transaction (show the QR code along the signed transaction box), which will totally removes the risks for using a USB to connect to an offline computer to download the signed transaction then broadcast into a networked computer." https://www.reddit.com/user/Bitnicity

#### just CX
- Global - Implement Checksums
- Would be nice if on quick send it defaulted to the only wallet you have if you have just one created. (from reddit thread)
- The watch address doesn't show in the popup view from the extension button in the browser bar.


##### MyEtherWallet.com & MyEtherWallet CX are licensed under The MIT License (MIT).
