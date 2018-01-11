<!-- STEP READ/WRITE -->
<section class="col-xs-12 clearfix">

  <!-- Contract Info CONTRACT_Interact_CTA -->
  <span class="form-group">
    <h4 translate="CONTRACT_Interact_Title">
      Read / Write Contract
    </h4>
    <h5> {{ contract.address }} </h5>

    <div class="form-group well"
         ng-show="contract.address=='0x0101010101010101010101010101010101010101' || contract.address=='0x1010101010101010101010101010101010101010'">
      <p class="CONTRACT_Helper_1">
        Please change the address to your own Multisig Contract Address.
      </p>
    </div>

    <div class="form-group well" ng-show="contract.address=='0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf'">
      <ol>
        <li translate="EOS_01">
          Generate EOS Key-pair
        </li>
        <li>
          <span translate="EOS_02">
            Register / Map your EOS Key
          </span>
          <ul>
            <li translate="EOS_03">
              Select `register`
            </li>
            <li translate="EOS_04">
              Enter your **EOS Public Key** <--- CAREFUL! EOS PUBLIC KEY!
            </li>
            <li>
            Unlock wallet</li>
            <li>
              <span translate="SEND_amount"> Amount to Send </span> :
              <code>0</code>
              &middot;
              <span translate="TRANS_gas">Gas Limit</span>:
              at least <code>90000</code>
            </li>
          </ul>
        </li>
        <li>
          <span translate="EOS_05">
            Fund EOS Contract on Send Page
          </span>
          <ul>
            <li translate="EOS_06">
              Go to Send Ether & Tokens Page
            </li>
            <li translate="EOS_07">
              Unlock same wallet you are unlocking here.
            </li>
            <li translate="EOS_08">
              Send Amount you want to Contribute to `0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf`
            </li>
            <li>
              <span translate="TRANS_gas">Gas Limit</span>:
              at least <code>90000</code>
            </li>
          </ul>
        </li>
        <li>
          <span translate="EOS_09">
            Claim EOS Tokens
          </span>
          <ul>
            <li translate="EOS_10">
              Select `claimAll`.
            </li>
            <li translate="ADD_Label_6">
              Unlock wallet
            </li>
            <li>
              <span translate="SEND_amount">Amount to Send</span>:
              <code>0</code> &middot;
              <span translate="TRANS_gas">Gas Limit</span>:
              at least <code>90000</code>
            </li>
          </ul>
        </li>
    </div>

    <div class="btn-group">
      <a class="btn btn-default" ng-click="dropdownContracts = !dropdownContracts">
        {{contract.selectedFunc==null ? "Select a function" : contract.selectedFunc.name}}
        <i class="caret"></i>
      </a>
      <ul class="dropdown-menu" ng-show="dropdownContracts">
        <li ng-repeat="func in contract.functions track by $index">
          <a ng-click="selectFunc($index)">
            {{func.name}}
          </a>
        </li>
      </ul>
    </div>
  </span>

  <!-- Write -->
  <span class="form-group" ng-show="contract.selectedFunc!=null">
    <div ng-repeat="input in contract.functions[contract.selectedFunc.index].inputs track by $index">
      <div ng-switch on="input.type">

        <div class="item write-address" ng-switch-when="address">
          <label>
            {{input.name}}
            <small>{{input.type}}</small>
          </label>
          <div class="row">
            <div class="col-xs-11">
              <input class="form-control"
                     type="text"
                     placeholder="0x314156..."
                     ng-model="input.value"
                     ng-class="Validator.isValidAddress(input.value) ? 'is-valid' : 'is-invalid'"/>
            </div>
            <div class="col-xs-1">
              <div class="addressIdenticon med"
                   title="Address Indenticon"
                   blockie-address="{{input.value}}"
                   watch-var="input.value">
              </div>
            </div>
          </div>
        </div>

        <p class="item write-unit256" ng-switch-when="uint256">
          <label>
            {{input.name}} <small> {{input.type}} </small>
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="151"
                 ng-model="input.value"
                 ng-class="Validator.isPositiveNumber(input.value) ? 'is-valid' : 'is-invalid'" />
        </p>

        <p class="item write-string" ng-switch-when="string">
          <label>
            {{input.name}} <small> {{input.type}} </small>
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="Ohh! Shiny!"
                 ng-model="input.value"
                 ng-class="input.value!='' ? 'is-valid' : 'is-invalid'" />
        </p>

        <p class="item write-bytes" ng-switch-when="bytes">
          <label>
            {{input.name}} <small> {{input.type}} </small>
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="0x151bc..."
                 ng-model="input.value"
                 ng-class="Validator.isValidHex(input.value) ? 'is-valid' : 'is-invalid'" />
        </p>

        <p class="item write-boolean" ng-switch-when="bool">
          <label>
            {{input.name}} <small> {{input.type}} </small>
          </label>
          <span class="radio">
            <label>
              <input ng-model="input.value" type="radio" name="optradio-{{input.name}}" ng-value="true">
                True
            </label>
          </span>
          <span class="radio">
            <label>
              <input ng-model="input.value" type="radio" name="optradio-{{input.name}}" ng-value="false">
                False
            </label>
          </span>
        </p>
        <p class="item" ng-switch-default>
          <label> {{input.name}} <small> {{input.type}} </small> </label>
          <input class="form-control" type="text" placeholder="" ng-model="input.value" ng-class="input.value!='' ? 'is-valid' : 'is-invalid'"/>
        </p>

      </div>
    </div>
  </span>
  <!-- / Write -->


  <!-- Output -->
  <span class="form-group output" ng-show="contract.functions[contract.selectedFunc.index].constant">
    <div ng-repeat="output in contract.functions[contract.selectedFunc.index].outputs track by $index" class="form-group">
      <div ng-switch on="output.type">

        <!-- Address -->
        <div class="item write-address" ng-switch-when="address">
          <label> &#8627; {{output.name}} <small> {{output.type}} </small> </label>
          <div class="row">
            <div class="col-xs-11"><input class="form-control" type="text" placeholder="0x314156..." ng-model="output.value" readonly/></div>
            <div class="col-xs-1"><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{output.value}}" watch-var="output.value" > </div> </div>
          </div>
        </div>

        <!-- unit256 -->
        <p class="item write-unit256" ng-switch-when="uint256">
          <label>
            &#8627; {{output.name}}
            <small> {{output.type}} </small>
          </label>
          <input class="form-control" type="text" placeholder="151" ng-model="output.value" readonly/>
        </p>

        <!-- Address -->
        <p class="item write-string" ng-switch-when="string">
          <label>
            &#8627; {{output.name}}
            <small> {{output.type}} </small>
          </label>
          <input class="form-control" type="text" placeholder="Ohh! Shiny!" ng-model="output.value" readonly/>
        </p>

        <!-- Bytes -->
        <p class="item write-bytes" ng-switch-when="bytes">
          <label>
            &#8627; {{output.name}}
            <small> {{output.type}} </small>
          </label>
          <input class="form-control" type="text" placeholder="0x151bc..." ng-model="output.value" readonly/>
        </p>

        <!-- Boolean -->
        <p class="item write-boolean" ng-switch-when="bool">
          <label>
            &#8627; {{output.name}}
            <small> {{output.type}} </small>
          </label>
          <span ng-show="output.value==true" class="output-boolean-true"> <img src="images/icon-check-green.svg" width="22px" height="22px" /> TRUE </span>
          <span ng-show="output.value==false" class="output-boolean-false"> <img src="images/icon-x.svg" width="22px" height="22px" />  FALSE </span>
        </p>

        <!--  -->
        <p class="item" ng-switch-default>
          <label>
            &#8627; {{output.name}}
            <small> {{output.type}} </small>
          </label>
          <input class="form-control" type="text" placeholder="" ng-model="output.value" readonly/>
        </p>
      </div>
    </div>
  </span>
  <!-- / Output -->


</section>
