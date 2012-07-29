define(['./component'], function(Component) {
	return function(moduleContext) {

		return {
			activate : function(parent, vals) {
				component = new Component(moduleContext, parent);
			},

		};

	};
});
