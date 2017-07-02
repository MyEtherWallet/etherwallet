<article class="modal fade" id="sendContract" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal">&times;</button>

        <div ng-show="wd">

          <h2 class="modal-title text-danger" translate="SENDModal_Title">Warning!</h2>

          <p>You are about to <strong>execute a function on contract</strong> on the <strong>{{ajaxReq.type}}</strong> chain.</p>

          <p> The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.</p>

          <label translate="x_Amount"> Amount <em>In most cases you should leave this as 0.</em> </label>
          <input class="form-control" type="text" placeholder="0" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>

          <label translate="x_GasLimit"> Gas </label>
          <input class="form-control" type="text" placeholder="300000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>

          <a class="btn btn-info btn-block" ng-click="generateTx()" translate="TX_Generate"> Generate Transaction </a>

          <!-- Data -->
          <section class="row" ng-show="showRaw">
            <!-- Raw TX -->
            <div class="form-group col-sm-6">
              <h4 translate="TX_Unsigned"> Unsigned Transaction </h4>
              <textarea class="form-control" rows="3" readonly >{{rawTx}}</textarea>
            </div>
            <!-- Singed TX -->
            <div class="form-group col-sm-6">
              <h4 translate="TX_Signed"> Signed Transaction </h4>
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

