'use strict';
var en = require('./en');
var de = require('./de');
var es = require('./es');
var fr = require('./fr');
var ko = require('./ko');
var no = require('./no');
var test = require('./test');

var translate = function($translateProvider) {
	$translateProvider.translations(en.code, translate.marked(en.data));
  $translateProvider.translations(de.code, translate.marked(de.data));
  $translateProvider.translations(es.code, translate.marked(es.data));
  $translateProvider.translations(fr.code, translate.marked(fr.data));
  $translateProvider.translations(ko.code, translate.marked(ko.data));
  $translateProvider.translations(no.code, translate.marked(no.data));
  $translateProvider.translations(test.code, translate.marked(test.data));
	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy(null);
}
translate.marked = function(data) {
    var tData = data;
	for (var key in tData) if (tData.hasOwnProperty(key)) tData[key] = marked(tData[key]);
    return tData;
}
module.exports = translate;
