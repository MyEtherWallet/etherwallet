<article class="modal fade" id="sendContract" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

        <div ng-show="wd">

          <h2 class="modal-title text-danger" translate="SENDModal_Title">
            Warning!
          </h2>

          <p translate="CONTRACT_Warning_3">
            You are about to **execute a function on contract**.
          </p>
          <p>
            <span translate="CONTRACT_Warning_2">
              It will be deployed on the following network:
            </span>
            <strong>{{ajaxReq.type}}</strong> ({{ajaxReq.service}}).
          </p>


          <label>
            <span translate="SEND_amount">
              Amount
            </span>
            <em translate="SEND_Helper_Contract">
              In most cases you should leave this as 0.
            </em>
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="0"
                 ng-model="tx.value"
                 ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>

          <label translate="TRANS_gas">
            Gas
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="300000"
                 ng-model="tx.gasLimit"
                 ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>

          <a class="btn btn-info btn-block" ng-click="generateTx()" translate="SEND_generate">
            Generate Transaction
          </a>

          <!-- Data -->
          <section class="row" ng-show="showRaw">
            <!-- Raw TX -->
            <div class="form-group col-sm-6">
              <h4 translate="SEND_raw">
                Raw Transaction
              </h4>
              <textarea class="form-control" rows="3" readonly >{{rawTx}}</textarea>
            </div>
            <!-- Singed TX -->
            <div class="form-group col-sm-6">
              <h4 translate="SEND_signed">
                Signed Transaction
              </h4>
              <textarea class="form-control" rows="3" readonly >{{signedTx}}</textarea>
            </div>
          </section>

        </div>
      </div>


      <div class="modal-footer" ng-show="showRaw">
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

