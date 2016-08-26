<!-- send transaction -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.offlineTransaction.id" ng-controller='sendOfflineTxCtrl'>

  <h2 translate="OFFLINE_Title"> Generate & Send Offline Transaction </h2>

  <p translate="OFFLINE_Desc"> Generating offline transactions can be done in three steps. You will complete steps 1 and 3 on an online computer, and step 2 on an offline/airgapped computer. This ensures your private keys do not touch an internet-connected device. </p>

  <hr />

  <!-- Step 1 -->
  <section class="row">
    <h4 class="col-xs-12" translate="OFFLLINE_Step1_Title">Step 1: Generate Information (Online Computer)</h4>
    <div class="form-group col-xs-10">
      <label translate="OFFLINE_Step1_Label_1"> From Address: </label>
      <p class="small" translate="OFFLINE_Step1_Label_2">Note: This is the FROM address, not the TO address. Nonce is generated from the originating account. If using an airgapped computer, it would be the address of the cold-storage account.</p>
      <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.from" ng-change="validateAddress(tx.from,'validateAddressStatus')"/>
      <div ng-bind-html="validateAddressStatus"></div>
    </div>
    <div class="col-xs-2 address-identicon-container-offline">
      <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.from}}" watch-var="tx.from"></div>
    </div>
    <div class="form-group col-xs-12">
      <a class="btn btn-info" ng-click="getWalletInfo()" translate="OFFLINE_Step1_Button">GENERATE INFORMATION</a>
    </div>
    <div id="step1Output" ng-show="showWalletInfo">
      <div class="form-group col-xs-6 col-sm-5">
        <label translate="OFFLINE_Step2_Label_3"> Gas Price </label>
        <input class="form-control" type="text" placeholder="" readonly="readonly" ng-model="gasPriceDec"/>
      </div>
      <div class="form-group col-xs-6 col-sm-5">
        <label translate="OFFLINE_Step2_Label_5"> Nonce </label>
        <input class="form-control" type="text" placeholder="" readonly="readonly" ng-model="nonceDec"/>
      </div>
    </div>
  </section>
  <!-- / Step 1 -->

  <!-- Step 2 -->
  <section class="row">
    <hr />
    <h4 class="col-xs-12" translate="OFFLINE_Step2_Title"> Step 2: Generate Transaction (Offline Computer) </h4>
    <div class="form-group col-xs-10">
      <label translate="OFFLINE_Step2_Label_1"> To Address: </label>
      <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-change="validateAddress(tx.to,'validateToAddressStatus')"/>
      <div ng-bind-html="validateToAddressStatus"></div>
    </div>
    <div class="col-xs-2 address-identicon-container-offline">
      <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
    </div>
    <div class="form-group col-sm-10">
      <label translate="OFFLINE_Step2_Label_2"> Value / Amount to Send </label>
      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value"/>
      <div class="radio">
        <label><input type="radio" name="currencyRadioOffline" checked value="ether" ng-model="tx.unit"/>Ether</label>
        <label><input type="radio" name="currencyRadioOffline" value="finney" ng-model="tx.unit" />Finney</label>
        <label><input type="radio" name="currencyRadioOffline" value="szabo" ng-model="tx.unit"/>Szabo</label>
      </div>
    </div>
    <div class="form-group col-sm-10">
      <div class="account-help-icon">
        <img src="images/helpicon.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_3b">This was displayed in Step 1 on your online computer.</p>
        <label translate="OFFLINE_Step2_Label_3"> Gas Price </label>
      </div>
      <input class="form-control" type="text" placeholder="" ng-model="gasPriceDec"/>
    </div>
    <div class="form-group col-sm-10">
      <div class="account-help-icon">
        <img src="images/helpicon.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_4b">21000 is the default gas limit. When you send contracts or add'l data, this may need to be different. Any unused gas will be returned to you.</p>
        <label translate="OFFLINE_Step2_Label_4"> Gas Limit </label>
      </div>
      <input class="form-control" type="text" placeholder="" ng-model="tx.gasLimit"/>
    </div>
    <div class="form-group col-sm-10">
      <div class="account-help-icon">
        <img src="images/helpicon.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_5b">This was displayed in Step 1 on your online computer.</p>
        <label translate="OFFLINE_Step2_Label_5"> Nonce </label>
      </div>
      <input class="form-control" type="text" placeholder="" ng-model="nonceDec"/>
    </div>
    <div class="form-group col-sm-10">
      <div class="account-help-icon">
        <img src="images/helpicon.svg" class="help-icon" />
        <p class="account-help-text" translate="OFFLINE_Step2_Label_6b">This is optional. Data is often used when you send transactions to contracts.</p>
        <label translate="OFFLINE_Step2_Label_6"> Data </label>
      </div>
      <input class="form-control" type="text" placeholder="0x4d792045746865722057616c6c6574" id="offlineData" ng-model="tx.data" />
    </div>
    <div class="form-group col-sm-10">
      <label translate="OFFLINE_Step2_Label_7"> Enter / Upload your Private Key / JSON. </label>
      <wallet-decrypt-drtv></wallet-decrypt-drtv>
    </div>
    <div class="form-group col-sm-10">
      <a class="btn btn-info" ng-click="generateTx()" translate="SEND_generate">Generate Signed Transaction</a>
      <div ng-bind-html="validateTxStatus"></div>
    </div>
    <section id="step2Output">
      <div class="form-group col-sm-8">
        <label translate="SEND_signed"> Signed Transaction </label>
        <textarea class="form-control" placeholder="" readonly="readonly" rows="3" ng-model="signedTx"></textarea>
      </div>
      <div class="col-sm-4 offline-qrcode">
        <div qr-code="{{signedTx}}" watch-var="signedTx" width="100%"></div>
      </div>
    </section>
  </section>
  <!-- / Step 2 -->

  <!-- Step 3 -->
  <section class="row">
    <hr />
    <h4 class="col-xs-12" translate="OFFLINE_Step3_Title"> Step 3: Send / Publish Transaction (Online Computer) </h4>
    <p class="col-xs-12" translate="OFFLINE_Step3_Label_1"> Paste the signed transaction from Step 2 here and press the "SEND TRANSACTION" button. </p>
    <div class="form-group col-sm-10">
      <label translate="SEND_signed"> Signed Transaction </label>
      <textarea class="form-control" placeholder="" rows="3" ng-model="signedTx"></textarea>
    </div>
    <div class="form-group col-sm-10">
      <a class="btn btn-info" ng-click="confirmSendTx()" translate="SEND_trans">SEND TRANSACTION</a>
    </div>
    <div ng-bind-html="offlineTxPublishStatus"></div>
  </section>
  <!-- / Step 3 -->

  <!-- Modal -->
  <div class="modal fade" id="sendTransactionOffline" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
        </div>
        <div class="modal-body">
          <h4>
            <span translate="SENDModal_Content_1">You are about to send</span>
            <strong class="text-primary"> {{tx.value}} </strong>
            <strong class="text-primary"> {{tx.unit}} </strong>
            <span translate="SENDModal_Content_2">to address</span>
            <strong class="text-primary"> {{tx.to}} </strong>
          </h4>
          <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
        </div>
        <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Make transaction.</button>
          </div>
      </div>
    </div>
  </div>
  <!--/modal-->

</article>
<!-- /send transaction -->
