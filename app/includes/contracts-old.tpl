<!-- Contracts -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.contracts.id">
  <h2> Contracts </h2>

  <wallet-decrypt-drtv></wallet-decrypt-drtv>

  <section class="row" ng-show="wallet!=null" ng-controller='sendTxCtrl'>

    <div class="col-md-12"> <hr /> </div>

    <!-- STEP 1 -->
    <div class="col-md-12">
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
    <!-- / STEP 1 -->

    <div class="col-md-12"> <hr /> </div>


    <!-- STEP READ -->
    <div class="col-md-6">

      <!-- Read - Step 1 -->
      <span class="form-group">
        <h4> 3. Read From Contract</h4>
      </span>
      <span class="form-group read-function">
        <h5> Function Name (ie: User Info or Proposals) </h5>
        <h6> Function Description (ie: user - adddress or 256 bits unsigned integer) </h6>
        <input class="form-control" />
        <span class="output">&#8627;  0x29384927349283 (output of the above) </span>
      </span>
      <!-- / Read - Step 1 -->

      <!-- Read - Step 2 -->
      <span class="form-group">
        <!-- example: integer / string / bytes? /  -->
         <p class="item">
          <span class="label">Centstotal:</span>
          <span class="output"> 123 </span>
         </p>
         <!-- example: address -->
         <p class="item">
          <span class="label">Recipient:</span>
          <span class="output">
            <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>
            0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8
          </span>
        </p>
          <!-- example: boolean YES -->
         <p class="item">
          <span class="label">Claimed:</span>
          <span class="output boolean-yes"> YES </span>
         </p>
          <!-- example: boolean NO -->
         <p class="item">
          <span class="label">Open:</span>
          <span class="output boolean-no"> NO </span>
         </p>
      </span>
      <!--/ Read - Step 2 -->

    </div>
    <!-- / STEP READ -->



    <!-- STEP WRITE -->
    <div class="col-md-6">

      <!-- Write - Step 1 -->
      <span class="form-group">
        <h4> 3. Write To Contract </h4>
        <div class="write-function" ng-controller="DropdownCtrl">
          <div class="btn-group" uib-dropdown keyboard-nav>
            <button id="simple-btn-keyboard-nav" type="button" class="btn btn-default" uib-dropdown-toggle>
            Select A Function <span class="caret"></span></button>
            <ul class="dropdown-menu" uib-dropdown-menu>
              <li><a href="#">Claim</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>
      </span>
      <!-- / Write - Step 1 -->


      <!-- Write - Step 2 -->
      <hr />
      <span class="form-group">
        <!-- address -->
        <p class="item">
          <label> Recipient — <small> address </small> </label>
          <input class="form-control" type="text" placeholder="0x314156..."/>
        </p>
        <!-- 256 unsigned integer -->
        <p class="item">
          <label> Amount — <small> 256 unsigned integer </small> </label>
          <input class="form-control" type="text" placeholder="151"/>
        </p>
        <!-- string -->
        <p class="item">
          <label> Description — <small> string </small> </label>
          <input class="form-control" type="text" placeholder="Ohh! Shiny!"/>
        </p>
        <!-- bytes -->
        <p class="item">
          <label> Data — <small> bytes </small> </label>
          <input class="form-control" type="text" placeholder="0x151bc..."/>
        </p>
        <!-- boolean -->
        <p class="item">
          <label> New Provider — <small> boolean </small> </label>
          <label class="check"><input type="checkbox" value=""> Yes </label>
        </p>
        <!-- boolean -->
        <p class="item">
          <label> Amount to Send: (this is always here) </label>
          <input class="form-control" placeholder="0" />
        </p>
      </span>
      <span class="form-group">
        <button class="btn btn-primary" >EXECUTE</button> <!-- this opens modal -->
      </span>
    </div>
    <!-- / Write - Step 2 -->


    <!-- Step 3 - Modal -->
    <div class="modal fade" id="sendContract" tabindex="-1" role="dialog" aria-labelledby="sendContractLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title" id="myModalLabel"> <strong class="text-danger">Warning!</strong></h3>
          </div>
          <div class="modal-body">
            <h4>You are about to execute a function on contract 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8.</h4>
            <p> Estimated fee consumption: <strong> 0.00043598 ether (21,799 gas) </strong> </p>
            <p> Provided Maximum Fee: <strong> 0.00243598 ether (121,799 gas) </strong> </p>
            <p> Gas Price:  <strong> 0.021 ether per million gas </strong> </p>
            <p> Data:  <strong> 0x4e71d92d </strong> </p>
            <h4> Are you <span class="text-underline">sure</span> you want to do this?</h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="sendTx()">Yes, I am sure! Send transaction.</button>
          </div>
        </div>
      </div>
    </div>
    <!-- / Step 3 - Modal -->


  </section>


</div>
<!-- / contracts -->
