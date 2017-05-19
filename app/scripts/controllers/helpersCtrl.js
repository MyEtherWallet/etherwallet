'use strict';

var helpersCtrl = function($scope) {
  var unitNames = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether', 'kether', 'mether', 'gether', 'tether']

  $scope.units = {
    ether: 1
  };
  $scope.decimalNumber = 10;
  $scope.inputText = 'hello';

  $scope.convertUnit = function (currentUnit) {
    unitNames.forEach(function (unit) {
      if (currentUnit !== unit) {
        $scope.units[unit] = $scope.units[currentUnit] ? etherUnits.unitToUnit($scope.units[currentUnit], currentUnit, unit) : '';
      }
    })
  }

  $scope.decimalToHex = function () {
    $scope.hexNumber = $scope.decimalNumber ? ethFuncs.decimalToHex($scope.decimalNumber) : '';
  }

  $scope.hexToDecimal = function () {
    $scope.decimalNumber = $scope.hexNumber ? ethFuncs.hexToDecimal($scope.hexNumber) : '';
  }

  $scope.toSHA3 = function () {
    $scope.outputText = $scope.inputText ? ethUtil.sha3($scope.inputText).toString('hex') : '';
  }

  $scope.convertUnit('ether');
  $scope.decimalToHex();
  $scope.toSHA3();
};

module.exports = helpersCtrl;
