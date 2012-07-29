define([ './component'],function(Component) {
	return function(moduleContext) {

		return {
			
			activate: function(parent, params) {
				panel = new Component(moduleContext, parent, params);
			},

		};
		
	};
});