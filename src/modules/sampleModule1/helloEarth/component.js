define(['_boiler_', 'text!./view.html'],
		function (Boiler, template) {

		    return function (moduleContext, parent, vm) {
		        
		        var panel = new Boiler.UiPanel(template, parent);
		        ko.applyBindings(vm, panel.getDomElement());
		    }

		});