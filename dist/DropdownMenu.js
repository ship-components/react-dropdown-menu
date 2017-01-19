(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-dom", "ship-components-highlight-click", "ship-components-outsideclick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-highlight-click"), require("ship-components-outsideclick")) : factory(root["React"], root["classnames"], root["react-dom"], root["ship-components-highlight-click"], root["ship-components-outsideclick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsOutsideclick = __webpack_require__(10);
	
	var _shipComponentsOutsideclick2 = _interopRequireDefault(_shipComponentsOutsideclick);
	
	var _utilities = __webpack_require__(4);
	
	var _MenuList = __webpack_require__(7);
	
	var _MenuList2 = _interopRequireDefault(_MenuList);
	
	var _MenuButton = __webpack_require__(5);
	
	var _MenuButton2 = _interopRequireDefault(_MenuButton);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DropdownMenu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author       Isaac Suttell <isaac@isaacsuttell.com>
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
	      return _react2.default.createElement(
	        _shipComponentsOutsideclick2.default,
	        {
	          ref: 'container',
	          onClick: this.handleClose,
	          onContextMenu: this.handleClose,
	          className: this.getMenuClasses()
	        },
	        this.props.showMenuButton ? _react2.default.createElement(_MenuButton2.default, _extends({}, this.props, {
	          onClick: this.toggleMenu,
	          onContextMenu: this.toggleMenu
	        })) : null,
	        _react2.default.createElement(_MenuList2.default, _extends({}, this.props, {
	          items: DropdownMenu.menu(this.props.items),
	          active: this.state.active,
	          onClick: this.handleClick
	        }))
	      );
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
	  className: _react2.default.PropTypes.string,
	  direction: _react2.default.PropTypes.string,
	  menuIconClass: _react2.default.PropTypes.string,
	  moreIconClass: _react2.default.PropTypes.string,
	  readOnly: _react2.default.PropTypes.bool,
	  initialActive: _react2.default.PropTypes.bool,
	  showMenuButton: _react2.default.PropTypes.bool,
	  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  offsetMenu: _react2.default.PropTypes.object
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"dropdown-menu--list","label":"dropdown-menu--label","active":"dropdown-menu--active","child":"dropdown-menu--child","menu":"dropdown-menu--menu","item":"dropdown-menu--item","divider":"dropdown-menu--divider","name":"dropdown-menu--name","icon":"dropdown-menu--icon","checkbox":"dropdown-menu--checkbox","control":"dropdown-menu--control"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hashCode = hashCode;
	exports.getEdgeOffset = getEdgeOffset;
	exports.getDocumentSize = getDocumentSize;
	exports.getScroll = getScroll;
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
	 * Cal
	 * @param    {[type]}    el            [description]
	 * @param    {[type]}    parentList    [description]
	 */
	function getEdgeOffset(position, el, parentList) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  var offset = {
	    left: 0,
	    top: 0
	  };
	
	  // Get it visible if it scrolls off the top of the screen
	  if (position.top < 0) {
	    offset.top -= position.top;
	  }
	
	  // Keep it visible if it scrolls off the left of the screen
	  if (position.left < 0) {
	    offset.left -= offset.left;
	  }
	
	  // Width, aka we're on the right edge of the screen
	  if (el.offsetWidth > position.right) {
	    offset.left -= el.offsetWidth;
	
	    // Open the menu to the left of the parent if we have no room
	    if (parentList) {
	      offset.left -= parentList.offsetWidth;
	    } else {
	      // Move the other other side of the button
	      offset.left += el.offsetParent.clientWidth;
	    }
	  }
	
	  // Height - aka we're at the bottom of the screen
	  if (el.clientHeight > position.bottom) {
	    offset.top += position.bottom - el.clientHeight - (options.scrollbar && typeof options.scrollbar.height === 'number' ? options.scrollbar.height : 0);
	  }
	
	  return offset;
	}
	
	/**
	 * Get the size of the document
	 * @return    {Object}
	 */
	function getDocumentSize() {
	  var _document = document,
	      body = _document.body,
	      documentElement = _document.documentElement;
	
	  return {
	    width: Math.max(body.offsetWidth, body.scrollWidth, documentElement.clientWidth, documentElement.offsetWidth, documentElement.scrollWidth),
	    height: Math.max(body.offsetHeight, body.scrollHeight, documentElement.clientHeight, documentElement.offsetHeight, documentElement.scrollHeight)
	  };
	}
	
	/**
	 * Get total scroll from node
	 * @param    {Node}    el
	 */
	function getScroll(el) {
	  var scroll = {
	    top: 0,
	    left: 0
	  };
	
	  // Don't count the element itself
	  var source = el.offsetParent;
	
	  // Search up the tree for the component node
	  while (source) {
	    // Add it all up
	    scroll.top += source.scrollTop;
	    scroll.left += source.scrollLeft;
	    source = source.offsetParent;
	  }
	
	  return scroll;
	}
	/**
	 * Get the offset to the page for a node
	 * @param    {Node}    el
	 */
	function getOffset(el) {
	  // Don't count the element itself
	  var source = el.offsetParent;
	
	  var offset = {
	    left: 0,
	    top: 0,
	    bottom: 0,
	    right: 0
	  };
	
	  // Search up the tree for the component node
	  while (source) {
	    // Add it all up
	    offset.left += source.offsetLeft - source.clientLeft;
	    offset.top += source.offsetTop - source.clientTop;
	    source = source.offsetParent;
	  }
	
	  var documentSize = getDocumentSize();
	
	  // Helper values
	  offset.right = documentSize.width - offset.left;
	  offset.bottom = documentSize.height - offset.top;
	
	  return offset;
	}
	
	/**
	 * Get the offset and then adjust relative to the screen
	 * @param    {Node}    el
	 */
	function getOffsetToScreen(el) {
	  var offset = getOffset(el);
	
	  // Go up the dom tree and add up all the scrolling
	  var scroll = getScroll(el);
	
	  // Apply scroll
	  offset.left -= scroll.left;
	  offset.top -= scroll.top;
	
	  // Helper calcs
	  offset.bottom = window.innerHeight - offset.top;
	  offset.right = window.innerWidth - offset.left;
	
	  return offset;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsHighlightClick = __webpack_require__(9);
	
	var _shipComponentsHighlightClick2 = _interopRequireDefault(_shipComponentsHighlightClick);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MenuButton
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author       Isaac Suttell <isaac@isaacsuttell.com>
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
	
	      return _react2.default.createElement(
	        _shipComponentsHighlightClick2.default,
	        null,
	        _react2.default.createElement(this.__component, _extends({}, props, {
	          onContextMenu: this.props.onContextMenu,
	          onClick: this.props.onClick }))
	      );
	    }
	  }]);
	
	  return MenuButton;
	}(_react2.default.Component);
	
	exports.default = MenuButton;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MenuItem
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author       Isaac Suttell <isaac@isaacsuttell.com>
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
	      return _react2.default.createElement(
	        'li',
	        {
	          onMouseOver: this.props.onMouseOver,
	          onMouseOut: this.props.onMouseOut,
	          className: (0, _classnames2.default)('dropdown-menu--item', _dropdownMenu2.default.item, this.props.className),
	          key: this.props.name,
	          onClick: this.handleClick.bind(this, this.props.action) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) },
	          _react2.default.createElement('input', {
	            style: { display: 'none' },
	            type: 'checkbox',
	            className: (0, _classnames2.default)('dropdown-menu--checkbox', _dropdownMenu2.default.checkbox),
	            readOnly: true,
	            checked: this.props.value })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name, _defineProperty({}, _dropdownMenu2.default.label, this.props.label)) },
	          this.props.name
	        )
	      );
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
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('drop-down-menu--child', _dropdownMenu2.default.child) },
	        this.props.menu ? _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.moreIconClass) }) : null,
	        menu
	      );
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
	
	      return _react2.default.createElement(
	        'li',
	        {
	          onMouseOver: this.props.onMouseOver,
	          onMouseOut: this.props.onMouseOut,
	          className: itemClasses,
	          key: this.props.name,
	          onClick: this.handleClick.bind(this, this.props.action) },
	        _react2.default.createElement('div', { className: (0, _classnames2.default)('dropdown-menu--icon', _dropdownMenu2.default.icon, this.props.iconClass) }),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('dropdown-menu--name', _dropdownMenu2.default.name) },
	          this.props.name
	        ),
	        this.renderChildMenu()
	      );
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
	  className: '',
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
	  className: _react2.default.PropTypes.string,
	  item: _react2.default.PropTypes.object
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(8);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuItem = __webpack_require__(6);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _dropdownMenu = __webpack_require__(1);
	
	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);
	
	var _utilities = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MenuList
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author       Isaac Suttell <isaac@isaacsuttell.com>
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
	      // Get the element
	      var el = _reactDom2.default.findDOMNode(this.refs.list);
	
	      if (!el) {
	        // Not mounted yet
	        return;
	      }
	
	      // Grab the parent
	      var parentList = _reactDom2.default.findDOMNode(this.props.parent);
	
	      // Get relative positions to edge of container
	      var container = (0, _utilities.getOffset)(el);
	
	      // Grab the smallest of the two
	      var position = Object.assign({}, container);
	
	      // Adjust so it fits on the screen
	      var screen = (0, _utilities.getOffsetToScreen)(el);
	      Object.keys(position).forEach(function (key) {
	        position[key] = Math.min(position[key], screen[key]);
	      });
	
	      // Make sure to create a new instance
	      var offset = {
	        x: 0,
	        y: 0
	      };
	
	      // Add a slide overlap to the sub menus
	      if (parentList && el.offsetWidth > position.right) {
	        // to the left
	        offset.x += this.props.overlap;
	      } else if (parentList) {
	        // To the right
	        offset.x -= this.props.overlap;
	      }
	
	      // Calculate if we need to adjust the menu to keep it visible if itself
	      // close the the right or bottom edge of the screen
	      var edgeOffset = (0, _utilities.getEdgeOffset)(position, el, parentList, this.props);
	      offset.x += edgeOffset.left;
	      offset.y += edgeOffset.top;
	
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
	      var _this2 = this;
	
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
	
	      return _react2.default.createElement(
	        'ul',
	        {
	          style: styles,
	          className: (0, _classnames2.default)('dropdown-menu--list', _dropdownMenu2.default.list),
	          ref: 'list'
	        },
	        this.getItems().map(function (menuItem, index) {
	          return _react2.default.createElement(_MenuItem2.default, _extends({
	            key: menuItem.key || menuItem.name
	          }, _this2.props, menuItem, {
	            menu: _this2.getMenu(menuItem),
	            isMouseOver: _this2.state.visible[index],
	            onMouseOver: _this2.handleMouseOverItem.bind(_this2, index)
	          }));
	        })
	      );
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
	  className: _react2.default.PropTypes.string,
	  active: _react2.default.PropTypes.bool,
	  scrollbar: _react2.default.PropTypes.object,
	  overlay: _react2.default.PropTypes.number,
	  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=DropdownMenu.js.map