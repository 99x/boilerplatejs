/**
 * testr.js 1.0.2
 * https://www.github.com/mattfysh/testr.js
 * Distributed under the MIT license
 */

var testr, define;

(function() {
	var version = '1.0.2',
		origDefine = define,
		cjsRequireRegExp = /require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		noop = function() {},
		moduleMap = window.mm = {},
		pluginPaths = {},
		baseUrl = require.toUrl('.').replace(/\.$/, ''),
		config = {
			autoLoad: false
		};

	// type detection
	function isArray(a) {
		return toString.call(a) == '[object Array]';
	}
	function isObject(o) {
		return typeof o === 'object' && !isArray(o);
	}

	// deep copy
	function deepCopy(src) {
		var tgt = isObject(src) ? {} : [];
		each(src, function(val, key) {
			tgt[key] = (isArray(val) || isObject(val)) ? deepCopy(val) : val;
		});
		return tgt;
	}

	// each
	function each(items, callback) {
		if (!items) {
			return;
		} else if (typeof items.length === 'number') {
			for (var i = 0; i < items.length; i += 1) {
				callback(items[i], i);
			}
		} else if (isObject(items)) {
			for (var prop in items) {
				if (items.hasOwnProperty(prop)) {
					callback(items[prop], prop);
				}
			}
		}
	}

	// normalize paths
	function normalize(path, contextReq) {
		if (path.indexOf('!') === -1) {
			// regular path
			return contextReq(path);
		} else {
			// plugin
			path = path.split('!');
			if (path[1]) {
				path[1] = contextReq.toUrl(path[1]).substring(baseUrl.length);
			}
			return path.join('!');
		}
	}

	// override define
	define = function() {
		var args = [].slice.call(arguments),
			factory = args.pop(),
			deps = args.pop(),
			name = args.pop(),
			depPaths = ['require', 'module'],
			extractedPaths = [],
			pluginLocs = [],
			exportsLocs = [],
			requireLocs = [],
			wrap = !deps && typeof factory === 'function',
			defineArgs;

		// account for signature variation
		if (typeof deps === 'string') {
			name = deps;
			deps = [];
		}

		// process the dependency ids
		each(deps, function(path, index) {
			if (path.indexOf('!') > -1) {
				pluginPaths[path.split('!')[0]] = true;
				pluginLocs.push(index);
			} else if (path === 'exports') {
				exportsLocs.push(index);
			} else if (path === 'require') {
				requireLocs.push(index);
			}
			depPaths.push(path);
		});

		// find cjs wrapped require calls
		if (!deps) {
			factory.toString().replace(cjsRequireRegExp, function (match, dep) {
				extractedPaths.push(dep);
			});
		}
		

		// rewrite the function that requirejs executes when defining the module
		function trojan(contextReq, module) {
			var offset = 2,
				deps = [].slice.call(arguments, offset);

 			if (!module || pluginPaths[module.id]) {
 				// jquery or plugin, give requirejs the real module
 				return (typeof factory === 'function') ? factory.apply(null, deps) : factory;
 			}

 			// alter plugin storage
 			each(pluginLocs, function(loc) {
 				// normalize path names
 				var path = depPaths[loc + offset];
 				deps[loc] = normalize(path, contextReq);
 			});

 			// alter exports deps
 			each(exportsLocs, function(loc) {
 				deps[loc] = 'exports';
 			});

 			// alter require deps
 			each(requireLocs, function(loc) {
 				deps[loc] = 'require';
 			});

 			// save the module
			moduleMap[module.id] = {
				factory: factory,
				deps: wrap ? ['require', 'exports'] : deps,
				require: contextReq
			};

			if (module.uri.indexOf('./stub') === 0) {
				// stub has been saved to module map, no further processing needed
				return;
			}

			// auto load associated files
			if (config.autoLoad) {
				require({
					context: module.id,
					baseUrl: '.',
					deps: ['stub/' + module.id + '.stub', 'spec/' + module.id + '.spec']
				});
			}
			
			// define the module as its path name, used by dependants
			return module.id;
		};

		// hook back into the loader with modified dependancy paths
		// to trigger dependency loading, and execute the trojan
		if (extractedPaths.length) {

		}
		defineArgs = [depPaths.concat(extractedPaths), trojan];
		name && defineArgs.unshift(name);
		origDefine.apply(null, defineArgs);
		name && require([name]); // force requirejs to load the module immediately and call the trojan
	};

	// copy amd properties
	define.amd = origDefine.amd;

	// create new modules with the factory
	function buildModule(moduleName, stubs, useExternal, subject) {
		var depModules = [],
			exports = {},
			moduleDef, factory, deps, contextReq,
			getModule = function(depName) {
				return stubs && stubs[depName] || buildModule(depName, stubs, useExternal);
			};

		// get module definition from map
		moduleDef = (!subject && useExternal && moduleMap['stub/' + moduleName + '.stub']) || moduleMap[moduleName];
		if (!moduleDef) {
			// module may be stored in requirejs, e.g. plugin-loaded dependencies
			try {
				return require(moduleName);
			} catch(e) {
				throw new Error('module has not been loaded: ' + moduleName);
			}
		}

		// shortcuts
		factory = moduleDef.factory;
		deps = moduleDef.deps;
		contextReq = moduleDef.require;

		// normalize stubs object paths on first call
		if (subject) {
			each(stubs, function(stub, path) {
				var nPath = normalize(path, contextReq);
				if (nPath !== path) {
					stubs[nPath] = stub;
					delete stubs[path];
				}
			});
		}

		// load up dependencies
		each(deps, function(dep) {
			// determine what to pass to the factory
			if (dep == 'exports') {
				dep = exports;
			} else if (dep === 'require') {
				dep = function(path) {
					return getModule(normalize(path, contextReq));
				};
			} else {
				dep = getModule(dep);
			}

			// add dependency to array
			depModules.push(dep);
		});

		if (typeof factory !== 'function') {
			// return clean copy of module object
			return deepCopy(factory);
		} else {
			// return clean instance of module
			return factory.apply(exports, depModules) || exports;
		}
	}

	// testr API
	testr = function(moduleName, stubs, useExternal) {
		// check module name
		if (typeof moduleName !== 'string') {
			throw Error('module name must be a string');
		}

		// check stubs
		if (!useExternal && typeof stubs === 'boolean') {
			useExternal = stubs;
			stubs = {};
		} else if (stubs && !isObject(stubs)) {
			throw Error('stubs must be given as an object');
		}

		// build the module under test
		return buildModule(moduleName, stubs, useExternal, true);
	};

	// testr config
	testr.config = function(userConfig) {
		each(userConfig, function(val, key) {
			config[key] = val;
		});
	};

	// attach version
	testr.version = version;

}());
