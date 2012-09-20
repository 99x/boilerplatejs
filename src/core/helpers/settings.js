define([], function() {
	/**
	Settings class
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Settings
	@constructor    
	**/
	var Settings = function(parentSettings) {
		/**
		@private
		@property {Boolean} 'isSettingsChained' State whether or not the settings has been chained 
		**/
		var isSettingsChained = true;
		/**
		@private
		@property {Array} 'localSettings' Holds an array of the local settings
		**/
		var localSettings = {};
		
		return {
			/**
			Extends the local settings with the new settings

			@method load
			@param {Object} newSettings Object containing the new settings
			**/	
			load : function(newSettings) {
				_.extend(localSettings, newSettings);
			},
			/**
			Returns the local settings

			@method items
			@return {Object} localSettings
			**/	
			items : function () {
				if(isSettingsChained && parentSettings) {
					return _.extend(_.clone(parentSettings.items()), localSettings);
				}
				return localSettings;
			},		
			/**
			Set the state of the settings chaining

			@method chainSettings
			@param {Boolean} isChained 
			**/	
			chainSettings : function(isChained) {
				isSettingsChained = isChained;
			}
		};
		
	};
	
	return Settings;
});