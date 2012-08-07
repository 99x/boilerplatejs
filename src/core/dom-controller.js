define([], function () {


    var DomController =  function (context) {

        var self = this;
        self.handles = {};

        return {
            addRoutes: function (newHandles) {
                _.extend(self.handles, newHandles);
            },

            start: function () {
                for (path in self.handles) {
                    var HandlerClass = self.handles[path];
                    $("." + path).each(function (index) {
                        var paramString = $(this).attr("params");
                        var params = paramString ? eval("({" + paramString + "})") : {};
                        var handlerObj = new HandlerClass(context);
                        handlerObj.activate($(this), params);
                    });
                }
            }
        };

    };
    
    return DomController;
});
