define([ '_boiler_', 'text!./view.html'],function( Boiler, viewText) {
	return function(vm, parentEl) {

		var panel = new Boiler.UiPanel(viewText, parentEl);
		ko.applyBindings(vm, panel.getDomElement());

		return{
			getElementId : function(){
				return panel.getElementId();
			}
		};
	};
});