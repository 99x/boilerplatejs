define(function(require) {

	/**
	Namespace variable defining helper classes mainly used by the core classes in 'Boiler' namespace.
	
	@type Script
	@namespace Boiler.Helpers
	**/
	return {
		Localizer : require("./localizer"),
		Logger : require("./logger"),
		Mediator : require("./mediator"),
		Router : require("./router"),
		Settings : require("./settings"),
		Styler : require("./styler")
	};
}); 