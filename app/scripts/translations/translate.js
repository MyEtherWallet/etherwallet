'use strict';
var en = require('./en');
var fr = require('./fr');
var translate = function($translateProvider) {
	$translateProvider.translations(en.code, en.data);
    $translateProvider.translations(fr.code, fr.data);
	$translateProvider.preferredLanguage(fr.code);
    $translateProvider.useSanitizeValueStrategy('sanitize');
}
module.exports = translate;