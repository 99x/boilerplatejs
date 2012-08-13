﻿define([], function() {
	/**
	Storage class
 	
	@class Storage
	@constructor    
	**/
	var Storage = function(){};
	/**
	Persist method

	@method persist		
	@param {Object} key
	@param {Object} value
	**/	
	Storage.persist = function(key, value) {
		amplify.store(key, value);
	};
	/**
	Retreive method

	@method retreive		
	@param {Object} key
	@return 
	**/	
	Storage.retreive = function(key) {
		return amplify.store(key);
	};
	/**
	Remove method

	@method remove		
	@param {Object} key
	@return 
	**/
	Storage.remove = function(key) {
		return amplify.store(key, null);
	};

	
	return Storage;

});
