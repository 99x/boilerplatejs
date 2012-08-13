define(['./helpers/_helpers_'], function (Helpers) {

    var UIPanel = function (viewTemplate, parentEl, nls) {
        this.viewId = this.createView(viewTemplate, parentEl, nls);
    };
    
    UIPanel.prototype.setStyleText = function(uniqueId, style) {
    	Helpers.Styler.attachCssText(uniqueId, style);
    };

    UIPanel.prototype.dispose = function () {
        $('#' + this.viewId).remove();
    };

    UIPanel.prototype.getElementId = function () {
        return this.viewId;
    };

    UIPanel.prototype.getJqueryElement = function () {
        return $('#' + this.viewId);
    };
    
    UIPanel.prototype.getDomElement = function () {
        return document.getElementById(this.viewId);
    };

    UIPanel.prototype.createView = function (viewText, parentElement, nls) {
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

    return UIPanel;
});
