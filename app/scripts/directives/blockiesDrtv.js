'use strict';
var blockiesDrtv = function() {
	return function(scope, element, attrs){
	   var watchVar = attrs.watchVar;
        scope.$watch(watchVar, function() {
            var address = attrs.blockieAddress;
            var content = Validator.isValidAddress(address) ? globalFuncs.getBlockie(address): '';
            element.css({
                'background-image': 'url(' + content +')'
            });
        });
    };
};
module.exports = blockiesDrtv;
