define(['Boiler', 'text!./view.html', './viewmodel', 'text!./style.css', 'i18n!./nls/resources'], function(Boiler, template, ViewModel, styleText, nls) {

	var Component = function(moduleContext) {
		Boiler.ViewTemplate.setStyleText("{CSS_IDENTIFIER}", styleText);

		var panel, vm = null;
		
		this.activate = function(parent, params) {
			if (!panel) {
				panel = new Boiler.ViewTemplate(parent, template, nls);
				vm = new ViewModel(moduleContext);
				ko.applyBindings(vm, panel.getDomElement());
			}
			
			vm.setNewDepartmentName(params.name);
			panel.show();
		}

		this.deactivate = function() {
			if(panel) {
				panel.hide();
			}
		}
	};

	return Component;

});
