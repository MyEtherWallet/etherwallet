<main class="tab-pane ens-tab active" ng-if="globalService.currentTab==globalService.tabs.ens.id" ng-controller='ensCtrl' ng-cloak>

  <!-- ALL: Title + Search -->
  <h1 class="text-center" translate="NAV_ENS"> Enter an ENS Name: </h1>
  <article class="row" ng-show="!wd">
    <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
      <!-- TODO: validation
        "Names are required to be at least 7 characters long."
        "Only .eth names are available to bid on (via MyEtherWallet) at this time"
      -->
      <div class="input-group">
        <input class="form-control" type="text" placeholder="myetherwallet" ng-model="objENS.name" ng-class="Validator.isValidENSName(objENS.name) ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
      </div>
      <button class="btn btn-primary" ng-click="checkName()"> Check ENS Name </button>
    </section>
  </article>
  <!-- / ALL: Title + Search -->




  <!-- ALL: Status of Name -->
  <article class="row" ng-show="!wd">
    <br /><br />
    <h1 class="text-center">
      <span ng-show="objENS.status==ensModes.auction">
        An auction as been started for {{objENS.name}}.eth
      </span>
      <span ng-show="objENS.status==ensModes.open">
        {{objENS.name}}.eth is available!
      </span>
      <span ng-show="objENS.status==ensModes.owned">
        {{objENS.name}}.eth  not available!. Already owned by {{objENS.owner}}
      </span>
      <span ng-show="objENS.status==ensModes.forbidden">
        {{objENS.name}}.eth  not available!. Forbidden!
      </span>
      <span ng-show="objENS.status==ensModes.reveal">
        {{objENS.name}}.eth  is in reveal period. Reveal your bids!
      </span>
    </h1>
  </article>
  <!-- / ALL: Status of Name -->




  <div ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open) && !wd">
  <!-- ALL: If auction has been started -->
  <article class="row">
    <!-- PLACEBID: Key Stats Row -->
    <section class="order-info-wrap row" ng-show="objENS.status==ensModes.auction">
      <div class="col-sm-6 col-xs-12 order-info">
        <h4> {{objENS.timeRemaining}} </h4>
        <p> Time Remaining in Auction </p>
      </div>
      <div class="col-sm-6 col-xs-12 order-info">
        <h4>{{objENS.registrationDate.toLocaleString()}}</h4>
        <p> End Date </p>
      </div>
    </section>
    <!-- / PLACEBID: Key Stats Row -->
    <!-- ALL: Info Row -->
    <section class="col-sm-8 col-xs-12 col-sm-offset-2">
      <h3> Do you want {{objENS.name}}.eth? You can <span ng-show="objENS.status==ensModes.auction">place a bid</span><span ng-show="objENS.status==ensModes.open">start an auction</span> now. </h3>
      <h6> What is the auction & bidding process like? </h6>
      <ol>
        <li><strong>Preparation:</strong>
          <ul>
            <li> Decide on the maximum amount you are willing to pay for the name. </li>
            <li> Decide which account you wish to own the name, if you win. Be sure you have backups of your private key!</li>
            <li> Make sure that account has enough to cover the amount of your bid. You can also disguise the true amount of your bid by sending <u>more</u> than your bid. </li>
          </ul>
        </li>
        <li><strong>Place a Bid:</strong>
          <ul><li>When you are ready, unlock your account below to start the process.</li></ul>
        </li>
        <li><strong>Reveal your Bid:<strong>
          <ul><li>During the last <u>48 hours</u>, you will come back to "reveal your bid". You will need access to your account + your bid amount + secret phrase at that time.</li></ul>
        </strong>
        <li><strong>Finalize the Auction:</strong>
          <ul><li>Anyone can do this once the auction time is up. The ENS name is then assigned to the winning bidder. Additionally, the winning bidder will be refunded the difference between their bid and the next highest bidder. If you are the only bidder, you will refunded all but 0.1 ETH.</li></ul>
        </li>
      </ol>
      <h6> More Information: </h6>
      <ul>
        <li>This registrar implements a blind auction, and is described in <a href="https://github.com/ethereum/EIPs/issues/162" target="_blank">EIP162</a>.</li>
        <li><a href="http://docs.ens.domains/en/latest/userguide.html#registering-a-name-with-the-auction-registrar" target="_blank">ENS: Read the Docs</a></li>
      </ul>
    </section>
    <!-- / ALL: Info Row -->
  </article>
  <!-- / ALL: If auction has been started -->





  <!-- ALL: Unlock Directive -->
  <article class="row">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4 traslate="SWAP_unlock">Unlock your Wallet to <span ng-show="objENS.status==ensModes.auction"> Place a Bid</span><span ng-show="objENS.status==ensModes.open">Start an Auction</span>.</h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </article>
  </div>
  <!-- / ALL: Unlock Directive -->





