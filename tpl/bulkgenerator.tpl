<!-- bulk generator -->
<div class="tab-pane" id="paneBulkgen" style="display: none;">
  <h2> Bulk Generate Wallets </h2>
  <div class="row">
    <div class="col-md-4 col-sm-6 form-group">
      <h4>1. Enter the Number of Wallets To Generate:</h4>
      <input class="form-control" type="text" placeholder="Number of Wallets" id="numberwallets">
    </div>
    <div class="col-md-4 col-sm-6 form-group">
      <h4>2. Enter a password to encrypt your private key <small>(minimum 7 characters):</small></h4>
      <input class="form-control" type="text" placeholder="Never, Ever Forget This" id="bulkgenpassword">
    </div>
    <div class="col-md-4 col-sm-12 form-group">
      <h4>3. Give me my wallets:</h4>
      <br class="hidden-sm hidden-xs" />
      <a class="btn btn-primary btn-block btnAction" func="generateBulkWallets" id="bulkgenerate">GENERATE</a>
    </div>
  </div>
  <div id="generatedbulkwallets" style="display: none;">
    <hr />
    <div class="row">
      <h3 class="text-success col-xs-12">Success! Your wallets have been generated.</h3>
      <div class="col-sm-9">
        <table id="bulkgentable" class="table">
          <thead>
            <tr>
              <th width="32"> Address Identicon </th>
              <th width="500">Address</th>
              <th width="500">Private Key <span id="bulkIsEnc"></span></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <h4>Print Paper Wallets</h4>
          <a class="btn btn-info btn-block" id="bulkwalletprint">PRINT</a>
        </div>
        <div class="form-group">
          <h4>Download JSON file</h4>
          <a class="btn btn-info btn-block" id="bulkexportjson">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <h4>Download CSV file</h4>
          <a class="btn btn-info btn-block" id="bulkexportcsv">DOWNLOAD</a>
        </div>
        <div class="form-group">
          <h4>Download TXT file</h4>
          <a class="btn btn-info btn-block" id="bulkexporttxt">DOWNLOAD</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /bulk generator -->
