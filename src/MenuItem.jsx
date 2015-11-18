/** ****************************************************************************
 * MenuItem
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import classNames from 'classnames';

import css from './dropdown-menu.css';

export default class MenuItem extends React.Component {

  /**
   * Pass the action if we have it
   * @param     {function}      action    User supplied action
   * @param     {MouseEvent}    event
   */
  handleClick(action, event) {
    if (action) {
      this.props.onClick(action, event);
    }
  }

  /**
   * Render a divider
   * @return    {React}
   */
  renderDivider() {
    return (
      <li
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        className={classNames('dropdown-menu--item', 'dropdown-menu--divider', css.divider, css.item)}
        key={this.props.key} />
    );
  }

  /**
   * Render a checkbox
   * @return    {React}
   */
  renderCheckbox() {
    return (
      <li
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        className={classNames('dropdown-menu--item', css.item, this.props.className)}
        key={this.props.name}
        onClick={this.handleClick.bind(this, this.props.action)}>
          <div className={classNames('dropdown-menu--icon', css.icon, this.props.iconClass)}>
            <input
              style={{display: 'none'}}
              type='checkbox'
              className={classNames('dropdown-menu--checkbox', css.checkbox)}
              readOnly
              checked={this.props.value} />
          </div>
          <div className={classNames('dropdown-menu--name', css.name, {[css.label] : this.props.label })}>
            {this.props.name}
          </div>
      </li>
    );
  }

  renderChildMenu() {
    if (!this.props.menu) {
      return null;
    }

    let menu = this.props.menu;
    if(!this.props.isMouseOver) {
      menu = null;
    }
    return (
      <div className={classNames('drop-down-menu--child', css.child)}>
        {this.props.menu ? <div className={classNames('dropdown-menu--icon', css.icon, this.props.moreIconClass)} /> : null}
        {menu}
      </div>
    )
  }

  /**
   * Default list item
   * @return    {React}
   */
  renderDefault() {
    let itemClasses = classNames('dropdown-menu--item', css.item, {
      'dropdown-menu--active': this.props.isMouseOver,
      [css.active]: this.props.isMouseOver
    });

    return (
      <li
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        className={itemClasses}
        key={this.props.name}
        onClick={this.handleClick.bind(this, this.props.action)}>
          <div className={classNames('dropdown-menu--icon', css.icon, this.props.iconClass)} />
          <div className={classNames('dropdown-menu--name', css.name)}>
            {this.props.name}
          </div>
          {this.renderChildMenu()}
      </li>
    );
  }

  /**
   * Render a list of menu items
   *
   * @return    {React}
   */
  render() {
    if (this.props.hidden === true) {
      return null;
    } else if(this.props.type === 'divider') {
      return this.renderDivider();
    } else if(this.props.type === 'checkbox') {
      return this.renderCheckbox();
    } else {
      return this.renderDefault();
    }
  }

}

/**
 * Set some defaults
 * @static
 * @type    {Object}
 */
MenuItem.defaultProps = {
  className: '',
  isMouseOver: false,
  menu: null,
  hidden: false,
  moreIconClass: 'icon-play_arrow',
  onMouseOut: function() {},
  onMouseOver: function() {}
};

/**
 * Validate the prop types
 * @static
 * @type    {Object}
 */
MenuItem.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.object
};
