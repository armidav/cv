(function(){
	'use strict';
	window.jQuery = window.$ = function(selector){
		return document.querySelectorAll(selector);
	}

	const MESSAGES = {
		REQUIRED_ATTR: 'Failed to execute \'attr\' on \'Element\': 1 argument required, but only 0 present.',
		TYPE_STRING: 'ssss',
		REQUIRED_CSS: 'Failed to execute \'css\' on \'Element\': 1 argument required, but only 0 present.',
	};

//#region PROTOTYPE METHODS
	//SIGNATURE: attr(attrName, [attrValue])
	//RETURN TYPE: String | HTMLElement
	//PARAMS:
	//------attrName: String, requiered
	//------attrValue: String, optional
	HTMLElement.prototype.attr = function(attrName, attrValue){
		switch(arguments.length) {
			case 0: throw new TypeError(MESSAGES.REQUIRED_ATTR);
			case 1: return this.getAttribute(attrName);
			default: return this.setAttribute(attrName, attrValue);
		}
	}
	//$('caption')[0].val(), $('caption')[0].val('a')

	/*HTMLElement.prototype.val = function (text) {
		if (null == text) {
			return (this.title = text, this);
		}
		else  (return this.title);
	}*/
	HTMLElement.prototype.ttl  = function (attrTitle) {

		if (null == attrTitle) {
			return this.title;
		}
		else { 
			return (this.title = attrTitle, this);
		}
	}

	HTMLElement.prototype.on = function(eventName, functor) {
		return (this.addEventListener(eventName, functor), this);
	}

	HTMLElement.prototype.css = function (attrName, attrValue) {
		var computedCSS = getComputedStyle(this);
		switch(arguments.length) {
			case 0: throw new TypeError(MESSAGES.REQUIRED_CSS);
			case 1: return computedCSS.getPropertyValue(attrName);//this.style.getPropertyValue(attrName);
			default: return (this.style.setProperty(attrName, attrValue), this);//this.style.setProperty(attrName, attrValue);
		}
	}
})();
//#endregion PROTOTYPE METHODS

//#region STATIC METHODS
$.dir = console.dir;
$.log = console.log;
//#endregion STATIC METHODS

NosdeLit.prototype.filter = Array.prototype.filter;
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;

NodeList.prototype.sort = Array.prototype.sort;

NodeList.prototype.pop = Array.prototype.pop;
NodeList.prototype.push = Array.prototype.push;
NodeList.prototype.shift = Array.prototype.shift;
NodeList.prototype.unshift = Array.prototype.unshift;