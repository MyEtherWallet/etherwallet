<div data-ng-repeat="alert in notifier.alerts">
  <div class="alert popup alert-{{alert.type}} animated-show-hide"
       style="bottom: {{85*$index}}px; z-index: {{999+$index}};">
    <div class="container">
      <div class='alert-message' ng-bind-html="alert.message"></div>
    </div>
    <i class="icon-close" ng-click="alert.close()"></i>
  </div>
</div>
