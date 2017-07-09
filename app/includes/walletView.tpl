<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.walletView.id" ng-controller='walletViewCtrl' ng-cloak>

  <article class="collapse-container">

    <div ng-click="wd = !wd">
      <h1 translate="WALL_View">View Wallet Details</h1>
    </div>

    <div>
      <p translate="VIEWWALLET_Subtitle">
        This page allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like <a href="http://etherscan.io/" target="_blank" rel="noopener">etherscan.io</a>.
      </p>
      <div class="clearfix form-group">
        <a class="btn btn-primary btn-block col-sm-11 {{onlyOffline.isOffline}}" data-toggle="modal" data-target="#offlineDecrypt" translate="{{onlyOffline.offMsg}}">Checking Status</a>
      </div>

      <!-- Decrypt -->
      <article class="clearfix">
        <wallet-decrypt-offline-drtv></wallet-decrypt-offline-drtv>
      </article>


    </div>

  </article>

  <article class="row" ng-show="wallet!=null">

    @@if (site === 'cx' ) {  @@include( './walletView-content.tpl', { "site": "cx" } )    }
    @@if (site === 'mew') {  @@include( './walletView-content.tpl', { "site": "mew" } )   }

  </article>

</main>
