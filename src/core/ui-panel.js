define(['./helpers/_helpers_'], function (Helpers) {

    var Panel = function (viewTemplate, parentEl, nls) {
        this.viewId = this.createView(viewTemplate, parentEl, nls);
    };
    
    Panel.prototype.setStyleText = function(uniqueId, style) {
    	Helpers.Styler.attachCssText(uniqueId, style);
    };

    Panel.prototype.dispose = function () {
        $('#' + this.viewId).remove();
    };

    Panel.prototype.getElementId = function () {
        return this.viewId;
    };

    Panel.prototype.getJqueryElement = function () {
        return $('#' + this.viewId);
    };
    
    Panel.prototype.getDomElement = function () {
        return document.getElementById(this.viewId);
    };

    Panel.prototype.createView = function (viewText, parentElement, nls) {
        // set defaults
        containerType = '<span/>';
        parentElement = typeof parentElement !== 'undefined' ? parentElement : $('body');

        //apply localization on the template
        if(nls) {
        	viewText = Helpers.Localizer.localize(viewText, nls);
        }

        // create a random id for the child
        var childId = _.uniqueId(['container_']);
        // create the child container

        parentElement.append($(containerType, {
        	id : childId,
        }));
        // add template text to the child container as html
        $('#' + childId).html(viewText);

        return childId;
    };

    return Panel;
});
