<article class="col-xs-12 clearfix">
  <div class="block text-center">
    <h2>
      <a translate="NAV_SignMsg"
         ng-class="{ 'isActive': visibility=='signView'}"
         ng-click="setVisibility('signView')">
           Sign Message
      </a>
      or
      <a translate="MSG_verify"
         ng-class="{ 'isActive': visibility=='verifyView'}"
         ng-click="setVisibility('verifyView')">
          Verify Message
      </a>
    </h2>
  </div>
</article>

<article class="col-xs-12 clearfix" ng-switch on="visibility">

  <section class="block" ng-switch-when="signView">

    <h4 translate="MSG_message">
      Message
    </h4>

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
      <h4 translate="MSG_signature">
        Signature
      </h4>
      <textarea class="form-control"
                rows="8"
                style="word-break: break-all;"
                readonly
                title="Signature">{{ signMsg.signedMsg }}</textarea>
    </div>
  </section>


  <section class="block" ng-switch-when="verifyView">

    <h5 translate="MSG_signature">
      Signature
    </h5>
    <textarea class="form-control"
              ng-model="verifyMsg.signedMsg"
              rows="8"
              placeholder='{"address": "0xdecaf9cd2367cdbb726e904cd6397edfcae6068d","msg": "MEW IS AWESOME","sig": "0xe26ce7ae8b04a20dbdd32de82bf16c4b7a367312341eef6761208bcf8bc518021b8ec354eae8af54ad8190bef6bf8337eacafe3ce9710fe9c7f28596f1daaf631b","version": "2"}'>
    </textarea>

    <a class="btn btn-info btn-block"
       ng-click="verifySignedMessage()"
       translate="MSG_verify"
       ng-show="verifyMsg.signedMsg!=''">
          Verify Message
    </a>

    <p class="alert alert-success"
       ng-show="verifiedMsg.address!=null">
        <strong>{{ verifiedMsg.address }}</strong> did sign the message <strong>{{ verifiedMsg.msg }}</strong>.
    </p>

  </section>

</article>
