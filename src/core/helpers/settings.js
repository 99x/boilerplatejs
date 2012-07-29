define([], function() {
	
	return function(parentSettings) {
		
		var isSettingsChained = true;
		var localSettings = {};
		
		return {
			load : function(newSettings) {
				_.extend(localSettings, newSettings);
			},
			
			items : function () {
				if(isSettingsChained && parentSettings) {
					return _.extend(_.clone(parentSettings.items()), localSettings);
				}
				return localSettings;
			},		
			
			chainSettings : function(isChained) {
				isSettingsChained = isChained;
			}
		};
		
	};
});
