define(['require', 'Boiler', 'text!./view.html', 'path!./style.css'], function(require, Boiler, template, cssPath) {

	var Component = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, null);
				Boiler.ViewTemplate.setStyleLink(cssPath);
				
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

	return Component;

});