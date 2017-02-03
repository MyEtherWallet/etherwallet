<!-- Send Transaction Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.contracts.id" ng-controller='contractsCtrl'  ng-cloak>

  <h2>
    <a translate="NAV_InteractContract" ng-class="{'isActive': visibility=='interactView'}" ng-click="setVisibility('interactView')"> Interact with Contract </a>
    or
    <a translate="NAV_DeployContract"  ng-class="{'isActive': visibility=='deployView'}" ng-click="setVisibility('deployView')"> Deploy Contract </a> </h2>
  </h2>

  <!-- Read / Write Contracts -->
  <section class="row" ng-show="visibility=='interactView'">

    <!-- Input address + JSON Interface -->
    <div class="col-xs-12">
      <span class="form-group">
        <h4> Contract Address</h4>
        <input class="form-control" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-class="Validator.isValidAddress(contract.address) ? 'is-valid' : 'is-invalid'" ng-model="contract.address"/>
        <h4> ABI / JSON Interface </h4>
        <textarea class="form-control" rows="5" placeholder='[{ "type":"contructor", "inputs": [{ "name":"param1", "type":"uint256", "indexed":true }], "name":"Event" }, { "type":"function", "inputs": [{"name":"a", "type":"uint256"}], "name":"foo", "outputs": [] }] ' ng-class="Validator.isJSON(contract.abi) ? 'is-valid' : 'is-invalid'" ng-model="contract.abi"></textarea>
      </span>
      <span class="form-group">
        <button class="btn btn-primary" ng-click="initContract()"> ACCESS </button>
      </span>
      <div ng-bind-html="accessContractStatus"></div>
    </div>
    <!-- / Input address + JSON Interface -->

    <div class="col-xs-12"> <hr /> </div>

    <div ng-show="showReadWrite">

      <!-- STEP READ/WRITE -->
      <div class="col-md-12">

        <!-- Contract Info -->
        <span class="form-group">
          <h4>Read / Write Contract </h4>
          <div class="btn-group">
            <a class="btn btn-default" ng-click="dropdownContracts = !dropdownContracts">
            {{contract.selectedFunc==null ? "Select a function" : contract.selectedFunc.name}} <span class="caret"></span></a>
            <ul class="dropdown-menu" ng-show="dropdownContracts">
              <li ng-repeat="func in contract.functions track by $index"><a ng-click="selectFunc($index)">{{func.name}}</a></li>
            </ul>
          </div>
        </span>
        <!-- / Contract Info -->

        <!-- Write -->
        <span class="form-group" ng-show="contract.selectedFunc!=null">
          <div ng-repeat="input in contract.functions[contract.selectedFunc.index].inputs track by $index">
            <div ng-switch on="input.type">
                <div class="item write-address" ng-switch-when="address">
                <label> {{input.name}} <small> {{input.type}} </small> </label>
                <div class="row">
                  <div class="col-xs-11"><input class="form-control" type="text" placeholder="0x314156..." ng-model="input.value" ng-class="Validator.isValidAddress(input.value) ? 'is-valid' : 'is-invalid'"/></div>
                  <div class="col-xs-1"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{input.value}}" watch-var="input.value" > </div> </div></div>
                </div>
                </div>
                <p class="item write-unit256" ng-switch-when="uint256">
                  <label> {{input.name}} <small> {{input.type}} </small> </label>
                  <input class="form-control" type="text" placeholder="151" ng-model="input.value" ng-class="Validator.isPositiveNumber(input.value) ? 'is-valid' : 'is-invalid'"/>
                </p>
                <p class="item write-string" ng-switch-when="string">
                  <label> {{input.name}} <small> {{input.type}} </small> </label>
                  <input class="form-control" type="text" placeholder="Ohh! Shiny!" ng-model="input.value" ng-class="input.value!='' ? 'is-valid' : 'is-invalid'"/>
                </p>
                <p class="item write-bytes" ng-switch-when="bytes">
                  <label> {{input.name}} <small> {{input.type}} </small> </label>
                  <input class="form-control" type="text" placeholder="0x151bc..." ng-model="input.value" ng-class="Validator.isValidHex(input.value) ? 'is-valid' : 'is-invalid'"/>
                </p>
                <p class="item write-boolean" ng-switch-when="bool">
                  <label> {{input.name}} <small> {{input.type}} </small> </label>
                  <span class="radio"><label><input ng-model="input.value" type="radio" name="optradio" ng-value="true">True</label></span>
                  <span class="radio"><label><input ng-model="input.value" type="radio" name="optradio" ng-value="false">False</label></span>
                </p>
                <p class="item" ng-switch-default>
                  <label> {{input.name}} <small> {{input.type}} </small> </label>
                  <input class="form-control" type="text" placeholder="" ng-model="input.value" ng-class="input.value!='' ? 'is-valid' : 'is-invalid'"/>
                </p>
            </div>
          </div>
        </span>
        <!-- / Write -->

        </br>

        <!-- Output -->
        <span class="form-group output well" ng-show="contract.functions[contract.selectedFunc.index].constant">
          <div ng-repeat="output in contract.functions[contract.selectedFunc.index].outputs track by $index" class="form-group">
            <div ng-switch on="output.type">
              <!-- Address -->
              <div class="item write-address" ng-switch-when="address">
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <div class="row">
                  <div class="col-xs-11"><input class="form-control" type="text" placeholder="0x314156..." ng-model="output.value" readonly/></div>
                  <div class="col-xs-1"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{output.value}}" watch-var="output.value" > </div> </div></div>
                </div>
              </div>
              <!-- unit256 -->
              <p class="item write-unit256" ng-switch-when="uint256">
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <input class="form-control" type="text" placeholder="151" ng-model="output.value" readonly/>
              </p>
              <!-- Address -->
              <p class="item write-string" ng-switch-when="string">
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <input class="form-control" type="text" placeholder="Ohh! Shiny!" ng-model="output.value" readonly/>
              </p>
              <!-- Bytes -->
              <p class="item write-bytes" ng-switch-when="bytes">
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <input class="form-control" type="text" placeholder="0x151bc..." ng-model="output.value" readonly/>
              </p>
              <!-- Boolean -->
              <p class="item write-boolean" ng-switch-when="bool">
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <span ng-show="output.value==true" class="output-boolean-true"> <img src="images/icon-check.svg" width="16px" height="16px" /> TRUE </span>
                <span ng-show="output.value==false" class="output-boolean-false"> <img src="images/icon-x.svg" width="16px" height="16px" />  FALSE </span>
              </p>
              <!--  -->
              <p class="item" ng-switch-default>
                <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
                <input class="form-control" type="text" placeholder="" ng-model="output.value" readonly/>
              </p>
            </div>
          </div>
        </span>
        <!-- / Output -->

      </div>
      <!-- STEP READ/WRITE -->
    </div>
    <!-- Read / Write -->

    <!-- Modal -->
    <section class="modal fade" id="sendContract" tabindex="-1" role="dialog" aria-labelledby="sendContractLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <div ng-show="wd">
              <div class="larger">
                <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
                <p>
                  You are about to <strong>execute a function on contract</strong> on <strong> {{tx.to}} </strong> on the  <strong> {{ajaxReq.type}}</strong> chain, which
                  <strong class="text-danger" ng-show="ajaxReq.eip155==false"> susceptible to replay attacks.</strong>
                  <strong ng-show="ajaxReq.eip155==true"> not susceptible to replay attacks.</strong>
                </p>
                <p> The node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>. </p>
              </div>
              <!-- Gas -->
              <div class="form-group">
                <label translate="SEND_amount"> Value: </label>
                <p><em> In most cases you should leave this as <code>0</code>.</em></p>
                <input class="form-control" type="text" placeholder="10" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
              </div>
              <div class="form-group">
                <label translate="TRANS_gas"> Gas: </label>
                <input class="form-control" type="text" placeholder="300000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
              </div>
              <div class="form-group ">
                <a class="btn btn-info btn-block" ng-click="generateTx()" translate="SEND_generate"> GENERATE TRANSACTION </a>
                <div ng-bind-html="deployContractStatus"></div>
              </div>
              <!-- Data -->
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
            </div>
            <div class="modal-footer text-center" ng-show="showRaw">
              <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
              <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Make transaction.</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / Modal -->

  </section>
  <!-- / Read / Write Contracts -->



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
      <div ng-bind-html="deployContractStatus"></div>

      <!-- Sign TX Button (once wallet has been unlocked) -->
      <div class="form-group">
        <a class="btn btn-info btn-block" ng-click="generateTx()" translate="DEP_signtx" ng-show="wd"> Sign Transaction </a>
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
  <!--wallet decrypt-->
  <div class="form-group" ng-show="(!wd && visibility=='deployView') || (!wd && visibility=='interactView' && contract.selectedFunc && !contract.functions[contract.selectedFunc.index].constant)">
      @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
  </div>

<article ng-show="contract.selectedFunc!=null">
  <span class="form-group" class="form-group">
    <button class="btn btn-primary" ng-click="readFromContract()" ng-show="contract.functions[contract.selectedFunc.index].constant && showRead">READ</button>
    <button class="btn btn-primary" ng-show="!contract.functions[contract.selectedFunc.index].constant" ng-click="generateContractTx()">WRITE</button>
  </span>
  </br>
  <div class="form-group" ng-bind-html="sendTxStatus" ng-show="!contract.functions[contract.selectedFunc.index].constant"></div>
</article>

</article>
<!-- / Send Transaction Page -->
