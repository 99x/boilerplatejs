/*
* This AMD module define a object containing settings as its properties. This settings file is 
* getting loaded to GlobalContext, so that settings defined here are available to all 
* sub contexts.
* Settings can be just simple literal vatiables or objects having complex definitions.
*/
define({
    appName: "BoilerplateJS",
    urls: {
        menu: "./DumSvr/menu.json.js"
    }
});