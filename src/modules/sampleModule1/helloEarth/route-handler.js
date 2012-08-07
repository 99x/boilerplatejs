define([ './component', './viewmodel'],function(Component, ViewModel) {
	 
	
	var RouteHandler = function(moduleContext) {

		var vm = new ViewModel(moduleContext);
		return {
			
			activate: function(parent) {
				panel = new Component(moduleContext, parent, vm);
			},

		};
		
	};
	
	return RouteHandler;
});