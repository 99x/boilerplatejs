define(['Boiler', 'text!./view.html', './viewmodel', 'text!./style.css', 'i18n!./nls/resources'],
		function (Boiler, template, ViewModel, styleText, nls) {

		    var Component = function (moduleContext, parent, params) {
		        var panel = new Boiler.UiPanel(template, parent, nls);
		        panel.setStyleText("DEPAERTMENT_PANEL_CSS", styleText);
		        var vm = new ViewModel(moduleContext, params.initvalue);
		        ko.applyBindings(vm, panel.getDomElement());
		    };
		    
		    return Component;

		});