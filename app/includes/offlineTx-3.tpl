<article class="block">

  <h2 translate="OFFLINE_Step3_Title"> Step 3: Send / Publish Transaction </h2>

  <p translate="OFFLINE_Step3_Label_1"> Paste the signed transaction from Step 2 </p>

  <label translate="SEND_signed"> Signed Transaction </label>
  <textarea class="form-control" rows="3" ng-model="signedTx"></textarea>

  <a class="btn btn-primary" ng-click="confirmSendTx()" translate="SEND_trans">SEND TRANSACTION</a>

</article>
