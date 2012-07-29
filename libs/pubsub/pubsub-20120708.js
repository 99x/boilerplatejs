/*!
* pubsub.js
*
* A tiny, optimized, tested, standalone and robust pubsub implementation supporting different javascript environments
*
* @author Federico "Lox" Lucignano <https://plus.google.com/117046182016070432246>
* @see https://github.com/federico-lox/pubsub.js
*/

(function(context){
	/**
	 * @private
	 */
	function init(){
		var channels = {},// the channel subscription hash
			funcType = Function;//help minification

		return {

			/*
			 * @public
			 *
			 * Publish some data on a channel
			 *
			 * @param String channel The channel to publish on
			 * @param Mixed argument The data to publish, the function supports
			 * as many data parameters as needed
			 *
			 * @example Publish stuff on '/some/channel'. Anything subscribed will
			 * be called with a function signature like: function(a,b,c){ ... }
			 * PubSub.publish("/some/channel", "a", "b", {total: 10, min: 1, max: 3});
			 */
			publish: function(){
				var sync = true;
				var args = arguments,//help minification
					subs = channels[args[0] /* channel */];

				if(subs){
					var len = subs.length,
						params = (args.length > 1) ? Array.prototype.splice.call(args, 1) : [],
						x = 0;

					var publishFn = function(){
						//executes callbacks in the order in which they were registered
						for(; x < len; x++){
							subs[x].apply(context, params);
						}

						//clear references to allow garbage collection
						subs = context = params = null;
					};
					
					//run the callbacks asynchronously, do not block the main execution process
					if (sync) {
						publishFn();
					} else {
						setTimeout(publishFn, 0);
					}
					
				}
			},

			/*
			 * @public
			 *
			 * Register a callback on a channel
			 *
			 * @param String channel The channel to subscribe to
			 * @param Function callback The event handler, any time something is
			 * published on a subscribed channel, the callback will be called
			 * with the published array as ordered arguments
			 *
			 * @return Array A handle which can be used to unsubscribe this
			 * particular subscription
			 *
			 * @example PubSub.subscribe("/some/channel", function(a, b, c){ ... });
			 */
			subscribe: function(channel, callback){
				if(typeof channel !== 'string'){
					throw "invalid or missing channel";
				}

				if(!(callback instanceof funcType)){
					throw "invalid or missing callback";
				}

				if(!channels[channel]){
					channels[channel] = [];
				}

				channels[channel].push(callback);

				return {channel: channel, callback: callback};
			},

			/*
			 * @public
			 *
			 * Disconnect a subscribed function f.
			 *
			 * @param Mixed handle The return value from a subscribe call or the
			 * name of a channel as a String
			 * @param Function callback [OPTIONAL] The event handler originaally
			 * registered, not needed if handle contains the return value of subscribe
			 *
			 * @example
			 * var handle = PubSub.subscribe("/some/channel", function(){});
			 * PubSub.unsubscribe(handle);
			 *
			 * or
			 *
			 * PubSub.unsubscribe("/some/channel", callback);
			 */
			unsubscribe: function(handle, callback){
				if(handle.channel && handle.callback){
					callback = handle.callback;
					handle = handle.channel;
				}

				if(typeof handle !== 'string'){
					throw "invalid or missing channel";
				}

				if(!(callback instanceof funcType)){
					throw "invalid or missing callback";
				}

				var subs = channels[handle],
					len = (subs instanceof Array) ? subs.length : 0;

				while(len--){
					if(subs[len] === callback){
						subs.splice(len, 1);
					}
				}
			}
		};
	}
	
	context.PubSub = init;
	
}(this));