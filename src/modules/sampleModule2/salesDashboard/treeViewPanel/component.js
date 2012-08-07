define([ '_boiler_', 'text!./view.html'],function( Boiler, viewText) {
	
	var Component = function(vm, parentEl) {

		var panel = new Boiler.UiPanel(viewText, parentEl);
		ko.applyBindings(vm, panel.getDomElement());
		
		return{
			getElementId : function(){
				return panel.getElementId();
			}
		};	
	};
	
	return Component;
});