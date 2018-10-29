<div class="" ng-controller="helpersCtrl">

  <h1>
    Convert Ethererum Units (e.g. Ether <-> Wei)
  </h1>

  <h2 class="p">
    Ether Wei Converter
  </h2>

  <section class="mono">

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.wei" ng-change="convertUnit('wei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          wei
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.kwei" ng-change="convertUnit('kwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          kwei
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.mwei" ng-change="convertUnit('mwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          mwei
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.gwei" ng-change="convertUnit('gwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          gwei <small>(shannon)
        </small>
      </a>

      </div>

    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.szabo" ng-change="convertUnit('szabo')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          szabo
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.finney" ng-change="convertUnit('finney')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          finney
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.ether" ng-change="convertUnit('ether')" />
      <div class="input-group-btn">
        <a class="btn btn-primary" style="min-width: 170px;">
          ether
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.kether" ng-change="convertUnit('kether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          kether
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.mether" ng-change="convertUnit('mether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          mether
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.gether" ng-change="convertUnit('gether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;">
          gether
        </a>
      </div>
    </div>

    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.tether" ng-change="convertUnit('tether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> tether
        </a>
      </div>
    </div>

  </section>






  <br /><br /><br />






  <h1>
    ENS Debugger & Data Grabber
  </h1>
  <h2 class="p">
    Ethereum Name Service Data String Generator
  </h2>
  <p class="text-danger">
    This is meant to be a helpful tool for debugging and checking and generating manual reveals when necessary. Use at your own risk. There is no validation on these fields.
  </p>

  <section class="row">
    <div class="form-group col-sm-12">
      <label>
        Address you Bid From
      </label>
      <input class="form-control" type="text" ng-model="ensAddress" ng-change="allTheThings()" />
    </div>
  </section>

  <section class="row">
    <div class="form-group col-sm-6">
      <label>
        ENS Name you Bid On (no '.eth' at the end!)
      </label>
      <input class="form-control" type="text" ng-model="ensLabel" ng-change="toEnsLabelHash()" />
    </div>
    <div class="form-group col-sm-6">
      <label>
        Hashed ENS Name (Label Hash)
      </label>
      <input class="form-control" type="text" ng-model="ensLabelHash" />
    </div>
  </section>

  <section class="row">
    <div class="form-group col-sm-6">
      <label>
        Amount you Bid (ETH)
      </label>
      <input class="form-control" type="text" ng-model="bidEth" ng-change="toBidWei()" />
    </div>
    <div class="form-group col-sm-6">
      <label>
        Amount you Bid (WEI)
      </label>
      <input class="form-control" type="text" ng-model="bidWei" ng-change="toBidEth()" />
    </div>
  </section>

  <section class="row">
    <div class="form-group col-sm-6">
      <label>
        Your Secret
      </label>
      <input class="form-control" type="text" ng-model="ensSecret" ng-change="toEnsSecretHash()" />
    </div>
    <div class="form-group col-sm-6">
      <label>
        Your Secret (Hashed)
      </label>
      <input class="form-control" type="text" ng-model="ensSecretHash"/>
    </div>
  </section>

  <section class="row">
    <div class="form-group col-xs-12">
      <label>
        Start Auction Data
      </label>
      <input class="form-control" type="text" ng-model="startAuctionData" readonly />
      <p>
        To:
        <code>0x6090a6e47849629b7245dfa1ca21d94cd15878ef</code>
        &nbsp;&middot;&nbsp;
        Amount:
        <code>0</code>
        &nbsp;&middot;&nbsp;
        Gas Limit:
        <code>200000</code>
        &nbsp;&middot;&nbsp;
        Data:
        <code>[ABOVE]</code>
      </p>
    </div>
  </section>

  <section class="row">
    <div class="form-group col-xs-12">
      <label>
        Start Auction And Bid Data
      </label>
      <input class="form-control" type="text" ng-model="startAndBidAuctionData" readonly />
      <p>
        To:
        <code>0x6090a6e47849629b7245dfa1ca21d94cd15878ef</code>
        &nbsp;&middot;&nbsp;
        Amount:
        <code>0</code>
        &nbsp;&middot;&nbsp;
        Gas Limit:
        <code>200000</code>
        &nbsp;&middot;&nbsp;
        Data:
        <code>[ABOVE]</code>
      </p>
    </div>
  </section>

  <section class="row">
    <div class="form-group col-xs-12">
      <label>
        New Bid Data
        <small>If your reveals aren't working, this is the string that needs to match your bid data on Etherscan)</small>
    </label>
      <input class="form-control" type="text" ng-model="shaBid" readonly />
      <p>
        To: <code>0x6090a6e47849629b7245dfa1ca21d94cd15878ef</code>
        &nbsp;&middot;&nbsp;
        Amount: <code>[A NUMBER >= BID AMOUNT]</code>
        &nbsp;&middot;&nbsp;
        Gas Limit: <code>500000</code>
        &nbsp;&middot;&nbsp;
        Data: <code>[ABOVE]</code>
      </p>
    </div>
  </section>

  <section class="row">
    <div class="form-group col-xs-12">
      <label>
        Reveal Data <small> This is for manually revealing if you need to do so.
      </small>
    </label>
      <input class="form-control" type="text" ng-model="revealBidData" readonly />
      <p>
        To: <code>0x6090a6e47849629b7245dfa1ca21d94cd15878ef</code>
        &nbsp;&middot;&nbsp;
        Amount: <code>0</code>
        &nbsp;&middot;&nbsp;
        Gas Limit: <code>200000</code>
        &nbsp;&middot;&nbsp;
        Data: <code>[ABOVE]</code>
      </p>
    </div>
  </section>

  <section class="row">
    <div class="form-group col-xs-12">
      <label>
        Finalize Auction Data
      </label>
      <input class="form-control" type="text" ng-model="finalizeAuctionData" readonly />
      <p>
        To: <code>0x6090a6e47849629b7245dfa1ca21d94cd15878ef</code>
        &nbsp;&middot;&nbsp;
        Amount: <code>0</code>
        &nbsp;&middot;&nbsp;
        Gas Limit: <code>200000</code>
        &nbsp;&middot;&nbsp;
        Data: <code>[ABOVE]</code>
      </p>
    </div>
  </section>


  <br /><br /><br />


  <h1>
    Convert Decimal to Hexadecimal and Hex to Decimal
  </h1>
  <div class="form-group">
    <label>
      Decimal
    </label>
    <input class="form-control" type="text" ng-model="decimalNumber" ng-change="decimalToHex()" />
  </div>

  <div class="form-group">
    <label>
      Hexadecimal
    </label>
    <input class="form-control" type="text" ng-model="hexNumber" ng-change="hexToDecimal()" />
  </div>

  <div class="form-group">
    <label>
      Hexadecimal - Padded Left w/ 64 characters
    </label>
    <input class="form-control" type="text" ng-model="hexPaddedLeft" />
  </div>

  <br /><br /><br />

  <h1>
    "SHA3" (Keccak-256) It!
    <small>
      <a href="https://ethereum.stackexchange.com/questions/550/which-cryptographic-hash-function-does-ethereum-use"
         target="_blank"
         rel="noopener noreferrer">
          yooo... sha3 !== Keccak-256?!
      </a>
    </small>
  </h1>

  <div class="form-group">
    <label>
      Input
    </label>
    <input class="form-control" type="text" ng-model="inputText" ng-change="toSHA3()" />
  </div>

  <div class="form-group">
    <label>
      Output
    </label>
    <input class="form-control" type="text" ng-model="outputText" readonly />
  </div>


  <br /><br /><br />


  <h1> Ether Unit Reference Guide
  </h1>
  <table class="table table-striped mono">
    <tr>
      <td>
        <strong>
          wei
        </strong>
      </td>
      <td>
        <small></small>
      </td>
      <td>
        1
      </td>
      <td>
        1
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        <strong>
          kwei
        </strong>
      </td>
      <td>
        <small>
          ada, femtoether
        </small>
      </td>
      <td>
        1000
      </td>
      <td>
        1,000
      </td>
      <td>
        10<sup>3</sup>
      </td>
    </tr>

    <tr>
      <td>
        <strong>
          mwei
        </strong>
      </td>
      <td>
        <small>
          babbage, picoether
        </small>
      </td>
      <td>
        1000000
      </td>
      <td>
        1,000,000
      </td>
      <td>
        10<sup>6</sup>
      </td>
    </tr>


    <tr>
      <td>
        <strong>
          gwei
        </strong>
      </td>
      <td>
        <small>
          shannon, nanoether, nano
        </small>
      </td>
      <td>
        1000000000
      </td>
      <td>
        1,000,000,000
      </td>
      <td>
        10<sup>9</sup>
      </td>
    </tr>

    <tr>
      <td>
        <strong>szabo</strong>
      </td>
      <td>
        <small>
          microether, micro
        </small>
      </td>
      <td>
        1000000000000
      </td>
      <td>
        1,000,000,000,000
      </td>
      <td>
        10<sup>12</sup>
    </td>
    </tr>

    <tr>
      <td>
        <strong>finney</strong>
      </td>
      <td>
        <small>
          milliether, milli
        </small>
      </td>
      <td>
        1000000000000000
      </td>
      <td>
        1,000,000,000,000,000
      </td>
      <td>
        10<sup>15</sup>
    </td>
    </tr>

    <tr>
      <td>
        <strong>ether</strong>
      </td>
      <td>
        <small></small>
      </td>
      <td>
        1000000000000000000
      </td>
      <td>
        1,000,000,000,000,000,000
      </td>
      <td>
        10<sup>18</sup>
    </td>
    </tr>

    <tr>
      <td>
        <strong>kether</strong>
      </td>
      <td>
        <small>
          grand, einstein
        </small>
      </td>
      <td>
        1000000000000000000000
      </td>
      <td>
        1,000,000,000,000,000,000,000
      </td>
      <td>
        10<sup>21</sup>
      </td>
    </tr>

    <tr>
      <td>
        <strong>mether</strong>
      </td>
      <td>
        <small></small>
      </td>
      <td>
        1000000000000000000000000
      </td>
      <td>
        1,000,000,000,000,000,000,000,000
      </td>
      <td>
        10<sup>24</sup>
    </td>
    </tr>

    <tr>
      <td>
        <strong>gether</strong>
      </td>
      <td>
        <small></small>
      </td>
      <td>
        1000000000000000000000000000
      </td>
      <td>
        1,000,000,000,000,000,000,000,000,000
      </td>
      <td>
        10<sup>27</sup>
    </td>
    </tr>

    <tr>
      <td>
        <strong>tether</strong>
      </td>
      <td>
        <small></small>
      </td>
      <td>
        1000000000000000000000000000000
      </td>
      <td>
        1000,000,000,000,000,000,000,000,000,000
      </td>
      <td>
        10<sup>30</sup>
    </td>

    </tr>
  </table>
  </p>


  <br /><br /><br />


  <h1>
    Mistyped Private Key
  </h1>

  <div class="form-group">
    <label>
      Private Key that isn't unlocking correct address
    </label>
    <input class="form-control" type="text" ng-model="mistypedPK"  />
  </div>

  <div class="form-group">
    <label>
      Address You Sent To
    </label>
    <input class="form-control" type="text" ng-model="mistypedAddr" />
  </div>

  <div class="form-group">
    <a class="btn btn-primary" ng-click="findMyPrivateKey()"> Start the Search!
    </a>
  </div>

  <div class="form-group">
    <label>
      Actual Private Key
    </label>
    <input class="form-control" type="text" ng-model="actualPK" readonly />
  </div>

  <div class="form-group">
    <ul>
      <li class="text-danger">
        Consider yourself very, very lucky.
      </li>
      <li>
        Now you need to create a new secure wallet and move all funds to it.
      </li>
      <li>
        In order to prevent the same thing from happening, <strong> please make sure your address you are sending to matches the address on your paper wallet
      </strong>
    </li>
      <li>
        <a href="https://kb.myetherwallet.com/getting-started/creating-a-new-wallet-on-myetherwallet.html" target="_blank" rel="noopener noreferrer">
          Read this guide for more information.
        </a>
      </li>
      <li>
        <a href="https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html" target="_blank" rel="noopener noreferrer">
          Learn how to protect yourself and your funds.
        </a>
      </li>
    </ul>

  </div>


</div>
