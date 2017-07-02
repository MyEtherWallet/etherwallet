<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.txBroadcast.id" ng-controller='txBroadcastCtrl' ng-cloak >

  <div class="block">

      <article class="cont-md text-center">

        <h1 translate="TX_Broadcast"> Broadcast Transaction </h1>

        <p translate="TX_Broadcast_Desc"> Paste your signed transaction below &amp; press the button. A confirmation dialog showing your transaction details will be shown before it attempts to broadcast it to the network. Please double check how much of what coin to what address you are sending. </p>

        <div class="col-sm-8 col-sm-offset-2">
          <label> Signed Transaction </label>
          <textarea class="form-control" rows="5" ></textarea>
          <a class="btn btn-primary"> Broadcast Transaction </a>
        </div>

      </article>

  </div>



</main>
