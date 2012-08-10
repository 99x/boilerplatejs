define(["_boiler_"], function(Boiler) {

	var ViewModel = function(moduleContext, id) {

		var self = this;
		this.employee = ko.observable();
		
		this.backToList = function() {
			Boiler.UrlController.goTo("employee/all");
		}
		/*
		 *  Initialization code:
		 *  Get the employee details from the server.
		 */
		$.getJSON(moduleContext.getSettings().urls.dumSvr + id + ".json.js", function(data) {
			self.employee(data);
		});

	};
	
	return ViewModel;
});
