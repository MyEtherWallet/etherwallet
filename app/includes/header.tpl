<!DOCTYPE html>
<html lang="en" ng-app="mewApp">
<head>
  <meta charset="utf-8">
  <title>MyEtherWallet.com</title>
  <link rel="canonical" href="https://www.myetherwallet.com" />
  <meta name="description" content="MyEtherWallet.com is a free, open-source, client-side tool for easily & securely interacting with the Ethereum blockchain.">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/etherwallet-master.min.css">
  <script type="text/javascript" src="js/etherwallet-static.min.js"></script>

  @@if (production) {
    <script type="text/javascript" src="js/etherwallet-master.min.js"></script>
  }

  @@if (!production) {
    <script type="text/javascript" src="js/etherwallet-master.js"></script>
  }

  <link rel="apple-touch-icon" sizes="180x180" href="images/fav/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="images/fav/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="images/fav/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="images/fav/manifest.json">
  <link rel="mask-icon" href="images/fav/safari-pinned-tab.svg" color="#0e97c0">
  <link rel="shortcut icon" href="images/fav/favicon.ico">
  <meta name="msapplication-config" content="images/fav/browserconfig.xml">
  <meta name="theme-color" content="#163151">
  <meta name="google-site-verification" content="IpChQ00NYUQuNs_7Xs6xlnSdzalOlTUYbBsr8f7OpvM" />
  <meta property="og:url"         content="https://www.myetherwallet.com" />
  <meta property="og:title"       content="MyEtherWallet.com" />
  <meta property="og:description" content="MyEtherWallet.com is a free, open-source, client-side tool for easily & securely interacting with the Ethereum blockchain." />
  <meta property="og:image"       content="images/myetherwallet-logo-banner.png" />
  <meta property="og:image"       content="images/myetherwallet-logo.png" />
  <meta property="og:image"       content="images/myetherwallet-logo-square.png" />
  <meta property="og:image"       content="images/myetherwallet-banner-fun.jpg" />
</head>

<body>

