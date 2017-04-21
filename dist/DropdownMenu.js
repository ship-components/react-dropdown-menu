(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-dom", "ship-components-highlight-click", "ship-components-outsideclick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick")) : factory(root["React"], root["classnames"], root["react-dom"], root["ship-components-highlight-click"], root["ship-components-outsideclick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsOutsideclick = __webpack_require__(19);
	
	var _shipComponentsOutsideclick2 = _interopRequireDefault(_shipComponentsOutsideclick);
	
	var _utilities = __webpack_require__(8);
	
	var _MenuList = __webpack_require__(13);
	
	var _MenuList2 = _interopRequireDefault(_MenuList);
	
	var _MenuButton = __webpack_require__(11);
	
	var _MenuButton2 = _interopRequireDefault(_MenuButton);
	
	var _dropdownMenu = __webpack_require__(2);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * DropdownMenu
	   *
	   * @author       Isaac Suttell <isaac@isaacsuttell.com>
	   * @contributor  Sepand Assadi <sepand.assadi@sony.com>
	   * @file         Open a dropdown menu upon clicking an icon
	   ******************************************************************************/
	
	var DropdownMenu = function (_React$Component) {
	  _inherits(DropdownMenu, _React$Component);
	
	  /**
	   * Initialize
	   * @param  {Object} props
	   */
	  function DropdownMenu(props) {
	    _classCallCheck(this, DropdownMenu);
	
	    var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));
	
	    _this.state = {
	      active: props.readOnly ? props.initialActive : false
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.toggleMenu = _this.toggleMenu.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(DropdownMenu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.readOnly) {
	        this.setState({
	          active: nextProps.initialActive
	        });
	      }
	    }
	
	    /**
	     * Only update if active or items change
	     * @param     {Object}    nextProps    Incoming props
	     * @param     {Object}    nextState    Incoming state
	     * @return    {Boolean}
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.active !== nextState.active) {
	        return true;
	      } else if (this.props.items.length !== nextProps.items.length) {
	        return true;
	      }
	
	      var PROPS_TO_COMPARE = ['name', 'value'];
	
	      var keysEqual = function keysEqual(i, key) {
	        return this.props.items[i][key] === nextProps.items[i][key];
	      };
	
	      for (var i = 0; i < nextProps.items.length; i++) {
	        if (PROPS_TO_COMPARE.some(keysEqual.bind(this, i))) {
	          return true;
	        }
	      }
	
	      return false;
	    }
	
	    /**
	     * Close the entire menu
	     */
	
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      if (!this.props.readOnly) {
	        this.setState({
	          active: false
	        });
	      }
	      if (this.props.onClose) {
	        this.props.onClose();
	      }
	    }
	
	    /**
	     * Call the user supplied action
	     * @param     {function}      action
	     * @param     {MouseEvent}    event
	     */
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick(action, event) {
	      if (action) {
	        action(event);
	      }
	      this.handleClose(event, action);
	    }
	
	    /**
	     * Either execute a function or do a strict comparison
	     * @param  {Element} source
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'sourceIsContainer',
	    value: function sourceIsContainer(source) {
	      if (source === document.body) {
	        // Never go higher up the chain than the body
	        return true;
	      } else if (typeof this.props.container === 'function') {
	        // User supplied a function so use that
	        return this.props.container.call(this, source);
	      } else {
	        // Strict compare if we're not passed a function
	        return source === this.props.container;
	      }
	    }
	
	    /**
	     * Show or hide the menu
	     */
	
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu(event) {
	      event.preventDefault();
	      event.stopPropagation();
	
	      if (this.props.readOnly) {
	        return;
	      }
	
	      this.setState({
	        active: !this.state.active
	      });
	    }
	  }, {
	    key: 'getMenuClasses',
	    value: function getMenuClasses() {
	      return (0, _classnames2.default)('dropdown-menu', this.props.className, _dropdownMenu2.default.menu, _defineProperty({}, _dropdownMenu2.default.active, this.state.active));
	    }
	
	    /**
	     * Render it in gold
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_shipComponentsOutsideclick2.default, {
	        ref: 'container',
	        onClick: this.handleClose,
	        onContextMenu: this.handleClose,
	        className: this.getMenuClasses()
	      }, this.props.showMenuButton ? _react2.default.createElement(_MenuButton2.default, _extends({}, this.props, {
	        onClick: this.toggleMenu,
	        onContextMenu: this.toggleMenu
	      })) : null, _react2.default.createElement(_MenuList2.default, _extends({}, this.props, {
	        isContainer: this.sourceIsContainer.bind(this),
	        items: DropdownMenu.menu(this.props.items),
	        active: this.state.active,
	        onClick: this.handleClick
	      })));
	    }
	  }]);
	
	  return DropdownMenu;
	}(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = DropdownMenu;
	DropdownMenu.defaultProps = {
	  readOnly: false,
	  showMenuButton: true,
	  menuIconClass: 'icon-cog',
	  moreIconClass: 'icon-play_arrow',
	  container: document.body,
	  offsetMenu: {
	    x: 16,
	    y: 16
	  }
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	DropdownMenu.propTypes = {
	  className: _propTypes2.default.string,
	  direction: _propTypes2.default.string,
	  menuIconClass: _propTypes2.default.string,
	  moreIconClass: _propTypes2.default.string,
	  readOnly: _propTypes2.default.bool,
	  initialActive: _propTypes2.default.bool,
	  showMenuButton: _propTypes2.default.bool,
	  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
	  offsetMenu: _propTypes2.default.object
	};
	
	/**
	 * Internal counter to ensure unique keys
	 * @type    {Number}
	 */
	var _uniqueId = 0;
	
	/**
	 * Deeply search the menu and ensure every item has a unique key
	 * @param  {Array<Object>} items
	 * @return {Array<Object>}
	 */
	DropdownMenu.menu = function menu() {
	  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	  return items.map(function (item) {
	    if (!item.key && item.name) {
	      item.key = (0, _utilities.hashCode)(item.name);
	    } else if (!item.key) {
	      item.key = 'dd' + (_uniqueId++).toString();
	    }
	
	    if (item.menu) {
	      item.menu = DropdownMenu.menu(item.menu);
	    }
	
	    return item;
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"dropdown-menu--list","label":"dropdown-menu--label","active":"dropdown-menu--active","child":"dropdown-menu--child","menu":"dropdown-menu--menu","item":"dropdown-menu--item","divider":"dropdown-menu--divider","name":"dropdown-menu--name","icon":"dropdown-menu--icon","checkbox":"dropdown-menu--checkbox","control":"dropdown-menu--control"};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(16)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(15)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hashCode = hashCode;
	exports.getOffset = getOffset;
	exports.getOffsetToScreen = getOffsetToScreen;
	/**
	 * Generate a hash from a string used for shorter keys
	 * @param  {string} str [description]
	 * @return {Number}
	 */
	function hashCode(str) {
	  var hash = 0;
	  if (str.length === 0) {
	    return hash;
	  }
	  for (var i = 0, len = str.length; i < len; i++) {
	    var chr = str.charCodeAt(i);
	    hash = (hash << 5) - hash + chr;
	    hash |= 0; // Convert to 32bit integer
	  }
	  return hash;
	}
	
	/**
	 * Get the offset to the page for a node
	 * @param    {Node}    el
	 */
	function getOffset(el, checkIsContainer) {
	  // Don't count the element itself
	  var source = el.offsetParent;
	
	  var offset = {
	    left: 0,
	    top: 0,
	    bottom: 0,
	    right: 0
	  };
	
	  // Search up the tree for the component node
	  while (checkIsContainer(source)) {
	    if (!source) {
	      break;
	    }
	
	    // Add it all up
	    offset.left += source.offsetLeft - source.scrollLeft + source.clientLeft;
	    offset.top += source.offsetTop - source.scrollTop + source.clientTop;
	    source = source.offsetParent;
	  }
	
	  // Helper values
	  offset.right = source && source.clientWidth - offset.left;
	  offset.bottom = source && source.clientHeight - offset.top;
	
	  return offset;
	}
	
	/**
	 * Get the offset and then adjust relative to the screen
	 * @param    {Node}    el
	 */
	function getOffsetToScreen(el) {
	  var source = el.offsetParent;
	  var offset = {
	    left: 0,
	    top: 0,
	    bottom: 0,
	    right: 0
	  };
	
	  // Search up the tree for the component node
	  while (source && source !== document.body) {
	    // Add it all up
	    offset.left += source.offsetLeft - source.scrollLeft + source.clientLeft;
	    offset.top += source.offsetTop - source.scrollTop + source.clientTop;
	
	    source = source.offsetParent;
	  }
	
	  // Adjust according to scroll of document body
	  offset.top -= document.documentElement.scrollTop || document.body.scrollTop;
	  offset.left -= document.documentElement.scrollLeft || document.body.scrollLeft;
	
	  // Helper calcs
	  offset.bottom = window.innerHeight - offset.top;
	  offset.right = window.innerWidth - offset.left;
	
	  return offset;
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsHighlightClick = __webpack_require__(18);
	
	var _shipComponentsHighlightClick2 = _interopRequireDefault(_shipComponentsHighlightClick);
	
	var _dropdownMenu = __webpack_require__(2);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * MenuButton
	   *
	   * @author       Isaac Suttell <isaac@isaacsuttell.com>
	   * @contributor  Sepand Assadi <sepand.assadi@sony.com>
	   * @file         Open a dropdown menu upon clicking an icon
	   ******************************************************************************/
	
	var MenuButton = function (_React$Component) {
	  _inherits(MenuButton, _React$Component);
	
	  function MenuButton() {
	    _classCallCheck(this, MenuButton);
	
	    return _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).apply(this, arguments));
	  }
	
	  _createClass(MenuButton, [{
	    key: 'render',
	    value: function render() {
	
	      var props = {};
	      if (this.props.customButton) {
	        Object.assign(props, this.props.customButton.props);
	      } else {
	        Object.assign(props, {
	          className: this.props.menuIconClass
	        });
	      }
	
	      if (this.props.customButton) {
	        this.__component = this.props.customButton.component;
	        props.className = (0, _classnames2.default)(props.className, 'dropdown-menu--control');
	      } else {
	        props.className = (0, _classnames2.default)(props.className, 'dropdown-menu--control', _dropdownMenu2.default.control);
	        this.__component = 'span';
	      }
	
	      return _react2.default.createElement(_shipComponentsHighlightClick2.default, null, _react2.default.createElement(this.__component, _extends({}, props, {
	        onContextMenu: this.props.onContextMenu,
	        onClick: this.props.onClick })));
	    }
	  }]);
	
	  return MenuButton;
	}(_react2.default.Component);
	
	exports.default = MenuButton;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dropdownMenu = __webpack_require__(2);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * MenuItem
	   *
	   * @author       Isaac Suttell <isaac@isaacsuttell.com>
	   * @contributor  Sepand Assadi <sepand.assadi@sony.com>
	   * @file         Open a dropdown menu upon clicking an icon
	   ******************************************************************************/
	
	var MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem() {
	    _classCallCheck(this, MenuItem);
	
	    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	  }
	
	  _createClass(MenuItem, [{
	    key: 'handleClick',
	
	    /**
	     * Pass the action if we have it
	     * @param     {function}      action    User supplied action
	     * @param     {MouseEvent}    event
	     */
	    value: function handleClick(action, event) {
	      if (action) {
	        this.props.onClick(action, event);
	      }
	    }
	
	    /**
	     * Render a divider
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderDivider',
	    value: function renderDivider() {
	      return _react2.default.createElement('li', {
	        onMouseOver: this.props.onMouseOver,
	        onMouseOut: this.props.onMouseOut,
	        className: (0, _classnames2.default)('dropdown-menu--item', 'dropdown-menu--divider', _dropdownMenu2.default.divider, _dropdownMenu2.default.item)
	      });
	    }
	
	    /**
	     * Render a checkbox
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox() {
	      return _react2.default.createElement('li', {
	        onMouseOver: this.props.onMouseOver,
	        onMouseOut: this.props.onMouseOut,
	        className: (0, _classnames2.default)('dropdown-menu--item', _dropdownMenu2.default.item),
	        key: this.props.name,
	        onClick: this.handleClick.bind(this, this.props.action) }, _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) }, _react2.default.createElement('input', {
	        style: { display: 'none' },
	        type: 'checkbox',
	        className: (0, _classnames2.default)('dropdown-menu--checkbox', _dropdownMenu2.default.checkbox),
	        readOnly: true,
	        checked: this.props.value })), _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name, _defineProperty({}, _dropdownMenu2.default.label, this.props.label)) }, this.props.name));
	    }
	  }, {
	    key: 'renderChildMenu',
	    value: function renderChildMenu() {
	      if (!this.props.menu) {
	        return null;
	      }
	
	      var menu = this.props.menu;
	      if (!this.props.isMouseOver) {
	        menu = null;
	      }
	      return _react2.default.createElement('div', { className: (0, _classnames2.default)('drop-down-menu--child', _dropdownMenu2.default.child) }, this.props.menu ? _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.moreIconClass) }) : null, menu);
	    }
	
	    /**
	     * Default list item
	     * @return    {React}
	     */
	
	  }, {
	    key: 'renderDefault',
	    value: function renderDefault() {
	      var itemClasses = (0, _classnames2.default)('dropdown-menu--item', _dropdownMenu2.default.item, _defineProperty({
	        'dropdown-menu--active': this.props.isMouseOver
	      }, _dropdownMenu2.default.active, this.props.isMouseOver));
	
	      return _react2.default.createElement('li', {
	        onMouseOver: this.props.onMouseOver,
	        onMouseOut: this.props.onMouseOut,
	        className: itemClasses,
	        key: this.props.name,
	        onClick: this.handleClick.bind(this, this.props.action) }, _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) }), _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name) }, this.props.name), this.renderChildMenu());
	    }
	
	    /**
	     * Render a list of menu items
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.hidden === true || this.props.type === 'hidden') {
	        return null;
	      } else if (this.props.type === 'divider') {
	        return this.renderDivider();
	      } else if (this.props.type === 'checkbox') {
	        return this.renderCheckbox();
	      } else {
	        return this.renderDefault();
	      }
	    }
	  }]);
	
	  return MenuItem;
	}(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = MenuItem;
	MenuItem.defaultProps = {
	  isMouseOver: false,
	  menu: null,
	  hidden: false,
	  moreIconClass: 'icon-play_arrow'
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	MenuItem.propTypes = {
	  item: _propTypes2.default.object
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuItem = __webpack_require__(12);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _dropdownMenu = __webpack_require__(2);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	var _utilities = __webpack_require__(8);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * MenuList
	   *
	   * @author       Isaac Suttell <isaac@isaacsuttell.com>
	   * @contributor  Sepand Assadi <sepand.assadi@sony.com>
	   * @file         Open a dropdown menu upon clicking an icon
	   ******************************************************************************/
	
	var MenuList = function (_React$Component) {
	  _inherits(MenuList, _React$Component);
	
	  /**
	   * Boot it up
	   * @param     {Object}    props
	   */
	  function MenuList(props) {
	    _classCallCheck(this, MenuList);
	
	    var _this = _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this, props));
	
	    _this.state = {
	      mouseOverIndex: -1,
	      visible: props.items.map(function () {
	        return false;
	      }),
	      offset: {
	        x: 0,
	        y: 0
	      }
	    };
	
	    // Keep track of any throttled functions
	    _this.throttleIds = {};
	
	    // Bind and throttle this since it may be called often
	    _this.updateOffset = _this.throttleFn(_this.updateOffset, 15, _this);
	    return _this;
	  }
	
	  /**
	   * Setup offsets so we can position the menu dynamically
	   * @return {[type]} [description]
	   */
	
	  _createClass(MenuList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.updateOffset);
	      this.updateOffset();
	    }
	
	    /**
	     * Try to limit when we update
	     * @param  {Object} nextProps
	     * @param  {Object} nextState
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextState.offset.x !== this.state.offset.x || nextState.offset.y !== this.state.offset.y) {
	        return true;
	      } else if (nextState.mouseOverIndex !== this.state.mouseOverIndex) {
	        return true;
	      } else if (nextProps.active !== this.props.active) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	
	    /**
	     * Force an update if the active state changes
	     * @param  {Object} prevProps
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.active !== this.props.active) {
	        this.updateOffset();
	      }
	    }
	
	    /**
	     * Cleaup
	     */
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.updateOffset);
	
	      // Clean up any straggling functions
	      for (var key in this.throttleIds) {
	        if (this.throttleIds.hasOwnProperty(key)) {
	          clearTimeout(this.throttleIds[key]);
	        }
	      }
	    }
	
	    /**
	     * Create a function that can only be called every `threshold`
	     * @param  {Function} fn
	     * @param  {Number}   threshold    default to 200, or a response ajax request time
	     * @param  {Mixed}    ctx          default to this instance
	     * @return {Function}
	     */
	
	  }, {
	    key: 'throttleFn',
	    value: function throttleFn(fn) {
	      var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
	
	      var last = void 0;
	      return function () {
	        var now = Date.now();
	        var args = arguments;
	        if (last && now < last + threshold) {
	          clearTimeout(this.throttleIds[fn.name]);
	          this.throttleIds[fn.name] = setTimeout(function () {
	            last = now;
	            fn.apply(ctx, args);
	          }, threshold);
	        } else {
	          last = now;
	          fn.apply(ctx, args);
	        }
	      }.bind(this);
	    }
	
	    /**
	     * Calculate and update offset if need be
	     */
	
	  }, {
	    key: 'updateOffset',
	    value: function updateOffset() {
	      var _this2 = this;
	
	      // Get the element
	      var el = _reactDom2.default.findDOMNode(this);
	
	      if (!el) {
	        // Not mounted yet
	        return;
	      }
	
	      // Grab the parent
	      var parentList = _reactDom2.default.findDOMNode(this.props.parent);
	
	      // Get relative positions to edge of container
	      var container = (0, _utilities.getOffset)(el, function (source) {
	        return source && !_this2.props.isContainer(source);
	      });
	
	      // Get the relative position to the edge the screen
	      var screen = (0, _utilities.getOffsetToScreen)(el);
	
	      // Grab the smallest of the two
	      var position = {
	        bottom: Math.min(container.bottom, screen.bottom),
	        right: Math.min(container.right, screen.right)
	      };
	
	      // Make sure to create a new instance
	      var offset = {
	        x: 0,
	        y: 0
	      };
	
	      // Width
	      if (el.offsetWidth > position.right) {
	        offset.x -= el.offsetWidth - this.props.overlap * 2;
	
	        // Open the menu to the left of the parent if we have no room
	        if (parentList) {
	          offset.x -= parentList.offsetWidth;
	        }
	
	        // Ensure the menu is always connected
	        if (screen.right < 0) {
	          offset.x -= screen.right;
	        }
	      }
	
	      // Height
	      if (el.clientHeight > position.bottom) {
	        offset.y = position.bottom - el.clientHeight - this.props.scrollbar.height - this.props.overlap;
	
	        // Ensure the menu is always connected to it's parent node
	        if (screen.bottom < 0) {
	          offset.y -= screen.bottom;
	        }
	      }
	
	      this.setState({
	        offset: offset
	      });
	    }
	
	    /**
	     * Get recursive sub menu
	     * @param     {Array<Objects>}    item
	     * @return    {React}
	     */
	
	  }, {
	    key: 'getMenu',
	    value: function getMenu(item) {
	      if (!item.menu) {
	        return null;
	      }
	      return _react2.default.createElement(MenuList, _extends({}, this.props, {
	        parent: this,
	        items: item.menu
	      }));
	    }
	
	    /**
	     * Hover and show when sub menus
	     * @param     {Number}    index
	     */
	
	  }, {
	    key: 'handleMouseOverItem',
	    value: function handleMouseOverItem(mouseOverIndex) {
	      var visible = this.state.visible.slice(0);
	
	      // Ensure only one is visible
	      visible = visible.map(function (item, i) {
	        return i === mouseOverIndex;
	      });
	
	      this.setState({
	        mouseOverIndex: mouseOverIndex,
	        visible: visible
	      });
	    }
	
	    /**
	     * Remove hidden items and duplicate dividers
	     * @return {Array<Objects>}
	     */
	
	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      var _last = void 0;
	      return (this.props.items || []).filter(function (item) {
	        if (item.hidden) {
	          return false;
	        } else if (_last && _last.type === 'divider' && _last.type === item.type) {
	          return false;
	        }
	        _last = item;
	        return true;
	      });
	    }
	
	    /**
	     * Render it in gold
	     *
	     * @return    {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      if (!this.props.active) {
	        return null;
	      }
	
	      var styles = {
	        left: this.state.offset.x,
	        top: this.state.offset.y
	      };
	
	      // Used to position for context menus
	      if (_typeof(this.props.offsetMenu) === 'object' && !this.props.parent) {
	        styles.left += this.props.offsetMenu.left || 0;
	        styles.top += this.props.offsetMenu.top || 0;
	      }
	
	      return _react2.default.createElement('ul', {
	        style: styles,
	        className: (0, _classnames2.default)('dropdown-menu--list', _dropdownMenu2.default.list)
	      }, this.getItems().map(function (menuItem, index) {
	        return _react2.default.createElement(_MenuItem2.default, _extends({
	          key: menuItem.key || menuItem.name
	        }, _this3.props, menuItem, {
	          menu: _this3.getMenu(menuItem),
	          isMouseOver: _this3.state.visible[index],
	          onMouseOver: _this3.handleMouseOverItem.bind(_this3, index)
	        }));
	      }));
	    }
	  }]);
	
	  return MenuList;
	}(_react2.default.Component);
	
	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */
	
	exports.default = MenuList;
	MenuList.defaultProps = {
	  active: true,
	  scrollbar: {
	    height: 16,
	    width: 16
	  },
	  overlap: 4,
	  className: '',
	  items: []
	};
	
	/**
	 * Validate the prop types
	 * @static
	 * @type    {Object}
	 */
	MenuList.propTypes = {
	  className: _propTypes2.default.string,
	  active: _propTypes2.default.bool,
	  scrollbar: _propTypes2.default.object,
	  overlay: _propTypes2.default.number,
	  items: _propTypes2.default.arrayOf(_propTypes2.default.object)
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(6);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(10);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	
	module.exports = function() {
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  function shim() {
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var warning = __webpack_require__(9);
	
	var ReactPropTypesSecret = __webpack_require__(10);
	var checkPropTypes = __webpack_require__(14);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=DropdownMenu.js.map