<!-- ALL: ENS MODAL -->
<article class="modal fade" id="ensConfirmModal" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal">&times;</button>

        <h2 class="modal-title">
          You are about to
          <span ng-show="objENS.status==ensModes.auction"> place a bid</span>
          <span ng-show="objENS.status==ensModes.open">start an auction & place a bid.</span>
          <span ng-show="objENS.status==ensModes.reveal">Reveal your Bid</span>
        </h2>

        <div ng-show="objENS.status!=ensModes.reveal" class="alert alert-danger">
          <h4>Screenshot & save first!</h4>
          <small>You <u>cannot</u> claim your name unless you have this information during the reveal process.</small>
        </div>

        <table class="table">
          <tbody>
            <tr class="text-center">
              <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
              <td class="mono">-><br />{{tx.value}} {{unitReadable}}</td>
              <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div></td>
            </tr>
          </tbody>
        </table>

        <table class="table table-striped table-ens-modal">
          <tbody>
            <tr>
              <td>Name:</td><td>{{objENS.name}}.eth</td>
            </tr>
            <tr>
              <td>Bid Amount:</td><td>{{objENS.bidValue}} {{ajaxReq.type}}</td>
            </tr>
            <tr>
              <td>Secret Phrase:</td><td>{{objENS.secret}}</td>
            </tr>
            <tr ng-show="objENS.status!=ensModes.reveal">
              <td>Amount to Send (disguise):</td><td>{{objENS.dValue}} {{ajaxReq.type}}</td>
            </tr>
            <tr>
              <td>From Account:</td><td><small class="mono">{{wallet.getAddressString()}}</small></td>
            </tr>
            <tr ng-show="showRegistrationDate() && objENS.status!=ensModes.reveal">
              <td>Must Reveal On:</td><td><small>{{getRevealTime().toLocaleString()}}</small></td>
            </tr>
            <tr ng-show="showRegistrationDate()">
              <td>Auction Ends:</td><td><small>{{objENS.registrationDate.toLocaleString()}}</small></td>
            </tr>

            <tr ng-show="objENS.status==ensModes.open">
              <td>Must Reveal On:</td><td><small>(TBD. Check the name on MEW after you start the auction.)</small></td>
            </tr>
            <tr ng-show="objENS.status==ensModes.open">
              <td>Auction Ends:</td><td><small>(TBD. Check the name on MEW after you start the auction.)</small></td>
            </tr>

            <tr ng-show="objENS.status!=ensModes.reveal">
              <td colspan="2">
                <small><p>Copy and save this:</p><textarea class="form-control small" readonly rows="4">{{bidObject}}</textarea></small>
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

