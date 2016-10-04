<!-- Tokens Panel -->
<article class="tab-pane page-tokens active" ng-if="globalService.currentTab==globalService.tabs.tokens.id"  ng-controller='tokenCtrl'>

  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>

        <h2 translate="NAV_SendTokens"> Send Tokens </h2>

    </div>
    <div ng-show="!wd">

        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }

    </div>
  </article>


  <section class="row" ng-show="wallet!=null">
    <hr ng-show="!wd" />



    <!-- Sidebar -->
    <div class="col-sm-4">

      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>

      <div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountAddr"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <li><span class="mono wrap">{{etherBalance}}</span> Ether </li>
        <li><span class="mono wrap">{{etcBalance}}</span> ETC</li>
      </ul>

      <div translate="sidebar_TokenBal"> Token Balances: </div>
      <table class="account-info">
          <tr ng-repeat="token in tokenObjs track by $index" ng-show="token.balance!=0 && token.balance!='loading' || token.type!=='default' || tokenVisibility=='shown'">
            <td class="mono wrap">
              <img src="images/icon-remove.svg" class="token-remove" title="Remove Token" ng-click="removeTokenFromLocal(token.symbol)" ng-show="token.type!=='default'"/>
              {{token.getBalance()}}
            </td>
            <td> {{token.getSymbol()}} </td>
          </tr>
          <tr>
            <td colspan="2">
              <p>
                <a ng-click="tokenVisibility='shown'" ng-show="tokenVisibility=='hidden'"> Show All Tokens </a>
                <a ng-click="tokenVisibility='hidden'" ng-show="tokenVisibility=='shown'">  Hide Tokens </a>
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
            <small ng-bind-html="validateTokenBalances"></small>
            </td>
          </tr>
      </table>

      <div translate="sidebar_Equiv"> Equivalent Values: </div>
      <ul class="account-info">
        <li><span class="mono wrap">{{usdBalance}}</span> USD</li>
        <li><span class="mono wrap">{{eurBalance}}</span> EUR</li>
        <li><span class="mono wrap">{{btcBalance}}</span> BTC</li>
      </ul>

      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info">
        <li><a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></li>
      </ul>

      <div class="well">
        <p translate="sidebar_donation"> MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?</p>
        <a class="btn btn-primary btn-block" ng-click="onDonateClick()" translate="sidebar_donate">DONATE</a>
        <div class="text-success text-center marg-v-sm" ng-show="tx.donate" translate="sidebar_thanks"> THANK YOU!!! </div>
      </div>

    </div>
    <!-- / Sidebar -->



    <!-- Content -->
    <div class="col-sm-8">

      <section class="daoGetTokens clearfix">

        <h4 translate="NAV_SendTokens">Send Tokens</h4>

        <div class="form-group col-xs-10">
          <label translate="SEND_addr"> To Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tokenTx.to" ng-class="Validator.isValidAddress(tokenTx.to) ? 'is-valid' : 'is-invalid'"/>
          <div ng-bind-html="validateAddressStatus"></div>
        </div>

        <div class="col-xs-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div>
        </div>

        <div class="form-group col-xs-12">

          <label translate="SEND_amount"> Amount to Send: </label>
          <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tokenTx.value" ng-class="Validator.isPositiveNumber(tokenTx.value) ? 'is-valid' : 'is-invalid'"/>

          <div class="radio">
            <label ng-repeat="token in tokenObjs track by $index" ng-show="token.balance!=0 && token.balance!='loading' || tokenVisibility=='shown' ">
              <input type="radio" name="currencyRadio" value="{{$index}}" ng-model="tokenTx.id"/>
              {{token.getSymbol()}}
            </label>
            <label>
              <input type="radio" name="currencyRadio" value="99" ng-model="tokenTx.id"/>
              <span translate="SEND_custom">Custom</span>
            </label>
          </div>

          <div class="custom-token-fields well" ng-show="tokenTx.id==99">
            <p translate="HELP_7_Desc_0">[Check out Ethplorer.io](https://ethplorer.io/) if you need help finding symbol / decimal.</p>
            <div class="form-group">
              <label translate="TOKEN_Addr"> Address: </label>
              <input class="form-control" type="text" ng-model="localToken.contractAdd"/>
            </div>
            <div class="form-group">
              <label translate="TOKEN_Symbol"> Token Symbol: </label>
              <input class="form-control" type="text" ng-model="localToken.symbol"/>
            </div>
            <div class="form-group">
              <label translate="TOKEN_Dec"> Decimals: </label>
              <input class="form-control" type="text" ng-model="localToken.decimals"/>
            </div>
            <div class="form-group">
              <div class="btn btn-info" ng-click="saveTokenToLocal()" translate="x_Save"> Save </div>
            </div>
            <div ng-bind-html="validateLocalToken"></div>
          </div>

          <div class="form-group">
            <label class="SEND_gas"> Gas: </label>
            <input class="form-control" type="text" ng-model="tokenTx.gasLimit" ng-class="Validator.isPositiveNumber(tokenTx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
          </div>

        </div>

        <div class="form-group col-xs-12">
          <a class="btn btn-info btn-block" ng-click="generateTokenTx()" translate="SEND_generate"> Generate Transaction </a>
        </div>

        <div class="col-xs-12">
           <div ng-bind-html="validateTxStatus"></div>
        </div>

        <div class="form-group col-xs-12" ng-show="showRaw">
          <label translate="SEND_raw"> Raw Transaction </label>
          <textarea class="form-control" rows="4" disabled >{{rawTx}}</textarea>
          <label translate="SEND_signed"> Signed Transaction </label>
          <textarea class="form-control" rows="4" disabled >{{signedTx}}</textarea>
        </div>

        <div class="form-group col-xs-12" ng-show="showRaw">
          <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="SEND_trans">Send Transaction</a>
        </div>

        <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>

      </section>

    </div>
    <!-- / Content -->



    <!-- Send Modal -->
    <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
          </div>
          <div class="modal-body">
            <h4>
              <span translate="SENDModal_Content_1">You are about to send</span>
              <strong id="confirmAmount" class="text-primary"> {{tokenTx.value}} </strong>
              <strong id="confirmCurrancy" class="text-primary"> {{tokenObjs[tokenTx.id].getSymbol()}} </strong>
              <span translate="SENDModal_Content_2">to address</span>
              <strong id="confirmAddress" class="text-primary"> {{tokenTx.to}} </strong>
            </h4>
            <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
            <em><p translate="SENDModal_Content_4"> NOTE: If you encounter an error, you most likely need to add ETH to your account to cover the gas cost of sending tokens. Gas is paid in ETH. </p></em>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Make transaction.</button>
          </div>
        </div>
      </div>
    </div>
    <!-- / Send Modal -->

  </section>

</article>
<!-- / Tokens Panel -->
