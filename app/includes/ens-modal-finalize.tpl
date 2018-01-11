<!-- FINALIZE: ENS MODAL -->
<article class="modal fade" id="ensFinalizeConfirm" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

        <h2 class="modal-title">
          <span translate="ENS_Finalize_content_1">
            You are about to finalize the auction & claim the name:
          </span>
          <strong>
            {{objENS.name}}.eth
          </strong>
        </h2>

        <p>
          The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.
        </p>

        <h4 translate="SENDModal_Content_3">
          Are you sure you want to do this?
        </h4>
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
<!-- FINALIZE: ENS MODAL -->
