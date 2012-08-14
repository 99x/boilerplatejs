define(['Boiler', 'text!./view.html'],
		function (Boiler, template) {

		    var Component = function (moduleContext, parent, vm) {
		        
		        var panel = new Boiler.UiPanel(template, parent);
		        ko.applyBindings(vm, panel.getDomElement());
		        
		        this.remove = function() {
		        	panel.remove();
		        }
		    };
		    
		    return Component;

		});