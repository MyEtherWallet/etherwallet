<!-- Send Transaction Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.contracts.id" ng-controller='contractsCtrl'>

  <h2>
    <a translate="NAV_InteractContract" ng-class="{'isActive': visibility=='interactView'}" ng-click="setVisibility('interactView')"> Interact with Contract </a>
    or 
    <a translate="NAV_DeployContract"  ng-class="{'isActive': visibility=='deployView'}" ng-click="setVisibility('deployView')"> Deploy Contract </a> </h2>
  </h2>


  <!-- <section ng-switch on="visibility">-->

    <!-- Read / Write Contracts -->
    <section class="row" ng-show="visibility=='interactView'">

      <!-- Input address + JSON Interface -->
      <div class="col-xs-12">
        <span class="form-group">
          <h4> Contract Address</h4>
          <input class="form-control" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" />
          <h4> ABI / JSON Interface </h4>
          <textarea class="form-control" rows="5" placeholder='[{ "type":"contructor", "inputs": [{ "name":"param1", "type":"uint256", "indexed":true }], "name":"Event" }, { "type":"function", "inputs": [{"name":"a", "type":"uint256"}], "name":"foo", "outputs": [] }] '></textarea>
        </span>
        <span class="form-group">
          <button class="btn btn-primary"> ACCESS </button>
        </span>
      </div>
      <!-- / Input address + JSON Interface -->

      <div class="col-xs-12"> <hr /> </div>

      <!-- STEP READ -->
      <div class="col-md-6">

        <!-- Read - Step 1 -->
        <div class="form-group">
          <h4>Read From Contract</h4>
          <div class="btn-group">
            <a class="btn btn-default" ng-click="dropdown = !dropdown">
            Select A Function <span class="caret"></span></a>
            <ul class="dropdown-menu" ng-show="dropdown">
              <li><a>Claim</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <p class="item">
            <label> Recipient <small> uint256 </small> </label>
            <input class="form-control" placeholder="_owner address" />
          </p>
          <div class="output well">
            <p class="output-address">&#8627; <span class="address-identicon-container small"><span id="addressIdenticon" title="Address Indenticon" blockie-address="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"> </span> </span> 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </p>
            <p class="output-address">&#8627; <span class="address-identicon-container small"><span id="addressIdenticon" title="Address Indenticon" blockie-address="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"> </span> </span> 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </p>
            <p class="output-address">&#8627;  12000 </p>
          </div>
        </div>

        <!-- example: UINT 265 -->
        <div class="form-group">
          <p class="item">
            <label> minTokensToCreate <small> uint256 </small> </label>
          </p>
          <div class="output well">
            <p class="output-unit">&#8627;  12000 </p>
          </div>
        </div>

        <!-- example: ADDRESS -->
        <div class="form-group">
          <p class="item">
            <label> recipient <small> address </small> </label>
          </p>
          <div class="output well">
            <p class="output-address">&#8627; <span class="address-identicon-container small"><span id="addressIdenticon" title="Address Indenticon" blockie-address="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"> </span> </span> 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </p>
          </div>
        </div>

        <!-- example: BOOLEAN TRUE -->
        <div class="form-group">
          <p class="item">
            <label> Claimed <small> boolean </small> </label>
          </p>
          <div class="output well">
            <p class="output-boolean-true">&#8627;  YES </p>
          </div>
        </div>

        <!-- example: BOOLEAN FALSE -->
        <div class="form-group">
          <p class="item">
            <label> Claimed <small> boolean </small> </label>
          </p>
          <div class="output well">
            <p class="output-boolean-false">&#8627;  NO </p>
          </div>
        </div>


      </div>
      <!-- / STEP READ -->

      <!-- STEP WRITE -->
      <div class="col-md-6">

        <!-- Write - Step 1 -->
        <span class="form-group">
          <h4>Write To Contract </h4>
          <div class="btn-group">
            <a class="btn btn-default" ng-click="dropdown = !dropdown">
            Select A Function <span class="caret"></span></a>
            <ul class="dropdown-menu" ng-show="dropdown">
              <li><a>Claim</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </span>
        <!-- / Write - Step 1 -->

        <!-- Write - Step 2 -->
        <span class="form-group">
          <!-- address -->
          <div class="item write-address">
            <label> Recipient <small> address </small> </label>
            <div class="row">
              <div class="col-xs-11"><input class="form-control" type="text" placeholder="0x314156..." /></div>
              <div class="col-xs-1"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"> </div> </div></div>
            </div>
          </div>
          <!-- 256 unsigned integer -->
          <p class="item write-unit256">
            <label> Amount <small> uint256 </small> </label>
            <input class="form-control" type="text" placeholder="151"/>
          </p>
          <!-- string -->
          <p class="item write-string">
            <label> Description <small> string </small> </label>
            <input class="form-control" type="text" placeholder="Ohh! Shiny!"/>
          </p>
          <!-- bytes -->
          <p class="item write-bytes">
            <label> Data <small> bytes </small> </label>
            <input class="form-control" type="text" placeholder="0x151bc..."/>
          </p>
          <!-- boolean -->
          <p class="item write-boolean">
            <label> New Provider <small> boolean </small> </label>
            <span class="check"><input type="checkbox" value="1"> Yes </span>
            <span class="check"><input type="checkbox" value="0"> No </span>
          </p>
          <!-- boolean -->
          <p class="item">
            <label> Amount to Send: (this is always here) </label>
            <input class="form-control" placeholder="0" />
          </p>
        </span>

        <span class="form-group">
          <button class="btn btn-primary">EXECUTE</button> <!-- this opens modal -->
        </span>

      </div>
      <!-- / Write - Step 2 -->


      <!-- Step 3 - Modal -->
      <section class="modal fade" id="sendContract" tabindex="-1" role="dialog" aria-labelledby="sendContractLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div ng-show="!wd">
                @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
                @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
              </div>
              <div>
                <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
                <h4>You are about to execute a function on contract 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8.</h4>
                <!-- Gas -->
                <div class="form-group">
                  <label translate="TRANS_gas"> Gas: </label>
                  <input class="form-control" type="text" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
                </div>
                <!-- Data -->
                <div class="form-group">
                  <label translate="TRANS_data"> Data: </label>
                  <input readonly class="form-control" type="text" ng-model="tx.data" />
                </div>
                <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
              </div>
            </div>
            <div class="modal-footer text-center">
              <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
              <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Make transaction.</button>
            </div>
          </div>
        </div>
      </section>
      <!-- / Step 3 - Modal -->
    </section>






    <!-- Deploy Contract -->
    <section class="row" ng-show="visibility=='deployView'">
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

      <!-- TXs -->
      <section class="row" ng-show="showRaw">
        <!-- Raw TX -->
        <div class="form-group col-sm-6">
          <h4 translate="SEND_raw"> Raw Transaction </h4>
          <textarea class="form-control" rows="4" readonly >{{rawTx}}</textarea>
        </div>
        <!-- Singed TX -->
        <div class="form-group col-sm-6">
          <h4 translate="SEND_signed"> Signed Transaction </h4>
          <textarea class="form-control" rows="4" readonly >{{signedTx}}</textarea>
        </div>
      </section>

      <!-- Deploy Contract Button (once tx has been signed) -->
      <div class="form-group" ng-show="showRaw">
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="NAV_DeployContract"> Deploy Contract </a>
      </div>

      <!-- Status -->
      <div class="form-group" ng-bind-html="sendTxStatus"></div>

      <!-- Deploy Modal -->
      <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
            </div>

            <div class="modal-body larger">
            <p>
              You are about to <strong>deploy a contract</strong> on the <strong>{{ajaxReq.type}}</strong> chain, which
              <strong class="text-danger" ng-show="ajaxReq.eip155==false"> susceptible to replay attacks.</strong>
              <strong ng-show="ajaxReq.eip155==true"> not susceptible to replay attacks.</strong>
            </p>
            <p> The node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>. </p>
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
  <!-- / Deploy Contract -->
</article>
<!-- / Send Transaction Page -->
