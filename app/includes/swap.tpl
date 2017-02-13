<!-- Swap Page -->
<main class="tab-pane swap-tab active" ng-if="globalService.currentTab==globalService.tabs.swap.id" ng-controller='swapCtrl'  ng-cloak>


  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-1.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-1.tpl', { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-2.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-2.tpl', { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-3.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-3.tpl', { "site": "cx"  } ) }


</main>
<!-- / Swap Page -->
