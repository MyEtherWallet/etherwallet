<!-- The DAO -->
<article class="tab-pane page-dao active" ng-if="globalService.currentTab==globalService.tabs.dao.id" ng-controller='theDaoCtrl'>

  <!-- TOP: The DAO -->
  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>

        <h2 translate="NAV_WithdrawDAO"> Withdraw DAO </h2>

    </div>
    <div ng-show="!wd">

      <p translate="DAO_Desc"> Use this tab to Withdraw your DAO Tokens for ETH & ETC. If you wish to send DAO, please use the Send Tokens Tab.</p><br />
      @@if (site === 'cx' )  {     <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>     }
      @@if (site === 'mew' ) {     <wallet-decrypt-drtv></wallet-decrypt-drtv>           }

    </div>
  </article>
  <!-- / TOP: The DAO -->


  <!-- BOTTOM: The DAO -->
  <section class="row" ng-show="wallet!=null">
    <hr ng-show="!wd" />

    <!-- Sidebar -->
    <div class="col-sm-4">
      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>

      <div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountInfo"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <!-- TODO - see this: http://ethereum.stackexchange.com/questions/8070/how-can-i-verify-that-my-the-dao-token-balance-is-correct-when-the-goodies-provi -->
        <li><strong> {{token.eBTokenBalance}} </strong> ExtraBalance (<span>tokens</span>)</li>
        <li><strong> {{token.DCbalance}} </strong> DAO (<span translate="DAO_bal1">at block 1,919,999</span>)</li>
        <li><strong>{{token.balance}}</strong> DAO (<span translate="DAO_bal2">current</span>)</li>
        <li><strong>{{etherBalance}}</strong> ETH </li>
        <li><strong>{{etcBalance}}</strong> ETC </li>
      </ul>

      <div translate="sidebar_Equiv"> Equivalent Values: </div>
      <ul class="account-info">
        <li><strong>{{usdBalance}}</strong> USD</li>
        <li><strong>{{eurBalance}}</strong> EUR</li>
        <li><strong>{{btcBalance}}</strong> BTC</li>
      </ul>

      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info">
        <li><strong> ETH: </strong> <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></li>
        <li><strong> ETC: </strong> <a href="https://gastracker.io/addr/{{wallet.getAddressString()}}" target="_blank">https://gastracker.io/addr/ {{wallet.getAddressString()}}</a></li>
      </ul>
    </div>
    <!-- / Sidebar -->



    <!-- Content -->
    <div class="col-sm-8">

      <div>
        <a class="btn btn-default" ng-class="curTab=='withdrawETC' ? 'btn-primary' : ''" ng-click="curTab='withdrawETC'"> <span translate="DAO_TitleETC"> Withdraw DAO for ETC </span></a>

        <a class="btn btn-default" ng-class="curTab=='withdraw' ? 'btn-primary' : ''" ng-click="curTab='withdraw'"> <span translate="DAO_TitleETH"> Withdraw DAO for ETH </span></a>

        <a class="btn btn-default" ng-class="curTab=='withdrawEB' ? 'btn-primary' : ''" ng-click="curTab='withdrawEB'"> <span> Withdraw extraBalance </span></a>
      </div>

      <!-- Withdraw DAO For ETC -->
      <section class="daoGetTokens row" ng-show="curTab=='withdrawETC'">
          <br />
          <h4 class="col-xs-12" translate="DAO_TitleETC"> Withdraw DAO for ETC </h4>
          <!-- Address for ETC to be Delivered -->

        <!--<h4 class="col-xs-12"> There were some irregularities occcuring. Please sit tight for now.  </h4>-->

          <div class="form-group col-xs-10">
            <label translate="DAO_ETC_Label_1"> Where do you want your ETC to be sent to? </label>
            <input class="form-control" type="text" ng-model="daoC.to" ng-class="Validator.isValidAddress(daoC.to) ? 'is-valid' : 'is-invalid'"/>
          </div>

          <div class="col-xs-2 address-identicon-container">
            <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{daoC.to}}" watch-var="daoC.to"></div>
          </div>

          <div class="form-group col-xs-10">
            <label translate="DAO_ETC_Label_2"> The 'White Hat Group' has been working tirelessly to get your ETC back to you. You can say 'thank you' by donating a percentage of your withdrawal, if you choose to. </label>
            <div class="input-group" style="max-width: 150px;">
            <input type="number" min="0" class="form-control" placeholder="10" ng-model="daoC.donation" ng-class="Validator.isPositiveNumber(daoC.donation) ? 'is-valid' : 'is-invalid'"/>
            <span class="input-group-addon">%</span>
          </div>

          <div class="form-group col-xs-112">
            <a class="btn btn-danger" data-toggle="modal" data-target="#withdrawTransactionETC" translate="DAO_TitleETC">
              Withdraw DAO for ETC
            </a>
          </div>
          <div class="form-group col-xs-12" ng-bind-html="withdrawETCTxStatus"></div>

          <br /><br />

          <p> You need a small amount ETC in your account to cover the cost of gas. If you do not have any ETC, <a href="mailto:myetherwallet@gmail.com"> email us </a> the address(es) you are trying to withdraw from & we will send you 0.001 ETC to cover the cost of gas. </p>

      </section>
      <!-- / Withdraw DAO For ETC -->



      <!-- Withdraw DAO For ETH -->
      <section class="daoGetTokens clearfix" ng-show="curTab=='withdraw'">
        <br />
        <h4 translate="DAO_TitleETH"> Withdraw DAO for ETH </h4>
        <br /><br />
        <div class=" text-center">
          <a class="btn btn-danger btn-lg" data-toggle="modal" data-target="#withdrawTransaction" translate="DAO_TitleETH">
            Withdraw DAO for ETH
          </a>
          <p><small translate="DAO_Inst"> Yes. Just push the big red button. It's that easy. </small></p>
          <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
          <div class="form-group col-xs-12" ng-bind-html="withdrawTxStatus"></div>
        </div>
        <br /><br /><br />
        <p translate="DAO_Warning">If you are getting an <em>insufficient balance for gas * ... </em> error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add .01 ETH to this account and try again. </p>
      </section>
      <!-- / Withdraw DAO For ETH -->



     <!-- Extrabalance for ETH -->
      <section class="daoGetTokens clearfix" ng-show="curTab=='withdrawEB'">
        <br />
        <h4> Withdraw extraBalance </h4>
        <ul>
          <li><a href="https://medium.com/curator-multisig-phf-official-channel/extrabalance-withdraw-contract-to-be-funded-on-september-15th-a800b4d746f0#.1qi06xq1c" target="_blank"> Learn More. </a></li>
          <li><a href="https://etherscan.io/address/0x5c40ef6f527f4fba68368774e6130ce6515123f2#readContract" target="_blank"> Check your balance here. </a></li>
        </ul>

        <br /><br />
        <div class=" text-center">
          <a class="btn btn-danger btn-lg" data-toggle="modal" data-target="#withdrawExtraBalance">
            Withdraw Your ExtraBalance DAO
          </a>
          <p><small translate="DAO_Inst"> Yes. Just push the big red button. It's that easy. </small></p>
          <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
          <div class="form-group col-xs-12" ng-bind-html="withdrawTxStatus"></div>
        </div>
        <br /><br /><br />
        <p translate="DAO_Warning">If you are getting an <em>insufficient balance for gas * ... </em> error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add .01 ETH to this account and try again. </p>
      </section>
      <!-- / Extrabalance for ETH -->


    </div>
    <!-- / Content -->


    <!-- Withdraw Modal ETC -->
    <section class="modal fade" id="withdrawTransactionETC" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title text-danger" id="myModalLabel" translate="DAOModal_Title">Just making sure...</h3>
          </div>
          <div class="modal-body">
            <h4>
              <strong translate="DAOModal_1"> You are about to withdraw </strong>
              <span>{{token.DCbalance}}</span>
              <strong translate="DAOModal_2"> DAO Tokens to </strong>
              <span> {{daoC.to}} </span>
              <strong translate="DAOModal_3"> for </strong>
              <span>{{token.DCbalanceEth}} ETC.</span>
            </h4>
            <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="generateAndWithdrawDAOC()" translate="SENDModal_Yes">Yes, I am sure! Withdraw.</button>
          </div>
        </div>
      </div>
    </section>
    <!-- / Withdraw Modal ETC -->


    <!-- Withdraw Modal ETH -->
    <section class="modal fade" id="withdrawTransaction" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title text-danger" id="myModalLabel" translate="DAOModal_Title">Just making sure...</h3>
          </div>
          <div class="modal-body">
            <h4>
              <strong translate="DAOModal_1"> You are about to withdraw </strong>
              <span>{{token.balance}}</span>
              <strong translate="DAOModal_2"> DAO Tokens to </strong>
              <span> {{wallet.getChecksumAddressString()}} </span>
              <strong translate="DAOModal_3"> for </strong>
              <span>{{token.balanceEth}} ETH.</span>
            </h4>
            <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="generateAndSendWithdrawTx(slockitContract,withdrawContract,token.balanceBN,'withdrawModal')" translate="SENDModal_Yes">Yes, I am sure! Withdraw.</button>
          </div>
        </div>
      </div>
    </section>
    <!-- / Withdraw Modal ETH -->
    <!-- Withdraw Modal ExtraBalance -->
    <section class="modal fade" id="withdrawExtraBalance" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title text-danger" id="myModalLabel" translate="DAOModal_Title">Just making sure...</h3>
          </div>
          <div class="modal-body">
            <h4>
              <strong translate="DAOModal_1"> You are about to withdraw </strong>
              <span>{{token.eBTokenBalance}}</span>
              <strong translate="DAOModal_2"> DAO Tokens to </strong>
              <span> {{wallet.getChecksumAddressString()}} </span>
              <strong translate="DAOModal_3"> for </strong>
              <span>{{token.eBEthBalance}} ETH.</span>
            </h4>
            <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="generateAndSendWithdrawTx(eBTokenContract,eBWithdrawContract,token.eBBalanceBN,'withdrawExtraBModal')" translate="SENDModal_Yes">Yes, I am sure! Withdraw.</button>
          </div>
        </div>
      </div>
    </section>
    <!-- / Withdraw Modal ETH -->



  </section>
  <!-- / BOTTOM: The DAO -->

</article>
<!-- / The DAO -->
