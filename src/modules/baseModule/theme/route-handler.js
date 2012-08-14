define(['Boiler', 'text!./view.html', 'text!./style.css'], function(Boiler, template, componentStyle) {

	/**
	 * Lets define the themes we have in the system. We use CSS text to import appropriate
	 * CSS file when the theme is requested.
	 */
	var themes = {
		red : "@import url('./assets/modules/baseModule/theme/red/common.css');",
		gray : "@import url('./assets/modules/baseModule/theme/gray/common.css');"
	};

	var RouteHandler = function(moduleContext) {
		//unique key of this sub-module to be used when necessary
		var THEME_UNIQUE_KEY = "themeStylesheet";
		
		
		return {
			//this is the method that will be called by the handler
			activate : function(parent) {
				var panel = new Boiler.UiPanel(template, parent);
				Boiler.UiPanel.setStyleText("themeComponentStyle", componentStyle);
				
				
				//if we have a stored theme setting lest use it OR use default
				var storedThemeKey = moduleContext.retreiveObject(THEME_UNIQUE_KEY);
				if (!storedThemeKey) {
					storedThemeKey = "gray"; //default
				}
				
				//lets use the panel to set style in header
				Boiler.UiPanel.setStyleText(THEME_UNIQUE_KEY, themes[storedThemeKey]);
				//set the current theme selected on the select box
				$(".theme select").val(storedThemeKey);

				//lets handle the theme change event from the select
				$(".theme select").change(function() {
					var selection = $(".theme option:selected").val();
					//read the selected value
					css = themes[selection];
					//set style in header
					Boiler.UiPanel.setStyleText(THEME_UNIQUE_KEY, css);
					//sale in the local store
					moduleContext.persistObject(THEME_UNIQUE_KEY, selection);
				});

			}
		};
	};

	return RouteHandler;

});
