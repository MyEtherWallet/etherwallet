// Native Javascript for Bootstrap 3 | Modal
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
		window.Modal = factory();
	}

})(function(){
	
	//MODAL DEFINITION
  var Modal = function(element, options) { // element is the trigger button / options.target is the modal
    options = options || {};
    this.isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat( RegExp.$1 ) : false; 
    this.modal = typeof element === 'object' ? element : document.querySelector(element);
    this.options = {};
		this.options.backdrop = options.backdrop === 'false' ? false : true;
		this.options.keyboard = options.keyboard === 'false' ? false : true;
		this.options.content = options.content;
		this.duration = options.duration || 300; // the default modal fade duration option
		this.options.duration = (this.isIE && this.isIE < 10) ? 0 : this.duration;

		this.scrollbarWidth		= 0;
    this.dialog = this.modal.querySelector('.modal-dialog');
		this.timer = 0;

		this.init();
  };
	
	var getWindowWidth = function() {
		var htmlRect = document.documentElement.getBoundingClientRect(), 
			fullWindowWidth = window.innerWidth || (htmlRect.right - Math.abs(htmlRect.left));
		return fullWindowWidth;
	};
  Modal.prototype = {
		
		init : function() {			
				
			this.actions();
			this.trigger();	
			if ( this.options.content && this.options.content !== undefined ) {				
				this.content( this.options.content );
			}
		},
		
		actions : function() {
			var self = this;
			this.open = function() {
				this._open();
			},
		
			this.close = function() {
				this._close();
			},
		
			this._open = function() {
				var currentOpen = document.querySelector('.modal.in');
        if (currentOpen){
            clearTimeout(currentOpen.getAttribute('data-timer'));
            this.removeClass(currentOpen,'in');
            setTimeout( function() {
              currentOpen.setAttribute('aria-hidden', true);
              currentOpen.style.display = '';
            }, self.options.duration/2);
        }
        		
				if ( this.options.backdrop ) {
					this.createOverlay();
				} else { this.overlay = null }
				
				if ( this.overlay ) {
					setTimeout( function() {																
						self.addClass(self.overlay,'in');
					}, 0);						
				}
								
				clearTimeout(self.modal.getAttribute('data-timer'));
				this.timer = setTimeout( function() {
					self.modal.style.display = 'block';
					
					self.checkScrollbar();
					self.adjustDialog();
					self.setScrollbar();
					
					self.resize();
					self.dismiss();
					self.keydown();			
					
					self.addClass(document.body,'modal-open');
					self.addClass(self.modal,'in');
					self.modal.setAttribute('aria-hidden', false);
				}, self.options.duration/2);
				this.modal.setAttribute('data-timer',self.timer);
			},
		
			this._close = function() {

				if ( this.overlay ) {					
					this.removeClass(this.overlay,'in');
				}			
				this.removeClass(this.modal,'in');
				this.modal.setAttribute('aria-hidden', true);
								
				clearTimeout(self.modal.getAttribute('data-timer'));
				this.timer = setTimeout( function() {
					self.removeClass(document.body,'modal-open');
					self.resize();
					self.resetAdjustments();
					self.resetScrollbar();			
					
					self.dismiss();
					self.keydown();										
					self.modal.style.display = '';
				}, self.options.duration/2);
				this.modal.setAttribute('data-timer',self.timer);
				
				setTimeout( function() {
					if (!document.querySelector('.modal.in')) {	self.removeOverlay(); }
				}, self.options.duration);	
			},
		
			this.content = function( content ) {
				return this.modal.querySelector('.modal-content').innerHTML = content;
			},
		
			this.createOverlay = function() {
				var backdrop = document.createElement('div'), overlay = document.querySelector('.modal-backdrop');
				backdrop.setAttribute('class','modal-backdrop fade');
		
				if ( overlay ) {
					this.overlay = overlay;
				} else {
					this.overlay = backdrop;
					document.body.appendChild(backdrop);
				}
			},
		
			this.removeOverlay = function() {
				var overlay = document.querySelector('.modal-backdrop');
				if ( overlay !== null && overlay !== undefined ) {
					document.body.removeChild(overlay)
				}
			},
		
			this.keydown = function() {
				function keyHandler(e) {
					if (self.options.keyboard && e.which == 27) {
						self.close();
					}					
				}
				if (!/in/.test(this.modal.className)) {
					document.addEventListener('keydown', keyHandler, false);
				} else {
					document.removeEventListener('keydown', keyHandler, false);
				}	
			},
		
			this.trigger = function() {
				var triggers = document.querySelectorAll('[data-toggle="modal"]'), tgl = triggers.length, i = 0;
				for ( i;i<tgl;i++ ) {
					triggers[i].addEventListener('click', function(e) {
						var b = e.target,
						s = b.getAttribute('data-target') && b.getAttribute('data-target').replace('#','')
						|| b.getAttribute('href') && b.getAttribute('href').replace('#','');
						if ( document.getElementById( s ) === self.modal ) {
							self.open()
						}
					})
				}
			},
		
			this._resize = function() {
				var overlay = this.overlay||document.querySelector('.modal-backdrop'),
					dim = { w: document.documentElement.clientWidth + 'px', h: document.documentElement.clientHeight + 'px' };
				// setTimeout(function() {
					if ( overlay !== null && /in/.test(overlay.className) ) {
						overlay.style.height = dim.h; overlay.style.width = dim.w;
					}
				// }, self.options.duration/2)
			},
			
			this.oneResize = function() {
				function oneResize() {
					self._resize();
					self.handleUpdate();
					window.removeEventListener('resize', oneResize, false);
				}
				window.addEventListener('resize', oneResize, false);			
			},
		
			this.resize = function() {
				function resizeHandler() {
					// setTimeout(function() {
						self._resize();
						self.handleUpdate();
						// console.log('offresize')
					// }, 100)
				}			

				if (!/in/.test(this.modal.className)) {
					window.addEventListener('resize', this.oneResize, false);
				} else {
					window.removeEventListener('resize', this.oneResize, false);
				}
					
			},
		
			this.dismiss = function() {
				function dismissHandler(e) {
					if ( e.target.parentNode.getAttribute('data-dismiss') === 'modal' || e.target.getAttribute('data-dismiss') === 'modal' || e.target === self.modal ) {
						e.preventDefault(); self.close()
					}
				}					
				if (!/in/.test(this.modal.className)) {
					this.modal.addEventListener('click', dismissHandler, false);
				} else {
					this.modal.removeEventListener('click', dismissHandler, false);
				}	
			},
		
			// these following methods are used to handle overflowing modals
			
			this.handleUpdate = function () {
				this.adjustDialog(); 
			},
			
			this.adjustDialog = function () {
				this.modal.style.paddingLeft = !this.bodyIsOverflowing && this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
				this.modal.style.paddingRight = this.bodyIsOverflowing && !this.modalIsOverflowing ? this.scrollbarWidth + 'px' : '';
			},
			
			this.resetAdjustments = function () {
				this.modal.style.paddingLeft = '';
				this.modal.style.paddingRight = '';
			},
			
			this.checkScrollbar = function () {	
				this.bodyIsOverflowing = document.body.clientWidth < getWindowWidth();
				this.modalIsOverflowing = this.modal.scrollHeight > document.documentElement.clientHeight;
				this.scrollbarWidth = this.measureScrollbar();
			},
			
			this.setScrollbar = function () {
				var bodyStyle = window.getComputedStyle(document.body), bodyPad = parseInt((bodyStyle.paddingRight), 10);
				if (this.bodyIsOverflowing) { document.body.style.paddingRight = (bodyPad + this.scrollbarWidth) + 'px'; }
			},
			
			this.resetScrollbar = function () {
				document.body.style.paddingRight = '';
			},
			
			this.measureScrollbar = function () { // thx walsh
				var scrollDiv = document.createElement('div');
				scrollDiv.className = 'modal-scrollbar-measure';
				document.body.appendChild(scrollDiv);
				var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
				return scrollbarWidth;
			},
			
			this.addClass = function(el,c) {	
				if (el.classList) { el.classList.add(c); } else { el.className += ' '+c; }
			},
			
			this.removeClass = function(el,c) {
				if (el.classList) { el.classList.remove(c); } else { el.className = el.className.replace(c,'').replace(/^\s+|\s+$/g,''); }
			}
		}
	};	
	
	// DATA API
	var Modals = document.querySelectorAll('.modal'), mdl = Modals.length, i = 0;
	for ( i;i<mdl;i++ ) {
		var modal = Modals[i], options = {};
		options.keyboard = modal.getAttribute('data-keyboard');
		options.backdrop = modal.getAttribute('data-backdrop');
		options.duration = modal.getAttribute('data-duration');
		new Modal(modal,options)
	}

	return Modal;

});
