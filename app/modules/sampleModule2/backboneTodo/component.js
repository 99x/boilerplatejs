define(function(require) {
    
    var Boiler = require('Boiler'), 
        Common = require('./common'), 
        Todos = require('./collections/todos'), 
        template = require('text!./templates/component.html'), 
        AppView = require('./views/app'), 
        cssPath = require('path!./style/base.css');

	var Component = function(moduleContext) {

		//keep these outside the 'activate' method such that they live beyond 'activate' method lifespan
		var panel, appview = null;

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
		        panel = new Boiler.ViewTemplate(parent, template);
		        Boiler.ViewTemplate.setStyleLink(cssPath);
		        appview = new AppView();
		    }

		    // Set the current filter to be used
		    Common.TodoFilter = params.action || '';

		    // Trigger a collection reset/addAll
		    Todos.trigger('reset');

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