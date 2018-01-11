<main class="tab-pane active"
      ng-if="globalService.currentTab==globalService.tabs.offlineTransaction.id"
      ng-controller='offlineTxCtrl'
      ng-cloak>

  <h1 translate="OFFLINE_Title">
    Generate &amp; Send Offline Transaction
  </h1>

  @@if (site === 'mew' ) { @@include( './offlineTx-1.tpl',     { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-1.tpl',     { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( './offlineTx-2.tpl',     { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-2.tpl',     { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( './offlineTx-3.tpl',     { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-3.tpl',     { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( './offlineTx-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-modal.tpl', { "site": "cx"  } ) }

</main>
