<main class="tab-pane contracts active" ng-if="globalService.currentTab==globalService.tabs.contracts.id" ng-controller='contractsCtrl' ng-cloak>

  <!-- Title -->
  <div class="block text-center">
    <h1>
      <a translate="CONTRACT_Interact" ng-class="{'isActive': visibility=='interactView'}" ng-click="setVisibility('interactView')"> Interact with Contract </a>
      or
      <a translate="CONTRACT_Deploy"  ng-class="{'isActive': visibility=='deployView'}" ng-click="setVisibility('deployView')"> Deploy Contract </a>
    </h1>
  </div>
  <!-- / Title -->


  <!-- Interact Contracts -->
  <article class="row block" ng-show="visibility=='interactView'">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "cx"  } ) }

  </article>


  <article class="row block" ng-show="visibility=='interactView' && showReadWrite">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "cx"  } ) }

  </article>

  <article ng-show="visibility=='interactView'">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-interact-modal.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-interact-modal.tpl', { "site": "cx"  } ) }

  </article>
  <!-- / Interact Contracts -->



  <!-- Deploy Contract -->
  <article class="row block" ng-show="visibility=='deployView'">

    @@if (site === 'mew' ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "cx"  } ) }

  </article>
  <!-- / Deploy Contract -->

  <!--wallet decrypt-->
  <article class="form-group" ng-show="(!wd && visibility=='deployView') || (!wd && visibility=='interactView' && contract.selectedFunc && !contract.functions[contract.selectedFunc.index].constant)">
      @@if (site === 'cx' )  {  <wallet-decrypt-cx-drtv></wallet-decrypt-cx-drtv>   }
    </article>
      @@if (site === 'mew' ) {  <article><div class="clearfix form-group"><a class="btn btn-primary btn-block col-sm-11 {{onlyOffline.isOffline}}" data-toggle="modal" data-target="#offlineDecrypt" translate="{{onlyOffline.offMsg}}">Checking Status</a></div><wallet-decrypt-offline-drtv></wallet-decrypt-offline-drtv></article> }


  <article class="col-xs-12" ng-show="contract.selectedFunc!=null && visibility=='interactView'">

    <button class="btn btn-primary btn-block" ng-click="readFromContract()" ng-show="contract.functions[contract.selectedFunc.index].constant && showRead">
      <span translate="CONTRACT_Read"> READ</span>
    </button>

    <button class="btn btn-primary btn-block" ng-click="generateContractTx()" ng-show="!contract.functions[contract.selectedFunc.index].constant">
      <span translate="CONTRACT_Write"> WRITE</span>
    </button>

    </br>
  </article>

</main>
