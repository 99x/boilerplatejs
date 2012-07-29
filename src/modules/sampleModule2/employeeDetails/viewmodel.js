define(['./../settings'], function(Settings) {

	return function(moduleContext, id) {

		var self = this;
		// Binding variables in view with blank obeservables
		this.pId = ko.observable();
		this.firstName = ko.observable();
		this.lastName = ko.observable();
		this.averageSales = ko.observable();
		this.age = ko.observable();
		this.email = ko.observable();
		this.imageId = ko.observable();
		(function(id) {
			// Getting data from JSON objects
			$.getJSON(moduleContext.getSettings().urls.dumSvr + id + ".json.js", function(data) {

				self.pId(data.id);
				self.firstName(data.firstName);
				self.lastName(data.lastName);
				self.averageSales(data.averageSales);
				self.age(data.age);
				self.email(data.email);
				self.imageId(data.imageId);
			});
		})(id);

	};
});
