'use strict';
var QRCodeDrtv = function() {
	return function(scope, element, attrs) {
		var watchVar = attrs.watchVar;
		scope.$watch(watchVar, function() {
			var value = attrs.qrCode;
			element.empty();
			var delay = 0;
			if (element[0].clientWidth == 0) delay = 200;
			setTimeout(function() {
				new QRCode(element[0], {
					text: value,
					width: element[0].clientWidth,
					height: element[0].clientWidth,
					colorDark: "#000000",
					colorLight: "#ffffff",
					correctLevel: QRCode.CorrectLevel.M
				});
        element[0].title = ''
			}, delay);
		});
	};
};
module.exports = QRCodeDrtv;
