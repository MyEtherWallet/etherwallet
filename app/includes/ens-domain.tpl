<div class="block">
      <!-- ENS Title -->
      <article class="cont-md">
        <h1 class="text-center" translate="NAV_ENS">
          ENS
        </h1>
        <p>
          The
          <a href="http://ens.readthedocs.io/en/latest/introduction.html" target="_blank" rel="noopener noreferrer">
            Ethereum Name Service
          </a>
          is a distributed, open, and extensible naming system based on the Ethereum blockchain.
          Once you have a name, you can tell your friends to send ETH to <code>mewtopia.eth</code> instead of <code>0x7cB57B5A97eAbe942.....</code>.
        </p>
      </article>
      <!-- / ENS Title -->

      <br />

      <!-- IF ENS CHAIN: Check Status of Name -->
      <article class="row" ng-show="showENS()">
        <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <div class="input-group">
            <input class="form-control"
                   type="text"
                   placeholder="mewtopia"
                   ng-model="objENS.name"
                   ng-keyup="$event.keyCode==13 && checkName()"
                   ng-change="nameOnChange()"
                   ng-disabled="objENS.nameReadOnly"
                   ng-class="Validator.isValidENSName(objENS.name) && objENS.name.indexOf('.') == -1 ? 'is-valid' : 'is-invalid'"/>
            <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
          </div>
          <button class="btn btn-primary" ng-click="checkName()">
            Check ENS Name
          </button>
        </section>
      </article>
      <!-- / IF ENS CHAIN: Check Status of Name -->

  </div>


  <!-- IF NOT ENS CHAIN -->
  <div ng-hide="showENS()" class="alert alert-danger text-center">
    <p>
      The ENS is only available on the ETH and Ropsten (Testnet) chains. You are currently on the {{ajaxReq.type}} chain.
      <br />
      Please use the node switcher in the upper right corner to select "ETH" or "Ropsten".
    </p>
  </div>
  <!-- / IF NOT ENS CHAIN -->

  <!-- General Information Panel -->
  @@if (site === 'mew' ) { @@include( './ens-general-information.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-general-information.tpl', { "site": "cx"  } ) }


  <!-- .notAvailable or .forbidden -->
  @@if (site === 'mew' ) { @@include( './ens-status-notavailable.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-status-notavailable.tpl', { "site": "cx"  } ) }

  <!-- .open or .auction -->
  @@if (site === 'mew' ) { @@include( './ens-status-available.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-status-available.tpl', { "site": "cx"  } ) }

  <!-- .reveal -->
  @@if (site === 'mew' ) { @@include( './ens-status-reveal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-status-reveal.tpl', { "site": "cx"  } ) }

  <!-- .owned (finalize) -->
  @@if (site === 'mew' ) { @@include( './ens-status-owned.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-status-owned.tpl', { "site": "cx"  } ) }

  <!-- Unlock Directive: Everything but notAvailable & forbidden -->
  <article class="row" ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open || objENS.status==ensModes.owned || objENS.status==ensModes.reveal)">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4>
          <span ng-show="objENS.status==ensModes.open">
            Do you want {{objENS.name}}.eth? Unlock your Wallet to Start an Auction
          </span>
          <span ng-show="objENS.status==ensModes.auction">
            Do you want {{objENS.name}}.eth? Unlock your Wallet to Place a Bid
          </span>
          <span ng-show="objENS.status==ensModes.reveal">
            Did you bid on {{objENS.name}}.eth? You must reveal your bid now.
          </span>
          <span ng-show="objENS.status==ensModes.owned && objENS.owner!==objENS.deedOwner">
            Is that your address? Finalize the auction to claim your new name.
          </span>
          <span ng-show="objENS.status==ensModes.owned && objENS.owner==objENS.deedOwner">
            Is that your address? It is ready to set up a resolver.
          </span>

        </h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </article>
  <!-- / Unlock Directive: Everything but notAvailable / forbidden -->


  @@if (site === 'mew' ) { @@include( './ens-action-primary.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-action-primary.tpl', { "site": "cx"  } ) }


  @@if (site === 'mew' ) { @@include( './ens-action-finalize.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-action-finalize.tpl', { "site": "cx"  } ) }

  <!-- .resolve (resolve) -->
  @@if (site === 'mew' ) { @@include( './ens-action-resolve.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-action-resolve.tpl', { "site": "cx"  } ) }


  @@if (site === 'mew' ) { @@include( './ens-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-modal.tpl', { "site": "cx"  } ) }
