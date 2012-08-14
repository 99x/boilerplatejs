define([ './component', './viewmodel'],function(Component, ViewModel) {
	 
	
	var RouteHandler = function(moduleContext) {

		var vm = new ViewModel(moduleContext);
		var panel = null;
		return {
			
			activate: function(parent, params) {
				panel = new Component(moduleContext, parent, vm);
			},
			
			deactivate: function(){
				if(panel) {
					panel.remove();
				}
			}

		};
		
	};
	
	return RouteHandler;
});