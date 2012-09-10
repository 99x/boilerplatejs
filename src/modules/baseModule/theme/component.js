define(['Boiler', 'text!./view.html', 'path!./red/common.css', 'path!./gray/common.css'], function(Boiler, template, redThemePath, grayThemePath) {

	/**
	 * Lets define the themes we have in the system. We use CSS text to import appropriate
	 * CSS file when the theme is requested.
	 */
	var themes = {
		red : redThemePath,
		gray : grayThemePath
	};

	var RouteHandler = function(moduleContext) {

		var panel = null, DICTIONARY_KEY = "themeStylesheet";

		return {
			activate : function(parent) {
				//create the theme selection component
				panel = new Boiler.ViewTemplate(parent, template, null);

				//if we have a stored theme setting lest use it OR use default
				var storedThemeKey = moduleContext.retreiveObject(DICTIONARY_KEY);
				if (!themes[storedThemeKey]) {
					//if not locally stored, use the default
					storedThemeKey = "gray";
				}

				//lets use the panel to set style in header
				Boiler.ViewTemplate.setStyleLink(themes[storedThemeKey], DICTIONARY_KEY);

				//lets handle the theme change event
				$("#theme-selector li").bind("click", function() {
					var selection = this.id;
					if (themes[selection]) {
						//set style in header
						Boiler.ViewTemplate.setStyleLink(themes[selection], DICTIONARY_KEY);
						//sale in the local store
						moduleContext.persistObject(DICTIONARY_KEY, selection);
					}
				})
			},

			deactivate : function() {
				if (panel) {
					panel.remove();
				}
			}
		};
	};

	return RouteHandler;

});
