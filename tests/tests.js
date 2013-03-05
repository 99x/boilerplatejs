require.config({
	baseUrl : "../app/", //we will set the application's app folder as the base url
});

require.config({
	paths : {
		text : '../libs/require/text',
		i18n : '../libs/require/i18n',
		domReady : '../libs/require/domReady',
		path :  '../libs/require/path',
		_boiler_ : './core/_boiler_'
	}
});


require([ 
          '../tests/core/helpers/settings', 
          '../tests/core/helpers/router' ,
          '../tests/core/helpers/mediator',
          '../tests/other/js-encapsulation',
          '../tests/other/js-prototypes'
], function() {}); 
