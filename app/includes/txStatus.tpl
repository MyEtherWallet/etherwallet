<main class="tab-pane block--container active" ng-if="globalService.currentTab==globalService.tabs.txStatus.id" ng-controller='txStatusCtrl' role="main" ng-cloak>

  <!-- Section 1 -->
  <section class="block txstatus__1">
    <article class="row">
      <section class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
        <h1 translate="NAV_CheckTxStatus">
          Check TX Status
        </h1>
        <p translate="tx_Summary"></p>
      </section>

      <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <input
             class="form-control"
             type="text"
             placeholder="0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c"
             ng-model="txInfo.hash"
             ng-keyup="$event.keyCode == 13 && checkTxStatus()"
             aria-label="{{'x_TxHash' | translate}}" ng-class="Validator.isValidTxHash(txInfo.hash) ? 'is-valid' : 'is-invalid'"/>
          <button tabindex="0"
                  role="button"
                  class="btn btn-primary"
                  ng-click="checkTxStatus()"
                  translate="NAV_CheckTxStatus"> Check TX Status </button>
      </section>
    </article>
  </section>
  <!-- / Section 1 -->


  <!-- Section 2: Current State -->
  <section class="block txstatus__2" ng-show="txInfo.status==txStatus.mined || txInfo.status==txStatus.notFound || txInfo.status==txStatus.found">

    <div class="cont-md" ng-show="txInfo.status == txStatus.mined">
      <h3 class="text-success" translate="tx_FoundOnChain"> Transaction Found </h3>
      <h5> <a href="https://etherscan.io/tx/{{ tx.hash }}" target="_blank" rel="noopener noreferrer"> {{ tx.hash }} </a> </h5>
      <p><strong translate="tx_FoundOnChain_1"></strong></p>
      <ul>
        <li translate="tx_FoundOnChain_2"></li>
        <li translate="tx_FoundOnChain_3"></li>
      </ul>
    </div>

    <div class="cont-md" ng-show="txInfo.status == txStatus.notFound">
      <h3 class="text-danger" translate="tx_notFound">
        Transaction Not Found
      </h3>
      <p>
        <strong translate="tx_notFound_1"></strong>
      </p>
      <ul>
        <li translate="tx_notFound_2"></li>
        <li translate="tx_notFound_3"></li>
        <li translate="tx_notFound_4"></li>
      </ul>
    </div>

    <div class="cont-md" ng-show="txInfo.status == txStatus.found">
      <h3 class="text-warning" translate="tx_foundInPending">
        Pending Transaction Found
      </h3>
      <ul>
        <li translate="tx_foundInPending_1"></li>
        <li translate="tx_foundInPending_2"></li>
        <li translate="tx_foundInPending_3"></li>
      </ul>
    </div>

    <div ng-show="txInfo.status == txStatus.found || txInfo.status == txStatus.mined">
      <h4 translate="tx_Details" class="cont-md">
        Transaction Details
      </h4>
      <br />
      <table class="table table-striped txstatus__2 cont-md"> <!-- ng-show="tx.status=='foundOnChain' || foundInPending'"-->
        <tbody>
          <tr>
            <td translate="x_TxHash">
              TX Hash
            </td>
            <td>
              <a href="{{ txInfo.txExplorerUrl }}" target="_blank" rel="noopener noreferrer">
                {{ txInfo.hash }}
              </a>
            </td>
          </tr>
          <tr>
            <td translate="OFFLINE_Step1_Label_1">
              From Address
            </td>
            <td>
              <a href="{{ txInfo.fromExplorerUrl }}" target="_blank" rel="noopener noreferrer">
                {{ txInfo.from }}
              </a>
            </td>
          </tr>
          <tr>
            <td translate="OFFLINE_Step2_Label_1">
              To Address
            </td>
            <td>
              <a href="{{ txInfo.toExplorerUrl }}" target="_blank" rel="noopener noreferrer">
                {{ txInfo.to }}
              </a>
            </td>
          </tr>
          <tr>
            <td translate="SEND_amount_short">
              Amount
            </td>
            <td>
              {{ txInfo.valueStr }}
            </td>
          </tr>
          <tr>
            <td>
              <a class="account-help-icon"
                 href="https://kb.myetherwallet.com/transactions/what-is-nonce.html"
                 target="_blank"
                 rel="noopener noreferrer">
                   <img src="images/icon-help.svg" class="help-icon" />
                  <p class="account-help-text" translate="NONCE_Desc"></p>
              </a>
              <span translate="OFFLINE_Step2_Label_5">
                Nonce
              </span>
            </td>
            <td>
              {{ txInfo.nonce }}
            </td>
          </tr>
          <tr>
            <td>
              <a class="account-help-icon"
                 href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
                 target="_blank"
                 rel="noopener noreferrer">
                    <img src="images/icon-help.svg" class="help-icon" />
                    <p class="account-help-text" translate="GAS_LIMIT_Desc"></p>
              </a>
              <span translate="OFFLINE_Step2_Label_4">
                Gas Limit
              </span>
            </td>
            <td>
              {{ txInfo.gasLimit }}
            </td>
          </tr>
          <tr>
            <td>
              <a class="account-help-icon"
                 href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
                 target="_blank"
                 rel="noopener noreferrer">
                   <img src="images/icon-help.svg" class="help-icon" />
                   <p class="account-help-text" translate="GAS_PRICE_Desc"></p>
              </a>
              <span translate="OFFLINE_Step2_Label_3">
                Gas Price
              </span>
            </td>
            <td>
              {{ txInfo.gasPrice.gwei }} GWEI
              <small>
                ({{ txInfo.gasPrice.wei }} WEI)
              </small>
            </td>
          </tr>
        <!--
          <tr>
            <td>
              <a class="account-help-icon"
                 href="https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html"
                 target="_blank"
                 rel="noopener noreferrer">
                   <img src="images/icon-help.svg" class="help-icon" />
                   <p class="account-help-text" translate="TXFEE_Desc"></p>
              </a>
              <span translate="x_TXFee">
                TX Fee
              </span>
            </td>
            <td>
              ({{ txFee.eth }} ETH)
              <small>({{ txFee.usd }} USD)</small>
            </td>
          </tr>
        -->
          <tr>
            <td translate="OFFLINE_Step2_Label_6">
              Data
            </td>
            <td>
              {{ txInfo.data }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <!-- / Section 2: Current State -->


  <!-- Section 3:  Unlock -->
  <section class="txstatus__3" ng-show="txInfo.status == txStatus.found">

    <br><br>

    <h1 class="text-center" translate="x_CancelReplaceTx">
      Cancel or Replace Transaction
    </h1>

    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4 class="text-danger text-center">
          Unlock your wallet to replace your transaction. (But, please be careful)
        </h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </section>
  <!-- / Section 3:  Unlock -->

  <!-- Send Tx Content -->
 <section class="row" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
    <div ng-show="wallet.getChecksumAddressString() == txInfo.from">
      @@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-content.tpl', { "site": "cx"  } ) }

      @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl',   { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-modal.tpl',   { "site": "cx"  } ) }
    </div>
    <div class="col-xs-12 block block--danger" ng-show="wallet.getChecksumAddressString()!=txInfo.from">
      <h5 translate="ENS_WrongAddress_2">
        Please unlock the wallet with address
      </h5>
      {{ txInfo.from }}
    </div>
  </section>
