<!-- Send Transaction Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.deployContract.id" ng-controller='deployContractCtrl'>

  <h2 translate="NAV_DeployContract"> Deploy Contract </h2>

  <section class="row" >

    <div class="col-xs-12">
      <!-- Data -->
      <div class="form-group">
        <h4> Byte Code: </h4>
        <textarea class="form-control" ng-model="tx.data" rows="8" ng-class="Validator.isValidHex(tx.data)&&tx.data!='' ? 'is-valid' : 'is-invalid'"></textarea>
      </div>

      <!-- Gas -->
      <div class="form-group">
        <h4 translate="TRANS_gas"> Gas: </h4>
        <input class="form-control" type="text" placeholder="300000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
      </div>

      <!-- Wallet Decrypt -->
      <div class="form-group">
        <br />
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
        <br /><br />
      </div>
      <div ng-bind-html="deployContractStatus"></div>
      <!-- Sign TX Button (once wallet has been unlocked) -->
      <div class="form-group">
        <a class="btn btn-info btn-block" ng-click="generateTx()" translate="DEP_signtx" ng-show="wallet!=null"> Sign Transaction </a>
      </div>

      <section class="row" ng-show="showRaw">
        <!-- Raw TX -->
        <div class="form-group col-sm-6">
          <h4 translate="SEND_raw"> Raw Transaction </h4>
          <textarea class="form-control" rows="4" disabled >{{rawTx}}</textarea>
        </div>

        <!-- Singed TX -->
        <div class="form-group col-sm-6">
          <h4 translate="SEND_signed"> Signed Transaction </h4>
          <textarea class="form-control" rows="4" disabled >{{signedTx}}</textarea>
        </div>
      </section>

      <!-- Deploy Contract Button (once tx has been signged) -->
      <div class="form-group" ng-show="showRaw">
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="NAV_DeployContract"> Deploy Contract </a>
      </div>

      <div class="form-group" ng-bind-html="sendTxStatus"></div>



      <!-- Deploy Modal -->
      <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
            </div>

            <div class="modal-body">
              <h4>
                <span>You are about to deploy a contract to the blockchain.</span>
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
      <!--/ Deploy Modal-->


    </div>
  </section>
</article>
<!-- / Send Transaction Page -->
