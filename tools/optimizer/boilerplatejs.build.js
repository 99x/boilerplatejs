({
	appDir : "../../",
	baseUrl : "src",
	dir : "../../../boilderplateJS-optimized-build",
	modules : [ {
		name : "main",
	} ],
	paths : {
		domReady : '../libs/require/domReady',
		Boiler : './core/_boiler_',
		text : "../libs/require/text",
		i18n : "../libs/require/i18n"
	},
	fileExclusionRegExp: /^server$/
})