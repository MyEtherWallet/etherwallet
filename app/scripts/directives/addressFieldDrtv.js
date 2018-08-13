'use strict';
var addressFieldDrtv = function($compile, darkList) {
    return {
        restrict: "E",
        link: function(scope, element, attrs) {
            var Darklist = darkList();
            var varName = attrs.varName;
            var varArr = varName.split('.');
            var placeholder = attrs.placeholder == undefined ? 'mewtopia.eth or 0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D' : attrs.placeholder ;
            var labelTranslated = attrs.labeltranslated == undefined ? 'SEND_addr' : attrs.labeltranslated;
            var setValue = function(value) {
              var temp = scope;
              for (var i in varArr) {
                if (i == varArr.length - 1) temp[varArr[i]] = value;
                else {
                    temp = temp[varArr[i]];
                }
              }
            }

            var checkDarkList = function(value) {
              for(let i = 0; i < Darklist.length; i++) {
                if(value.length > 0 && value.toLowerCase() === Darklist[i].address.toLowerCase()) {
                  scope.phishing.msg = Darklist[i].comment !== '' ? `${globalFuncs.phishingWarning[0] + Darklist[i].comment}` : `${globalFuncs.phishingWarning[1]}`;
                  scope.phishing.error = true;
                  return;
                } else {
                  scope.phishing.msg = '';
                  scope.phishing.error = false;
                }
              }
            }
            scope.addressDrtv = {
                showDerivedAddress: false,
                ensAddressField: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
                derivedAddress: '',
                readOnly: false
            }

            scope.phishing = {
              msg: '',
              error: false
            }


            element.html(`
              <div class="col-xs-11">
                <label translate="${labelTranslated}"></label>
                <input class="form-control" type="text" placeholder="${placeholder}" ng-model="addressDrtv.ensAddressField" ng-disabled="addressDrtv.readOnly" ng-class="Validator.isValidENSorEtherAddress(${varName}) ? 'is-valid' : 'is-invalid'"/>
                <p class="ens-response" ng-show="addressDrtv.showDerivedAddress">
                  <span class="mono ng-binding"> ↳ {{addressDrtv.derivedAddress}} </span>
                </p>
                <p class="flagged-address" ng-show="phishing.error">
                  <span class="mono ng-binding"> {{phishing.msg}} </span>
                </p>
              </div>
              <div class="col-xs-1 address-identicon-container">
                <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{ ${varName} }}" watch-var="${varName}"></div>
              </div>
            `)



            scope.$watch('addressDrtv.ensAddressField', function() {
              var _ens = new ens();
              if (Validator.isValidAddress(scope.addressDrtv.ensAddressField)) {

                setValue(scope.addressDrtv.ensAddressField);
                scope.addressDrtv.showDerivedAddress = false;
                if (!Validator.isChecksumAddress(scope.addressDrtv.ensAddressField)) {
                  scope.notifier.info(globalFuncs.errorMsgs[35]);
                }
                checkDarkList(scope.addressDrtv.ensAddressField);

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
                    checkDarkList(ethUtil.toChecksumAddress(data.data));
                    scope.addressDrtv.showDerivedAddress = true;
                  }
                });
              } else {
                setValue('');
                if(scope.addressDrtv.ensAddressField !== '') {
                  scope.phishing.msg = 'Invalid address or ENS. Please make sure that the address or ENS you put in is valid';
                  scope.phishing.error = true;
                } else {
                  scope.addressDrtv.showDerivedAddress = false;
                  scope.phishing.msg = '';
                  scope.phishing.error = false;
                }
              }

            });
            $compile(element.contents())(scope);
        }
    };
};
module.exports = addressFieldDrtv;
