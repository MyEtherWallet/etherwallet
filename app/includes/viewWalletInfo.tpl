<!-- view wallet info -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.viewWalletInfo.id">

  <h2> {{ 'VIEWWALLET_Title' | translate }}  </h2>
  <p> {{ 'VIEWWALLET_Subtitle' | translate }} </p>

  <div>
  <wallet-decrypt-drtv></wallet-decrypt-drtv>
  </div>
  <section class="row" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>
    <hr />
    <h2 class="col-xs-12"> {{ 'VIEWWALLET_SuccessMsg' | translate }} </h2>
    <div class="col-sm-6">
      <div class="row">
        <div class="form-group col-sm-10">
          <h4>
             {{ 'GEN_Address' | translate }}
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">{{ 'GEN_AddessDesc' | translate }} </span>
            </div>
          </h4>
          <input class="form-control" type="text" ng-value="wallet.getChecksumAddressString()" readonly="readonly">
        </div>
        <div class="col-sm-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        </div>
      </div>
      <div class="form-group">
        <h4>
          {{ 'GEN_PrivKey' | translate }}
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">{{ 'GEN_PrivKeyDesc' | translate }}</span>
          </div>
        </h4>
        <textarea class="form-control" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <h4>{{ 'GEN_Address' | translate }}</h4>
          <div qr-code="{{wallet.getAddressString()}}" watch-var="wallet" width="100%"></div>
        </div>
        <div class="form-group col-sm-6">
          <h4>{{ 'GEN_PrivKey' | translate }}</h4>
          <div qr-code="{{wallet.getPrivateKeyString()}}" watch-var="wallet" width="100%"></div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4>
          {{ 'GEN_Print' | translate }}
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">{{ 'GEN_PrintDesc' | translate }}</span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" ng-click="printQRCode()">{{ 'GEN_Print' | translate }}</a>
      </div>
      <div class="form-group" ng-show='showEnc'>
        <h4>
          {{ 'GEN_Keystore' | translate }}
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">{{ 'GEN_KeystoreDesc' | translate }}</span>
          </div>
        </h4>
         <a class="btn btn-info btn-block" href="{{blobEnc}}" download="{{encFileName}}"> {{ 'GEN_Download' | translate }} </a>
      </div>
      <div class="form-group" >
        <h4>
          {{ 'GEN_Json' | translate }}
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">{{ 'GEN_JsonDesc' | translate }}</span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json"> {{ 'GEN_Download' | translate }} </a>
      </div>

      <br />
      <hr />
      <p> {{ GEN_Balance | translate }}
          <br />
          <strong class="text-primary" style="margin-left: 1em"> {{etherBalance}} Ether </strong>
          <br />
          <div ng-repeat="token in tokenObjs track by $index">
            <strong style="margin-left: 1em"> {{token.getBalance()}} {{token.getSymbol()}}</strong>
            <br />
          </div>
        </p>
      <hr />
      <p>
        {{ GEN_Equiv | translate }}
        <br />
        <strong style="margin-left: 1em"> {{usdBalance}} USD </strong>
        <br />
        <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong>
        <br />
        <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
      </p>
      <hr />
      <p>
        {{ GEN_TransHistory | translate }}
        <br />
        <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/{{wallet.getAddressString()}}</a>
        <!--
        <strong style="margin-left: 1em"> {{token.balance}} DAO Tokens</strong>
        <br />
        <strong style="margin-left: 1em"> {{tokenBalance}} DGD Tokens </strong>
        <br />
        <strong style="margin-left: 1em"> {{badgeBalance}} DGD Badges </strong>
        -->
      </p>
    </div>
  </section>


</div>
<!-- /view wallet info -->
