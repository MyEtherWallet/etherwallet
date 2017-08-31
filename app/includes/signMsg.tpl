<article class="col-xs-12 clearfix">
  <div class="block text-center">
    <h2>
      <a translate="NAV_SignMsg" ng-class="{ 'isActive': visibility=='signView'}" ng-click="setVisibility('signView')"> Sign Message </a>
      or
      <a translate="MSG_verify"  ng-class="{ 'isActive': visibility=='verifyView'}" ng-click="setVisibility('verifyView')"> Verify Message </a>
    </h2>
  </div>
</article>

<article class="col-xs-12 clearfix" ng-switch on="visibility">

  <section class="block" ng-switch-when="signView">

    <h4 translate="MSG_message"> Message </h4>

    <textarea class="form-control"
              ng-model="signMsg.message"
              placeholder="This is a sweet message that you are signing to prove that you own the address you say you own."
              rows="5"
              ng-disabled="signMsg.signedMsg">
    </textarea>

    <p class="small">
      <em translate="MSG_info2">
        Include your nickname and where you use the nickname so someone else cannot use it.
      </em>
      <em translate="MSG_info3">
        Include a specific reason for the message so it cannot be reused for a different purpose.
      </em>
    </p>

    <br />

    <a class="btn btn-info btn-block"
       ng-click="generateSignedMsg()"
       translate="NAV_SignMsg"
       ng-show="wallet!=null">
         Sign Message
    </a>

    <div ng-show="signMsg.signedMsg">
      <h4 translate="MSG_signature"> Signature </h4>
      <textarea class="form-control"
                rows="8"
                style="word-break: break-all;"
                readonly
                title="Signature">{{ signMsg.signedMsg }}</textarea>
    </div>
  </section>


  <section class="block" ng-switch-when="verifyView">

    <h5 translate="MSG_signature"> Signature </h5>
    <textarea class="form-control"
              ng-model="verifyMsg.signedMsg"
              rows="8"
              placeholder='{"address":"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8","msg":"asdfasdfasdf","sig":"0x4771d78f13ba8abf608457f12471f427ca8f2fb046c1acb3f5969eefdfe452a10c9154136449f595a654b44b3b0163e86dd099beaca83bfd52d64c21da2221bb1c","version":"mew_v2"}'>
    </textarea>

    <a class="btn btn-info btn-block"
       ng-click="verifySignedMessage()"
       translate="MSG_verify"
       ng-show="verifyMsg.signedMsg!=''"> Verify Message
    </a>

    <p class="alert alert-success"
       ng-show="verifiedMsg.address!=null">
        <strong>{{ verifiedMsg.address }}</strong> did sign the message <strong>{{ verifiedMsg.msg }}</strong>.
    </p>

  </section>

</article>
