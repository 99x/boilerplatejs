define(['./component'], function(Component) {
	var RouteHandler = function(moduleContext) {

		return {
			activate : function(parent, params) {
				new Component(moduleContext, parent, params.id);
			},

		};

	};
	
	return RouteHandler;
}); 