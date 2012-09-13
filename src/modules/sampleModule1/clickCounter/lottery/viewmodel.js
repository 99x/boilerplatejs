define([], function () {

    var ViewModel = function (moduleContext) {
    	var self = this;
    	this.hasWon = ko.observable(false);
    	
	    moduleContext.listen("LOTTERY_ACTIVITY", function(activityNumber) {
	    	var randomNum = Math.floor(Math.random() * 3) + 1;
	    	self.hasWon(randomNum === activityNumber);
	    });
    };
    
    return ViewModel;
});
