<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.txSign.id" ng-controller='txSignCtrl' ng-cloak >

  <!-- Unlock Wallet -->
  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h1> Sign Transaction </h1>
        <p> Unlock your wallet &amp; paste your unsigned transaction below &amp; press "Sign" button. You can then copy your signed transaction into the <code>broadcast transaction</code> field below, or use <a href="https://etherscan.io/pushTx" target="_blank" rel="noopener">Etherscan.io's tool</a>.</p>
    </div>
    <div ng-show="!wd">
        @@if (site === 'cx' )  {  <wallet-decrypt-cx-drtv></wallet-decrypt-cx-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
    </div>
  </article>

  <div class="block">

    <div class="col-sm-6">
      <label> Unsigned Transaction </label>
      <textarea class="form-control" rows="5" ></textarea>

      <a class="btn btn-primary"> Sign Transaction </a>
    </div>

    <div class="col-sm-6">
      <label> Signed Transaction </label>
      <textarea class="form-control" rows="5" readonly></textarea>
    </div>

  </div>

</main>
