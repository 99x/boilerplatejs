define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        nls = require('i18n!./nls/resources'),
        cssPath = require('path!./style.css');


	var Component = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				if (!panel) {
					panel = new Boiler.ViewTemplate(parent, template, nls);
					/* we use static method to attach the css as a separate link on head.
					 * If we pass CSS as a text parameter to above constructor, that goes as a inline
					 * CSS text on HTML, that makes the relative paths in CSS (images, etc) difficult to manage.
					 */
					Boiler.ViewTemplate.setStyleLink(cssPath);
				}
				panel.show();
			},

			deactivate : function() {
				if (panel) {
					panel.hide();
				}
			}
		};
	};

	return Component;

});
