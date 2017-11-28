<article class="row block">

  <div class="col-xs-12">
    <h2 translate="OFFLINE_Step3_Title">
      Step 3: Send / Publish Transaction
    </h2>
  </div>

  <div class="col-sm-6 col-xs-12">
    <p translate="OFFLINE_Step3_Label_1">
      Paste the signed transaction from Step 2
    </p>
    <label translate="SEND_signed">
      Signed Transaction
    </label>
    <textarea class="form-control" rows="7" ng-model="signedTx"></textarea>
    <a class="btn btn-primary" ng-click="confirmSendTx()" translate="SEND_trans">
      SEND TRANSACTION
    </a>
  </div>

  <div class="col-sm-6 col-xs-12">
    <div class="qr-code" qr-code="{{signedTx}}" watch-var="signedTx" width="100%" style="  max-width: 20rem; margin: 1rem auto;"></div>
  </div>

</article>
