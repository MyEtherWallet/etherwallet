'use strict';
var viewCtrl = function($scope, globalService) {
    $scope.globalService = globalService;
    $scope.notifier = {
        show: false,
        close: function() { this.show = false; },
        open: function() { this.show = true; },
        class: '',
        message: '',
        timer: null,
        warning: function(msg) {
            this.setClassAndOpen("alert-warning", msg);
            this.setTimer();
        },
        info: function(msg) {
            this.setClassAndOpen("", msg);
            this.setTimer();
        },
        danger: function(msg) {
            this.setClassAndOpen("alert-danger", msg);
            this.setTimer();
        },
        success: function(msg) {
            this.setClassAndOpen("alert-success", msg);
        },
        setClassAndOpen: function(_class, msg) {
            this.class = _class;
            this.message = msg;
            this.open();
        },
        setTimer: function() {
            var _this = this;
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function() {
                _this.show = false;
                if (!$scope.$$phase) $scope.$apply();
            }, 4000);
        }
    }
};
module.exports = viewCtrl;
