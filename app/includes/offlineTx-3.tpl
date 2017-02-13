<article class="row">

  <hr />

  <h4 class="col-xs-12 clearfix" translate="OFFLINE_Step3_Title"> Step 3: Send / Publish Transaction </h4>

  <p class="col-xs-12 clearfix" translate="OFFLINE_Step3_Label_1"> Paste the signed transaction from Step 2 </p>

  <section class="col-sm-10 clearfix">
    <label translate="SEND_signed"> Signed Transaction </label>
    <textarea class="form-control" rows="3" ng-model="signedTx"></textarea>
  </section>

  <section class="col-sm-10 clearfix">
    <a class="btn btn-primary" ng-click="confirmSendTx()" translate="SEND_trans">SEND TRANSACTION</a>
  </section>

</article>
