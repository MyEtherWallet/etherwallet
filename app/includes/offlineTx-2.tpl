<article class="block">

  <!-- To Address -->
  <article class="clearfix">

    <h2 class="col-xs-12" translate="OFFLINE_Step2_Title">
      Step 2: Generate Transaction (Offline Computer)
    </h2>

    <section class="col-xs-11">
      <label translate="OFFLINE_Step2_Label_1">
        To Address:
      </label>
      <input class="form-control"
             type="text"
             placeholder="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
             ng-model="tx.to"
             ng-change="validateAddress(tx.to,'')"/>
    </section>

    <section class="col-xs-1 address-identicon-container">
      <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
    </section>

    <section class="col-xs-12">
      <p>
        {{customGasMsg}}
      </p>
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
                {{unitReadable}}
                <i class="caret"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownAmount">
            <li>
              <a ng-class="{true:'active'}[tokenTx.id == 'ether']" ng-click="setSendMode('ether')">
                {{ajaxReq.type}}
              </a>
            </li>
            <li ng-repeat="token in tokenObjs track by $index">
              <a ng-class="{true:'active'}[tokenTx.id == $index]" ng-click="setSendMode($index, token.getSymbol())" >
                {{token.getSymbol()}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </article>


  <!-- Gas Limit -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon"
         href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
         target="_blank"
         rel="noopener noreferrer">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_4b">
          21000 is the default gas limit.
        </p>
      </a>
      <label translate="OFFLINE_Step2_Label_4">
        Gas Limit
      </label>
      <input class="form-control" type="text" placeholder="" ng-model="tx.gasLimit"/>
    </section>
  </article>


  <!-- Gas Price -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon"
         href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
         target="_blank"
         rel="noopener noreferrer">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_3b">
          This was displayed in Step 1
        </p>
      </a>
      <label translate="OFFLINE_Step2_Label_3">
        Gas Price
      </label>
      <div class="input-group">
        <input type="text"
               class="form-control"
               placeholder="50"
               ng-model="gasPriceDec"
               ng-disabled="checkTxReadOnly"
               ng-class="Validator.isPositiveNumber(gasPriceDec) ? 'is-valid' : 'is-invalid'" />
        <div class="input-group-btn">
          <span class="dropdown dropdown-gprice" ng-cloak>
            <a tabindex="0" style="min-width: 170px"  aria-haspopup="true" aria-expanded="false" aria-label="gas price" class="dropdown-toggle btn btn-default" ng-click="gpDropdown = !gpDropdown">
              {{ gasPriceDef }}
              <i class="caret"></i>
            </a>
            <ul class="dropdown-menu" ng-show="gpDropdown">
              <li><a ng-class="{true:'active'}[gasPriceDef=='WEI']" ng-click="changePrice('WEI')"> WEI          </a></li>
              <li><a ng-class="{true:'active'}[gasPriceDef=='GWEI']" ng-click="changePrice('GWEI')"> GWEI         </a></li>
            </ul>
          </span>

        </div>
      </div>
    </section>
  </article>


  <!-- Nonce -->
  <article class="clearfix">
    <section class="col-sm-11">
      <a class="account-help-icon"
         href="https://kb.myetherwallet.com/transactions/what-is-nonce.html"
         target="_blank"
         rel="noopener noreferrer">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_5b">
          This was displayed in Step 1.
        </p>
      </a>
      <label translate="OFFLINE_Step2_Label_5">
        Nonce
      </label>
      <input class="form-control" type="text" placeholder="" ng-model="nonceDec"/>
    </section>
  </article>


  <!-- Data -->
  <article class="clearfix">
    <section class="col-sm-11" ng-show="tokenTx.id=='ether'">
      <span class="account-help-icon">
        <img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_6b">
          This is optional.
        </p>
      </span>
      <label translate="OFFLINE_Step2_Label_6">
        Data
      </label>
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
    <a class="btn btn-info" ng-click="generateTx()" translate="SEND_generate">
      Generate Signed Transaction
    </a>
  </section>
  <section class="col-sm-6 clearfix">
    <label translate="SEND_raw">
      Raw Transaction
    </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="rawTx"></textarea>
  </section>
  <section class="col-sm-6 clearfix">
    <label translate="SEND_signed">
      Signed Transaction
    </label>
    <textarea class="form-control" placeholder="" readonly="readonly" rows="5" ng-model="signedTx"></textarea>
  </section>
</article>
