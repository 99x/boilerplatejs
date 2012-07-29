define(['./chartBinding'], function(chartBinding) {

	return function(moduleContext) {
		var self = this;

		this.plot = null;

		this.init = function() {
			$.getJSON(moduleContext.getSettings().urls.yearlysales,
					function(result) {
						self.salesInfo(result);
					});
		}

		this.selectedYear = ko.observable();
		this.selectedDept = ko.observable();
		this.selectedData = ko.observableArray();
		this.chartData = ko.computed(function() {
			var tickLabels = _.map(self.selectedData(), function(item, key) {
				return [ key, item.month ];
			});
			var dataItems = _.map(self.selectedData(), function(item, key) {
				return [ key, item.sales ];
			});

			var label =  self.selectedDept() + " -  "+ self.selectedYear();
			
			return {
				"tickLabels" : tickLabels,
				"dataItems" : dataItems,
				"label"	: label
			};
		});
		this.totalSales = ko.computed(function() {
			return _.reduce(self.selectedData().values, function(memo, item) {
				return memo + item.sales;
			}, 0);
		});

		this.salesInfo = ko.observableArray();
		this.moduleEnabled = ko.observable(true);
		this.tableEnabled = ko.observable(false);
		this.init();

		this.drawTree = function() {

			$("#treeView").jstree({
				"themes" : {
					"theme" : "apple"
				},
				"plugins" : [ "themes", "html_data" ]
			});
		}

		this.yearClicked = function(years, department, data) {
			self.tableEnabled(true);
			self.selectedYear(years);
			self.selectedDept(department);
			self.selectedData(data.values);
		}

	};
});
