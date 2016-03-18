'use strict';
var blockiesDrtv = function() {
	return function(scope, element, attrs){
        scope.$watch('wallet', function() {
            var address = attrs.blockieAddress;
            console.log(address);
            element.css({
                'background-image': 'url(' + globalFuncs.getBlockie(address) +')'
            });
        });
    };
};
module.exports = blockiesDrtv;