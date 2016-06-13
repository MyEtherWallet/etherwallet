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

Version 2 expands on this vision to offer:
- Generate and send offline transactions, ensuring your private keys never leave your computer.
- Include custom gas / data in the standard send transaction tab.
- Rewritten in Angular in order to make it was easier to update and maintain.
- Crowdsale / Token Sale support on a case by case basis (Digix, Slock.it, etc.)
- New encryption method. Now matches geth / Mist keystore format (v3) to make moving between MyEtherWallet and Mist *much* easier.
- QR codes on the Offline Transaction page for easier transferring between computers.
- Ability to create a custom link that will pre-fill the send transaction tab with the to address, amount, data, and gas. All the user has to do is unlock their wallet and press send.

### Contact
If you can think of any other features or run into bugs, let us know. You can fork, open a PR, open an issue, [message kvhnuke on reddit](https://www.reddit.com/message/compose/?to=kvhnuke), [email tayvano](mailto:tayvano@gmail.com) or [in any of these ways](https://www.myetherwallet.com/#contact).

### TODO / In Progress
See our [trello baord](https://trello.com/b/npX68sKj/myetherwallet)

#### MyEtherWallet.com & MyEtherWallet CX are licensed under The MIT License (MIT).
