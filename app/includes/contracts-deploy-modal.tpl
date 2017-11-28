<article class="modal fade" id="deployContract" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close Deploy Contract Dialog">&times;</button>

        <h2 class="modal-title text-danger" translate="SENDModal_Title">
          Warning!
        </h2>

        <p translate="CONTRACT_Warning_1">
          You are about to <strong>deploy a contract</strong>.
        </p>
        <p>
          <span translate="CONTRACT_Warning_2">
            It will be deployed on the following network:
          </span>
          <strong>{{ajaxReq.type}}</strong>.
        </p>

        <p> The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.</p>

        <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
      </div>

      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal" aria-label="Close Deploy Contract Dialog" translate="SENDModal_No">
          No, get me out of here!
        </button>
        <button class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">
          Yes, I am sure! Make transaction.
        </button>
      </div>

    </section>
  </section>
</article>
