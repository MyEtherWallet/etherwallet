<main class="tab-pane block--container active" ng-if="globalService.currentTab==globalService.tabs.txView.id" ng-controller='txViewCtrl' role="main" ng-cloak>


<!-- Block : Title -->
<article class="block__title">

  <!-- Title -->
  <h1 translate="TX_View"> View Transaction Status </h1>

  <!-- Desc -->

  <!-- Label -->
  <h4 translate="TX_Hash"> TX Hash </h4>
  <p translate="VIEWTX_Desc"></p>

  <!-- Input -->
  <input
     class="form-control"
     type="text"
     placeholder="0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c"
     ng-model="txInfo.hash"
     ng-keyup="$event.keyCode == 13 && checkTxStatus()"
     aria-label="{{'TX_Hash' | translate}}" ng-class="Validator.isValidTxHash(txInfo.hash) ? 'is-valid' : 'is-invalid'"/>

  <!-- Button -->
  <button tabindex="0"
          role="button"
          class="btn btn-primary"
          ng-click="checkTxStatus()"
          translate="TX_View"> View Transaction Status </button>

</article>
<!-- / Block : Title -->


  <!-- Section 2: Current State -->
  <section class="block txView__2" ng-show="txInfo.status==txStatus.mined || txInfo.status==txStatus.notFound || txInfo.status==txStatus.found">

    <div class="cont-md" ng-show="txInfo.status == txStatus.mined">
      <h3 class="text-success" translate="VIEWTX_FoundOnChain"> Transaction Found </h3>
      <h5> <a href="https://etherscan.io/tx/{{ tx.hash }}" target="_blank" rel="noopener"> {{ tx.hash }} </a> </h5>
      <p><strong translate="VIEWTX_FoundOnChain_1"></strong></p>
      <ul>
        <li translate="VIEWTX_FoundOnChain_2"></li>
        <li translate="VIEWTX_FoundOnChain_3"></li>
      </ul>
    </div>

    <div class="cont-md" ng-show="txInfo.status == txStatus.notFound">
      <h3 class="text-danger" translate="VIEWTX_NotFound">Transaction Not Found</h3>
      <p><strong translate="VIEWTX_NotFound_1"></strong></p>
      <ul>
        <li translate="VIEWTX_NotFound_2"></li>
        <li translate="VIEWTX_NotFound_3"></li>
        <li translate="VIEWTX_NotFound_4"></li>
      </ul>
    </div>

    <div class="cont-md" ng-show="txInfo.status == txStatus.found">
      <h3 class="text-warning" translate="VIEWTX_Found">Pending Transaction Found</h3>
      <ul>
        <li translate="VIEWTX_Found_1"></li>
        <li translate="VIEWTX_Found_2"></li>
        <li translate="VIEWTX_Found_3"></li>
      </ul>
    </div>

    <div ng-show="txInfo.status == txStatus.found || txInfo.status == txStatus.mined">
    <h4 translate="TX_Details" class="cont-md">Transaction Details</h4>
    <br />
    <table class="table table-striped txView__2 cont-md"> <!-- ng-show="tx.status=='foundOnChain' || foundInPending'"-->
      <tbody>
        <tr>
          <td translate="TX_Hash">TX Hash</td>
          <td><a href="https://etherscan.io/tx/{{ txInfo.hash }}" target="_blank" rel="noopener"> {{ txInfo.hash }} </a></td>
        </tr>
        <tr>
          <td translate="ADDR_From">From Address</td>
          <td><a href="https://etherscan.io/address/{{ txInfo.from }}" target="_blank" rel="noopener"> {{ txInfo.from }} </a></td>
        </tr>
        <tr>
          <td translate="ADDR_To">To Address</td>
          <td><a href="https://etherscan.io/address/{{ txInfo.to }}" target="_blank" rel="noopener"> {{ txInfo.to }} </a></td>
        </tr>
        <tr>
          <td translate="x_Amount_short">Amount</td>
          <td>{{ txInfo.valueStr }} </td>
        </tr>
        <tr>
          <td>
            <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-nonce" target="_blank" rel="noopener">
              <img src="images/icon-help.svg" class="help-icon" />
              <p class="account-help-text" translate="x_NonceDesc"></p>
            </a>
            <span translate="x_Nonce">Nonce</span>
          </td>
          <td>{{ txInfo.nonce }} </td>
        </tr>
        <tr>
          <td>
            <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
              <img src="images/icon-help.svg" class="help-icon" />
              <p class="account-help-text" translate="x_GasLimitDesc"></p>
            </a>
            <span translate="x_GasLimit">Gas Limit</span>
          </td>
          <td>{{ txInfo.gasLimit }} </td>
        </tr>
        <tr>
          <td>
            <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
              <img src="images/icon-help.svg" class="help-icon" />
              <p class="account-help-text" translate="x_GasPriceDesc"></p>
            </a>
            <span translate="x_GasPrice">Gas Price</span>
          </td>
          <td>
            {{ txInfo.gasPrice.gwei }} GWEI
            <small>({{ txInfo.gasPrice.wei }} WEI)</small></td>
        </tr>
<!--
        <tr>
          <td>
            <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
              <img src="images/icon-help.svg" class="help-icon" />
              <p class="account-help-text" translate="TX_TXFeeDesc"></p>
            </a>
            <span translate="TX_TXFee">TX Fee</span>
          </td>
          <td>
            ({{ txFee.eth }} ETH)
            <small>({{ txFee.usd }} USD)</small>
          </td>
        </tr>
-->
        <tr>
          <td translate="x_Data">Data</td>
          <td>{{ txInfo.data }} </td>
        </tr>
      </tbody>
    </table>
</div>
  </section>
  <!-- / Section 2: Current State -->


  <!-- Section 3:  Unlock -->
  <article class="txView__3" ng-show="txInfo.status == txStatus.found">
    <br><br>
    <h1 class="text-center" translate="TX_CancelReplace">Cancel or Replace Transaction</h1>

    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4 class="text-danger text-center"> Unlock your wallet to replace your transaction. (But, please be careful) </h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <wallet-decrypt-cx-drtv></wallet-decrypt-cx-drtv>   }
      </div>
    </section>
  </article>
  <!-- / Section 3:  Unlock -->

  <!-- Send Tx Content -->
 <section class="row" ng-show="wallet!=null" ng-controller='txViewCtrl'>
      <div ng-show="wallet.getChecksumAddressString() == txInfo.from">
      @@if (site === 'mew' ) { @@include( './txSend-content.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './txSend-content.tpl', { "site": "cx"  } ) }

      @@if (site === 'mew' ) { @@include( './txSend-modal.tpl',   { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './txSend-modal.tpl',   { "site": "cx"  } ) }
      </div>
      <div class="col-xs-12 block block--danger" ng-show="wallet.getChecksumAddressString() != txInfo.from">
        <h5>Please unlock the address {{ txInfo.from }}. Only this address can replace a TX.</h5>
      </div>
    </section>
</main>
