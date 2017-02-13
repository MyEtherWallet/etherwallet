<!-- Send Transaction Page -->
<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.sendTransaction.id" ng-controller='sendTxCtrl' ng-cloak>

  <!-- Header : todo turn into warning notification-->
  <div class="alert alert-info" ng-show="hasQueryString">
    <p translate="WARN_Send_Link" >You arrived via a link that has the address, amount, gas or data fields filled in for you. You can change any information before sending. Unlock your wallet to get started.</p>
  </div>
  <!-- / Header -->

  <!-- Unlock Wallet -->
  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
      <h1 translate="NAV_SendEther"> Send Ether & Tokens </h1>
    </div>
    <div ng-show="!wd">
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
    </div>
  </article>
  <!-- / Unlock Wallet -->

  <!-- Send Tx Content -->
  <article class="row" ng-show="wallet!=null">
    <hr ng-show="!wd" />
      @@if (site === 'cx' )  {  @@include( './sendTransactionContent.tpl', { "site": "mew" } )   }
      @@if (site === 'mew' ) {  @@include( './sendTransactionContent.tpl', { "site": "cx" } )    }
  </article>
  <!-- / Send Tx Content -->

</main>
<!-- / Send Transaction Page -->
