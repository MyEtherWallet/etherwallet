// Native Javascript for Bootstrap 3 | Collapse
// by dnp_theme

(function(factory){

	// CommonJS/RequireJS and "native" compatibility
	if(typeof module !== "undefined" && typeof exports == "object") {
		// A commonJS/RequireJS environment
		if(typeof window != "undefined") {
			// Window and document exist, so return the factory's return value.
			module.exports = factory();
		} else {
			// Let the user give the factory a Window and Document.
			module.exports = factory;
		}
	} else {
		// Assume a traditional browser.
		window.Collapse = factory();
	}

})(function(){

	// COLLAPSE DEFINITION
	// ===================
	var Collapse = function( element, options ) {
		options = options || {};
		this.isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false;
		this.btn = typeof element === 'object' ? element : document.querySelector(element);
		this.accordion = null;
		this.collapse = null;
		this.duration = 300; // default collapse transition duration
		this.options = {};
		this.options.duration = (this.isIE && this.isIE < 10) ? 0 : (options.duration || this.duration);
		this.init();
	};

	// COLLAPSE METHODS
	// ================
	Collapse.prototype = {

		init : function() {
			this.actions();
      this.addEvent();
		},

		actions : function() {
			var self = this;
			var getOuterHeight = function (el) {
				var s = el && el.currentStyle || window.getComputedStyle(el), // the getComputedStyle polyfill would do this for us, but we want to make sure it does
					btp = s.borderTopWidth || 0,
					mtp = /px/.test(s.marginTop)	? Math.round(s.marginTop.replace('px',''))		: 0,
					mbp = /px/.test(s.marginBottom)	? Math.round(s.marginBottom.replace('px',''))	: 0,
					mte = /em/.test(s.marginTop)	? Math.round(s.marginTop.replace('em','')		* parseInt(s.fontSize)) : 0,
					mbe = /em/.test(s.marginBottom)	? Math.round(s.marginBottom.replace('em','')	* parseInt(s.fontSize)) : 0;

				return el.clientHeight + parseInt( btp ) + parseInt( mtp ) + parseInt( mbp ) + parseInt( mte ) + parseInt( mbe ); //we need an accurate margin value
			};

			this.toggle = function(e) {
				self.btn = self.getTarget(e).btn;
				self.collapse = self.getTarget(e).collapse;

				if (!/in/.test(self.collapse.className)) {
					self.open(e);
				} else {
					self.close(e);
				}
			},
			this.close = function(e) {
				e.preventDefault();
				self.btn = self.getTarget(e).btn;
				self.collapse = self.getTarget(e).collapse;
				self._close(self.collapse);
				self.removeClass(self.btn,'collapsed');
			},
			this.open = function(e) {
				e.preventDefault();
				self.btn = self.getTarget(e).btn;
				self.collapse = self.getTarget(e).collapse;
				self.accordion = self.btn.getAttribute('data-parent') && self.getClosest(self.btn, self.btn.getAttribute('data-parent'));

				self._open(self.collapse);
				self.addClass(self.btn,'collapsed');

				if ( self.accordion !== null ) {
					var active = self.accordion.querySelectorAll('.collapse.in'), al = active.length, i = 0;
					for (i;i<al;i++) {
						if ( active[i] !== self.collapse) self._close(active[i]);
					}
				}
			},
			this._open = function(c) {
        self.removeEvent();
				self.addClass(c,'in');
				c.setAttribute('aria-expanded','true');
				self.addClass(c,'collapsing');
				setTimeout(function() {
          var h = self.getMaxHeight(c);
					c.style.height = h + 'px';										
					c.style.overflowY = 'hidden';
				}, 0);	
				setTimeout(function() {
					c.style.height = ''; 
					c.style.overflowY = '';
					self.removeClass(c,'collapsing');
          self.addEvent();
				}, self.options.duration);
			},
			this._close = function(c) {
        self.removeEvent();
				c.setAttribute('aria-expanded','false');				
				c.style.height = self.getMaxHeight(c) + 'px';				
				setTimeout(function() {
					c.style.height = '0px';		
					c.style.overflowY = 'hidden';
					self.addClass(c,'collapsing');
				}, 0);
				
				setTimeout(function() {
					self.removeClass(c,'collapsing');
					self.removeClass(c,'in'); 
					c.style.overflowY = '';
					c.style.height = '';					
          self.addEvent();
				}, self.options.duration);
			},
			this.getMaxHeight = function(l) { // get collapse trueHeight and border
				var h = 0;
				for (var k = 0, ll = l.children.length; k < ll; k++) {
					h += getOuterHeight(l.children[k]);
				}
				return h;
			},
			this.removeEvent = function() {
        this.btn.removeEventListener('click', this.toggle, false);
      },
			this.addEvent = function() {
        this.btn.addEventListener('click', this.toggle, false);
      },
			this.getTarget = function(e) {
				var t = e.currentTarget || e.srcElement,
					h = t.href && t.getAttribute('href').replace('#',''),
					d = t.getAttribute('data-target') && ( t.getAttribute('data-target') ),
					id = h || ( d && /#/.test(d)) && d.replace('#',''),
					cl = (d && d.charAt(0) === '.') && d, //the navbar collapse trigger targets a class
					c = id && document.getElementById(id) || cl && document.querySelector(cl);

				return {
					btn : t,
					collapse : c
				};
			},

			this.getClosest = function (el, s) { //el is the element and s the selector of the closest item to find
			// source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
				var f = s.charAt(0);
				for ( ; el && el !== document; el = el.parentNode ) {// Get closest match
					if ( f === '.' ) {// If selector is a class
						if ( document.querySelector(s) !== undefined ) { return el; }
					}
					if ( f === '#' ) { // If selector is an ID
						if ( el.id === s.substr(1) ) { return el; }
					}
				}
				return false;
			};
			this.addClass = function(el,c) {	
				if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; }
			};
			this.removeClass = function(el,c) {
				if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
			};
		}
	};

	// COLLAPSE DATA API
	// =================
	var Collapses = document.querySelectorAll('[data-toggle="collapse"]'), i = 0, cll = Collapses.length;
	for (i;i<cll;i++) {
		var item = Collapses[i], options = {};
		options.duration = item.getAttribute('data-duration');
		new Collapse(item,options);
	}

	return Collapse;

});
