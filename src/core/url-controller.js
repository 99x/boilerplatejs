define(['./helpers/router'], function (Router) {

    var UrlController = function (context, parentEl) {

        var allHandles = {};
        var router = new Router();

        /*
        * Wrapper for handles. This allows us to intercept activation calls so
        * that we are able to execute custom logic such as deactivation of
        * other handles.
        */
        function Wrapper(handle) {
            var selfWrapper = this;
            selfWrapper.handle = handle;

            this.activate = function (vals) {
                // deactivate all active handles in current controller
                parentEl.empty();
                // activate the requested handler
                selfWrapper.handle.activate(parentEl, vals);
            };

        }

        return {
            addRoutes: function (handles) {
                for (path in handles) {
                    var HandlerClass = handles[path];
                    var handlerObj = new Wrapper(new HandlerClass(context));
                    router.addRoute(path, handlerObj.activate);
                    allHandles[path] = handlerObj;
                }
                
            },

            start: function () {
                router.init();
            }

        }

    };

    UrlController.goTo = function (newPath) {
        Router.routeTo(newPath);
    };

    return UrlController;
});
