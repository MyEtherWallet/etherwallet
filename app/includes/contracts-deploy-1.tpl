<section class="col-xs-12">

  <!-- Bytecode-->
  <div class="form-group">
    <h4 translate="CONTRACT_Bytecode"> Byte Code: </h4>
    <textarea
      class="form-control"
      rows="8"
      ng-model="tx.data"
      ng-class="Validator.isValidHex(tx.data)&&tx.data!='' ? 'is-valid' : 'is-invalid'"></textarea>
  </div>

  <!-- Gas -->
  <div class="form-group">
    <h4 translate="x_GasLimit"> Gas: </h4>
    <input class="form-control"
           type="text"
           placeholder="300000"
           ng-model="tx.gasLimit"
           ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
  </div>

  <!-- Sign TX Button (once wallet has been unlocked) -->

  <!-- TXs -->
  <section class="row" ng-show="showRaw">
    <!-- Raw TX -->
    <div class="form-group col-sm-6">
      <h4 translate="TX_Unsigned"> Unsigned Transaction </h4>
      <textarea class="form-control" rows="4" readonly>{{rawTx}}</textarea>
    </div>
    <!-- Singed TX -->
    <div class="form-group col-sm-6">
      <h4 translate="TX_Signed"> Signed Transaction </h4>
      <textarea class="form-control" rows="4" readonly>{{signedTx}}</textarea>
    </div>
  </section>

  <!-- Deploy Contract Button (once tx has been signed) -->
  <div class="form-group" ng-show="showRaw">
    <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#deployContract" translate="CONTRACT_Deploy"> Deploy Contract </a>
  </div>

  @@if (site === 'mew' ) { @@include( '../includes/contracts-deploy-modal.tpl', { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( '../includes/contracts-deploy-modal.tpl', { "site": "cx"  } ) }

</section>
