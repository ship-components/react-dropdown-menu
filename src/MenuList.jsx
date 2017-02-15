/** ****************************************************************************
 * MenuList
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @contributor  Sepand Assadi <sepand.assadi@sony.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
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
    const el = ReactDOM.findDOMNode(this);

    if(!el) {
      // Not mounted yet
      return;
    }

    // Grab the parent
    const parentList = ReactDOM.findDOMNode(this.props.parent);

    // Get relative positions to edge of container
    const container = getOffset(el, (source) => source && !this.props.isContainer(source));

    // Get the relative position to the edge the screen
    let screen = getOffsetToScreen(el);

    // Grab the smallest of the two
    let position = {
      bottom: Math.min(container.bottom, screen.bottom),
      right: Math.min(container.right, screen.right)
    };

    // Make sure to create a new instance
    let offset = {
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
      offset
    });
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
      styles.left += this.props.offsetMenu.left || 0;
      styles.top += this.props.offsetMenu.top || 0;
    }

    return (
      <ul
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
  className: React.PropTypes.string,
  active: React.PropTypes.bool,
  scrollbar: React.PropTypes.object,
  overlay: React.PropTypes.number,
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};
