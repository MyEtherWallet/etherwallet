<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.bulkGenerate.id" ng-controller='bulkGenCtrl'>

  <!-- Top - Bulk Generate -->
  <h2> Bulk Generate Wallets </h2>
  <section class="row">
    <div class="col-md-6 col-sm-12 form-group">
      <h4>1. Enter the Number of Wallets To Generate:</h4>
      <input class="form-control" type="text" placeholder="Number of Wallets" ng-model="amount">
    </div>
    <div class="col-md-6 col-sm-12 form-group">
      <h4>2. Give me my wallets:</h4>
      <a class="btn btn-primary btn-block btnAction" ng-click="genWallets()">GENERATE</a>
    </div>
  </section>
  <!-- / Top - Bulk Generate -->

  <!-- Bottom - Display Bulk Generated Wallets -->
  <section ng-show="showWallets">
    <hr />
    <div class="row">
      <h2 class="col-xs-12">Success! Your wallets have been generated.</h2>
      <p class="col-xs-12 text-danger"> You need to back up your private keys externally and verify you can access the wallets. Do this BEFORE you send any Ether to a new wallet. MyEtherWallet.com does not receive or store any information so we <strong>cannot</strong> recover your wallet. Read the <a id="help" class="ptabs" showId="paneHelp">help page</a> for instructions.</p>
      <article class="col-md-9">
        <table id="bulkgentable" class="table">
          <thead>
            <tr>
              <th width="32"> Address Identicon </th>
              <th width="500">Address</th>
              <th width="500">Private Key (unencrypted)</th>
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
      </article>
      <article class="col-md-3">
        <div class="form-group">
          <label>Print Paper Wallets (unencrypted)</label>
          <a class="btn btn-info btn-block" ng-click="printQRCode()">PRINT</a>
        </div>
        <div class="form-group">
          <label>Download JSON file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bJSON}}" download="bulk_ether_accounts.json">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <label>Download CSV file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bCSV}}" download="bulk_ether_accounts.csv">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <label>Download TXT file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bTXT}}" download="bulk_ether_accounts.txt">DOWNLOAD</a>
        </div>
      </article>
    </div>
  </section>
  <!-- / Bottom - Display Bulk Generated Wallets -->

</div>
