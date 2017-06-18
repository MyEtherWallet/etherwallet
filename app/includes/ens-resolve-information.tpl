  <table class="table table-striped" style="margin: 2em auto;">
    <tr>
      <td>Name:  </td>
      <td class="mono">{{objENS.name}}.eth</td>
    </tr>
    <tr>
      <td>Labelhash ({{objENS.name}}): </td>
      <td class="mono">{{objENS.nameSHA3}}</td>
    </tr>
    <tr>
      <td>Namehash ({{objENS.name}}.eth): </td>
      <td class="mono">{{objENS.namehash}}</td>
    </tr>
    <tr>
      <td>Owner:</td>
      <td class="mono">{{objENS.owner}}</td>
    </tr>
    <tr>
      <td>Highest Bidder (Deed Owner): </td>
      <td><span class="mono">{{objENS.deedOwner}}</span></td>
    </tr>
    <tr>
      <td>Resolved Address: </td>
      <td class="mono">{{objENS.resolvedAddress}}</td>
    </tr>
    <tr><td colspan="2"><a href="https://etherscan.io/enslookup?q={{objENS.name}}.eth" target="_blank" rel="noopener">{{objENS.name}}.eth on etherscan.io</a> </td></tr>
    <tr><td></td><td></td></tr>
    <tr>
      <td>ENS - Public Resolver: </td>
      <td class="mono">0x5FfC014343cd971B7eb70732021E26C35B744cc4</td>
    </tr>
    <tr>
      <td>ENS - Registry: </td>
      <td class="mono">0x314159265dD8dbb310642f98f50C066173C1259b</td>
    </tr>
  </table>
