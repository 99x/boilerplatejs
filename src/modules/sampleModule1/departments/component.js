define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        ViewModel = require('./viewmodel'), 
        stylePath = require('path!./style.css'), 
        nls = require('i18n!./nls/resources');


	var Component = function(moduleContext) {

		//keep these outside the 'activate' method such that they live beyond 'activate' method lifespan
		var panel, vm = null;

		/**
		 * Activation method to create and load this component to the UI. Component will be initialized
		 * with the parameters passed, and will be made visible if it is currently hidden.
		 * @method activate
		 * @param parent {jQuery Element} parent to which this component get added
		 * @param params {Object} initialization parameters passed to teh component
		 */
		this.activate = function (parent, params) {
		    // if panel is not created, lets create it and initiate bindings
		    if (!panel) {
		        panel = new Boiler.ViewTemplate(parent, template, nls);
		        Boiler.ViewTemplate.setStyleLink(stylePath);
		        vm = new ViewModel(moduleContext);
		        ko.applyBindings(vm, panel.getDomElement());
		    }
		    /* It is recommended to keep your views stateless as much as possible. Everytime 
			 * user access the view, we should reload it from server to avoid stale data. */
		    vm.initialize(params.name);
		    //make the component visible incase it is hidden
		    panel.show();
		};
		
		/**
		 * Take the component out of scope of the UI. If component is available
		 * hide it. We do not remove/create DOM elements here, because show/hide
		 * is much efficient.
		 * @method deactivate
		 */
		this.deactivate = function () {
		    if (panel) {
		        panel.hide();
		    }
		};
	};

	return Component;

});