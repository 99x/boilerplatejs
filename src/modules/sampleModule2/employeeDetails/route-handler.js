define(['./component'], function(Component) {
	return function(moduleContext) {

		var component = null;
		return {
			activate : function(parent, params) {
				component = new Component(moduleContext, parent, params.id);
			},

		};

	};
}); 