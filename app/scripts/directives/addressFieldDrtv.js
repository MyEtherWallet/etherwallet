'use strict';
var addressFieldDrtv = function($compile) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var varName = attrs.varName;
            var varArr = varName.split('.');
            var readOnly = attrs.readOnly ? attrs.readOnly : false;
            var placeholder = attrs.placeholder;

            scope.showAddrDropdown = false;

            scope.addressDrtv = {
                showEtherAddress: false,
                ensAddressField: '',
                addrType: 'unknown',
                addrLabel: '...'
            }

            var setValue = function(value) {
                var temp = scope;
                for (var i in varArr) {
                    if (i == varArr.length - 1) temp[varArr[i]] = value;
                    else {
                        temp = temp[varArr[i]];
                    }
                }
            }

            element.html('<div class=\"col-xs-10\">\n \
                    <label translate=\"SEND_addr\"> To Address: </label>\n \
                    <div class="input-group">\n \
                      <input class=\"form-control\" type=\"text\" placeholder=\"' + placeholder + '\" ng-model=\"addressDrtv.ensAddressField\" ng-disabled=\"' + readOnly + '\" ng-class=\"Validator.isValidENSorEtherAddress(addressDrtv.ensAddressField) && Validator.isValidAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/>\n \
                      <div class=\"input-group-btn\">\n \
                        <a class=\"btn btn-default dropdown-toggle\" class=\"dropdown-toggle\" ng-click=\"showAddrDropdown=!showAddrDropdown\" >\n \
                          {{ addressDrtv.addrLabel }} <i class=\"caret\"></i>\n \
                        </a>\n \
                        <ul class=\"dropdown-menu dropdown-menu-right\" ng-show=\"showAddrDropdown\">\n \
                          <li><a ng-click=\"showAddrDropdown==!showAddrDropdown && addressDrtv.addrLabel=\'.eth\'\">.eth</a></li>\n \
                          <li><a ng-click=\"showAddrDropdown==!showAddrDropdown && addressDrtv.addrLabel=\'0x address\'\">0x address</a></li>\n \
                        </ul>\n \
                      </div>\n \
                    </div>\n \
                </div>\n \
                <div class=\"col-xs-2 address-identicon-container\">\n \
                   <div class=\"addressIdenticon\" title=\"Address Indenticon\" blockie-address=\"{{' + varName + '}}\" watch-var=\"' + varName + '\"></div>\n \
                </div>\n \
                <div class=\"col-xs-1\">↳ </div>\n \
                <div class=\"col-xs-11\"><input type=\"text\" show="addressDrtv.showEtherAddress" ng-model=\"' + varName + '\" ng-disabled=\"true\" ng-class=\"Validator.isValidAddress(' + varName + ') ? \'is-valid\' : \'is-invalid\'\"/></div>'
                );
            $compile(element.contents())(scope);
            scope.$watch('addressDrtv.ensAddressField', function() {
                if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {
                    scope.addressDrtv.addrLabel == '0x address'
                    setValue(scope.addressDrtv.ensAddressField);
                } else if(Validator.isValidENSAddress(scope.addressDrtv.ensAddressField)){
                  scope.addressDrtv.addrLabel == '.eth'
                  var _ens = new ens();
                  _ens.getOwner(scope.addressDrtv.ensAddressField+'.eth', function(data){
                    if(data.error) uiFuncs.notifier.danger(data.msg);
                    else setValue(data.data);
                  })
                } else if( scope.addressDrtv.ensAddressField.length < 30) {
                  scope.addressDrtv.addrLabel == '.eth'
                } else if( scope.addressDrtv.ensAddressField.indexOf('0x') > -1 ) {
                  scope.addressDrtv.addrLabel == '0x address'
                } else {
                  scope.addressDrtv.addrLabel == '.....'
                  setValue('');
                }
            });
        }
    };
};
module.exports = addressFieldDrtv;