<header class="{{curNode.name}} {{curNode.service}} {{curNode.service}} nav-index-{{gService.currentTab}}" aria-label="header" ng-controller='headerCtrl' >

    @@if (site === 'mew' ) {
      <div class="small announcement annoucement-warning">
        <div class="container">⚠ Please beware of phishing websites. Do not enter your key on a website you arrived at by clicking a link. Use bookmarks. Always triple-check the domain. Ours is dot com. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/protecting-yourself-and-your-funds" target="_blank" rel="noopener">You are responsible for your safety &amp; security</a>.</div>
        <span ng-init="notifier.danger(window.location.href)"></span>
      </div>
    }

    @@if (site === 'cx' ) {
    <div class="small announcement annoucement-warning">
        <div class="container" translate="WARN_04">Make sure you have <strong>external backups</strong> of any
            wallets you store here. Many things could happen that would cause you to lose the data in this Chrome
            Extension, including uninstalling the extension. This extension is a way to easily access your wallets,
            <strong>not</strong> a way to back them up.
        </div>
    </div>
    }
  <section class="bg-gradient-{{curNode.name}} header-branding">
    <section class="container">

      @@if (site === 'mew' ) {
        <a class="brand" href="https://www.myetherwallet.com/" aria-label="Go to homepage">
          <img src="images/myetherwallet-logo-{{oLogo}}"   height="64px" width="245px" alt="MyEtherWallet" />
        </a>
      }
      @@if (site === 'cx'  ) {
        <a class="brand" href="/cx-wallet.html" aria-label="Go to homepage">
          <img src="images/logo-myetherwalletcx.svg" height="64px" width="245px" alt="MyEtherWallet" />
        </a>
      }

      <div class="tagline">

        <span>v3.10.0</span>

        <span class="dropdown dropdown-lang" ng-cloak>
          <a tabindex="0"  aria-haspopup="true" aria-expanded="false" aria-label="change language. current language {{curLang}}" class="dropdown-toggle  btn btn-white" ng-click="dropdown = !dropdown">{{curLang}}<i class="caret"></i></a>
          <ul class="dropdown-menu" ng-show="dropdown">
            <li><a ng-class="{true:'active'}[curLang=='Deutsch']"      ng-click="changeLanguage('de','Deutsch'     )"> Deutsch         </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Ελληνικά']"     ng-click="changeLanguage('el','Ελληνικά'    )"> Ελληνικά        </a></li>
            <li><a ng-class="{true:'active'}[curLang=='English']"      ng-click="changeLanguage('en','English'     )"> English         </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Español']"      ng-click="changeLanguage('es','Español'     )"> Español         </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Suomi']"        ng-click="changeLanguage('fi','Suomi'       )"> Suomi           </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Français']"     ng-click="changeLanguage('fr','Français'    )"> Français        </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Magyar']"       ng-click="changeLanguage('hu','Magyar'      )"> Magyar          </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Indonesian']"   ng-click="changeLanguage('id','Indonesian'  )"> Bahasa Indonesia</a></li>
            <li><a ng-class="{true:'active'}[curLang=='Italiano']"     ng-click="changeLanguage('it','Italiano'    )"> Italiano        </a></li>
            <li><a ng-class="{true:'active'}[curLang=='日本語']"        ng-click="changeLanguage('ja','日本語'       )"> 日本語           </a></li>
            <li><a ng-class="{true:'active'}[curLang=='한국어']"         ng-click="changeLanguage('ko','한국어'       )"> 한국어            </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Nederlands']"   ng-click="changeLanguage('nl','Nederlands'  )"> Nederlands      </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Norsk Bokmål']" ng-click="changeLanguage('no','Norsk Bokmål')"> Norsk Bokmål    </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Polski']"       ng-click="changeLanguage('pl','Polski'      )"> Polski          </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Português']"    ng-click="changeLanguage('pt','Português'   )"> Português       </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Русский']"      ng-click="changeLanguage('ru','Русский'     )"> Русский         </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Türkçe']"       ng-click="changeLanguage('tr','Türkçe'      )"> Türkçe          </a></li>
            <li><a ng-class="{true:'active'}[curLang=='Tiếng Việt']"   ng-click="changeLanguage('vi','Tiếng Việt'  )"> Tiếng Việt      </a></li>
            <li><a ng-class="{true:'active'}[curLang=='简体中文']"      ng-click="changeLanguage('zhcn','简体中文'   )"> 简体中文         </a></li>
            <li><a ng-class="{true:'active'}[curLang=='繁體中文']"      ng-click="changeLanguage('zhtw','繁體中文'   )"> 繁體中文         </a></li>
            <li role="separator" class="divider"></li>
            <li><a data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></li>
          </ul>
        </span>

        <span class="dropdown dropdown-gas" ng-cloak>
          <a tabindex="0" aria-haspopup="true" aria-label="adjust gas price" class="dropdown-toggle  btn btn-white" ng-click="dropdownGasPrice = !dropdownGasPrice">
            <span translate="x_GasPrice">Gas Price</span>: {{gas.value}} Gwei
            <i class="caret"></i>
          </a>
          <ul class="dropdown-menu" ng-show="dropdownGasPrice">
            <div class="header--gas">
              <span translate="x_GasPrice">Gas Price</span>: {{gas.value}} Gwei
              <input type="range" ng-model="gas.value" min="{{gas.min}}" max="{{gas.max}}" steps="1" ng-change="gasPriceChanged()"/>
              <p class="small col-xs-4 text-left">Not So Fast</p>
              <p class="small col-xs-4 text-center">Fast</p>
              <p class="small col-xs-4 text-right">Fast AF</p>
              <p class="small" style="white-space:normal;font-weight:300;margin: 2rem 0 0;" translate="x_GasPriceDesc"></p>
              <a class="small" translate="x_ReadMore" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener"></a>
            </div>
          </ul>

        </span>

        <!-- Warning: The separators you see on the frontend are in styles/etherwallet-custom.less. If you add / change a node, you have to adjust these. Ping tayvano if you're not a CSS wizard -->
        <span class="dropdown dropdown-node" ng-cloak>
          <a tabindex="0" aria-haspopup="true" aria-label="change node. current node {{curNode.name}} node by {{curNode.service}}" class="dropdown-toggle  btn btn-white" ng-click="dropdownNode = !dropdownNode">
            Node: {{curNode.name}} <small>({{curNode.service}})</small>
            <i class="caret"></i>
          </a>
          <ul class="dropdown-menu" ng-show="dropdownNode">
            <li ng-repeat="(key, value) in nodeList"><a ng-class="{true:'active'}[curNode == key]" ng-click="changeNode(key)">
              {{value.name}}
              <small> ({{value.service}}) </small>
              <img ng-show="value.service=='Custom'" src="images/icon-remove.svg" class="node-remove" title="Remove Custom Node" ng-click="removeNodeFromLocal(value.name)"/>
            </a></li>
            <li><a ng-click="customNodeModal.open(); dropdownNode = !dropdownNode;"> Add Custom Node </a></li>
          </ul>
        </span>

      </div>
    </section>
  </section>

  <nav role="navigation" aria-label="main navigation" class="container nav-container overflowing" >
    <a aria-hidden="true" ng-show="showLeftArrow" class="nav-arrow-left" ng-click="scrollLeft(100);" ng-mouseover="scrollHoverIn(true,2);" ng-mouseleave="scrollHoverOut()">&#171;</a>
    <div class="nav-scroll">
      <ul class="nav-inner">
        @@if (site === 'mew' ) {
        <li ng-repeat="tab in tabNames track by $index" class="nav-item {{tab.name}}" ng-class="{active: $index==gService.currentTab}" ng-show="tab.mew" ng-click="tabClick($index)"> <a tabindex="0" aria-label="nav item: {{tab.name | translate}}" translate="{{tab.name}}"></a></li>
        }
        @@if (site === 'cx' ) {
        <li ng-repeat="tab in tabNames track by $index" class="nav-item {{tab.name}}" ng-class="{active: $index==gService.currentTab}" ng-show="tab.cx" ng-click="tabClick($index)"> <a tabindex="0" aria-label="nav item: {{tab.name | translate}}" translate="{{tab.name}}"></a></li>
        }
        <li class="nav-item help"><a href="https://myetherwallet.groovehq.com/help_center" target="_blank" rel="noopener">Help</a></li>
      </ul>
    </div>
    <a aria-hidden="true" ng-show="showRightArrow" class="nav-arrow-right" ng-click="scrollRight(100);" ng-mouseover="scrollHoverIn(false,2);" ng-mouseleave="scrollHoverOut()">&#187;</a>
  </nav>

  @@if (site === 'mew' ) { @@include( './header-node-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './header-node-modal.tpl', { "site": "cx"  } ) }

</header>
