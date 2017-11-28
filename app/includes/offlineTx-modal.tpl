<article class="modal fade" id="sendTransactionOffline" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

        <h2 class="modal-title text-danger" translate="SENDModal_Title">
          Warning!
        </h2>

        <table class="table text-center"><tbody><tr>

          <td ng-show="tx.sendMode=='ether'">
            <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.from}}" watch-var="tx.from"></div>
          </td>
          <td ng-show="tx.sendMode!=='ether'">
            <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tokenTx.from}}" watch-var="tokenTx.from"></div>
          </td>

          <td ng-show="tx.sendMode=='ether'" class="mono">
            ->
            <br />
            {{tx.value}} {{unitReadable}}
          </td>
          <td ng-show="tx.sendMode!=='ether'" class="mono">
            ->
            <br />
            {{tokenTx.value}} {{unitReadable}}
          </td>

          <td ng-show="tx.sendMode=='ether'">
            <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
          </td>
          <td ng-show="tx.sendMode!=='ether'">
            <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div>
          </td>

        </tr></tbody></table>

        <br />

        <p>
          <span translate="SENDModal_Content_1">
            You are about to send
          </span>
          <strong ng-show="tx.sendMode=='ether'" class="mono">
            {{tx.value}} {{unitReadable}}
          </strong>
          <strong ng-show="tx.sendMode!=='ether'" class="mono">
            {{tokenTx.value}} {{unitReadable}}
          </strong>
          <br />
          <span translate="SENDModal_Content_2">
            to address
          </span>
          <strong ng-show="tx.sendMode=='ether'" class="mono">
            {{tx.to}}.
          </strong>
          <strong ng-show="tx.sendMode!=='ether'" class="mono">
            {{tokenTx.to}}
          </strong>
        </p>

        <p>
          The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.
        </p>

        <h4 translate="SENDModal_Content_3">
          Are you sure you want to do this?
        </h4>

      </div>


      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
          No, get me out of here!
        </button>
        <button class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">
          Yes, I am sure! Make transaction.
        </button>
      </div>

    </section>
  </section>
</article>
