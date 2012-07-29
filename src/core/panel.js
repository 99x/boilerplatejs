define([], function () {

    var Panel = function (viewTemplate, parentEl) {
        this.viewId = this.createView(viewTemplate, parentEl);
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

    Panel.prototype.createView = function (viewText, parentElement, containerType) {
        // set defaults
        containerType = typeof containerType !== 'undefined' ? containerType : '<span/>';
        parentElement = typeof parentElement !== 'undefined' ? parentElement : $('body');

        // create a random id for the child
        var childId = _.uniqueId(['container_']);
        // create the child container

        parentElement.append($(containerType, {
        	id : childId,
        }));
        // add template text to the child container as html
        $('#' + childId).html(viewText);

       // $(viewText, {
        //    id: childId
        //}).appendTo(parentElement);


        return childId;
    };

    return Panel;
});
