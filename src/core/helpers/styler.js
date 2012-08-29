define([], function() {
	/**
	 Styler is used to attach css style sheets to the DOM (Document Object Model) and to attach css text to existing style sheets

	 @namespace Boiler.Helpers
	 @module BoilerCoreClasses
	 @class Styler
	 @constructor
	 **/
	var Styler = function() {
	};
	/**
	 Attach a css link to the DOM

	 @method attachCssLink
	 @param {Object} elementId Element ID
	 @param {Object} css
	 **/
	Styler.attachCssLink = function(elementId, href) {
		var link = document.getElementById(elementId);
		if (!link) {
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = href;
			document.getElementsByTagName("head")[0].appendChild(link);
		} else {
			link.href = href;
		}

	};
	/**
	 Attach css text to an existing style sheet

	 @method attachCssText
	 @param {Object} elementId Element ID
	 @param {Object} css
	 **/
	Styler.attachCssText = function(elementId, css) {

		var elem = document.getElementById(elementId);
		if (elem) {
			elem.parentNode.removeChild(elem);
		}

		var style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute("id", elementId);

		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName('head')[0].appendChild(style);

	};

	return Styler;
});
