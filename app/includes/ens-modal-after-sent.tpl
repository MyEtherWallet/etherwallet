<section ng-show="objENS.status==ensModes.auction || objENS.status==ensModes.open">
  <div class="alert alert-danger">
    <h4>If you haven't done so already, please screenshot & save the below information</h4>
    <small>You <u>cannot</u> claim your name unless you have this information during the reveal process.</small>
  </div>

  <table class="table">
    <tbody>
      <tr class="text-center">
        <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
        <td class="mono">-><br />{{tx.value}} {{unitReadable}}</td>
        <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div></td>
      </tr>
    </tbody>
  </table>

  <table class="table table-striped table-ens-modal">
    <tbody>
      <tr>
        <td>Name:</td><td>{{objENS.name}}.eth</td>
      </tr>
      <tr>
        <td>Bid Amount:</td><td>{{objENS.bidValue}} {{ajaxReq.type}}</td>
      </tr>
      <tr>
        <td>Secret Phrase:</td><td>{{objENS.secret}}</td>
      </tr>
      <tr ng-show="objENS.status!=ensModes.reveal">
        <td>Amount to Send (disguise):</td><td>{{objENS.dValue}} {{ajaxReq.type}}</td>
      </tr>
      <tr>
        <td>From Account:</td><td><small class="mono">{{wallet.getAddressString()}}</small></td>
      </tr>
      <tr ng-show="showRegistrationDate() && objENS.status!=ensModes.reveal">
        <td>Must Reveal On:</td><td><small>{{getRevealTime().toLocaleString()}}</small></td>
      </tr>
      <tr ng-show="showRegistrationDate()">
        <td>Auction Ends:</td><td><small>{{objENS.registrationDate.toLocaleString()}}</small></td>
      </tr>

      <tr ng-show="objENS.status==ensModes.open">
        <td>Must Reveal On:</td><td><small>{{getRevealTime().toLocaleString()}}</small></td>
      </tr>
      <tr ng-show="objENS.status==ensModes.open">
        <td>Auction Ends:</td><td><small>{{objENS.registrationDate.toLocaleString()}}</small></td>
      </tr>

      <tr ng-show="objENS.status!=ensModes.reveal">
        <td colspan="2">
          <small><p>Copy and save this:</p><textarea class="form-control small" readonly rows="4">{{bidObject}}</textarea></small>
        </td>
      </tr>
    </tbody>
  </table>
</section>

<div ng-show="objENS.status==ensModes.reveal">
  <hr />
  <div class="alert alert-success">
    <h4>You have successfully revealed your bid for {{objENS.name}}.eth.</h4>
  </div>
  <p> There are {{ 2 }} other bids: </p>
  <table class="table table-striped table-ens-modal">
    <tbody>
      <tr>
        <td>{ address }</td>
        <td>{ bidamount }</td>
      </tr>
      <tr>
        <td>{ address }</td>
        <td>{ bidamount }</td>
      </tr>
    </tbody>
  </table>
  <h4 class="text-warning">Please return on {{objENS.registrationDate.toLocaleString()}} to finalize the auction and see if you won!</h4>
</div>
