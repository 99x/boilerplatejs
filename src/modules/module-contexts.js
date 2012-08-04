define(function(require) {

	// create an array containing all modules classes that needs to be initiated
	return {
        miscModules: require('./miscModules/module-context'),
		sampleModule1 : require('./sampleModule1/module-context'),
        sampleModule2 : require('./sampleModule2/module-context')
        
	};

});