<article class="block">

  <!-- To Address -->
  <article class="clearfix">
    <h2 class="col-xs-12" translate="OFFLINE_Step2_Title"> Step 2: Generate Transaction (Offline Computer) </h2>

    <address-field var-name="tx.to"></address-field>

    <section class="col-xs-12">
      <p>{{customGasMsg}}</p>
    </section>
  </article>

  <!-- Amount to Send -->
  <article class="clearfix">
    <section class="col-sm-11">
      <label translate="OFFLINE_Step2_Label_2">
        Amount to Send
      </label>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="{{'SEND_amount_short' | translate }}" ng-model="tx.value"/>
        <div class="input-group-btn">
          <a style="min-width: 150px"
             class="btn btn-default dropdown-toggle"
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

  <!-- Gas Limit -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_4b">21000 is the default gas limit.</p>
      </a>
      <label translate="OFFLINE_Step2_Label_4"> Gas Limit </label>
      <input class="form-control" type="text" placeholder="" ng-model="tx.gasLimit"/>
    </section>
  </article>

  <!-- Gas Price -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_3b">This was displayed in Step 1</p>
      </a>
      <label translate="OFFLINE_Step2_Label_3"> Gas Price </label>
      <div class="input-group">
        <input type="text"
               class="form-control"
               placeholder="50"
               ng-model="gasPriceDec"
               ng-disabled="checkTxReadOnly"
               ng-class="Validator.isPositiveNumber(gasPriceDec) ? 'is-valid' : 'is-invalid'" />
        <div class="input-group-btn">
          <button style="min-width: 170px" class="btn btn-default">  WEI </button>
        </div>
      </div>
    </section>
  </article>


  <!-- Nonce -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-nonce" target="_blank" rel="noopener">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_5b">This was displayed in Step 1.</p>
      </a>
      <label translate="OFFLINE_Step2_Label_5"> Nonce </label>
      <input class="form-control" type="text" placeholder="" ng-model="nonceDec"/>
    </section>
  </article>


  <!-- Data -->
  <article class="clearfix">
    <section class="col-sm-11" ng-show="tokenTx.id=='ether'">
      <span class="account-help-icon">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_6b">This is optional.</p>
      </span>
      <label translate="OFFLINE_Step2_Label_6"> Data </label>
      <input class="form-control" type="text" placeholder="0x4d792045746865722057616c6c6574" id="offlineData" ng-model="tx.data" />
    </section>
  </article>

</article>


<!-- Decrypt -->
<article class="clearfix">
  <wallet-decrypt-drtv></wallet-decrypt-drtv>
</article>


<!-- Button -->
<article class="row block" ng-show="wallet!=null">
  <section class="col-xs-12 clearfix">
    <a class="btn btn-info" ng-click="generateTx()" translate="SEND_generate">Generate Signed Transaction</a>
  </section>
  <section class="col-sm-5 clearfix">
    <label translate="SEND_raw"> Raw Transaction </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="rawTx"></textarea>
  </section>
  <section class="col-sm-5 clearfix">
    <label translate="SEND_signed"> Signed Transaction </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="signedTx"></textarea>
  </section>
  <section class="col-sm-2 cleafix">
    <div class="qr-code" qr-code="{{signedTx}}" watch-var="signedTx" width="100%"></div>
  </section>
</article>
