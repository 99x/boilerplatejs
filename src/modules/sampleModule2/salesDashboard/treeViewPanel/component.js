define([ 'Boiler', 'text!./view.html'],function( Boiler, viewText) {
	
	var Component = function(parent) {
		var panel = new Boiler.UiPanel(viewText);
		panel.appendTo(parent);
		return panel;	
	};
	
	return Component;
});