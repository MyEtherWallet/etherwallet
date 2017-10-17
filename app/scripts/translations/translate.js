 'use strict';
  var ca = require('./ca');
  var de = require('./de');
  var el = require('./el');
  var en = require('./en');
  var es = require('./es');
  var fa = require('./fa');
  var fi = require('./fi');
  var fr = require('./fr');
  var ht = require('./ht');
  var hu = require('./hu');
  var id = require('./id');
  var it = require('./it');
  var ja = require('./ja');
  var ko = require('./ko');
  var nl = require('./nl');
  var no = require('./no');
  var pl = require('./pl');
  var pt = require('./pt');
  var ru = require('./ru');
  var th = require('./th');
  var tr = require('./tr');
  var vi = require('./vi');
  var zhcn = require('./zhcn');
  var zhtw = require('./zhtw');

 var translate = function($translateProvider) {
  $translateProvider.translations(ca.code, translate.marked(ca.data));
  $translateProvider.translations(de.code, translate.marked(de.data));
  $translateProvider.translations(el.code, translate.marked(el.data));
  $translateProvider.translations(en.code, translate.marked(en.data));
  $translateProvider.translations(es.code, translate.marked(es.data));
  $translateProvider.translations(fa.code, translate.marked(fa.data));
  $translateProvider.translations(fi.code, translate.marked(fi.data));
  $translateProvider.translations(fr.code, translate.marked(fr.data));
  $translateProvider.translations(ht.code, translate.marked(ht.data));
  $translateProvider.translations(hu.code, translate.marked(hu.data));
  $translateProvider.translations(id.code, translate.marked(id.data));
  $translateProvider.translations(it.code, translate.marked(it.data));
  $translateProvider.translations(ja.code, translate.marked(ja.data));
  $translateProvider.translations(ko.code, translate.marked(ko.data));
  $translateProvider.translations(nl.code, translate.marked(nl.data));
  $translateProvider.translations(no.code, translate.marked(no.data));
  $translateProvider.translations(pl.code, translate.marked(pl.data));
  $translateProvider.translations(pt.code, translate.marked(pt.data));
  $translateProvider.translations(ru.code, translate.marked(ru.data));
  $translateProvider.translations(th.code, translate.marked(th.data));
  $translateProvider.translations(tr.code, translate.marked(tr.data));
  $translateProvider.translations(vi.code, translate.marked(vi.data));
  $translateProvider.translations(zhcn.code, translate.marked(zhcn.data));
  $translateProvider.translations(zhtw.code, translate.marked(zhtw.data));
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useSanitizeValueStrategy(null);
 }

translate.marked = function(data) {
    var tData = data;
	for (var key in tData) if (tData.hasOwnProperty(key)) tData[key] = marked(tData[key]);
    return tData;
}
module.exports = translate;
