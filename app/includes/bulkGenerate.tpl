<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.bulkGenerate.id" ng-controller='bulkGenCtrl'  ng-cloak>

  <h1 translate="NAV_BulkGenerate">
    Bulk Generate Wallets
  </h1>

  <!-- Top - Bulk Generate -->
  <section class="row">

    <div class="col-md-6 col-sm-12 form-group">
      <h4 translate="BULK_Label_1">
        Number of Wallets To Generate
      </h4>
      <input class="form-control"
             type="text"
             placeholder="{{ 'BULK_Label_1' | translate }}"
             ng-model="amount" />
    </div>

    <div class="col-md-6 col-sm-12 form-group">
      <h4 translate="BULK_Label_2">
        Generate Wallets
      </h4>
      <a class="btn btn-primary btn-block" ng-click="genWallets()" translate="BULK_Label_2">
        Generate Wallets
      </a>
    </div>

  </section>
  <!-- / Top - Bulk Generate -->



  <!-- Bottom - Display Bulk Generated Wallets -->
  <section ng-show="showWallets">

    <hr />

    <div class="row">
      <div class="col-xs-12">
        <h1 translate="BULK_SuccessMsg">
          Success! Your wallets have been generated.
        </h1>

        <div class="alert alert-danger" translate="ERROR_28">
          **You need your Keystore File + password or Private Key** to access this wallet in the future. Please save & back it up externally! There is no way to recover a wallet if you do not save it. Read the [help page](https://vintage.myetherwallet.com/#help) for instructions.
        </div>
      </div>

      <article class="col-md-9">
        <table id="bulkgentable" class="table">
          <thead>
            <tr>
              <th width="32"> Address Identicon </th>
              <th width="500" translate="x_Address">Address</th>
              <th width="500" translate="x_PrivKey">Private Key (unencrypted)</th>
            </tr>
            <tr class="privaddkey" ng-repeat="wallet in wallets">
            <td>
                <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
            </td>
            <td>
                <textarea class="form-control" rows="4" type="text" readonly>{{wallet.getChecksumAddressString()}}</textarea>
            </td>
            <td>
                <textarea class="form-control" rows="4" type="text" readonly>{{wallet.getPrivateKeyString()}}</textarea>
            </td>
            </tr>
          </thead>
        </table>
      </article>

      <article class="col-md-3">
        <div class="form-group">
          <label translate="x_Print">Print Paper Wallets (unencrypted)</label>
          <a class="btn btn-info btn-block" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>
        </div>
        <div class="form-group">
          <label translate="x_Json">JSON file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bJSON}}" download="bulk_ether_accounts.json" translate="x_Download">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <label translate="x_CSV">CSV file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bCSV}}" download="bulk_ether_accounts.csv" translate="x_Download">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <label translate="x_TXT">TXT file (unencrypted)</label>
          <a class="btn btn-info btn-block" href="{{bTXT}}" download="bulk_ether_accounts.txt" translate="x_Download">DOWNLOAD</a>
        </div>
      </article>

    </div>
  </section>
  <!-- / Bottom - Display Bulk Generated Wallets -->

</main>
