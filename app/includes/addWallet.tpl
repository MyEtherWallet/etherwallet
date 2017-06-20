<main class="tab-pane active"
      ng-if="globalService.currentTab==globalService.tabs.addWallet.id"
      ng-controller='decryptWalletCtrl as $ctrl'
      ng-cloak >

  <h1 translate="NAV_AddWallet"> Add Wallet </h1>

  <wallet-decrypt-drtv></wallet-decrypt-drtv>

  @@if (site === 'cx'  ) {
    <article class="row" ng-show="wallet!=null">
      @@include( './addWallet-content.tpl', { "site": "cx"  } )
    </article>
  }


</main>
