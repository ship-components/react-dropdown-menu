/** ****************************************************************************
 * MenuButton
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @file         Open a dropdown menu upon clicking an icon
 ******************************************************************************/

import React from 'react';
import classNames from 'classnames';
import HighlightClick from 'react-highlight-click';
import assign from 'object-assign';

import css from './dropdown-menu.css';

export default class MenuButton extends React.Component {

  render() {

    let props = {}
    if (this.props.customButton) {
      assign(props, this.props.customButton.props);
    } else {
      assign(props, {
        className: this.props.menuIconClass
      });
    }

    if (this.props.customButton) {
      this.__component =  this.props.customButton.component;
      props.className = classNames(props.className, 'dropdown-menu--control')
    } else {
      props.className = classNames(props.className, 'dropdown-menu--control', css.control)
      this.__component = 'span';
    }

    return (
      <HighlightClick>
        <this.__component
          {...props}
          onContextMenu={this.props.onContextMenu}
          onClick={this.props.onClick} />
      </HighlightClick>
    );
  }

}
