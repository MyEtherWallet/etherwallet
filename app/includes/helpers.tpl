<div class="" ng-controller="helpersCtrl">
  <h1> Convert It! </h1>
  <section class="mono">
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.wei" ng-change="convertUnit('wei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> wei </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.kwei" ng-change="convertUnit('kwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> kwei </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.mwei" ng-change="convertUnit('mwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> mwei </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.gwei" ng-change="convertUnit('gwei')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> gwei <small>(shannon)</small> </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.szabo" ng-change="convertUnit('szabo')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> szabo </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.finney" ng-change="convertUnit('finney')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> finney </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.ether" ng-change="convertUnit('ether')" />
      <div class="input-group-btn">
        <a class="btn btn-primary" style="min-width: 170px;"> ether </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.kether" ng-change="convertUnit('kether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> kether </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.mether" ng-change="convertUnit('mether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> mether </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.gether" ng-change="convertUnit('gether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> gether </a>
      </div>
    </div>
    <div class="input-group form-group">
      <input class="form-control" type="text" ng-model="units.tether" ng-change="convertUnit('tether')" />
      <div class="input-group-btn">
        <a class="btn btn-default" style="min-width: 170px;"> tether  </a>
      </div>
    </div>
  </section>

  <br /><br /><br />

  <h1> Decimal <-> Hexidecimal It! </h1>
  <div class="form-group">
    <label> Decimal </label>
    <input class="form-control" type="text" ng-model="decimalNumber" ng-change="decimalToHex()" />
  </div>
  <div class="form-group">
    <label> Hexadecimal </label>
    <input class="form-control" type="text" ng-model="hexNumber" ng-change="hexToDecimal()" />
  </div>

  <br /><br /><br />

  <h1> "SHA3" (Keccak-256) It!</h1>

  <div class="form-group">
    <label> Input </label>
    <input class="form-control" type="text" ng-model="inputText" ng-change="toSHA3()" />
  </div>
  <div class="form-group">
    <label> Output </label>
    <input class="form-control" type="text" ng-model="outputText" readonly="readonly" />
  </div>

  <br /><br /><br />

  <h1> Reference It </h1>
  <table class="table table-striped mono">
    <tr>
      <td><strong>wei</strong></td>
      <td><small></small></td>
      <td>1</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>kwei</strong></td>
      <td><small>ada, femtoether</small></td>
      <td>1000</td>
      <td>1,000</td>
      <td>10<sup>3</sup></td>
    </tr>
    <tr>
      <td><strong>mwei</strong></td>
      <td><small>babbage, picoether</small></td>
      <td>1000000</td>
      <td>1,000,000</td>
      <td>10<sup>6</sup></td>
    </tr>
    <tr>
      <td><strong>gwei</strong></td>
      <td><small>shannon, nanoether, nano</small></td>
      <td>1000000000</td>
      <td>1,000,000,000</td>
      <td>10<sup>9</sup></td>
    </tr>
    <tr>
      <td><strong>szabo</strong></td>
      <td><small>microether, micro</small></td>
      <td>1000000000000</td>
      <td>1,000,000,000,000</td>
      <td>10<sup>12</sup></td>
    </tr>
    <tr>
      <td><strong>finney</strong></td>
      <td><small>milliether, milli</small></td>
      <td>1000000000000000</td>
      <td>1,000,000,000,000,000</td>
      <td>10<sup>15</sup></td>
    </tr>
    <tr>
      <td><strong>ether</strong></td>
      <td><small></small></td>
      <td>1000000000000000000</td>
      <td>1,000,000,000,000,000,000</td>
      <td>10<sup>18</sup></td>
    </tr>
    <tr>
      <td><strong>kether</strong></td>
      <td><small>grand, einstein</small></td>
      <td>1000000000000000000000</td>
      <td>1,000,000,000,000,000,000,000</td>
      <td>10<sup>21</sup></td>
    </tr>
    <tr>
      <td><strong>mether</strong></td>
      <td><small></small></td>
      <td>1000000000000000000000000</td>
      <td>1,000,000,000,000,000,000,000,000</td>
      <td>10<sup>24</sup></td>
    </tr>
    <tr>
      <td><strong>gether</strong></td>
      <td><small></small></td>
      <td>1000000000000000000000000000</td>
      <td>1,000,000,000,000,000,000,000,000,000</td>
      <td>10<sup>27</sup></td>
    </tr>
    <tr>
      <td><strong>tether </strong></td>
      <td><small></small></td>
      <td>1000000000000000000000000000000</td>
      <td>1000,000,000,000,000,000,000,000,000,000</td>
      <td>10<sup>30</sup></td>
    </tr>
  </table>
  </p>
</div>
