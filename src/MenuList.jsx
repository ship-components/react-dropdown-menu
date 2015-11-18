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
    this.updateOffset = this.updateOffset.bind(this);
  }

  /**
   * Setup offsets so we can position the menu dynamically
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.updateOffset();
    window.addEventListener('resize', this.updateOffset);
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
   * Cleaup
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOffset);
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
      el.offsetWidth
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
      el.offsetHeight
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
    let parentWidth = this.getOuterWidth(el);
    let parentPosition = this.getPositionRelativeToContainer(el);
    let parentOffset = Math.max(0, parentPosition.right - parentWidth);
    return parentWidth + parentOffset;
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
    let position = this.getPositionRelativeToContainer(el);

    // Make sure to create a new instance
    let offset = {
      x: this.state.offset.x,
      y: this.state.offset.y
    }

    // Check to see if we can find a parent
    let parentList = ReactDOM.findDOMNode(this.props.parent);

    // Width
    if (el.clientWidth > position.right) {
      offset.x = position.right - this.getOuterWidth() - this.props.scrollbar.width - this.props.overlap;

      // Open the menu to the left of the parent if we have no room
      if (parentList) {
        offset.x -= this.getParentOffset(parentList) + (this.props.scrollbar.width * 2);
      }
    }

    // Height
    if (el.clientHeight > position.bottom) {
      offset.y = position.bottom - this.getOuterHeight() - this.props.scrollbar.height - this.props.overlap;
    }

    this.setState({
      offset: offset
    });
  }

  /**
   * Calculate and add up the distances to each edge of the container
   * @param  {Node} el
   * @return {Object}
   */
  getPositionRelativeToContainer(el) {
    var source = el.offsetParent;

    let position = {
      x: 0,
      y: 0
    }

    // Search up the tree for the component node
    while (source.offsetParent) {
      if (source === document.body) {
        // Stop at the container
        break;
      }

      // Add it all up
      position.x += source.offsetLeft - source.scrollLeft;
      position.y += source.offsetTop - source.scrollTop;


      source = source.offsetParent;
    }

    position.x -= source.scrollLeft;
    position.y -= source.scrollTop;

    if (source === document.body) {
      position.right = window.innerWidth - position.x;
      position.bottom = window.innerHeight - position.y;
    } else {
      position.right = source.offsetWidth - position.x;
      position.bottom = source.offsetHeight - position.y;
    }


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
