define(function (require) {
	
	var Helpers = require('./helpers/_helpers_'); //helpers namespace
	
	/**
	  ui-panel class

	  @namespace Boiler
	  @module BoilerCoreClasses
	  @class Panel
	  @constructor
	  @param {Object} viewTemplate
	  @param {Object} parentEl
	  @param {Object} nls
	  @param {object} styleText
	 **/
	var ViewTemplate = function(parent, viewTemplate, nls, styleText) {
		this.createView(parent, viewTemplate, nls, styleText);
	};

	/**
	  Create a style tag on the head and attach the given text in to it as CSS.
	  If a style tag exists with the given styleId, CSS text will be replaced.

	  @method setStyleText
	  @param styleId {String} uniqueId for the style tag
	  @param styleText {String} CSS text as a string
	 **/
	ViewTemplate.setStyleText = function(styleId, styleText) {
		Helpers.Styler.attachCssText(styleId, styleText);
	};

	/**
	  Create a css link tag on the head with the reference to the given href.
	  If a link tag exists with the given linkId, href will be replaced.

	  @method setStyleLink
	  @param href {String} URL to the CSS file
	  @param linkId {String} uniqueId for the link tag
	 **/
	ViewTemplate.setStyleLink = function(href,linkId) {
		Helpers.Styler.attachCssLink(href, linkId);
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
		viewText = Helpers.Localizer.localize(viewText, nls);

		// create a random id for the child and create a new element
		this.viewId = _.uniqueId(['bpjscontainer_']);
		this.jQueryElement = $("<span id='" + this.viewId + "'>" + viewText + "</span>");
		Helpers.Styler.attachScopedCss(this.jQueryElement, styleText);

		//if parent is specified, lets attach the element to parent
		if (parentElement) {
			parentElement.append(this.jQueryElement);
		}
	};

	return ViewTemplate;
});
