'use strict';
var bg = require('./bg');
var de = require('./de');
var en = require('./en');
var es = require('./es');
var fr = require('./fr');
var it = require('./it');
var ko = require('./ko');
var nl = require('./nl');
var no = require('./no');
var ru = require('./ru');
var sl = require('./sl');
var vi = require('./vi');
var test = require('./test');

var translate = function($translateProvider) {
  $translateProvider.translations(bg.code, translate.marked(bg.data));
  $translateProvider.translations(de.code, translate.marked(de.data));
  $translateProvider.translations(en.code, translate.marked(en.data));
  $translateProvider.translations(es.code, translate.marked(es.data));
  $translateProvider.translations(fr.code, translate.marked(fr.data));
  $translateProvider.translations(it.code, translate.marked(it.data));
  $translateProvider.translations(ko.code, translate.marked(ko.data));
  $translateProvider.translations(nl.code, translate.marked(nl.data));
  $translateProvider.translations(no.code, translate.marked(no.data));
  $translateProvider.translations(ru.code, translate.marked(ru.data));
  $translateProvider.translations(sl.code, translate.marked(sl.data));
  $translateProvider.translations(vi.code, translate.marked(vi.data));
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
