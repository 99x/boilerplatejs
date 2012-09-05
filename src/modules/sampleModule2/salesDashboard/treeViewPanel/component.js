define([ 'Boiler', 'text!./view.html', 'text!./style.css'],function( Boiler, viewText, styleText) {
	
	var Component = function(parent) {
		new Boiler.ViewTemplate(parent, viewText, null, styleText);
	};
	
	return Component;
});