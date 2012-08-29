﻿define(['./helpers/_helpers_'], function(Helpers) {
	/**
	 ui-panel class

	 @namespace Boiler
	 @module BoilerCoreClasses
	 @class Panel
	 @constructor
	 @param {Object} viewTemplate
	 @param {Object} parentEl
	 @param {Object} nls
	 @param {object} style
	 **/
	var ViewTemplate = function(parent, viewTemplate, nls, style) {
		this.createView(parent, viewTemplate, nls, style);
	};

	/**
	 Create a style tag on the head and attach the given text in to it as CSS.
	 If a style tag exists with the given styleId, CSS text will be replaced.

	 @method setStyleText
	 @param styleId {String} uniqueId for the style tag
	 @param style {String} CSS text as a string
	 **/
	ViewTemplate.setStyleText = function(styleId, style) {
		Helpers.Styler.attachCssText(styleId, style);
	};

	/**
	 Create a css link tag on the head with the reference to the given href.
	 If a link tag exists with the given linkId, href will be replaced.

	 @method setStyleLink
	 @param linkId {String} uniqueId for the link tag
	 @param href {String} URL to the CSS file
	 **/
	ViewTemplate.setStyleLink = function(linkId, href) {
		Helpers.Styler.attachCssLink(linkId, href);
	};

	/**
	 Returns the view id

	 @method getElementId
	 @return viewId
	 **/
	ViewTemplate.prototype.getElementId = function() {
		return this.viewId;
	};

	/**
	 Returns the jQuery element of this component

	 @method getJqueryElement
	 @return viewId
	 **/
	ViewTemplate.prototype.getJQueryElement = function() {
		return this.jQueryElement;
	};

	/**
	 Returns the DOM element

	 @method getDomElement
	 @return viewId
	 **/
	ViewTemplate.prototype.getDomElement = function() {
		return this.jQueryElement.get(0);
	};

	ViewTemplate.prototype.appendTo = function(parent) {
		this.jQueryElement.appendTo(parent);
	};

	/**
	 Detach theDOM element of this component from the DOM tree

	 @method dispose
	 **/
	ViewTemplate.prototype.remove = function() {
		this.jQueryElement.remove();
	};

	ViewTemplate.prototype.hide = function() {
		this.jQueryElement.hide();
	};

	ViewTemplate.prototype.show = function() {
		this.jQueryElement.show();
	};

	/**
	 Creates a view

	 @method createView
	 @param viewText
	 @param parentElement
	 @param nls
	 @param styleText
	 @return childId
	 **/
	ViewTemplate.prototype.createView = function(parentElement, viewText, nls, styleText) {
		//apply localization on the template
		if (nls) {
			viewText = Helpers.Localizer.localize(viewText, nls);
		}

		if (!styleText) {
			styleText = "";
		} else {
			styleText = "<style type='text/css' scoped='scoped'>" + styleText + "</style>";
		}
		// create a random id for the child and create a new element
		this.viewId = _.uniqueId(['bpjscontainer_']);
		this.jQueryElement = $("<span id='" + this.viewId + "'>" + styleText + viewText + "</span>");

		//if parent is specified, lets attach the element to parent
		if (parentElement) {
			parentElement.append(this.jQueryElement);
		}
	};

	return ViewTemplate;
});
