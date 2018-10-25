<article class="modal fade" id="sendTransaction" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

        <h2 class="modal-title text-center">
          <span translate="SENDModal_Content_1">You are about to send</span>...
        </h2>

        <table class="table text-center">
          <tbody>
            <tr>
              <td>
                <div class="addressIdenticon med"
                     title="Address Indenticon"
                     blockie-address="{{wallet.getAddressString()}}"
                     watch-var="wallet.getAddressString()">
                </div>
                <p>
                  <strong ng-show="tx.sendMode=='ether'" class="send-modal__addr">
                    {{wallet.getChecksumAddressString()}}
                  </strong>
                </p>
              </td>
              <td ng-show="tx.sendMode=='ether'" class="mono">
                ->
                <br />
                <h4 class="text-danger">
                  {{tx.value}} {{unitReadable}}
                </h4>
              </td>
              <td ng-show="tx.sendMode!=='ether'" class="mono">
                ->
                <br />
                <h4 class="text-primary">
                  {{tx.value}} {{unitReadable}}
                </h4>
              </td>
              <td ng-show="tx.sendMode=='ether'">
                <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
                <p>
                  <strong ng-show="tx.sendMode=='ether'" class="send-modal__addr">
                    {{tx.to}}
                  </strong>
                </p>
              </td>
              <td ng-show="tx.sendMode!=='ether'">
                <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div>
                <p>
                  <strong ng-show="tx.sendMode=='ether'" class="send-modal__addr">
                    {{tokenTx.to}}
                  </strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <table class="table small table-condensed table-hover transaction-modal">
          <tbody>
            <tr>
              <td class="small text-right">To Address:</td>
              <td class="small text-left mono">{{parsedSignedTx.to}}
                <br />
                <em><small>If sending tokens, this should be the token contract address.</small></em>
              </td>
            </tr>
            <tr>
              <td class="small text-right">From Address:</td>
              <td class="small text-left mono">{{parsedSignedTx.from}}</td>
            </tr>
            <tr>
              <td class="small text-right">Amount to Send:</td>
              <td class="small text-left mono">{{parsedSignedTx.value}} ETH</td>
            </tr>
            <tr>
              <td class="small text-right">Account Balance:</td>
              <td class="small text-left mono">{{parsedSignedTx.balance}}</td>
            </tr>
            <tr>
              <td class="small text-right">Coin:</td>
              <td class="small text-left mono">{{unitReadable}}</td>
            </tr>
            <tr>
              <td class="small text-right">Network:</td>
              <td class="small text-left mono">{{ajaxReq.type}} by {{ajaxReq.service}}</td>
            </tr>
            <tr>
              <td class="small text-right">Gas Limit:</td>
              <td class="small text-left mono">{{parsedSignedTx.gasLimit}}</td>
            </tr>
            <tr>
              <td class="small text-right">Gas Price:</td>
              <td class="small text-left mono">{{parsedSignedTx.gasPrice.gwei}} GWEI <small>({{parsedSignedTx.gasPrice.eth}} ETH)</small>
              </td>
            </tr>
            <tr>
              <td class="small text-right">Max TX Fee:</td>
              <td class="small text-left mono"> {{parsedSignedTx.txFee.eth}} ETH <small>({{parsedSignedTx.txFee.gwei}} GWEI)</small></td>
            </tr>
            <tr>
              <td class="small text-right">Nonce:</td>
              <td class="small text-left mono">{{parsedSignedTx.nonce}}</td>
            </tr>
            <tr>
              <td class="small text-right">Data:</td>
              <td class="small text-left mono text-width-limit"><p>{{parsedSignedTx.data}}</p></td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="modal-footer">
        <h4 class="text-center">
          <span translate="SENDModal_Content_1">You are about to send</span>
          <strong ng-show="tx.sendMode=='ether'" class="mono">{{tx.value}} {{unitReadable}}</strong>
          <strong ng-show="tx.sendMode!=='ether'" class="mono">{{tokenTx.value}} {{unitReadable}}</strong>
          <span translate="SENDModal_Content_2">to address</span>
          <strong ng-show="tx.sendMode=='ether'" class="mono">{{tx.to}}.</strong>
          <strong ng-show="tx.sendMode!=='ether'" class="mono">{{tokenTx.to}}</strong>
        </h4>
        <p translate="SENDModal_Content_3">
          Are you sure you want to do this?
        </p>
        <br />
        <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
          No, get me out of here!
        </button>
        <button class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">
          Yes, I am sure! Make transaction.
        </button>
      </div>

      <p class="small text-center" style="padding: 0px 5px;">
        <a href="https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html" target="_blank" ref="noopener noreferrer">
          The network is a bit overloaded. If you're having issues with TXs, please read me.
        </a>
      </p>



    </section>
  </section>
</article>