<div ng-show="wd && (objENS.status==ensModes.auction || objENS.status==ensModes.open)">
  <!-- PLACE BID: Key Stats Row  - Exact Duplicate of Above -->
  <section class="order-info-wrap row" ng-show="objENS.status==ensModes.auction">
      <div class="col-sm-6 col-xs-12 order-info">
        <h4> {{objENS.timeRemaining}} </h4>
        <p> Time Remaining in Auction </p>
      </div>
      <div class="col-sm-6 col-xs-12 order-info">
        <h4>{{objENS.registrationDate.toLocaleString()}}</h4>
        <p> End Date </p>
      </div>
    </section>
  <!-- / PLACE BID: Key Stats Row - Exact Duplicate of Above  -->

  <!-- ALL: TX GEN -->
  <article class="row">

    <!-- ALL: Sidebar -->
    <section class="col-sm-4">
      <wallet-balance-drtv></wallet-balance-drtv>
      <hr />
      <h5 translate="sidebar_TransHistory"> Transaction History: </h5>
      <ul class="account-info" ng-show="ajaxReq.type != 'CUS'">
        <li><a href="{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}" target="_blank">{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}</a></li>
      </ul>
    </section>
    <!-- / Sidebar -->

    <!-- Content -->
    <section class="col-sm-8">
      <!-- Title -->
      <div class="form-group">
        <h2><span ng-show="objENS.status==ensModes.auction"> Place a Bid</span><span ng-show="objENS.status==ensModes.open">Start an Auction</span></h2>
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
      <h5>Your Maximum Bid</h5>
      <p><em><small>You <u>must</u> remember this to claim your name!!</small></em></p>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="1 {{ajaxReq.type}}" ng-model="objENS.bidValue" ng-class="Validator.isPositiveNumber(objENS.bidValue) && objENS.bidValue >= 0.1 ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
      </div>
      <!-- / Maximum -->

      <!-- Disguise Bid -->
      <h5>The Amount You Wish to Send (to disguise your bid)</h5>
      <!-- Validation = more than Max. Bid Input, more than what is in account -->
      <div class="input-group">
        <input class="form-control" type="text" placeholder="2 {{ajaxReq.type}}" ng-model="objENS.dValue" ng-class="Validator.isPositiveNumber(objENS.dValue) && objENS.dValue >= objENS.bidValue ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
      </div>
      <!-- / Disguise Bid  -->

      <!-- Your Secret -->
      <h5>Your Secret Phrase</h5>
      <p><em><small>You <u>must</u> remember this to claim your name!!</small></em></p>
      <!-- Validation = more than Max. Bid Input, more than what is in account -->
      <div class="form-group">
        <input class="form-control" type="text" placeholder="I'm a secret. Don't forget me." value="" ng-model="objENS.secret" ng-class="Validator.isPasswordLenValid(objENS.secret,0) ? 'is-valid' : 'is-invalid'"/>
      </div>
      <!-- / Your Secret  -->

      <div class="form-group">
        <a class="btn btn-primary btn-block" ng-click="generateTx()"> <span ng-show="objENS.status==ensModes.auction"> Place a Bid</span><span ng-show="objENS.status==ensModes.open">Start an Auction</span> </a>
      </div>
    </section>
    <!-- / Content -->

  </article>
  </div>

  <!-- / ALL: TX GEN -->





  <!-- ALL: ENS MODAL -->
  <article class="modal fade" id="ensConfirmModal" tabindex="-1">
    <section class="modal-dialog">
      <section class="modal-content">

        <div class="modal-body">

          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <h2 class="modal-title"> You are about to {start an auction & } place a bid.</h2>
          <div class="alert alert-danger"><h3 class="modal-title">
            <span translate="SENDModal_Title"> Warning! </span><br />
            <small>You <u>cannot</u> claim your name unless you save the following information.</small>
          </h3></div>


          <table class="table">
            <tbody>
              <tr class="text-center">
                <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
                <td class="mono">-><br />{{tx.value}} {{unitReadable}}</td>
                <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div></td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <tbody>
              <tr><td>Name:                            </td><td>{{objENS.name}}.eth</td></tr>
              <tr><td>Bid Amount:                      </td><td>{{objENS.bidValue}}</td></tr>
              <tr><td>Disguise Amount (amount to send):</td><td>{{objENS.dValue}}</td></tr>
              <tr><td>Your Secret:                     </td><td>{{objENS.secret}}</td></tr>
              <tr><td>From Account:                    </td><td><small>{{wallet.getAddressString()}}</small></td></tr>
              <tr ng-show="showRegistrationDate()"><td>Must Reveal On:                  </td><td><small>{{getRevealTime().toLocaleString()}}</small></td></tr>
              <tr ng-show="showRegistrationDate()"><td>Auction Ends:                    </td><td><small>{{objENS.registrationDate.toLocaleString()}}</small></td></tr>
              <tr>
                <td colspan="2">
                  <p><small>Easily copy the above:</small></p>
                  <textarea class="form-control small" readonly rows="2">{{bidObject}}</textarea>
                </td>
              </tr>
            </tbody>
          </table>



          <p> The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.</p>

          <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
        </div>


        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
            No, get me out of here!
          </button>
          <button class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">
            Yes, I am sure! Make transaction.
          </button>
        </div>

      </section>
    </section>
  </article>
  <!-- ALL: ENS MODAL -->



</main>
