<div ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open || objENS.status==ensModes.reveal) && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
      <!-- Title -->
      <h2>
        <span ng-show="objENS.status==ensModes.auction" translate="ENS_Bid_Title">
          Place a Bid
        </span>
        <span ng-show="objENS.status==ensModes.open" translate="ENS_Start_Title">
          Start an Auction
        </span>
        <span ng-show="objENS.status==ensModes.reveal" translate="ENS_Reveal_Title">
          Reveal your Bid
        </span>
      </h2>
      <!-- / Title -->

      <!-- Thing they copied -->
      <div class="form-group" ng-show="objENS.status==ensModes.reveal">
        <label>
          Long string of text you copied
        </label>
        <textarea class="form-control"
                  name="Long string of text you copied"
                  ng-change="onLongStringChanged()"
                  ng-model="longJsonString"
                  ng-class="Validator.isJSON(longJsonString) ? 'is-valid' : 'is-invalid'"
                  placeholder='{"name":"exrnnrxe","nameSHA3":"0x0001640f2629bb323fca95bc13744478d5307ba0aca6e3a13f803691923ff00d","owner":"0x7cb57b5a97eabe94205c07890be4c1ad31e486a8","value":"100000000000000000","secret":"alley symptom elephant","secretSHA3":"0xc3a2ae4fd788a17a2e9e63868efa1d3589f1e97cf54662dbbfb12150cb5f9859"}'></textarea>
      </div>
      <!-- / Thing they copied -->


      <div class="form-group" ng-show="objENS.status==ensModes.reveal">
        <h5 class="text-center">
          -- 👆 enter automagically 👆 <strong>-- or --</strong> 👇 enter manually 👇 --
        </h5>
      </div>


      <!-- Name -->
      <label>
        Name
      </label>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="mewtopia" readonly ng-model="objENS.name"/>
        <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
      </div>
      <!-- / Name -->

      <!-- Bid Amount -->
      <h5>
        Actual Bid Amount
      </h5>
      <p ng-show="objENS.status!=ensModes.reveal">
        <small>
          *You must remember this to claim your name later.*
        </small>
      </p>

      <div class="input-group">

        <!-- validate wallet balance for everything but reveal -->
        <input ng-show="objENS.status!=ensModes.reveal"
               class="form-control"
               type="number"
               placeholder="1 {{ajaxReq.type}}"
               ng-model="objENS.bidValue" ng-class="Validator.isPositiveNumber(objENS.bidValue) && objENS.bidValue >= 0.01 && objENS.bidValue < wallet.balance ? 'is-valid' : 'is-invalid'"/>

        <!-- don't check wallet balance for reveal -->
        <input ng-show="objENS.status==ensModes.reveal"
               class="form-control"
               type="number"
               placeholder="1 {{ajaxReq.type}}"
               ng-model="objENS.bidValue" ng-class="Validator.isPositiveNumber(objENS.bidValue) && objENS.bidValue >= 0.01 ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>

      </div>
      <!-- / Bid Amount -->

      <!-- Bid Mask -->
      <div ng-show="objENS.status!=ensModes.reveal">
        <h5>
          Bid Mask
        </h5>
        <p>
          <small>
            *This is the amount of ETH you send when placing your bid. It has no bearing on the *actual* amount you bid (above). It is simply to hide your real bid amount. It must be >= to your actual bid.*
          </small>
        </p>
        <div class="input-group">
          <input class="form-control"
                 type="number"
                 placeholder="2 {{ajaxReq.type}}"
                 ng-model="objENS.dValue"
                 ng-class="Validator.isPositiveNumber(objENS.dValue) && objENS.dValue >= objENS.bidValue && objENS.dValue < wallet.balance ? 'is-valid' : 'is-invalid'"/>
          <div class="input-group-btn">
            <a class="btn btn-default">
              {{ajaxReq.type}}
            </a>
          </div>

        </div>
      </div>
      <!-- / Bid Mask -->

      <!-- Your Secret -->
      <h5>
        Secret Phrase
      </h5>
      <p ng-show="objENS.status!=ensModes.reveal">
        <small>
          *You must remember this to claim your name later (feel free to change this)
        </small>
      </p>
      <div class="form-group">
        <input class="form-control"
               type="text"
               placeholder="word1 word2 word3"
               value=""
               ng-model="objENS.secret"
               ng-class="Validator.isPasswordLenValid(objENS.secret,0) ? 'is-valid' : 'is-invalid'"/>
      </div>
      <!-- / Your Secret  -->

      <!-- Button CTA -->
      <div class="form-group">
        <a class="btn btn-primary btn-block" ng-click="generateTx()" ng-hide="objENS.txSent">
          <span ng-show="objENS.status==ensModes.auction">
            Place your Bid
          </span>
          <span ng-show="objENS.status==ensModes.open">
            Start the Auction
          </span>
          <span ng-show="objENS.status==ensModes.reveal">
            Reveal your Bid
          </span>
        </a>
      </div>
      <!-- / Button CTA -->

      <!-- After Sent: Place Bid / Start Auction -->
      <div class="form-group well" ng-show="objENS.txSent && (objENS.status==ensModes.auction || objENS.status==ensModes.open)">
        <h4 class="text-danger">If you haven't done so already, please screenshot & save the below information.</h4>
        <p>Please check your address on <a href="https://etherscan.io/">https://etherscan.io/</a> to ensure your BID TX is on the blockchain, without errors.</p>
        @@if (site === 'mew' ) { @@include( './ens-confirm-table.tpl', { "site": "mew" } ) }
        @@if (site === 'cx'  ) { @@include( './ens-confirm-table.tpl', { "site": "cx"  } ) }
      </div>
      <!-- / After Sent: Place Bid / Start Auction -->

      <!-- After Sent: Reveal -->
      <div class="form-group" ng-show="objENS.txSent && objENS.status==ensModes.reveal">
        <h4 class="text-warning">
          Click your TX hash to see if you successfully revealed your {{objENS.bidValue}} bid for {{objENS.name}}.eth.
        </h4>
        <p>
          Please return on <strong>{{objENS.registrationDate.toString()}}</strong> to finalize the auction and see if you won!
        </p>
      </div>
      <!-- / After Sent: Reveal -->

    </div>
    </section>
    <!-- / Content -->

    <!-- Sidebar -->
    <section class="col-sm-4">
      <wallet-balance-drtv></wallet-balance-drtv>
    </section>
    <!-- / Sidebar -->


  </article>

</div>
