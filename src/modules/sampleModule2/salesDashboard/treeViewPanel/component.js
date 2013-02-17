define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        styleText = require('text!./style.css');
        

	var Component = function(parent) {
		new Boiler.ViewTemplate(parent, template, null, styleText);
	};
	
	return Component;
});