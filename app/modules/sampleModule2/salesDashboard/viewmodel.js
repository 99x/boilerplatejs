define(function(require) {

    // Load the dependencies
    var chartBinding = require('./chartBinding'),
        treeCssPath = require('path!./treeViewPanel/jstreestyle/');

	var ViewModel = function(moduleContext) {
		var self = this;

		this.salesInfo = ko.observableArray();
		this.selectedDept = ko.observable("");
		this.selectedData = ko.observableArray();
		
		//A knockout computed variable to calculate the data set necessary for the chart
		this.chartData = ko.computed(function() {
			var tickLabels = _.map(self.selectedData().values, function(item, key) {
				return [ key, item.month ];
			});
			var dataItems = _.map(self.selectedData().values, function(item, key) {
				return [ key, item.sales ];
			});

			var label =  self.selectedDept() + " - " + self.selectedData().year;
			
			return {
				"tickLabels" : tickLabels,
				"dataItems" : dataItems,
				"label"	: label
			};
		});
		
		//To be called after tree data has been rendered
		this.drawTree = function() {
			$.jstree._themes = treeCssPath;
			$("#treeView").jstree({
				"themes" : {
					"theme" : "apple"
				},
				"plugins" : [ "themes", "html_data" ],
				"core" : { "initially_open" : [ "salesDept" ] }
			});
		};
		
		this.yearClicked = function(department, data) {
			self.selectedDept(department);
			self.selectedData(data);
		};
		
		/*
         * Initialization code:
         * Get the sales details from server
         */
		$.getJSON(moduleContext.getSettings().urls.yearlysales,	function(result) {
			self.salesInfo(result);
			self.selectedDept(result[0].name);
			self.selectedData(result[0].years[0]);
		});

	};
	
	return ViewModel;
});
