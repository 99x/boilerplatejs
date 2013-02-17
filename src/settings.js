/*
 * This AMD module define a object containing settings as its properties. Settings can be 
 * simple literal variables or objects with complex composition.This settings file is 
 * getting loaded to GlobalContext, so that the settings defined here are copied to all 
 * sub contexts. Note that sub contexts receive own 'copies' of global settings.
 * 
 */
define({
	appName: "BoilerplateJS"
});

