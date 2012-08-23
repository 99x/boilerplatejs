'use strict'; // avoid accidental global variable declarations

/*
 * Lets define short alias for commonly used AMD libraries and name-spaces. With
 * these alias, we do not need to specify lengthy paths in refering to below
 * files. We will be using these alias to 'import' these sripts later in our
 * application.
 */
require.config({
	paths : {
		// requirejs plugins in use
		text : '../libs/require/text',
		order : '../libs/require/order',
		i18n : '../libs/require/i18n',
		domReady : '../libs/require/domReady',
		// namespace that aggregate core classes that are in frequent use
		Boiler : './core/_boiler_'
	}
});



/*
 * This is the main entry to the application. This script is called from the
 * main HTML file.
 * 
 * We use requirejs for writing moduler javascripts. Below 'require' function
 * bahaves just as 'import' in PHP or 'using' in .NET. You may define the
 * relative path to the script you wish to import in the first array parameter,
 * then requirejs will invove the callback function (given in second param) with
 * return values of those scripts.
 * 
 * Here we use requirejs domReady plugin to run our code once the DOM is ready to be used.
 */
require([ "./application", "domReady" ], function( Application, domReady) {
	domReady(function() {
		/*
		 * The "./appcontext" script contains a requirejs AMD module. It
		 * returns a function (not an object instance) that encapsulates logic
		 * for creating a GlobalContext. In javascripts, functions can be used
		 * as classes for OO programming. So below we create an instance by
		 * calling 'new' operator on that function.
		 */
		new Application();
	});
});
