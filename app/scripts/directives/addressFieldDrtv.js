'use strict';
var addressFieldDrtv = function($compile) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var varName = attrs.varName;
            var varArr = varName.split('.');
            var placeholder = attrs.placeholder == undefined ? 'mewtopia.eth or 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8' : attrs.placeholder ;
            var labelTranslated = attrs.labeltranslated == undefined ? 'ADDR_To' : attrs.labeltranslated ;
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
                ensAddressField: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
                derivedAddress: '',
                readOnly: false
            }
            element.html('<div class=\"col-xs-11\">\n \
                    <label translate=\"' + labelTranslated + '\"></label>\n \
                    <input class=\"form-control\" type=\"text\" placeholder=\"' + placeholder + '\" ng-model=\"addressDrtv.ensAddressField\" ng-disabled=\"addressDrtv.readOnly\" ng-class=\"Validator.isValidENSorEtherAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                    <p class="ens-response" ng-show="addressDrtv.showDerivedAddress"> ↳ <span class="mono ng-binding"> {{addressDrtv.derivedAddress}} </span> </p>\n \
                </div>\n \
                <div class=\"col-xs-1 address-identicon-container\">\n \
                   <div class=\"addressIdenticon\" title=\"Address Indenticon\" blockie-address=\"{{' + varName + '}}\" watch-var=\"' + varName + '\"></div>\n \
                </div>');
            scope.$watch('addressDrtv.ensAddressField', function() {
                var _ens = new ens();
                if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {
                    setValue(scope.addressDrtv.ensAddressField);
                    if (!Validator.isChecksumAddress(scope.addressDrtv.ensAddressField)) {
                        scope.notifier.info(globalFuncs.errorMsgs[35]);
                    }
                } else if (Validator.isValidENSAddress(scope.addressDrtv.ensAddressField)) {
                    _ens.getAddress(scope.addressDrtv.ensAddressField, function(data) {
                        if (data.error) uiFuncs.notifier.danger(data.msg);
                        else if (data.data == '0x0000000000000000000000000000000000000000' || data.data == '0x') {
                            setValue('0x0000000000000000000000000000000000000000');
                            scope.addressDrtv.derivedAddress = '0x0000000000000000000000000000000000000000';
                            scope.addressDrtv.showDerivedAddress = true;
                        } else {
                            setValue(data.data);
                            scope.addressDrtv.derivedAddress = ethUtil.toChecksumAddress(data.data);
                            scope.addressDrtv.showDerivedAddress = true;
                        }
                    });
                } else {
                    setValue('');
                    scope.addressDrtv.showDerivedAddress = false;
                }
            });
            $compile(element.contents())(scope);
        }
    };
};
module.exports = addressFieldDrtv;
