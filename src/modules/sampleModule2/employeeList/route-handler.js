define(['./component'], function(Component) {
	var RouteHandler = function(moduleContext) {

		return {
			activate : function(parent, vals) {
				component = new Component(moduleContext, parent);
			},

		};

	};
	
	return RouteHandler;
});
