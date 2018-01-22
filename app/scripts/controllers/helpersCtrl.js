'use strict';
var helpersCtrl = function($scope) {
    var ENS = new ens();

    var unitNames = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether', 'kether', 'mether', 'gether', 'tether']

    $scope.units = {
        ether: 1
    };

    $scope.decimalNumber = 10;
    $scope.inputText = 'hello';

    $scope.convertUnit = function(currentUnit) {
        unitNames.forEach(function(unit) {
            if (currentUnit !== unit) {
                $scope.units[unit] = $scope.units[currentUnit] ? etherUnits.unitToUnit($scope.units[currentUnit], currentUnit, unit) : '';
            }
        })
    }

    $scope.decimalToHex = function() {
        $scope.hexNumber = $scope.decimalNumber ? ethFuncs.decimalToHex($scope.decimalNumber) : '';
        $scope.hexToPaddedHex();
    }

    $scope.hexToDecimal = function() {
        $scope.decimalNumber = $scope.hexNumber ? ethFuncs.hexToDecimal($scope.hexNumber) : '';
        $scope.hexToPaddedHex();
    }

    $scope.hexToPaddedHex = function() {
        $scope.hexPaddedLeft = $scope.hexNumber ? ethFuncs.padLeft($scope.hexNumber, 64, '0') : '';
    }

    $scope.toSHA3 = function() {
        $scope.outputText = $scope.inputText ? ethUtil.sha3($scope.inputText).toString('hex') : '';
    }


    /* ENS STUFF */
    $scope.toEnsLabelHash = function() {
        $scope.ensLabelHash = $scope.ensLabel ? ENS.getSHA3($scope.ensLabel) : '';
        $scope.allTheThings();
    }

    $scope.toEnsSecretHash = function() {
        $scope.ensSecretHash = $scope.ensSecret ? ENS.getSHA3($scope.ensSecret.trim()) : '';
        $scope.allTheThings();
    }

    $scope.toBidWei = function() {
        $scope.bidWei = $scope.bidEth ? Number(etherUnits.toWei($scope.bidEth, 'ether')) : '';
        $scope.toBidHex();
    }

    $scope.toBidEth = function() {
        $scope.bidEth = $scope.bidWei ? Number(etherUnits.toEther($scope.bidWei, 'wei')) : '';
        $scope.toBidHex();
    }

    $scope.toBidHex = function() {
        $scope.bidHex = $scope.bidWei ? ethFuncs.padLeft(ethFuncs.decimalToHex($scope.bidWei), 64, '0') : '';
        $scope.allTheThings();
    }

    $scope.allTheThings = function() {
        $scope.getStartAuctionData();
        $scope.getShaBid();
        $scope.getStartAndBidAuctionData();
        $scope.getRevealBidData();
        $scope.getFinalizeAuctionData();
    }

    $scope.getStartAuctionData = function() {
        $scope.startAuctionData = $scope.ensLabel ? ENS.getStartAuctionData($scope.ensLabel) : '';
    }

    $scope.getShaBid = function() {
        if ($scope.ensLabelHash && $scope.ensAddress && $scope.bidWei && $scope.ensSecretHash) {
            ENS.shaBid($scope.ensLabelHash, $scope.ensAddress.toLowerCase(), $scope.bidWei, $scope.ensSecretHash, function(data) {
                $scope.shaBid = ENS.getNewBidData(data.data)
            });
        } else {
            $scope.shaBid = '';
        }
    }

    $scope.getStartAndBidAuctionData = function() {
        if ($scope.ensLabelHash && $scope.ensAddress && $scope.bidWei && $scope.ensSecretHash) {
          ENS.shaBid($scope.ensLabelHash, $scope.ensAddress.toLowerCase(), $scope.bidWei, $scope.ensSecretHash, function(data) {
              $scope.startAndBidAuctionData = ENS.getStartAndBidAuctionData($scope.ensLabel, ENS.getNewBidData(data.data))
          });
        } else {
          $scope.startAndBidAuctionData = '';
        }
    }

    $scope.getRevealBidData = function() {
        if ($scope.ensLabel && $scope.bidWei && $scope.ensSecret) {
            $scope.revealBidData = ENS.getRevealBidData($scope.ensLabel, $scope.bidWei, $scope.ensSecret)
        } else {
            $scope.revealBidData = '';
        }
    }

    $scope.getFinalizeAuctionData = function() {
        $scope.finalizeAuctionData = $scope.ensLabel ? ENS.getFinalizeAuctionData($scope.ensLabel) : '';
    }

    $scope.findMyPrivateKey = function() {
        var setCharAt = function(str, index, chr) {
            if (index > str.length - 1) return str;
            return str.substr(0, index) + chr + str.substr(index + 1);
        }
        var basePrivateKey = $scope.mistypedPK;
        var targetPublicAddress = $scope.mistypedAddr;
        basePrivateKey = basePrivateKey.substring(0, 2) == '0x' ? basePrivateKey.substring(2) : basePrivateKey;
        var characters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var isFound = false;
        for (var keyPosition = 0; keyPosition < basePrivateKey.length; keyPosition++) {
            for (var character = 0; character < characters.length; character++) {
                var privateKeyGuess = setCharAt(basePrivateKey, keyPosition, characters[character]);
                var wallet = Wallet.fromPrivateKey(privateKeyGuess);
                var publicAddress = wallet.getAddressString();
                if (publicAddress.toLowerCase() == targetPublicAddress.toLowerCase()) {
                    $scope.actualPK = privateKeyGuess;
                    isFound = true;
                }
            }
        }
        if (!isFound)
            $scope.actualPK = "Sorry not found :(";
    }

    $scope.convertUnit('ether');
    $scope.decimalToHex();
    $scope.toSHA3();
};

module.exports = helpersCtrl;



/*

0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8
mewtopia
0.01
exact depend exhibit

START AUCTION
0xede8acdb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a

NEW BID
0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65

UNSEAL
0x47872b4207aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a000000000000000000000000000000000000000000000000002386f26fc1000000d70f3b7e512382c3b5e27dd15df51c68c0a18528a604792ff20890eec20a31

FINALIZE
0x983b94fb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a

*/
