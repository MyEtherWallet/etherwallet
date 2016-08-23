'use strict';
var bg = require('./bg');
var de = require('./de');
var el = require('./el');
var en = require('./en');
var es = require('./es');
var et = require('./et');
var fr = require('./fr');
var he = require('./he');
var id = require('./id');
var it = require('./it');
var ko = require('./ko');
var nl = require('./nl');
var no = require('./no');
var pl = require('./pl');
var pt = require('./pt');
var ru = require('./ru');
var sk = require('./sk');
var sl = require('./sl');
var sv = require('./sv');
var uk = require('./uk');
var vi = require('./vi');

var translate = function($translateProvider) {
  $translateProvider.translations(bg.code, translate.marked(bg.data));
  $translateProvider.translations(de.code, translate.marked(de.data));
  $translateProvider.translations(el.code, translate.marked(el.data));
  $translateProvider.translations(en.code, translate.marked(en.data));
  $translateProvider.translations(es.code, translate.marked(es.data));
  $translateProvider.translations(et.code, translate.marked(et.data));
  $translateProvider.translations(fr.code, translate.marked(fr.data));
  $translateProvider.translations(he.code, translate.marked(he.data));
  $translateProvider.translations(id.code, translate.marked(id.data));
  $translateProvider.translations(it.code, translate.marked(it.data));
  $translateProvider.translations(ko.code, translate.marked(ko.data));
  $translateProvider.translations(nl.code, translate.marked(nl.data));
  $translateProvider.translations(no.code, translate.marked(no.data));
  $translateProvider.translations(pl.code, translate.marked(pl.data)); 
  $translateProvider.translations(pt.code, translate.marked(pt.data));
  $translateProvider.translations(ru.code, translate.marked(ru.data));
  $translateProvider.translations(sk.code, translate.marked(sk.data));
  $translateProvider.translations(sl.code, translate.marked(sl.data));
  $translateProvider.translations(sv.code, translate.marked(sv.data));
  $translateProvider.translations(uk.code, translate.marked(uk.data));
  $translateProvider.translations(vi.code, translate.marked(vi.data));
	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy(null);
}
translate.marked = function(data) {
    var tData = data;
	for (var key in tData) if (tData.hasOwnProperty(key)) tData[key] = marked(tData[key]);
    return tData;
}
module.exports = translate;
