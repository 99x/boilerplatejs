define(['./helpers/localizer', './helpers/styler'], function (Localizer, Styler) {

    /**
	ui-panel class
 	
	@class Panel
	@constructor
	@param {Object} viewTemplate
	@param {Object} parentEl
	@param {Object} nls    
	**/
    var Panel = function (viewTemplate, parentEl, nls) {
        this.viewId = this.createView(viewTemplate, parentEl, nls);
    };
    
    /**
	Sets the style

	@method setStyleText
	@param {Object} uniqueId
	@param {Object} style
	**/
    Panel.prototype.setStyleText = function(uniqueId, style) {
    	Styler.attachCssText(uniqueId, style);
    };

	/**
	Dispose the view component

	@method dispose
	**/
    Panel.prototype.dispose = function () {
        $('#' + this.viewId).remove();
    };
	
	/**
	Returns the view id

	@method getElementId
	@return viewId
	**/
    Panel.prototype.getElementId = function () {
        return this.viewId;
    };

	/**
	Returns the jQuery element id

	@method getElementId
	@return viewId
	**/	
    Panel.prototype.getJqueryElement = function () {
        return $('#' + this.viewId);
    };
    
    /**
	Returns the DOM element

	@method getDomElement
	@return viewId
	**/
    Panel.prototype.getDomElement = function () {
        return document.getElementById(this.viewId);
    };

    /**
	Creates a view

	@method createView
	@param viewText
	@param parentElement
	@param nls
	@return childId
	**/
    Panel.prototype.createView = function (viewText, parentElement, nls) {
        // set defaults
        containerType = '<span/>';
        parentElement = typeof parentElement !== 'undefined' ? parentElement : $('body');

        //apply localization on the template
        if(nls) {
        	viewText = Localizer.localize(viewText, nls);
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
