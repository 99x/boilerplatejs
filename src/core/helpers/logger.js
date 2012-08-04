define([], function() {
	return function(){
		this.info = function(msg) {
			if (console) {
				console.log(msg);
			}
		};
		
		this.error = function(msg, error) {
			if (console) {
                console.log("ERROR : " + msg);
				console.error(error);
			}
		};
	};

});
