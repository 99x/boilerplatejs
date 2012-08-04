define(['./storage'], function(Storage) {

	// do neccesary configurations for the underscore template pattern
	_.templateSettings = {
		interpolate : /\{\{(.+?)\}\}/g
	};
	
	//Storage.persist("user-language", "sv");
	//Storage.remove("user-language");
	var userLang;
	if (userLang = Storage.retreive("user-language")) {
		require.config({
			locale : userLang,
		});
	}


	var Localizer = function() {
	};

	Localizer.localize = function(text, nlsObject) {
		var compiled = _.template(text);
		return compiled({
			nls : nlsObject,
		});
	};

	Localizer.setLanguage = function(locale) {
		console.log(locale);
		Storage.persist("user-language", locale);
		location.reload(); 
	};

	return Localizer;

});
