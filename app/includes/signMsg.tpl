<!-- Send Transaction Page -->
<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.signMsg.id" ng-controller='signMsgCtrl'  ng-cloak>

  <h1>
    <a translate="NAV_SignMsg" ng-class="{'isActive': visibility=='signView'}" ng-click="setVisibility('signView')"> Sign Message </a>
    or
    <a translate="MSG_verify"  ng-class="{'isActive': visibility=='verifyView'}" ng-click="setVisibility('verifyView')"> Verify Message </a>
  </h1>

  <article ng-switch on="visibility">


    <!-- Sign Message Stuff -->
    <section ng-switch-when="signView">
      <h6>Helpful Tips: </h6>
      <ul>
        <li translate="MSG_info1">Include the current date so the signature cannot be reused on a different date.</li>
        <li translate="MSG_info2">Include your nickname and where you use the nickname so someone else cannot use it.</li>
        <li translate="MSG_info3">Inlude a specific reason for the message so it cannot be reused for a different purpose.</li>
      </ul>

      <!-- Message -->
      <h4 translate="MSG_message"> Message </h4>
      <textarea class="form-control" ng-model="signMsg.message" placeholder="This is user kvhnuke on reddit. The purprose of this message is to prove that 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 is my address." rows="4"></textarea>

      <!-- Date -->
      <h4 translate="MSG_date"> Date </h4>
      <input class="form-control" ng-model="signMsg.dateTime" type="text" placeholder="1 JAN 2016 14:15" />

      <!-- Wallet Decrypt -->
      <br />
      @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
      <br /><br />

      <!-- Sign Message Button -->
      <a class="btn btn-info btn-block" ng-click="generateSignedMsg()" translate="NAV_SignMsg" ng-show="wallet!=null"> Sign Message </a>

      <div class="form-group" ng-bind-html="signMsg.status"></div>

      <!-- Signed Message -->
      <div ng-show="signMsg.signedMsg">
        <h4 translate="MSG_signature"> Signature </h4>
        <textarea class="form-control" rows="4" readonly>{{ signMsg.signedMsg }}</textarea>
      </div>
    </section>
    <!-- / Sign Message Stuff -->



    <!-- Verify Message Stuff -->
    <section ng-switch-when="verifyView">
      <!-- Signature -->
      <h4 translate="MSG_signature"> Signature </h4>
      <textarea class="form-control" ng-model="verifyMsg.signedMsg" rows="4" placeholder='{"address":"0xA7DeFf12461661212734dB35AdE9aE7d987D648c","msg":"This message was signed by kvhnuke | 28 NOV 2016 1:38AM","sig":"0x2190fdf0a011863fed22050372088d08404eb7cae020b73f24cfeca967773b3867f53f1ec96baffbdc6ec9dd3ca7c2ba4eed19a500f65cb3c343e24091b0c4f21b"}'></textarea>

      <!-- Verify Signature Message Button -->
      <a class="btn btn-info btn-block" ng-click="verifySignedMessage()" translate="MSG_verify" ng-show="verifyMsg.signedMsg!=''"> Verify Message </a>

      <!-- Verify Message Status -->
      <div class="form-group" ng-bind-html="verifyMsg.status"></div>
    </section>
    <!-- / Verify Message Stuff -->

  </article>
</main>
<!-- / Send Transaction Page -->
