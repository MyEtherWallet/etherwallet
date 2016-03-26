<!-- bulk generator -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.bulkGenerate.id" ng-controller='bulkGenCtrl'>
  <h2> Bulk Generate Wallets </h2>
  <div class="row">
    <div class="col-md-6 col-sm-6 form-group">
      <h4>1. Enter the Number of Wallets To Generate:</h4>
      <input class="form-control" type="text" placeholder="Number of Wallets" ng-model="amount">
    </div>
    <div class="col-md-6 col-sm-12 form-group">
      <h4>2. Give me my wallets:</h4>
      <br class="hidden-sm hidden-xs" />
      <a class="btn btn-primary btn-block btnAction" ng-click="genWallets()">GENERATE</a>
    </div>
  </div>
  <div ng-show="showWallets">
    <hr />
    <div class="row">
      <h3 class="text-success col-xs-12">Success! Your wallets have been generated.</h3>
      <div class="col-sm-9">
        <table id="bulkgentable" class="table">
          <thead>
            <tr>
              <th width="32"> Address Identicon </th>
              <th width="500">Address</th>
              <th width="500">Private Key</th>
            </tr>
            <tr class="privaddkey" ng-repeat="wallet in wallets">
            <td>
                <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
            </td>
            <td>
                <textarea class="form-control" rows="4" type="text" disabled>{{wallet.getChecksumAddressString()}}</textarea>
            </td>
            <td>
                <textarea class="form-control" rows="4" type="text" disabled>{{wallet.getPrivateKeyString()}}</textarea>
            </td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <h4>Print Paper Wallets</h4>
          <a class="btn btn-info btn-block" ng-click="printQRCode()">PRINT</a>
        </div>
        <div class="form-group">
          <h4>Download JSON file</h4>
          <a class="btn btn-info btn-block" href="{{bJSON}}" download="bulk_ether_accounts.json">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <h4>Download CSV file</h4>
          <a class="btn btn-info btn-block" href="{{bCSV}}" download="bulk_ether_accounts.csv">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <h4>Download TXT file</h4>
          <a class="btn btn-info btn-block" href="{{bTXT}}" download="bulk_ether_accounts.txt">DOWNLOAD</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /bulk generator -->
