define(['require', 'Boiler', 'text!./view.html', './viewmodel', 'i18n!./nls/resources', 'path!./style.css'], function(require, Boiler, template, ViewModel, nls, cssPath) {

	var Component = function(moduleContext) {

		var panel, vm = null;

		this.activate = function(parent, params) {
			if (!panel) {
				//attach the template to the DOM
				panel = new Boiler.ViewTemplate(parent, template, nls);
				//attach the stylesheet of this component
				Boiler.ViewTemplate.setStyleLink(cssPath);
				//create out viewmodel
				vm = new ViewModel(moduleContext);
				//use knockout for bindings
				ko.applyBindings(vm, panel.getDomElement());
			}
			/* It is recommended to keep your views stateless as much as possible.
			 * Everytime user access the view, we should reload it from server to avoid stale data.
			 */
			vm.initialize(params.name);
			//make the component visible incase it is hidden
			panel.show();
		}

		this.deactivate = function() {
			if (panel) {
				panel.hide();
			}
		}
	};

	return Component;

});
