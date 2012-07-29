define([], function() {
	return {
		info : function(msg) {
			if (console) {
				console.log(msg);
			}
		},
		
		error : function(msg, error) {
			if (console) {
                console.log("ERROR : " + msg);
				console.error(error);
			}
		}
	};

});
