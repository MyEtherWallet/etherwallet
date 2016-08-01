'use strict';
var en = require('./en');
var fr = require('./fr');
var translate = function($translateProvider) {
	$translateProvider.translations(en.code, translate.marked(en.data));
	$translateProvider.translations(fr.code, translate.marked(fr.data));
	$translateProvider.preferredLanguage(en.code);
	$translateProvider.useSanitizeValueStrategy(null);
}
translate.marked = function(data) {
    var tData = data;
	for (var key in tData) if (tData.hasOwnProperty(key)) tData[key] = marked(tData[key]);
    return tData;
}
module.exports = translate;