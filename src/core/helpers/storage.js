define([], function() {
	/**
	This is used to store persistent data and retreive them or remove them when it is required. 
	 
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Storage
	@constructor    
	**/
	var Storage = function(){};
	/**
	Stores a value for a given key using the default storage type

	@method persist		
	@param {Object} key Identifier for the value being stored
	@param {Object} value Value to store
	**/	
	Storage.persist = function(key, value) {
		amplify.store(key, value);
	};
	/**
	Returns a stored value based ob the key

	@method retreive		
	@param {Object} key Identifier for the value being stored
	@return 
	**/	
	Storage.retreive = function(key) {
		return amplify.store(key);
	};
	/**
	Returns a hash of all stored values

	@method remove		
	@param {Object} key Identifier for the value being stored
	@return 
	**/
	Storage.remove = function(key) {
		return amplify.store(key, null);
	};

	
	return Storage;

});
