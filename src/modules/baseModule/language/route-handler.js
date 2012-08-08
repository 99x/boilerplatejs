define(['_boiler_', 'text!./view.html', 'text!./style.css' ], function(Boiler, template, style) {

	var RouteHandler = function(moduleContext) {
		return {
			activate : function(parent) {
				new Boiler.UiPanel(template, parent, null, style);
				
				$('#langEn').click(function (event) { 
					moduleContext.setLanguage("en");
				});
				
				$('#langSv').click(function (event) { 
					moduleContext.setLanguage("sv");
				});

				$('#clearLang').click(function (event) { 
					moduleContext.clearLanguage();
				});
			}
		};
	};

	return RouteHandler;

});