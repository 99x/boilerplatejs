define(['require', 'Boiler', 'text!./view.html', './viewmodel', 'i18n!./nls/resources'], function(require, Boiler, template, ViewModel, nls) {

	var Component = function(moduleContext) {
		

		var panel, vm = null;
		
		this.activate = function(parent, params) {
			if (!panel) {
				panel = new Boiler.ViewTemplate(parent, template, nls);
				Boiler.ViewTemplate.setStyleLink("DEPAERTMENT_PANEL_CSS", require.toUrl('./style.css'));
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
