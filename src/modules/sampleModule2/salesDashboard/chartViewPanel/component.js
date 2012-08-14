define([ 'Boiler', 'text!./view.html'],function( Boiler, viewText) {
	var Component = function() {
		var panel = new Boiler.UiPanel(viewText);
		return panel;
	};
	
	return Component;
});