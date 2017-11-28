<table class="table table-striped table-ens-modal">
  <tbody>

    <tr>
      <td>
        Name
      </td>
      <td>
        {{objENS.name}}.eth
      </td>
    </tr>

    <tr>
      <td>
        Actual Bid Amount
      </td>
      <td>
        {{objENS.bidValue}} {{ajaxReq.type}}
      </td>
    </tr>

    <tr ng-show="objENS.status!=ensModes.reveal">
      <td>
        Bid Mask
      </td>
      <td>
        {{objENS.dValue}} {{ajaxReq.type}}
      </td>
    </tr>

    <tr>
      <td>
        Secret Phrase
      </td>
      <td>
        {{objENS.secret}}
      </td>
    </tr>

    <tr>
      <td>
        From Account
      </td>
      <td>
        <small class="mono">{{wallet.getChecksumAddressString()}}</small>
      </td>
    </tr>

    <tr class="text-danger">
      <td>
        ⚠ Reveal Date ⚠
      </td>
      <td>
        <small>{{getRevealTime().toString()}}</small>
      </td>
    </tr>

    <tr>
      <td>
        Auction Ends
      </td>
      <td>
        <small>{{objENS.registrationDate.toString()}}</small>
      </td>
    </tr>

    <tr ng-show="objENS.status!=ensModes.reveal">
      <td colspan="2">
        <small>
          <p>
            Copy and save this:
          </p>
          <textarea class="form-control small" readonly rows="4">{{bidObject}}</textarea>
        </small>
      </td>
    </tr>

  </tbody>
</table>
