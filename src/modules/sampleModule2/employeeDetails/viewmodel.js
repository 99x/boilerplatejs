define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler');

	var ViewModel = function(moduleContext) {

		var self = this;
		this.employee = ko.observable();

		this.backToList = function () {
		    Boiler.UrlController.goTo("employee/all");
		};

		this.setEmployee = function (id) {
		    //Get the employee details from the server.
		    if (id) {
		        var url = moduleContext.getSettings().urls.empdetails.replace('{empid}', id);

		        $.getJSON(url, function (data) {
		            data.imageurl = moduleContext.getSettings().urls.empimages.replace('{empid}', id);
		            self.employee(data);
		        });
		    }
		};
	};

	return ViewModel;
});
