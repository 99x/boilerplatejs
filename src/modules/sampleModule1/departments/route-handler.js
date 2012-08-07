define([ './component'],function(Component) {
	var RouteHandler = function(moduleContext) {

		return {
			
			activate: function(parent, params) {
				panel = new Component(moduleContext, parent, params);
			},

		};
		
	};
	
	return RouteHandler;
});