
<!-- Address -->
<section class="col-sm-6 clearfix">
  <h4 translate="CONTRACT_Title"> Contract Address</h4> <small style="float: right; margin-top: -2rem;"> or </small>
  <input class="form-control" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-class="Validator.isValidAddress(contract.address) ? 'is-valid' : 'is-invalid'" ng-model="contract.address"/>
</section>

<!-- Select Contract Dropdown -->
<section class="col-sm-6 clearfix">
  <h4 translate="CONTRACT_Title_2"> Select Existing Contract </h4>
  <div class="dropdown">
    <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownExistingContracts = !dropdownExistingContracts">
      {{selectedAbi.name}} <small class="mono">{{selectedAbi.address}}</small><i class="caret"></i>
    </a>
    <ul class="dropdown-menu dropdown-menu-left" ng-show="dropdownExistingContracts">
      <li ng-repeat="abi in ajaxReq.abiList track by $index"><a ng-click="selectExistingAbi($index)">{{abi.name}} <small class="mono">{{abi.address}}</small></a></li>
    </ul>
  </div>
</section>

<!-- ABI Textarea -->
<section class="col-xs-12 clearfix">
  <h4 translate="CONTRACT_Json"> ABI / JSON Interface </h4>
  <textarea class="form-control" rows="6" placeholder='[{ "type":"contructor", "inputs": [{ "name":"param1", "type":"uint256", "indexed":true }], "name":"Event" }, { "type":"function", "inputs": [{"name":"a", "type":"uint256"}], "name":"foo", "outputs": [] }] ' ng-class="Validator.isJSON(contract.abi) ? 'is-valid' : 'is-invalid'" ng-model="contract.abi"></textarea>
</section>

<!-- Button -->
<section class="col-xs-12 clearfix">
  <button class="btn btn-primary" ng-click="initContract()" translate="x_Access"> ACCESS </button>
</section>
