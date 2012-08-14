define(['./helpers/_helpers_'], function(Helpers) {
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
	var UIPanel = function(viewTemplate, parentEl, nls) {
		this.createView(viewTemplate, parentEl, nls);
	};

	/**
	 Sets the style

	 @method setStyleText
	 @param {Object} uniqueId
	 @param {Object} style
	 **/
	UIPanel.setStyleText = function(uniqueId, style) {
		Helpers.Styler.attachCssText(uniqueId, style);
	};

	/**
	 Returns the view id

	 @method getElementId
	 @return viewId
	 **/
	UIPanel.prototype.getElementId = function() {
		return this.viewId;
	};

	/**
	 Returns the jQuery element of this component

	 @method getJqueryElement
	 @return viewId
	 **/
	UIPanel.prototype.getJQueryElement = function() {
		return this.jQueryElement;
	};

	/**
	 Returns the DOM element

	 @method getDomElement
	 @return viewId
	 **/
	UIPanel.prototype.getDomElement = function() {
		return this.jQueryElement.get(0);
	};

	UIPanel.prototype.appendTo = function(parent) {
		this.jQueryElement.appendTo(parent);
	};

	/**
	 Detach theDOM element of this component from the DOM tree

	 @method dispose
	 **/
	UIPanel.prototype.remove = function() {
		this.jQueryElement.remove();
	};

	UIPanel.prototype.hide = function() {
		this.jQueryElement.hide();
	};

	UIPanel.prototype.show = function() {
		this.jQueryElement.show();
	};

	/**
	 Creates a view

	 @method createView
	 @param viewText
	 @param parentElement
	 @param nls
	 @return childId
	 **/
	UIPanel.prototype.createView = function(viewText, parentElement, nls) {
		//apply localization on the template
		if (nls) {
			viewText = Helpers.Localizer.localize(viewText, nls);
		}
		// create a random id for the child and create a new element
		this.viewId = _.uniqueId(['bpjscontainer_']);
		this.jQueryElement = $("<span id='" + this.viewId + "'>" + viewText + "</span>");

		//if parent is specified, lets attach the element to parent
		if (parentElement) {
			parentElement.append(this.jQueryElement);
		}
	};

	return UIPanel;
});
