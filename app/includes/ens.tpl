<main class="tab-pane contracts active" ng-if="globalService.currentTab==globalService.tabs.ens.id" ng-controller='ensCtrl' ng-cloak>

  <!-- Title -->
  <h1 translate="NAV_ENS"> Register ENS </h1>
  <!-- / Title -->


  <!-- Register ENS - Step 1 -->
  <article class="row">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "cx"  } ) }

  </article>
  <!-- / Register ENS - Step 1 -->


  <!--wallet decrypt-->
  <article class="form-group" ng-show="(!wd && visibility=='deployView') || (!wd && visibility=='interactView' && contract.selectedFunc && !contract.functions[contract.selectedFunc.index].constant)">
      @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
  </article>

  <button class="btn btn-primary" ng-click="readFromContract()" ng-show="contract.functions[contract.selectedFunc.index].constant && showRead">
    <span translate="CONTRACT_Read"> READ</span>
  </button>

</main>
