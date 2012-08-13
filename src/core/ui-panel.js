﻿define(['./helpers/_helpers_'], function (Helpers) {
	/**
	ui-panel class
 	
 	@namespace Boiler
 	@module BoilerCoreClasses
	@class Panel
	@constructor
	@param {Object} viewTemplate
	@param {Object} parentEl
	@param {Object} nls    
	**/
    var UIPanel = function (viewTemplate, parentEl, nls) {
        this.viewId = this.createView(viewTemplate, parentEl, nls);
    };
    /**
	Sets the style

	@method setStyleText
	@param {Object} uniqueId
	@param {Object} style
	**/
    UIPanel.prototype.setStyleText = function(uniqueId, style) {
    	Helpers.Styler.attachCssText(uniqueId, style);
    };
	/**
	Dispose the view component

	@method dispose
	**/
    UIPanel.prototype.dispose = function () {
        $('#' + this.viewId).remove();
    };
	/**
	Returns the view id

	@method getElementId
	@return viewId
	**/
    UIPanel.prototype.getElementId = function () {
        return this.viewId;
    };
	/**
	Returns the jQuery element id

	@method getJqueryElement
	@return viewId
	**/
    UIPanel.prototype.getJqueryElement = function () {
        return $('#' + this.viewId);
    };
    /**
	Returns the DOM element

	@method getDomElement
	@return viewId
	**/
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
