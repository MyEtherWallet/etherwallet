## Official link: https://www.myetherwallet.com - now with SSL! Content of myetherwallet.com is hosted in github, which will gurantee the validity of the source code.

### MyEtherWallet

MyEtherWallet is an open source, javascript, client-side tool for generating Ether wallets. It was created, and is maintained, by [kvhnuke](https://github.com/kvhnuke) and [tayvano](https://github.com/tayvano) aka [insomniasexx](https://www.reddit.com/user/insomniasexx).

- Official link: https://www.myetherwallet.com - now with SSL! Content of myetherwallet.com is hosted in github, which will gurantee the validity of the source code.
- Original, non-SSL link: http://kvhnuke.github.io/etherwallet/
- [original reddit thread](https://www.reddit.com/r/ethereum/comments/3gkknd/ether_wallet_generator_for_now/)

### Purpose

MyEtherWallet was created because many users were having immense trouble setting up the command-line ethereum client on their computers. Therefore, created this browser-based GUI wallet to...
- Bulk generate wallets
- Import client wallet files and presale wallet files.
- Generate transactions from the imported wallet files
- Send transactions

We hope that it'll help most of us to accomplish day to day tasks without having a fully running client.


### Contact
If you can think of any other features or run into bugs, let us know. You can fork, open a PR, open an issue, [message kvhnuke on reddit](https://www.reddit.com/message/compose/?to=kvhnuke), [email tayvano](mailto:tayvano@gmail.com) or [in any of these ways](https://www.myetherwallet.com/#contact).


### Developing
Want to contribute? Great! Have questions? Ask us! Have issues? Open an issue!

##### Using Gulp
EtherWallet uses [gulp](https://github.com/gulpjs/gulp) to compile, minify, and uncss the less and to concatonate and uglify the JS. It watches all the files and works its magic when needed. A full list of packages we are using can be found below. If you aren't familiar with gulp, maybe google it first. The basics on how to use gulp are below.

1. Make sure you have a fairly recent version of node.js & npm installed. You can check using:
```sh
$ npm -v
$ node -v
```

2. Globally install gulp. You may need to sudo if you are on mac / linux:
```sh
$ npm install gulp -g
$ sudo npm install gulp -g
```
3. Make sure gulp is installed:
```sh
$ gulp -v
```
4. cd into the project folder
```sh
$ cd path/to/project
```
5. install node_modules into the project directory
```sh
$ npm install
```
6. Running the default gulp task will run and watch all the required folders and update when necessary.
```sh
$ gulp
```

A list of packages we are using with gulp:
- [gulp-less](https://www.npmjs.com/package/gulp-less) - compiles the less
- [gulp-autoprefixer]( https://www.npmjs.com/package/gulp-autoprefixer ) - autoprefixes
- [gulp-minify-css]( https://www.npmjs.com/package/gulp-minify-css ) - minifies the css once the less is compiled
- [gulp-notify]( https://www.npmjs.com/package/gulp-notify ) - notifies when things get compiled, minified, uglified, etc. Also notifies you (sometimes) on errors.
- [gulp-rename]( https://www.npmjs.com/package/gulp-rename ) - renames to .min.css etc.
- [gulp-uncss]( https://www.npmjs.com/package/gulp-uncss ) - gets rid of the bloat by eliminating any unsued CSS styles. If you add an HTML page, you will need to add it to the gulpfile.js
- [gulp-concat]( https://www.npmjs.com/package/gulp-concat ) - concats the js
- [gulp-uglify]( https://www.npmjs.com/package/gulp-uglify ) - uglifies the js
- [gulp-template]( https://www.npmjs.com/package/gulp-template ) - configures templates

##### Less / CSS

This project uses [Twitter Bootstrap](https://github.com/twbs/bootstrap) as a base. But, we're lazy so we just edit the bootstrap files when necessary. You can too.  In the end, all unused CSS rules are removed using the gulp-uncss, which keeps Bootstrap from being bloated.

If you want to edit the styling, you will mostly want to access the following files:
- **etherwallet-variables.less** - all our bootstrap variables and custom variables go here. we do not use the variables.less in the bootstrap folder.
- **etherwallet-custom.less** - all custom rules or overrides go here.
- **etherwallet-utilities.less** - this is a group of utilties that I use on all my projects. Text color, background color, and vertical margins / padding live here. Feel free to add to it.
- **etherwallet-master.less** is the file that brings all our files together.

Don't forget, if you add an additional HTML page, you will need to add it to the gulpfile.js

      .pipe(uncss({
        html: [
          './index.html',
          './newHTMLFile.html',
          './anotherNewHTMLFile.html'
        ]
      }))

##### JS
This project loads JQuery 1.11.3 and then a minified JS file that is composed of the files found in /js/source/*.js. As long as you add any additional JS files to the /js/source/ folder, gulp will handle it automatically.


### TODO / In Progress

#### .com & CX
- Send Transactions - display in whatever the radio button says, not WEI
- Send Transactions - Add optional custom gas limit / data on standard send transaction tab
- Global - Modularize the JS to use across .com and CX
- Generate Wallet / Bulk Generate - When generating a new wallet, the password is shown in plaintext instead of dots. I would rather have them shown as dots, perhaps with a optional ticker to show the plaintext. (from reddit thread)
- Paper wallet Address should be checksum'd
- Change layout of paper wallet to have the two QR codes further apart.

#### just .com
- View Wallet Details - Add unencrypted JSON option
- View Wallet Details - Add unencrypted -> Encrypted option
- Offline Transactions "Would be great to have a feature where it automatically generates QR code for signed transaction (show the QR code along the signed transaction box), which will totally removes the risks for using a USB to connect to an offline computer to download the signed transaction then broadcast into a networked computer." https://www.reddit.com/user/Bitnicity

#### just CX
- Global - Implement Checksums
- Would be nice if on quick send it defaulted to the only wallet you have if you have just one created. (from reddit thread)
- The watch address doesn't show in the popup view from the extension button in the browser bar.
