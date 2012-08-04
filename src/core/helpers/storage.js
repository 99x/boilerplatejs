define([], function() {
	
	var Storage = function(){};
	
	Storage.persist = function(key, value) {
		amplify.store(key, value);
	};
	
	Storage.retreive = function(key) {
		return amplify.store(key);
	};

	Storage.remove = function(key) {
		return amplify.store(key, null);
	};

	
	return Storage;

});
