<main class="tab-pane ens-tab active" ng-if="globalService.currentTab==globalService.tabs.ens.id" ng-controller='ensCtrl' ng-cloak>
      <!-- Title -->
  <div class="block text-center">
    <h1>
      <a ng-class="{'isActive': visibility=='ens'}"
         ng-click="setVisibility('ens')">
          Register Domain
      </a>
      or
      <a ng-class="{'isActive': visibility=='subdomain'}"
         ng-click="setVisibility('subdomain')">
          Register Subdomain
      </a>
    </h1>
  </div>
  <!-- / Title -->
  <div ng-if="visibility=='ens'">
    @@if (site === 'mew' ) { @@include( './ens-domain.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './ens-domain.tpl', { "site": "cx"  } ) }
  </div>
  <div ng-if="visibility=='subdomain'">
    <div class="block">
      <!-- ENS Title -->
      <article class="cont-md">
        <h1 class="text-center">
          Register Sub Domain
        </h1>
        <p>
          
        </p>
      </article>
      <!-- / ENS Title -->

      <br />

      <!-- IF ENS CHAIN: Check Status of Name -->
      <article class="row" ng-show="showSubDomain()">
        <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <div class="input-group">
            <input class="form-control"
                   type="text"
                   placeholder="mew"
                   ng-model="objSub.name"
                   ng-keyup="$event.keyCode==13"
                   ng-change=""
                   ng-disabled="objSub.inputDisabled"
                   ng-class="Validator.isValidSubName(objSub.name) && objSub.name.indexOf('.') == -1 ? 'is-valid' : 'is-invalid'"/>
                   <div class="input-group-btn"><button ng-click="checkSubName()" class="btn btn-primary">Check sub domain</button></div>
          </div>
        </section>
      </article>
      <!-- / IF ENS CHAIN: Check Status of Name -->
  <!-- IF NOT ENS CHAIN -->
  <div ng-hide="showSubDomain()" class="alert alert-danger text-center">
    <p>
      The Sub domain registration is only available on the ETH chain. You are currently on the {{ajaxReq.type}} chain.
      <br />
      Please use the node switcher in the upper right corner to select "ETH".
    </p>
  </div>
  <!-- / IF NOT ENS CHAIN -->
  </div>
    <div>
    <div class="block text-center" ng-show="objSub.showNames" >
    <!-- Show Registerble names -->
      <article class="row">
        <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <div>
            <div class="input-group pad-bot" ng-repeat="data in objSub.validNames track by $index" > 
            <input class="form-control" type="text" value="{{data.fullName}}" ng-disabled="true"/>
            <div class="input-group-btn"><button ng-show="data.available" ng-click="registerSubName($index)" class="btn btn-primary btn-primary-buy-button">Buy ({{data.EthVal}} ETH)
            </button>
            <button ng-show="!data.available" class="btn btn-primary btn-red" disabled><span class="na">X</span>
            </button></br>
          </div>
          </div>
          </div>
        </section>
      </article>
            </div>
      <!-- / Show Registerble names -->
  </div>

  <article class="row" ng-show="objSub.showBuy">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h5 traslate="SWAP_unlock">Unlock your wallet to buy {{objSub.buy.fullName}} for {{objSub.buy.EthVal}} ETH</h5>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
    <section class="row" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
      @@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-content.tpl', { "site": "cx"  } ) }

      @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl',   { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-modal.tpl',   { "site": "cx"  } ) }
    </section>
  </article>

  </div>

</main>
