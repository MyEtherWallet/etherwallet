<!-- Swap Page -->
<main class="tab-pane swap-tab active" ng-if="globalService.currentTab==globalService.tabs.swap.id" ng-controller='swapCtrl'  ng-cloak>

  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-1.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-1.tpl', { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-2.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-2.tpl', { "site": "cx"  } ) }

  @@if (site === 'mew' ) { @@include( '../includes/swap-stage-3.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/swap-stage-3.tpl', { "site": "cx"  } ) }

 <div class="text-center col-xs-12" style="margin-top: 100px;margin-bottom: -60px;"><a href="mailto:support@myetherwallet.com,support@bity.com?Subject=Issue%20regarding%20my%20Swap%20on%20MEW&Body=%0APlease%20include%20the%20below%20if%20this%20issue%20is%20regarding%20your%20order.%20%0A%0AREF%20ID%23%3A%20{{orderResult.reference}}%0A%0AAmount%20to%20send%3A%20{{orderResult.input.amount}}%20{{orderResult.input.currency}}%0A%0AAmount%20to%20receive%3A%20{{orderResult.output.amount}}%20{{orderResult.output.currency}}%0A%0APayment%20Address%3A%20{{orderResult.payment_address}}%0A%0ARate%3A%20{{swapOrder.swapRate}}%20{{swapOrder.swapPair}}%0A%0A"> Issue with your Swap? Contact support. </a></div>

</main>
<!-- / Swap Page -->




