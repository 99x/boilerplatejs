define(function(require) {

	/**
	@type Script
	@namespace Boiler.Helpers
	**/
	return {
		Localizer : require("./localizer"),
		Logger : require("./logger"),
		Mediator : require("./mediator"),
		Router : require("./router"),
		Settings : require("./settings"),
		Storage : require("./storage"),
		Styler : require("./styler")
	};
}); 