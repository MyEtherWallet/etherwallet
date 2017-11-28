<!-- ALL: ENS MODAL -->
<article class="modal fade" id="ensConfirmModal" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

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

        @@if (site === 'mew' ) { @@include( './ens-confirm-table.tpl', { "site": "mew" } ) }
        @@if (site === 'cx'  ) { @@include( './ens-confirm-table.tpl', { "site": "cx"  } ) }

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

