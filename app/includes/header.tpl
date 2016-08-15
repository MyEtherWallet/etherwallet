<!DOCTYPE html>
<html lang="en" ng-app="mewApp">
<head>
  <meta charset="utf-8">
  <title>MyEtherWallet: Open Source JavaScript Client-Side Ether Wallet</title>
  <link rel="canonical" href="https://www.myetherwallet.com" />
  <meta name="description" content="Ether Wallet: Open Source JavaScript Client-Side Ether Wallet">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/etherwallet-master.min.css">
  <script type="text/javascript" src="js/etherwallet-static.min.js"></script>
  <script type="text/javascript" src="js/etherwallet-master.js"></script>
  <link rel="apple-touch-icon" sizes="60x60" href="images/fav/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/fav/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/fav/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/fav/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/fav/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="images/fav/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="images/fav/favicon-194x194.png" sizes="194x194">
  <link rel="icon" type="image/png" href="images/fav/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="images/fav/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="images/fav/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="images/fav/manifest.json">
  <link rel="shortcut icon" href="images/favicon.ico">
  <meta name="msapplication-TileColor" content="#2e4868">
  <meta name="msapplication-TileImage" content="images/fav/mstile-144x144.png">
  <meta name="msapplication-config" content="images/fav/browserconfig.xml">
  <meta name="theme-color" content="#2e4868">
</head>

<body>
<span class="announcement annoucement-warning" style="display:block;">Always check the URL before accessing your wallet or creating a new wallet. Beware of phishing sites!</span>
@@if (site === 'mew' ) {
  <header class="container-fluid bg-gradient text-white">
    <section class="container">
      <a href="https://www.myetherwallet.com/"><img src="images/etherwallet-logo.png" height="70px" width="auto" alt="My Ether Wallet" /></a>
      <p>Open Source JavaScript Client-Side Ether Wallet &middot; v2.9</p>
    </section>
  </header>
}

@@if (site === 'cx' ) {
  <a href="https://www.reddit.com/r/ethereum/comments/47nkoi/psa_check_your_ethaddressorg_wallets_and_any/d0eo45o" class="announcement annoucement-warning" target="_blank">
    <div class="container">
      Make sure you have <strong>external backups</strong> of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, <strong>not</strong> a way to back them up.
    </div>
  </a>
  <header class="container-fluid bg-gradient text-white">
    <section class="container">
      <a href="/cx-wallet.html"><img src="images/etherwalletcx-logo.png" height="70px" width="auto" alt="My Ether Wallet" /></a>
      <p>Open Source JavaScript Client-Side Ether Wallet Chrome Extension &middot; v2.9</p>
    </section>
  </header>
}



