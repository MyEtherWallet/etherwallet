<!-- The DAO Proposals -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.daoproposals.id">

  <section class="row">
    <div class="col-xs-12">
      <h2> Browse DAO Proposals </h2>
      <p><a ng-click="globalService.currentTab=globalService.tabs.dao.id">If you would like to Send DAO Tokens, please click here.</a> Learn more at <a href="http://daohub.org/" target="_blank">DAOHub</a>, <a href="https://blog.slock.it/the-art-of-the-dao-experiments-with-the-generic-dao-framework-4782f7862131#.bibozinlb" target="_blank">The Art of the DAO</a>, and <a href="https://forum.daohub.org/c/theDAO" target="_blank">DAO Hub Forums (Support, too!)</a></p>
    </div>
  </section>

  <section class="row" style="margin-bottom: 10px;">
    <div class="col-xs-12">
      <h4> Show.... </h4>
      <div class="bg-primary">
        <a href="#" class="proposal-filter active">All Proposals</a>
        <a href="#" class="proposal-filter">Current Proposals</a>
        <a href="#" class="proposal-filter">Previous Proposals</a>
        <a href="#" class="proposal-filter">Non-Split Proposals</a>
        <a href="#" class="proposal-filter">Split Proposals</a>
      </div>
    </div>
  </section>

  <div class="proposal-container">

    <article class="proposal-item clearfix">
      <section>
        <div class="graph-container">
          <div class="graph-unfilled" style="width:100%"></div>
          <div class="graph-needed"   style="width:26%"></div>
          <div class="graph-yes"      style="width:9%"></div>
          <div class="graph-no"       style="width:11%; left: 9%;"></div>
        </div>
        <div class="col-xs-9 clearfix">
          <h4> DAO Support Proposal(description) </h4>
          <p> Proposal ID: <strong >1</strong> &middot; ends: <strong >5/31/2016</strong></p>
        </div>
        <div class="col-xs-3 clearfix text-right">
          <h4> 30.00 </h4>
          <p>  ETH  </p>
        </div>
      </section>
      <section class="proposal-expanded col-xs-12">
        <table class="table">
          <tr>
            <td class="label">Votes Yea:</td>
            <td class="output votes-yes">50% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Votes Nay:</td>
            <td class="output votes-no">45% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Quroum:</td>
            <td class="output">
              <div class="votes-needed">10% <em>(needs 26.88%)</em></div>
            </td>
          </tr>
          <tr>
            <td class="label">Recipient:</td>
            <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </td>
          </tr>
          <tr>
            <td class="label">Creator:</td>
            <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</td>
          </tr>
          <tr>
            <td class="label">Open:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Passed:</td>
            <td class="output"><span class="boolean-no"> NO </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Hash:</td>
            <td class="output">0x332bb591b0f77251124f30f1a9675590bfd1cadcdf12714e731370d41a8803a3</td>
          </tr>
          <tr>
            <td class="label">Proposal Deposit:</td>
            <td class="output">0</td>
          </tr>
          <tr>
            <td class="label">New Curator:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
        </table>
        <div class="form-group">
          <a class="btn btn-primary">VOTE ON THIS PROPOSAL</a>
        </div>
      </section>
    </article>

    <article class="proposal-item clearfix">
      <section>
        <div class="graph-container">
          <div class="graph-unfilled" style="width:100%"></div>
          <div class="graph-needed"   style="width:26%"></div>
          <div class="graph-yes"      style="width:9%"></div>
          <div class="graph-no"       style="width:11%; left: 9%;"></div>
        </div>
        <div class="col-xs-9 clearfix">
          <h4> DAO Support Proposal(description) </h4>
          <p> Proposal ID: <strong >1</strong> &middot; ends: <strong >5/31/2016</strong></p>
        </div>
        <div class="col-xs-3 clearfix text-right">
          <h4> 30.00 </h4>
          <p>  ETH  </p>
        </div>
      </section>
      <section class="proposal-expanded col-xs-12">
        <table class="table">
          <tr>
            <td class="label">Votes Yea:</td>
            <td class="output votes-yes">50% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Votes Nay:</td>
            <td class="output votes-no">45% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Quroum:</td>
            <td class="output">
              <div class="votes-needed">10% <em>(needs 26.88%)</em></div>
            </td>
          </tr>
          <tr>
            <td class="label">Recipient:</td>
            <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </td>
          </tr>
          <tr>
            <td class="label">Creator:</td>
            <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</td>
          </tr>
          <tr>
            <td class="label">Open:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Passed:</td>
            <td class="output"><span class="boolean-no"> NO </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Hash:</td>
            <td class="output">0x332bb591b0f77251124f30f1a9675590bfd1cadcdf12714e731370d41a8803a3</td>
          </tr>
          <tr>
            <td class="label">Proposal Deposit:</td>
            <td class="output">0</td>
          </tr>
          <tr>
            <td class="label">New Curator:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
        </table>
        <div class="form-group">
          <a class="btn btn-primary">VOTE ON THIS PROPOSAL</a>
        </div>
      </section>
    </article>

    <article class="proposal-item clearfix">
      <section>
        <div class="graph-container">
          <div class="graph-unfilled" style="width:100%"></div>
          <div class="graph-needed"   style="width:26%"></div>
          <div class="graph-yes"      style="width:9%"></div>
          <div class="graph-no"       style="width:11%; left: 9%;"></div>
        </div>
        <div class="col-xs-9 clearfix">
          <h4> DAO Support Proposal(description) </h4>
          <p> Proposal ID: <strong >1</strong> &middot; ends: <strong >5/31/2016</strong></p>
        </div>
        <div class="col-xs-3 clearfix text-right">
          <h4> 30.00 </h4>
          <p>  ETH  </p>
        </div>
      </section>
      <section class="proposal-expanded col-xs-12">
        <table class="table">
          <tr>
            <td class="label">Votes Yea:</td>
            <td class="output votes-yes">50% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Votes Nay:</td>
            <td class="output votes-no">45% <em>(19047619047619047)</em></td>
          </tr>
          <tr>
            <td class="label">Quroum:</td>
            <td class="output">
              <div class="votes-needed">10% <em>(needs 26.88%)</em></div>
            </td>
          </tr>
          <tr>
            <td class="label">Recipient:</td>
            <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </td>
          </tr>
          <tr>
            <td class="label">Creator:</td>
            <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</td>
          </tr>
          <tr>
            <td class="label">Open:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Passed:</td>
            <td class="output"><span class="boolean-no"> NO </span></td>
          </tr>
          <tr>
            <td class="label">Proposal Hash:</td>
            <td class="output">0x332bb591b0f77251124f30f1a9675590bfd1cadcdf12714e731370d41a8803a3</td>
          </tr>
          <tr>
            <td class="label">Proposal Deposit:</td>
            <td class="output">0</td>
          </tr>
          <tr>
            <td class="label">New Curator:</td>
            <td class="output"><span class="boolean-yes"> YES </span></td>
          </tr>
        </table>
        <div class="form-group">
          <a class="btn btn-primary">VOTE ON THIS PROPOSAL</a>
        </div>
      </section>
    </article>


  </div>


  <!-- Vote Modal -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel">Unlock your Wallet to Vote on Proposal #1</h3>
        </div>
        <div class="modal-body">
          <div>
            @@if (site === 'cx' ) {
              <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
            }
            @@if (site === 'mew' ) {
              <wallet-decrypt-drtv></wallet-decrypt-drtv>
            }
          </div>
          <hr />
          <h4>You are about to vote on Proposal <strong>#1</strong>: DAO Support Proposal.</h4>
          <h4 class="text-light">Please vote carefully, there are no do-overs or take-backs.</h4>

          <div class="row">
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-danger" ng-click="sendTx()">VOTE NO</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-default" data-dismiss="modal">GET ME OUT OF HERE</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-primary" ng-click="sendTx()">VOTE YES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Vote Modal -->



</div>
<!-- / The DAO Proposals -->





