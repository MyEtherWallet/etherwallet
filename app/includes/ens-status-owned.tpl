<article class="row text-center" ng-show="objENS.status==ensModes.owned">

  <br /><br />

  <h1><strong>{{objENS.name}}.eth</strong> is already owned:</h1>

  <div class="form-group col-sm-10 col-sm-offset-1" ng-hide="wd">
    <table class="table table-striped">
      <tr>
        <td class="text-right">Owner: </td>
        <td><span class="mono">{{objENS.owner}}</span></td>
      </tr>
      <tr>
        <td class="text-right">Highest Bidder (Deed Owner): </td>
        <td><span class="mono">{{objENS.deedOwner}}</span></td>
      </tr>
      <tr>
        <td class="text-right">Resolved Address: </td>
        <td><span class="mono">{{objENS.resolvedAddress}}</span></td>
      </tr>
    </table>
  </div>

</article>


