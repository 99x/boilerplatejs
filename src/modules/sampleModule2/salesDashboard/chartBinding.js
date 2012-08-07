define([], function() {

	ko.bindingHandlers.flotChart = {
		init : function(element, valueAccessor) {
		},

		update : function(element, valueAccessor) {
			var flotData = valueAccessor();

			var options = {
				lines : {
					show : true
				},
				points : {
					show : true
				},
				xaxis : {
					ticks : flotData.tickLabels
				}
			};

			var data = [ {
				"label" : flotData.label,
				"data" : flotData.dataItems
			} ];

			self.plot = $.plot(element, data, options);

		}
	};
});