<main class="tab-pane ens-tab active" ng-if="globalService.currentTab==globalService.tabs.ens.id" ng-controller='ensCtrl' ng-cloak>

  <!-- ALL: Title + Search -->
  <article class="row">
    <h1 class="text-center" translate="NAV_ENS"> ENS </h1>
    <p class="col-xs-12 col-sm-10 col-sm-offset-1">The <a href="http://ens.readthedocs.io/en/latest/introduction.html" target="_blank">Ethereum Name Service</a> is a distributed, open, and extensible naming system based on the Ethereum blockchain. Once you have a name, you can tell your friends to send ETH to <code>kevinisawesome.eth</code> instead of <code>0x93a2f52cd.....</code>.</p>
  </article>

  <br />

  <article class="row" ng-hide="ajaxReq.type=='ETC' || ajaxReq.type=='Kovan' || ajaxReq.type=='Rinkeby' || ajaxReq.type=='Custom'">
    <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
      <div class="input-group">
        <input class="form-control" type="text" placeholder="myetherwallet" ng-model="objENS.name" ng-keyup="$event.keyCode==13 && checkName()" ng-disabled="objENS.nameReadOnly" ng-class="Validator.isValidENSName(objENS.name) ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
      </div>
      <button class="btn btn-primary" ng-click="checkName()"> Check ENS Name </button>
    </section>
  </article>
  <!-- / ALL: Title + Search -->

  <!-- NON ETH OR ROP NODES -->
  <div ng-show="ajaxReq.type=='ETC' || ajaxReq.type=='Kovan' || ajaxReq.type=='Rinkeby' || ajaxReq.type=='Custom'" class="alert alert-danger text-center">
    <p> The ENS is only available on the ETH and Ropsten (Testnet) chains. You are currently on the {{ajaxReq.type}} chain. <br /> Please use the node switcher in the upper right corner to select "ETH" or "Ropsten". </p>
  </div>
  <!-- / NON ETH OR ROP NODES -->


  <!-- ALL: Status of Name -->
  <article class="row">
    <br /><br />
    <h1 class="text-center">
      <span ng-show="objENS.status==ensModes.auction">
        An auction has been started for <strong>{{objENS.name}}.eth</strong>.
      </span>
      <span ng-show="objENS.status==ensModes.open">
        <strong>{{objENS.name}}.eth</strong> is available!
      </span>
      <span ng-show="objENS.status==ensModes.owned">
        <strong>{{objENS.name}}.eth</strong>  is not available. It's already owned by {{objENS.owner}}
      </span>
      <span ng-show="objENS.status==ensModes.forbidden">
        <strong>{{objENS.name}}.eth</strong>  not available. (Forbidden)
      </span>
      <span ng-show="objENS.status==ensModes.reveal">
        It's time to reveal the bids for <strong>{{objENS.name}}.eth</strong>.
      </span>
      <span ng-show="objENS.status==ensModes.notAvailable">
        <strong>{{objENS.name}}.eth</strong>  is not yet available.
      </span>
    </h1>
  </article>
  <!-- / ALL: Status of Name -->


  <article class="col-xs-12 col-sm-8 col-sm-offset-2 text-center" ng-show="objENS.status==ensModes.owned">
      <br />
      <button class="btn btn-primary" ng-click="finalizeDomain()"> Finalize {{objENS.name}}.eth </button>
      <br /><br />
      <p> If the auction is over, anyone can finalize it. Finalizing it assigns the ENS name to the winning bidder. The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will refunded all but 0.1 ETH. Any non-winners will also be refunded.</p>
      <br />
  </article>


  <article class="order-info-wrap row" ng-show="objENS.status==ensModes.notAvailable">
    <div class="col-sm-12 col-xs-12 order-info">
      <p> Time Remaining until Auction Opens </p>
      <h4> {{objENS.timeRemaining}} </h4>
    </div>
    <div class="col-sm-12 col-xs-12 order-info">
      <p> Auction Open Date </p>
      <h4>{{objENS.allowedTime.toLocaleString()}}</h4>
    </div>
  </article>


  @@if (site === 'mew' ) { @@include( './ens-auction.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-auction.tpl', { "site": "cx"  } ) }


  <!-- ALL: Unlock Directive -->
  <article class="row" ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open || objENS.status==ensModes.owned || objENS.status==ensModes.reveal)">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4 traslate="SWAP_unlock">Unlock your Wallet to <span ng-show="objENS.status==ensModes.owned"> Finalize the Domain </span> <span ng-show="objENS.status==ensModes.auction"> Place a Bid </span><span ng-show="objENS.status==ensModes.open"> Start an Auction </span></h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </article>
  <!-- / ALL: Unlock Directive -->

  <hr ng-show="wd" />

  <div ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open || objENS.status==ensModes.reveal) && wallet!=null">
    <article class="order-info-wrap row" ng-show="objENS.status==ensModes.auction">
      <div class="col-sm-4 col-xs-12 order-info">
        <p> Time Remaining in Auction </p>
        <h4> {{objENS.timeRemaining}} </h4>
      </div>
      <div class="col-sm-4 col-xs-12 order-info">
        <p> Reveal Bids On</p>
        <h4> {{getRevealTime().toLocaleString()}} </h4>
      </div>
      <div class="col-sm-4 col-xs-12 order-info">
        <p> Auction Closes On </p>
        <h4>{{objENS.registrationDate.toLocaleString()}}</h4>
      </div>
    </article>

    <!-- ALL: TX GEN -->
    <article class="row">

      <!-- ALL: Sidebar -->
      <section class="col-sm-4">
        <wallet-balance-drtv></wallet-balance-drtv>
      </section>
      <!-- / Sidebar -->

      <!-- Content -->
      <section class="col-sm-8">
        <!-- Title -->
        <div class="form-group">
          <h2><span ng-show="objENS.status==ensModes.auction"> Place a Bid</span><span ng-show="objENS.status==ensModes.open">Start an Auction</span><span ng-show="objENS.status==ensModes.reveal">Reveal your Bid</span></h2>
        </div>
        <!-- / Title -->

        <!-- Name -->
        <label>Name</label>
          <!-- TODO: prefill from above -->
        <div class="input-group">
          <input class="form-control" type="text" placeholder="myetherwallet" readonly ng-model="objENS.name"/>
          <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
        </div>
        <!-- / Name -->

        <!-- Maximum -->
        <h5>{{objENS.status==ensModes.reveal ? "Bid Amount" : "Maximum Bid"}}</h5>
        <p ng-show="objENS.status!=ensModes.reveal"><em><small>You must remember this to claim your name later.</small></em></p>
        <div class="input-group">
          <input class="form-control" type="text" placeholder="1 {{ajaxReq.type}}" ng-model="objENS.bidValue" ng-class="Validator.isPositiveNumber(objENS.bidValue) && objENS.bidValue >= 0.01 ? 'is-valid' : 'is-invalid'"/>
          <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
        </div>
        <!-- / Maximum -->

        <!-- Your Secret -->
        <h5>Secret Phrase</h5>
        <p ng-show="objENS.status!=ensModes.reveal"><em><small>You must remember this to claim your name later.</small></em></p>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="I'm a secret. Don't forget me." value="" ng-model="objENS.secret" ng-class="Validator.isPasswordLenValid(objENS.secret,0) ? 'is-valid' : 'is-invalid'"/>
        </div>
        <!-- / Your Secret  -->

        <!-- Disguise Bid -->
        <div ng-show="objENS.status!=ensModes.reveal">
          <h5>Amount to Send</h5>
          <p><em><small>If you wish to send more than your actual bid to disguise it.</small></em></p>
          <!-- Validation = more than Max. Bid Input, more than what is in account -->
          <div class="input-group">
            <input class="form-control" type="text" placeholder="2 {{ajaxReq.type}}" ng-model="objENS.dValue" ng-class="Validator.isPositiveNumber(objENS.dValue) && objENS.dValue >= objENS.bidValue ? 'is-valid' : 'is-invalid'"/>
            <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
          </div>
        </div>
        <!-- / Disguise Bid  -->


        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateTx()"> <span ng-show="objENS.status==ensModes.auction"> Place a Bid</span><span ng-show="objENS.status==ensModes.open">Start an Auction</span> <span ng-show="objENS.status==ensModes.reveal">Reveal your Bid</span></a>
        </div>

      </section>
      <!-- / Content -->

    </article>

  </div>

  <!-- / ALL: TX GEN -->


  @@if (site === 'mew' ) { @@include( './ens-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-modal.tpl', { "site": "cx"  } ) }


  @@if (site === 'mew' ) { @@include( './ens-modal-finalize.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './ens-modal-finalize.tpl', { "site": "cx"  } ) }


</main>
