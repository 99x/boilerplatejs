define([ './component'],function(Component) {
	return function(moduleContext) {

		return {
			
			activate: function(parent) {
				panel = new Component(moduleContext, parent);
			},

		};
		
	};
});