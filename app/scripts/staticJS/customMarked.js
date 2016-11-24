'use strict';
var marked = require('marked');
var myRenderer = new marked.Renderer();
myRenderer.paragraph = function(text) {
	return text + '\n';
};
myRenderer.link = function(href, title, text) {
	if (this.options.sanitize) {
		try {
			var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
		} catch (e) {
			return '';
		}
		if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
			return '';
		}
	}
	var out = '<a target="_blank" href="' + href + '"';
	if (title) {
		out += ' title="' + title + '"';
	}
	out += '>' + text + '</a>';
	return out;
};
marked.setOptions({
	renderer: myRenderer
});
module.exports = marked;