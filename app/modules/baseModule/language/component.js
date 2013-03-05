define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html');

	var Component = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				if (!panel) {
					//create the visual language selection component
					panel = new Boiler.ViewTemplate(parent, template);
					/* here we do not use any MVC. MVVM but use simple jquery event handler.
					 * This is to demonstrate that there is no need of knockoutjs or other
					 * library to use boilerplateJS. But we recommend you to use a MVX library
					 * for any non trivial code.
					 */
					$("#lang-selector li").bind("click", function() {
						if (this.id) {
							moduleContext.setLanguage(this.id);
						}
					});
				}
				panel.show();
			},

			deactivate : function() {
				if (panel) {
					panel.hide();
				}
			}
		};
	};

	return Component;

});
