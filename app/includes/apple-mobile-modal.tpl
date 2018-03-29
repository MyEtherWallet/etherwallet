<article class="modal fade" id="appleMobileModal" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" ng-click="closeModal()" aria-label="Close Dialog">&times;</button>
        <h2 class="modal-title" translate="APPLE_Mob_Notice_Head">
          It seems like you're using an IPhone or an IPad.
        </h2>

        <p translate="APPLE_Mob_Notice_Body_1">
          Just letting you know that generating wallets isn't supported in these devices because of Apple's storage restrictions.
        </p>
        <p translate="APPLE_Mob_Notice_Body_2">
          Please use the website on a laptop or computer.
        </p>
      </div>

      <div class="modal-footer">
        <button class="btn btn-primary col-xs-12" ng-click="closeModal()" translate="APPLE_Mob_Notice_Understand">
          I understand.
        </button>
      </div>
    </section>
  </section>
</article>
