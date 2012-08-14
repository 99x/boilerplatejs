define(["Boiler"], function(Boiler) {

	var ViewModel = function(moduleContext) {

		var self = this;
		this.employee = ko.observable();

		this.backToList = function() {
			Boiler.UrlController.goTo("employee/all");
		}

		this.setEmployee = function(id) {
			//Get the employee details from the server.
			if (id) {
				$.getJSON(moduleContext.getSettings().urls.dumSvr + id + ".json.js", function(data) {
					self.employee(data);
				});
			}

		}
	};

	return ViewModel;
});
