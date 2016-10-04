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

@@if (site === 'mew' ) {
  <header ng-controller='tabsCtrl'>
    <a href="https://www.reddit.com/r/ethereum/comments/47nkoi/psa_check_your_ethaddressorg_wallets_and_any/d0eo45o" class="small announcement annoucement-warning" target="_blank">
      <div class="container" translate="MEW_Warning_1">Always check the URL before accessing your wallet or creating a new wallet. Beware of phishing sites!</div>
    </a>
    <section class="container-fluid bg-gradient header-branding">
      <section class="container">
        <a class="brand" href="https://www.myetherwallet.com/"><img src="images/etherwallet-logo.svg" height="64px" width="auto" alt="My Ether Wallet" /></a>
        <div class="tagline">
          <span style="max-width: 375px" translate="MEW_Tagline">Open Source JavaScript Client-Side Ether Wallet</span>
}

@@if (site === 'cx' ) {
  <header ng-controller='tabsCtrl'>
    <a href="" class="small announcement annoucement-warning" target="_blank">
      <div class="container" translate="CX_Warning_1">Make sure you have <strong>external backups</strong> of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, <strong>not</strong> a way to back them up.</div>
    </a>
    <section class="container-fluid bg-gradient header-branding">
      <section class="container">
        <a class="brand" href="/cx-wallet.html"><img src="images/etherwalletcx-logo.svg" height="64px" width="auto" alt="My Ether Wallet" /></a>
        <div class="tagline">
          <span style="max-width: 375px" translate="CX_Tagline">Open Source JavaScript Client-Side Ether Wallet Chrome Extension</span>
}
        &middot; v3.0 &middot;
        <span class="dropdown">
          <a href="#" class="dropdown-toggle" ng-click="dropdown = !dropdown"> {{curLang}} <span class="caret"></span></a>
          <ul class="dropdown-menu" ng-show="dropdown" style="display:none;" id="langDrop">
        <!--<li><a ng-class="{true:'active'}[curLang=='العربية']" ng-click="changeLanguage('ar','العربية')">العربية</a></li>-->
        <!--<li><a ng-class="{true:'active'}[curLang=='български']" ng-click="changeLanguage('bg','български')">български</a></li> -->
            <li><a ng-class="{true:'active'}[curLang=='Deutsch']" ng-click="changeLanguage('de','Deutsch')">Deutsch</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Ελληνικά']" ng-click="changeLanguage('el','Ελληνικά')">Ελληνικά</a></li>
            <li><a ng-class="{true:'active'}[curLang=='English']" ng-click="changeLanguage('en','English')">English</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Español']" ng-click="changeLanguage('es','Español')">Español</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='Eesti']" ng-click="changeLanguage('et','Eesti')">Eesti</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Suomi']" ng-click="changeLanguage('fi','Suomi')">Suomi</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Français']" ng-click="changeLanguage('fr','Français')">Français</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='עברית']" ng-click="changeLanguage('he','עברית')">עברית</a></li>-->
        <!--<li><a ng-class="{true:'active'}[curLang=='हिन्दी']" ng-click="changeLanguage('hi','हिन्दी')">हिन्दी</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Magyar']" ng-click="changeLanguage('hu','Magyar')">Magyar</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Indonesian']" ng-click="changeLanguage('id','Indonesian')">Bahasa Indonesia</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Italiano']" ng-click="changeLanguage('it','Italiano')">Italiano</a></li>
            <li><a ng-class="{true:'active'}[curLang=='日本語']" ng-click="changeLanguage('ja','日本語')">日本語</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='한국어']" ng-click="changeLanguage('ko','한국어')">한국어</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Nederlands']" ng-click="changeLanguage('nl','Nederlands')">Nederlands</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Norsk Bokmål']" ng-click="changeLanguage('no','Norsk Bokmål')">Norsk Bokmål</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Polski']" ng-click="changeLanguage('pl','Polski')">Polski</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='Português']" ng-click="changeLanguage('pt','Português')">Português</a></li>-->
        <!--<li><a ng-class="{true:'active'}[curLang=='Português-Brazilian']" ng-click="changeLanguage('ptbr','Português-Brazilian')">Português-Brazilian</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Русский']" ng-click="changeLanguage('ru','Русский')">Русский</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='Slovenčina']" ng-click="changeLanguage('sk','Slovenčina')">Slovenčina</a></li>-->
        <!--<li><a ng-class="{true:'active'}[curLang=='Slovenščina']" ng-click="changeLanguage('sl','Slovenščina')">Slovenščina</a></li>-->
        <!--<li><a ng-class="{true:'active'}[curLang=='Svenska']" ng-click="changeLanguage('sv','Svenska')">Svenska</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Türkçe']" ng-click="changeLanguage('tr','Türkçe')">Türkçe</a></li>
        <!--<li><a ng-class="{true:'active'}[curLang=='Українська']" ng-click="changeLanguage('uk','Українська')">Українська</a></li>-->
            <li><a ng-class="{true:'active'}[curLang=='Tiếng Việt']" ng-click="changeLanguage('vi','Tiếng Việt')">Tiếng Việt</a></li>
            <li><a ng-class="{true:'active'}[curLang=='中文']" ng-click="changeLanguage('zh','中文')">中文</a></li>
            <li role="separator" class="divider"></li>
            <li><a data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></li>
          </ul>
        </span>
      </div>
    </section>
  </section>

  <section class="container nav-container overflowing" >
    <a ng-show="showLeftArrow" class="nav-arrow-left" ng-click="scrollLeft(100);" ng-mouseover="scrollHoverIn(true,2);" ng-mouseleave="scrollHoverOut()">&#171;</a>
    <div class="nav-scroll">
      <nav class="nav-inner">
        @@if (site === 'mew' ) {
        <span ng-repeat="tab in tabNames track by $index" class="nav-item" ng-class="{active: $index==activeTab}" ng-show="{{tab.mew}}" ng-click="tabClick($index)"> <a translate="{{tab.name}}"></a></span>
        }
        @@if (site === 'cx' ) {
        <span ng-repeat="tab in tabNames track by $index" class="nav-item" ng-class="{active: $index==activeTab}" ng-show="{{tab.cx}}" ng-click="tabClick($index)"> <a translate="{{tab.name}}"></a></span>
        }
      </nav>
    </div>
    <a ng-show="showRightArrow" class="nav-arrow-right" ng-click="scrollRight(100);" ng-mouseover="scrollHoverIn(false,2);" ng-mouseleave="scrollHoverOut()">&#187;</a>
  </section>

</header>
