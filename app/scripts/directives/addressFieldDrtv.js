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
                showEtherAddress: false,
                ensAddressField: ''
            }
            element.html('<div class=\"col-xs-10\">\n \
                    <label translate=\"SEND_addr\"> To Address: </label>\n \
                    <input class=\"form-control\"  type=\"text\" placeholder=\"' + placeholder + '\" ng-model=\"addressDrtv.ensAddressField\" ng-disabled=\"' + readOnly + '\" ng-class=\"Validator.isValidENSorEtherAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                    <p class="ens-response"> ↳ <span class="mono ng-binding"> ENS_ADDRESS_GOES_HERE </span> </p>\n \
                    <input class=\"form-control\"  type=\"text\" show="addressDrtv.showEtherAddress" ng-model=\"' + varName + '\" ng-disabled=\"true\" ng-class=\"Validator.isValidAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                </div>\n \
                <div class=\"col-xs-2 address-identicon-container\">\n \
                   <div class=\"addressIdenticon\" title=\"Address Indenticon\" blockie-address=\"{{' + varName + '}}\" watch-var=\"' + varName + '\"></div>\n \
                </div>');
            $compile(element.contents())(scope);
            scope.$watch('addressDrtv.ensAddressField', function() {
                if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {
                    setValue(scope.addressDrtv.ensAddressField);
                } else if(Validator.isValidENSAddress(scope.addressDrtv.ensAddressField)){
                  var _ens = new ens();
                  _ens.getOwner(scope.addressDrtv.ensAddressField, function(data){
                    if(data.error) uiFuncs.notifier.danger(data.msg);
                    else setValue(data.data);
                  })
                } else {
                  setValue('');
                }
            });
        }
    };
};
module.exports = addressFieldDrtv;
