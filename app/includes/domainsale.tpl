<main class="tab-pane domainsale-tab active" ng-if="globalService.currentTab==globalService.tabs.domainsale.id" ng-controller='domainsaleCtrl' ng-cloak>

  <div class="block">

      <!-- Title -->
      <article class="cont-md">
        <h1 class="text-center" translate="NAV_DomainSale"> DomainSale </h1>
        <p>
          <a href="https://medium.com/@jgm.orinoco/domainsale-an-on-chain-secondary-ens-market-b3330f6e5dda" target="_blank" rel="noopener noreferrer">DomainSale</a> is a secondary market for the <a href="http://ens.readthedocs.io/en/latest/introduction.html" target="_blank" rel="noopener noreferrer">Ethereum Name Service</a> that allows you to buy and sell domains that are already owned.
        </p>
      </article>
      <!-- / Title -->

      <br />

      <!-- IF DOMAINSALE CHAIN: Check Status of Name -->
      <article class="row" ng-show="showDomainSale()">
        <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <div class="input-group">
            <input class="form-control"
                   type="text"
                   placeholder="mewtopia"
                   ng-model="objDomainSale.name"
                   ng-keyup="$event.keyCode==13 && checkName()"
                   ng-change="nameOnChange()"
                   ng-disabled="objDomainSale.nameReadOnly"
                   ng-class="Validator.isValidENSName(objDomainSale.name) && objDomainSale.name.indexOf('.') == -1 ? 'is-valid' : 'is-invalid'"/>
            <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
          </div>
          <button class="btn btn-primary" ng-click="checkName()"> Check on DomainSale </button>
        </section>
      </article>
      <!-- / IF DOMAINSALE CHAIN: Check Status of Name -->
  </div>
  <div class="block" ng-show="objDomainSale.status==-1 && wallet==null">
      <article class="row" ng-show="showDomainSale()">
        <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <p>
            If you have used DomainSale to buy or sell domains and believe you have funds available for withdrawal you can enter your account address here and it will provide you with a balance
          </p>
          <div class="input-group">
            <input class="form-control"
                   type="text"
                   size="60"
                   placeholder="0x1234567890123456789012345678901234567890"
                   ng-model="objDomainSale.address"
                   ng-keyup="$event.keyCode==13 && checkBalance()"
                   ng-change="addressOnChange()"
                   ng-disabled="objDomainSale.addressReadOnly"
                   ng-class="Validator.isValidAddress(objDomainSale.address) ? 'is-valid' : 'is-invalid'"/>
          </div>
          <button ng-show="objDomainSale.balance == -1" class="btn btn-primary" ng-click="checkBalance()"> Check DomainSale balance </button>
        </section>
      </article>
  </div>


  <!-- IF NOT DOMAINSALE CHAIN -->
  <div ng-hide="showDomainSale()" class="alert alert-danger text-center">
    <p> DomainSale is only available on the ETH and Ropsten (Testnet) chains. You are currently on the {{ajaxReq.type}} chain. <br /> Please use the node switcher in the upper right corner to select "ETH" or "Ropsten". </p>
  </div>
  <!-- / IF NOT DOMAINSALE CHAIN -->

  <!-- General Information Panel -->
  @@if (site === 'mew' ) { @@include( './domainsale-general-information.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-general-information.tpl', { "site": "cx"  } ) }

  <!-- If not owned then say so -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-ineligible.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-ineligible.tpl', { "site": "cx"  } ) }

  <!-- If not owned by DomainSale then provide transfer information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-nottransferred.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-nottransferred.tpl', { "site": "cx"  } ) }

  <!-- If not offered then provide offer information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-notoffered.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-notoffered.tpl', { "site": "cx"  } ) }

  <!-- If available provide purchase and/or auction information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-available.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-available.tpl', { "site": "cx"  } ) }

  <!-- If auction active then provide bid information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-auctioning.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-auctioning.tpl', { "site": "cx"  } ) }

  <!-- If auction closed then provide finish information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-closed.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-closed.tpl', { "site": "cx"  } ) }

  <!-- If balance available provide balance information -->
  @@if (site === 'mew' ) { @@include( './domainsale-status-balance.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-status-balance.tpl', { "site": "cx"  } ) }

  <!-- Unlock Directive: Everything but ineligible -->
  <article class="row" ng-show="(objDomainSale.balance > 0 || objDomainSale.status==domainsaleModes.nottransferred || objDomainSale.status==domainsaleModes.notoffered || objDomainSale.status==domainsaleModes.available || objDomainSale.status==domainsaleModes.auctioning || objDomainSale.status==domainsaleModes.closed)">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4>
          <span ng-show="wallet!=null">Want a different wallet?  Change it here.</span>
          <span ng-show="objDomainSale.status==domainsaleModes.nottransferred && wallet==null">    Do you own and want to sell {{objDomainSale.name}}.eth? Unlock your Wallet to transfer the domain to DomainSale </span>
          <span ng-show="objDomainSale.status==domainsaleModes.notoffered && wallet==null">    Do you own and want to set prices for {{objDomainSale.name}}.eth? Unlock your Wallet to set buy and bid price </span>
          <span ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price!=0 && objDomainSale.reserve==0 && wallet==null">    Do you want to buy {{objDomainSale.name}}.eth? Unlock your Wallet to buy it immediately </span>
          <span ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price==0 && objDomainSale.reserve!=0 && wallet==null">    Do you want to bid for {{objDomainSale.name}}.eth? Unlock your Wallet to place a bid </span>
          <span ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price!=0 && objDomainSale.reserve!=0 && wallet==null">    Do you want to buy or bid for {{objDomainSale.name}}.eth? Unlock your Wallet to continue </span>
          <span ng-show="objDomainSale.status==domainsaleModes.auctioning && wallet==null">    Do you want to bid for {{objDomainSale.name}}.eth? Unlock your Wallet to place a bid </span>
          <span ng-show="objDomainSale.status==domainsaleModes.closed && wallet==null">    Did you buy or sell {{objDomainSale.name}}.eth? Unlock your Wallet to finish the auction </span>
          <span ng-show="objDomainSale.status==-1 && objDomainSale.balance>0 && wallet==null">    Want to withdraw your funds? Unlock your Wallet to withdraw </span>

        </h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </article>
  <!-- / Unlock Directive: Everything but ineligible -->


  <!-- Action: transfer -->
  @@if (site === 'mew' ) { @@include( './domainsale-action-transfer.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-action-transfer.tpl', { "site": "cx"  } ) }

  <!-- Action: offer or cancel -->
  @@if (site === 'mew' ) { @@include( './domainsale-action-offercancel.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-action-offercancel.tpl', { "site": "cx"  } ) }

  <!-- Action: bid or buy -->
  @@if (site === 'mew' ) { @@include( './domainsale-action-bidbuy.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-action-bidbuy.tpl', { "site": "cx"  } ) }

  <!-- Action: finish -->
  @@if (site === 'mew' ) { @@include( './domainsale-action-finish.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-action-finish.tpl', { "site": "cx"  } ) }

  <!-- Action: withdraw -->
  @@if (site === 'mew' ) { @@include( './domainsale-action-withdraw.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-action-withdraw.tpl', { "site": "cx"  } ) }

  <!-- Modal: confirm -->
  @@if (site === 'mew' ) { @@include( './domainsale-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './domainsale-modal.tpl', { "site": "cx"  } ) }
</main>
