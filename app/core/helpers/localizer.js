//if user has saved the language preference before, lets use that to configure requirejs i18n
var userLang = localStorage.getItem("user-language");
if (userLang) {
    //hack: we do this outside the define block below to avoid requirejs error
    require.config({
        locale : userLang
    });
}

define(function(require) {

    /**
     Localizer is used to handle the localization aspects by providing the functions
     required for setting a different language and resetting the user language settings to the defaults.
     @namespace Boiler.Helpers
     @module BoilerCoreClasses
     @class Localizer
     @static
     **/
    var Localizer = function() {
    };

    /**
     Helper function to keep the global value of _.templateSettings, applies the settings that parses
     {{nls.your_tag_name}} and restore the underscore's original settings.
     @method template
     @static
     @param text {String}  string that need to be localized. Tags should be in the form {{nls.your_tag_name}}
     @return {String} localized text
     **/
    function template(text) {
        var orig_settings = _.templateSettings;
        _.templateSettings = {
            interpolate : /\{\{(.+?)\}\}/g
        };

        var compiled = _.template(text);
        _.templateSettings = orig_settings;
        return compiled;
    }

    /**
     Apply localization to the given text. The text should contain tags such as {{nls.your_tag_name}} that will be
     replaced by the 'your_tag_name' property in the nlsObject.
     @method localize
     @static
     @param text {String}  string that need to be localized. Tags should be in the form {{nls.your_tag_name}}
     @param nlsObject {Object}  contains localization properties
     @return {String} localized text
     **/
    Localizer.localize = function(text, nlsObject) {
        if (!nlsObject) {
            return text;
        }

        var compiled = template(text);
        return compiled({
            nls : nlsObject
        });
    };

    /**
     Sets the language to the provided locale. This will store the locale information in LocalStore
     and do a page refresh. Please note this will result in a location.refresh() call.
     @method setLanguage
     @static
     @param locale {String} locale string to which locale should be set
     **/
    Localizer.setLanguage = function(locale) {
        localStorage.setItem("user-language", locale);
        location.reload();
    };

    /**
     Reset the locally stored language settings. This will let to pich browser
     locale to be in effect the next time user access the application

     @method clearLanguage
     @static
     **/
    Localizer.clearLanguage = function() {
        localStorage.removeItem("user-language");
        location.reload();
    };

    return Localizer;

});
