<!-- Sign Message Panel -->
  <h3>
    <a translate="NAV_SignMsg" ng-class="{'isActive': visibility=='signView'}" ng-click="setVisibility('signView')"> Sign Message </a>
    or
    <a translate="MSG_verify"  ng-class="{'isActive': visibility=='verifyView'}" ng-click="setVisibility('verifyView')"> Verify Message </a>
  </h3>

  <article ng-switch on="visibility">

    <!-- Sign Message Stuff -->
    <section ng-switch-when="signView">

      <!-- Message -->
      <div class="account-help-icon">
        <img src="images/icon-help.svg" class="help-icon" />
        <ul class="account-help-text">
          <li translate="MSG_info2">Include your nickname and where you use the nickname so someone else cannot use it.</li>
          <li translate="MSG_info3">Include a specific reason for the message so it cannot be reused for a different purpose.</li>
        </ul>
        <h5 translate="MSG_message"> Message </h5>
      </div>


      <textarea class="form-control" ng-model="signMsg.message" placeholder="This is user kvhnuke on reddit. The purpose of this message is to prove that 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 is my address." rows="5"></textarea>

      <!-- Date -->
      <div class="account-help-icon">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="MSG_info1">Include the current date so the signature cannot be reused on a different date.</p>
        <h5 translate="MSG_date"> Date </h5>
      </div>
      <input class="form-control" ng-model="signMsg.dateTime" type="text" placeholder="1 JAN 2016 14:15" />

      <!-- Sign Message Button -->
      <a class="btn btn-info btn-block" ng-click="generateSignedMsg()" translate="NAV_SignMsg" ng-show="wallet!=null"> Sign Message </a>


      <!-- Signed Message -->
      <div ng-show="signMsg.signedMsg">
        <h5 translate="MSG_signature"> Signature </h5>
        <textarea class="form-control" rows="4" readonly>{{ signMsg.signedMsg }}</textarea>
      </div>
    </section>
    <!-- / Sign Message Stuff -->



    <!-- Verify Message Stuff -->
    <section ng-switch-when="verifyView">
      <!-- Signature -->
      <h5 translate="MSG_signature"> Signature </h5>
      <textarea class="form-control" ng-model="verifyMsg.signedMsg" rows="6" placeholder='{"address":"0xA7DeFf12461661212734dB35AdE9aE7d987D648c","msg":"This message was signed by kvhnuke | 28 NOV 2016 1:38AM","sig":"0x2190fdf0a011863fed22050372088d08404eb7cae020b73f24cfeca967773b3867f53f1ec96baffbdc6ec9dd3ca7c2ba4eed19a500f65cb3c343e24091b0c4f21b"}'></textarea>

      <!-- Verify Signature Message Button -->
      <a class="btn btn-info btn-block" ng-click="verifySignedMessage()" translate="MSG_verify" ng-show="verifyMsg.signedMsg!=''"> Verify Message </a>



    </section>
    <!-- / Verify Message Stuff -->

  </article>
<!-- / Sign Message Panel -->
