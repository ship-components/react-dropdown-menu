/** ****************************************************************************
 * MenuList
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @contributor  Sepand Assadi <sepand.assadi@sony.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem';

import css from './dropdown-menu.css';

import {getOffset, getOffsetToScreen} from './utilities';

export default class MenuList extends React.Component {

  /**
   * Boot it up
   * @param     {Object}    props
   */
  constructor(props) {
    super(props);

    this.state = {
      mouseOverIndex: -1,
      visible: props.items.map(() => false),
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
    window.addEventListener('scroll', this.updateOffset);
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
  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.updateOffset();
    }
  }

  /**
   * Cleaup
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateOffset);

    // Clean up any straggling functions
    for (var key in this.throttleIds) {
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
   * Calculate and update offset if need be
   */
  updateOffset() {
    // Get the element
    const menu = this.refs.list;

    if(!menu) {
      // Not mounted yet
      return;
    }

    // Grab the parent menu.
    // This will only exist if this MenuList is a submenu.
    const parentMenu = this.props.parent;

    // Get the relative position of the MenuLust to the edge the screen
    let screen = getOffsetToScreen(menu);

    // Get relative positions to edge of its container
    const container = getOffset(menu, (source) => source && !this.props.isContainer(source));

    // If these values are undefined, just use Infinity.
    // Alternately we could just set them to screen.right/bottom.
    // This effectively means "ignore these values".
    if (isNaN(container.bottom)) {
      container.bottom = Infinity;
    }

    if (isNaN(container.right)) {
      container.right = Infinity;
    }

    // Grab the smallest of the two
    let menuPosition = {
      bottom: Math.min(container.bottom, screen.bottom),
      right: Math.min(container.right, screen.right)
    };

    this.setState({
      offset: this.repositionForScreenEdges(menu, parentMenu, menuPosition, screen)
    })
  }

  /**
   * Recalculate menu position if it is offscreen.
   * @param {MenuList} menu
   * @param {MenuList} parentMenu
   * @param {object} menuPosition
   * @param {object} screen
   */
  repositionForScreenEdges(menu, parentMenu, menuPosition, screen) {
    // Make sure to create a new instance
    let offset = {
      x: 0,
      y: 0
    };

    // Reposition on x-axis if dropdown is over the right edge of the screen
    if (menu.offsetWidth > menuPosition.right) {
      offset.x -= menu.offsetWidth - this.props.overlap * 2;

      // Open the menu to the left of the parent if we have no room
      if (parentMenu) {
        offset.x -= parentMenu.offsetWidth;
      }

      // Ensure the menu is always connected
      if (screen.right < 0) {
        offset.x -= screen.right;
      }
    }

    // Reposition on y-axis if dropdown is over the bottom edge of the screen
    if (menu.clientHeight > menuPosition.bottom) {
      offset.y = menuPosition.bottom - menu.clientHeight - this.props.scrollbar.height - this.props.overlap;

      // Ensure the menu is always connected to it's parent node
      if (screen.bottom < 0) {
        offset.y -= screen.bottom;
      }
    }

    return offset;
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
        parent={this.refs.list}
        items={item.menu}
      />
    );
  }

  /**
   * Hover and show when sub menus
   * @param     {Number}    index
   */
  handleMouseOverItem(mouseOverIndex) {
    let visible = this.state.visible.slice(0);

    // Ensure only one is visible
    visible = visible.map((item, i) => i === mouseOverIndex);

    this.setState({
      mouseOverIndex,
      visible
    });
  }

  /**
   * Remove hidden items and duplicate dividers
   * @return {Array<Objects>}
   */
  getItems() {
    let _last;
    return (this.props.items || [])
      .filter(item => {
        if (item.hidden) {
          return false
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
  render() {
    if (!this.props.active) {
      return null;
    }

    let styles = {
      left: this.state.offset.x,
      top: this.state.offset.y
    };

    // Used to position for context menus
    if (typeof this.props.offsetMenu === 'object' && !this.props.parent) {
      styles.left += this.props.offsetMenu.x || 0;
      styles.top += this.props.offsetMenu.y || 0;
    }

    return (
      <ul
        ref='list'
        style={styles}
        className={classNames('dropdown-menu--list', css.list)}
      >
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
  className: PropTypes.string,
  active: PropTypes.bool,
  scrollbar: PropTypes.object,
  overlap: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
  parent: PropTypes.object,
  offsetMenu: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};
