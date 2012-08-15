define([ 'Boiler', 'text!./view.html'],function( Boiler, viewText) {
	
	var Component = function(parent) {
		new Boiler.ViewTemplate(parent, viewText);
	};
	
	return Component;
});