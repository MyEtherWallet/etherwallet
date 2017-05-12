'use strict';

var balanceDrtv = function() {
	return {
        restrict : "E",
        template : require('./balanceDrtv.html')
  };
};
module.exports = balanceDrtv;

//<label class=\"ens-response\" ng-show=\"showens\"> ↳ <span class=\"mono ng-binding\"> {{ensAddress}} </span> </label>\n \
