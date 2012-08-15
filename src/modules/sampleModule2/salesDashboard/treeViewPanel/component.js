define([ 'Boiler', 'text!./view.html', 'text!./style.css'],function( Boiler, viewText, style) {
	
	var Component = function(parent) {
		new Boiler.ViewTemplate(parent, viewText, null, style);
	};
	
	return Component;
});