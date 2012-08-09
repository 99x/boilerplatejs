define([], function() {

	var Styler = function() {};


	Styler.linkCss = function (styleText) {
        var head = document.getElementsByTagName('head')[0]; // Get head element

        var style = document.createElement('style'); // Create style Node
        style.type = 'text/css';

        var cssRules = document.createTextNode(styleText); // Create style rules

        if (style.styleSheet)
            style.styleSheet.cssText = cssRules.nodeValue;
        else
            style.appendChild(cssRules);

        $(head).prepend(style);
    }

	return Styler;
});
