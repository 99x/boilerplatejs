define(function (require) {
    
    /**
	@type Script
	@namespace Boiler.Helpers
	**/
    return {
        Localizer : require("./core/helpers/localizer"),
        Logger : require("./core/helpers/logger"),
        Mediator : require("./core/helpers/mediator"),
        Router : require("./core/helpers/router"),
        Settings : require("./core/helpers/settings"),
        Storage : require("./core/helpers/storage"),
        Styler : require("./core/helpers/styler")
    };
});
