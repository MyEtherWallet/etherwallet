<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.txSend.id" ng-controller='txSendCtrl' ng-cloak >

  <!-- Block : Title -->
  <article class="block__title" ng-controller="walletDecryptOfflineCtrl">

    <!-- Title -->
    <h1 translate="TX_Send_Title"> Send Transaction </h1>

    <!-- Desc -->
    <p>
      <span translate="TX_Send_Desc_1">1) Generate TX: Enter your address and what you would like to send.</span>
      <br />
      <span translate="TX_Send_Desc_2">2) Sign TX: Use your `keystore file + password` or `private key` to sign the transaction.</span>
      <br />
      <span translate="TX_Send_Desc_3">3) Broadcast TX: Send the signed TX off to the network to be mined.</span>
    </p>
    <!--offline signer -->
    <div class="clearfix form-group">
      <a class="btn btn-primary btn-block col-sm-11 {{onlyOffline.isOffline}}" data-toggle="modal" data-target="#offlineDecrypt" translate="{{onlyOffline.offMsg}}">
        Access Wallet
      </a>
    </div>
    <!-- Decrypt -->
    <article class="clearfix">
      <wallet-decrypt-offline-drtv></wallet-decrypt-offline-drtv>
    </article>

    <!-- /decrypt -->

  <!-- Send Tx Content -->
  <article class="row" ng-show="wallet!=null">
    @@if (site === 'mew' ) { @@include( './txSend-content.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './txSend-content.tpl', { "site": "cx"  } ) }

    @@if (site === 'mew' ) { @@include( './txSend-modal.tpl',   { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './txSend-modal.tpl',   { "site": "cx"  } ) }

  </article>


</main>
