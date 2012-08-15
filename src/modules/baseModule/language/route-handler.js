define(['Boiler', 'text!./view.html', 'text!./style.css' ], function(Boiler, template, style) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, null, style);
				
				Boiler.ViewTemplate.setStyleText("langPanelStylesheet", style);
				
				$('#langEn').click(function (event) { 
					moduleContext.setLanguage("en");
				});
				
				$('#langSv').click(function (event) { 
					moduleContext.setLanguage("sv");
				});

				$('#clearLang').click(function (event) { 
					moduleContext.clearLanguage();
				});
			},
			
			deactivate : function(){
				if(panel) {
					panel.remove();
				}
			}
		};
	};

	return RouteHandler;

});