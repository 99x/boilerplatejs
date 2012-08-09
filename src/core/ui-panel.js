define(['./helpers/localizer', './helpers/styler'], function (Localizer, Styler) {

    var Panel = function (viewTemplate, parentEl, nls, style) {
        this.viewId = this.createView(viewTemplate, parentEl, nls, style);
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

    Panel.prototype.createView = function (viewText, parentElement, nls, style) {
        // set defaults
        containerType = '<span/>';
        parentElement = typeof parentElement !== 'undefined' ? parentElement : $('body');

        //apply localization on the template
        viewText = Localizer.localize(viewText, nls);
        Styler.linkCss(style);
        
        //if(nls) {
        //    var compiled = _.template(viewText);
        //    viewText = compiled({nls : nls});
        //}

		
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
