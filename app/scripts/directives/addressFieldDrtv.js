'use strict';
var addressFieldDrtv = function($compile) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var varName = attrs.varName;
            var varArr = varName.split('.');
            var readOnly = attrs.readOnly ? attrs.readOnly : false;
            var placeholder = attrs.placeholder;
            var setValue = function(value) {
                var temp = scope;
                for (var i in varArr) {
                    if (i == varArr.length - 1) temp[varArr[i]] = value;
                    else {
                        temp = temp[varArr[i]];
                    }
                }
            }
            scope.addressDrtv = {
                showDerivedAddress: false,
                ensAddressField: '',
                derivedAddress: ''
            }
            element.html('<div class=\"col-xs-10\">\n \
                    <label translate=\"SEND_addr\"> To Address: </label>\n \
                    <input class=\"form-control\"  type=\"text\" placeholder=\"' + placeholder + '\" ng-class=\"Validator.isValidAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                    <input ng-hide="true" class=\"form-control\"  type=\"text\" ng-model=\"' + varName + '\" ng-disabled=\"true\"/>\n \
                </div>\n \
                <div class=\"col-xs-2 address-identicon-container\">\n \
                   <div class=\"addressIdenticon\" title=\"Address Indenticon\" blockie-address=\"{{' + varName + '}}\" watch-var=\"' + varName + '\"></div>\n \
                </div>');
            $compile(element.contents())(scope);
        }
    };
};
module.exports = addressFieldDrtv;


/*
26                     <input class=\"form-control\"  type=\"text\" placeholder=\"' + placeholder + '\" ng-model=\"addressDrtv.ensAddressField\" ng-disabled=\"' + readOnly + '\" ng-class=\"Validator.isValidENSorEtherAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
27                     <p class="ens-response" ng-show="addressDrtv.showDerivedAddress"> ↳ <span class="mono ng-binding"> {{addressDrtv.derivedAddress}} </span> </p>\n \

scope.$watch('addressDrtv.ensAddressField', function() {
    var _ens = new ens();
    if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {
        setValue(scope.addressDrtv.ensAddressField);
        _ens.getName(scope.addressDrtv.ensAddressField.substring(2) + '.addr.reverse', function(data) {
            if (data.error) uiFuncs.notifier.danger(data.msg);
            else if (data.data == '0x') {
                scope.addressDrtv.showDerivedAddress = false;
            } else {
                scope.addressDrtv.derivedAddress = data.data;
                scope.addressDrtv.showDerivedAddress = true;
            }
        });
    } else if (Validator.isValidENSAddress(scope.addressDrtv.ensAddressField)) {
        _ens.resolveAddressByName(scope.addressDrtv.ensAddressField, function(data) {
            if (data.error) uiFuncs.notifier.danger(data.msg);
            else if (data.data == '0x0000000000000000000000000000000000000000' || data.data == '0x') {
                setValue('0x0000000000000000000000000000000000000000');
                scope.addressDrtv.derivedAddress = '0x0000000000000000000000000000000000000000';
                scope.addressDrtv.showDerivedAddress = true;
            } else {
                setValue(data.data);
                scope.addressDrtv.derivedAddress = data.data;
                scope.addressDrtv.showDerivedAddress = true;
            }
        });
    } else {
        setValue('');
        scope.addressDrtv.showDerivedAddress = false;
    }
});
*/
