/** ****************************************************************************
 * MenuList
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import MenuItem from './MenuItem';

import css from './dropdown-menu.css';

export default class MenuList extends React.Component {

  /**
   * Boot it up
   * @param     {Object}    props
   */
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: -1,
      visible: props.items.map(() => {
        return false;
      }),
      offset: {
        x: 0,
        y: 0
      }
    }

    // Keep track of any throttled functions
    this.throttleIds = {};

    // Bind and throttle this since it may be called often
    this.updateOffset = this.throttleFn(this.updateOffset, 15, this);
  }

  /**
   * Setup offsets so we can position the menu dynamically
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.updateOffset();
  }

  /**
   * Try to limit when we update
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.offset.x !== this.state.offset.x || nextState.offset.y !== this.state.offset.y) {
      return true;
    } else if (nextState.mouseOver !== this.state.mouseOver) {
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
  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.updateOffset();
    }
  }

  /**
   * Cleaup
   */
  componentWillUnmount() {
    // Clean up any straggling functions
    for(var key in this.throttleIds) {
      if(this.throttleIds.hasOwnProperty(key)) {
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
  throttleFn(fn, threshold = 200, ctx = this) {
    let last;
    return function(){
      let now = Date.now();
      let args = arguments;
      if (last && now < last + threshold) {
        clearTimeout(this.throttleIds[fn.name]);
        this.throttleIds[fn.name] = setTimeout(function(){
          last = now;
          fn.apply(ctx, args);
        }, threshold)
      } else {
        last = now;
        fn.apply(ctx, args);
      }
    }.bind(this);
  }

  /**
   * Get width of this
   * @return {Number}
   */
  getOuterWidth(el) {
    el = el || ReactDOM.findDOMNode(this);
    return this.calculateOuter(
      el,
      [],
      // ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width'],
      el.clientWidth
    );
  }

  /**
   * Get height of this
   * @return {Number}
   */
  getOuterHeight(el) {
    el = el || ReactDOM.findDOMNode(this);
    return this.calculateOuter(
      el,
      [],
      // ['margin-top', 'margin-top', 'padding-top', 'padding-top', 'border-top-width', 'border-bottom-width'],
      el.clientHeight
    );
  }

  /**
   * Try to calculate the absolute width/height of an element so we can position it
   * @param  {Node}          el
   * @param  {Array<string>} styleNames
   * @param  {Number}        initial
   * @return {Number}
   */
  calculateOuter(el, styleNames, initial = 0) {
    var style = el.currentStyle || window.getComputedStyle(el);
    return styleNames
      .map((item) => style[item])
      .filter((item) => !!item)
      .reduce((current, item) => {
        let val = parseInt(item, 10);
        return current + (isNaN(val) ? 0 : val);
      }, initial);
  }

  /**
   * Calculate how far left we need to move a submenu to always be visible
   * @param   {Node} el
   * @return  {Number}
   */
  getParentOffset(el) {
    let width = this.getOuterWidth(el);

    // Get relative positions to edge of container
    let container = this.getPositionRelativeToContainer(el);

    let offset = Math.max(0, container.right - width);
    return width + offset;
  }

  /**
   * Calculate and update offset if need be
   */
  updateOffset() {
    let el = ReactDOM.findDOMNode(this);

    // Not mounted yet
    if (!el) {
      return;
    }

    // Get relative positions to edge of container
    let container = this.getOffsetFor(el, (source) => source && !this.props.isContainer(source));
    // Get the relative position to the edge the screen
    let screen = this.getOffsetToScreen(el);

    // Grab the smallest of the two
    let position = {
      bottom: Math.min(container.bottom, screen.bottom),
      right: Math.min(container.right, screen.right)
    };

    // Make sure to create a new instance
    let offset = {
      x: 0,
      y: 0
    }

    let parentList = ReactDOM.findDOMNode(this.props.parent);

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
   * Loop up the offset tree while containerFn is truthy. Add upp all the offsets
   * @param {Node}     el
   * @param {Function} containerFn
   */
  getOffsetFor(el, checkIsContainer) {
    // Don't count the element itself
    let source = el.offsetParent;

    let position = {
      x: 0,
      y: 0,
      bottom: 0,
      right: 0
    }

    // Search up the tree for the component node
    while (containerFn(source)) {
      // Add it all up
      position.x += (source.offsetLeft - source.scrollLeft + source.clientLeft);
      position.y += (source.offsetTop - source.scrollTop + source.clientTop);

      source = source.offsetParent;
    }

    // Helpper values
    position.right = source.clientWidth - position.x;
    position.bottom = source.clientHeight - position.y;

    return position;
  }

  /**
   * Get the relative position of the element to the window
   * @param  {Node} el
    [description]
   */
  getOffsetToScreen(el) {
    var source = el;

    let position = {
      x: 0,
      y: 0,
      bottom: 0,
      right: 0
    };

    // // Search up the tree for the component node
    while (source && source !== document.body) {
      // Add it all up
      position.x += (source.offsetLeft - source.scrollLeft + source.clientLeft);
      position.y += (source.offsetTop - source.scrollTop + source.clientTop);

      source = source.offsetParent;
    }

    // Adjust according to scroll of document body
    position.y -= document.body.scrollTop;
    position.x -= document.body.scrollLeft;

    // Helper calcs
    position.bottom = window.innerHeight - position.y;
    position.right = window.innerWidth - position.x;

    return position;
  }

  /**
   * Get recursive sub menu
   * @param     {Array<Objects>}    item
   * @return    {React}
   */
  getMenu(item) {
    if (!item.menu) {
      return null;
    }
    return (
      <MenuList
        {...this.props}
        parent={this}
        items={item.menu}
      />
    );
  }

  /**
   * Hover and show when sub menus
   * @param     {Number}    index
   */
  handleMouseOverItem(index) {
    let visible = this.state.visible.slice(0);

    // Ensure only one is visible
    visible = visible.map((item, i) => {
      return i === index;
    });

    clearTimeout(this.menuDelay);
    this.setState({
      mouseOver: index,
      visible: visible
    });
  }

  /**
   * Remove hidden items and duplicate dividers
   * @return {Array<Objects>}
   */
  getItems() {
    let _last;
    return (this.props.items || [])
      .filter((item) => item.hidden !== true)
      .filter((item) => {
        if (_last && _last.type === 'divider' && _last.type === item.type) {
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
  render() {
    if (!this.props.active) {
      return null;
    }

    let styles = {
      left: this.state.offset.x,
      top: this.state.offset.y
    };

    // Used to position for context menus
    if (this.props.parentOffset && !this.props.parent) {
      styles.left += this.props.parentOffset.left || 0;
      styles.top += this.props.parentOffset.top || 0;
    }

    return (
      <ul style={styles}
        className={classNames('dropdown-menu--list', css.list)} >
          {this.getItems().map((menuItem, index) => {
              return (
                <MenuItem
                  key={menuItem.key || menuItem.name}
                  {...this.props}
                  {...menuItem}
                  menu={this.getMenu(menuItem)}
                  isMouseOver={this.state.visible[index]}
                  onMouseOver={this.handleMouseOverItem.bind(this, index)}
                />
              )
          })}
      </ul>
    );
  }
}

/**
 * Set some defaults
 * @static
 * @type    {Object}
 */
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
  className: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};
