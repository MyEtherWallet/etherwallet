<article class="row">
  <hr />
  <h4 class="col-xs-12" translate="OFFLINE_Step2_Title"> Step 2: Generate Transaction (Offline Computer) </h4>
</article>


<!-- To Address -->
<article class="row">
  <section class="col-xs-10">
    <label translate="OFFLINE_Step2_Label_1">To Address:</label>
    <input class="form-control"
           type="text"
           placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"
           ng-model="tx.to"
           ng-change="validateAddress(tx.to,'')"/>
  </section>

  <section class="col-xs-2">
    <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
  </section>
</article>


<!-- Amount to Send -->
<article class="row">
  <section class="col-sm-10">
    <label translate="OFFLINE_Step2_Label_2">
      Amount to Send
    </label>
    <div class="input-group">
      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value"/>
      <div class="input-group-btn">
        <a class="btn btn-default dropdown-toggle"
           ng-click="dropdownAmount = !dropdownAmount"
           ng-class="dropdownEnabled ? '' : 'disabled'">
              {{unitReadable}}<i class="caret"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownAmount">
          <li><a ng-class="{true:'active'}[tokenTx.id == 'ether']" ng-click="setSendMode('ether')">{{ajaxReq.type}}</a></li>
          <li ng-repeat="token in tokenObjs track by $index">
            <a ng-class="{true:'active'}[tokenTx.id == $index]" ng-click="setSendMode($index, token.getSymbol())" > {{token.getSymbol()}} </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</article>


<!-- Gas Price -->
<article class="row">
  <section class="col-sm-10">
    <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
      <p class="account-help-text" translate="OFFLINE_Step2_Label_3b">This was displayed in Step 1</p>
      <label translate="OFFLINE_Step2_Label_3"> Gas Price </label>
    </div>
    <input class="form-control" type="text" placeholder="" ng-model="gasPriceDec"/>
  </section>
</article>

<!-- Gas Limit -->
<article class="row">
  <section class="col-sm-10">
    <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
      <p class="account-help-text" translate="OFFLINE_Step2_Label_4b">21000 is the default gas limit.</p>
      <label translate="OFFLINE_Step2_Label_4"> Gas Limit </label>
    </div>
    <input class="form-control" type="text" placeholder="" ng-model="tx.gasLimit"/>
  </section>
</article>

<!-- Nonce -->
<article class="row">
  <section class="col-sm-10">
    <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
      <p class="account-help-text" translate="OFFLINE_Step2_Label_5b">This was displayed in Step 1.</p>
      <label translate="OFFLINE_Step2_Label_5"> Nonce </label>
    </div>
    <input class="form-control" type="text" placeholder="" ng-model="nonceDec"/>
  </section>
</article>


<!-- Data -->
<article class="row">
  <section class="col-sm-10" ng-show="tokenTx.id=='ether'">
    <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
      <p class="account-help-text" translate="OFFLINE_Step2_Label_6b">This is optional.</p>
      <label translate="OFFLINE_Step2_Label_6"> Data </label>
    </div>
    <input class="form-control" type="text" placeholder="0x4d792045746865722057616c6c6574" id="offlineData" ng-model="tx.data" />
  </section>
</article>


<!-- Decrypt -->
<article class="clearfix">
  <wallet-decrypt-drtv></wallet-decrypt-drtv>
</article>


<!-- Button -->
<article class="row" ng-show="wallet!=null">
  <section class="col-sm-10">
    <a class="btn btn-info" ng-click="generateTx()" translate="SEND_generate">Generate Signed Transaction</a>
  </section>
</article>


<!-- Raw Tx -->
<article class="row" ng-show="wallet!=null">
  <div class="col-sm-8">
    <label translate="SEND_raw"> Raw Transaction </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="rawTx"></textarea>
  </div>
</article>
<!-- Signed Tx -->
<article class="row" ng-show="wallet!=null">
  <div class="col-sm-8">
    <label translate="SEND_signed"> Signed Transaction </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="signedTx"></textarea>
  </div>
  <div class="col-sm-4">
    <div class="qr-code" qr-code="{{signedTx}}" watch-var="signedTx" width="100%" style="margin-top: -6.5rem"></div>
  </div>
</article>

