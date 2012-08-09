define(['_boiler_', 'text!./view.html', 'text!./gray.css', 'text!./red.css'  ], function(Boiler, template, grayStyle, redStyle) {

	var RouteHandler = function(moduleContext) {
		var THEME_UNIQUE_KEY = "themeStylesheet";
		return {
			activate : function(parent) {
				var panel = new Boiler.UiPanel(template, parent);
				var storedTheme = moduleContext.retreiveObject(THEME_UNIQUE_KEY);
				if (!storedTheme) {
					storedTheme = grayStyle;
				}
				panel.setStyleText(THEME_UNIQUE_KEY, storedTheme);
				
				$('#themeRed').click(function (event) { 
					panel.setStyleText(THEME_UNIQUE_KEY, redStyle);
					moduleContext.persistObject(THEME_UNIQUE_KEY, redStyle);
				});
				
				$('#themeGray').click(function (event) { 
					panel.setStyleText(THEME_UNIQUE_KEY, grayStyle);
					moduleContext.persistObject(THEME_UNIQUE_KEY, grayStyle);
				});

			}
		};
	};

	return RouteHandler;

});