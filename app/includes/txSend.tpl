<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.txSend.id" ng-controller='txSendCtrl' ng-cloak >

  <!-- Block : Title -->
  <article class="block__title" ng-controller="walletDecryptOfflineCtrl">

    <!-- Title -->
    <h1 translate="TX_Send_Title"> Send Ether &amp; Tokens </h1>

    <!-- Desc -->
    <p translate="TX_Send_Desc"></p>

    <!-- Label -->
    <h4 translate="ADDR_From"> Sending Address </h4>

    <!-- Input -->
    <input type="text"
           class="form-control"
           ng-change="onAddressChange()"
           ng-class="Validator.isValidAddress($parent.$parent.addressOnly) ? 'is-valid' : 'is-invalid'"
           ng-model="$parent.$parent.addressOnly"
           placeholder="{{ 'ADDR_' | translate }}"
           id="addrChecker" />

    <!-- Button -->
    <button tabindex="0"
            class="btn btn-primary"
            ng-click="decryptAddressOnly()"
            role="button"
            translate="x_Continue"> Continue </a>

  </article>
  <!-- / Block : Title -->


  <!-- Send Tx Content -->
  <article class="row" ng-show="wallet!=null">
    @@if (site === 'mew' ) { @@include( './txSend-content.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './txSend-content.tpl', { "site": "cx"  } ) }

    @@if (site === 'mew' ) { @@include( './txSend-modal.tpl',   { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './txSend-modal.tpl',   { "site": "cx"  } ) }

  </article>


</main>
