define([], function() {

	var Styler = function() {
	};

	Styler.attachCssLink = function(elementId, css) {
		var style = document.getElementById(elementId);
		if (!style) {
			var style = document.createElement("link");
			style.type = "text/css";
			style.rel = "stylesheet";
			style.href = "style.css";
		}

		document.getElementsByTagName("head")[0].appendChild(ss);
	};

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
