/*
 * A Custom Knockout Binding for Flot to update the plot when necessary
 */
define(function() {

	var drawChart = function(element, flotData) {
		if(flotData.dataItems.length>0) {
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
	
			var data = [{
				"label" : flotData.label,
				"data" : flotData.dataItems
			}];
		
			$.plot(element, data, options);
		}

	};

	ko.bindingHandlers.flotChart = {
		init : function(element, valueAccessor) {
			
			drawChart(element, valueAccessor());
		},

		update : function(element, valueAccessor) {
			drawChart(element, valueAccessor());
		}
	};

});