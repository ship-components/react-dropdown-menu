/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import DropdownMenu from '../src/DropdownMenu';

class Examples extends React.Component {

  getBasicMenuItems() {
    return [
      {
        name: 'Add Action',
        iconClass: 'ion-plus',
        action: function() {}
      },
      {
        name: 'Remove Action',
        iconClass: 'ion-minus',
        action: function() {}
      },
      {
        type: 'divider'
      },
      {
        name: 'Help Action',
        iconClass: 'ion-help-buoy',
        action: function() {}
      }
    ]
  }

  getNestedMenuItems() {
    return [
      {
        name: 'Add Action',
        iconClass: 'ion-plus',
        action: function() {}
      },
      {
        name: 'Remove Action',
        iconClass: 'ion-minus',
        action: function() {}
      },
      {
        type: 'divider'
      },
      {
        name: 'More...',
        menu: [
          {
            name: 'Nested Action',
            iconClass: 'ion-happy',
            action: function() {}
          },
          {
            name: 'Down the rabbit hole',
            iconClass: 'ion-ios-nutrition',
            menu: [
              {
                name: 'Nest as deep as you want',
                iconClass: 'ion-ios-lightbulb',
                action: function() {}
              }
            ]
          }
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <h1>{'<DropdownMenu> Examples'}</h1>
        <div className='example-group fixed'>
          <h2>Inside a fixed position container (like a header)</h2>
          <DropdownMenu
            menuIconClass='ion-navicon'
            items={this.getBasicMenuItems()}
          />
          <code>
{`<MyHeader style={{position: 'fixed'}}>
  <DropdownMenu
    menuIconClass='ion-navicon'
    items={[
        {
            name: 'Add Action',
            iconClass: 'ion-plus',
            action: function() {}
        },
        {
            name: 'Remove Action',
            iconClass: 'ion-minus',
            action: function() {}
        },
        {
            name: 'Help Action',
            iconClass: 'ion-help-buoy',
            action: function() {}
        }
    ]}/>
</MyHeader>
`}
          </code>
        </div>

        <div className='example-group'>
          <h2>Basic</h2>
          <DropdownMenu
            menuIconClass='ion-navicon'
            items={this.getBasicMenuItems()}
          />
          <code>
{`<DropdownMenu
      menuIconClass='ion-navicon'
      items={[
          {
              name: 'Add Action',
              iconClass: 'ion-plus',
              action: function() {}
          },
          {
              name: 'Remove Action',
              iconClass: 'ion-minus',
              action: function() {}
          },
          {
              name: 'Help Action',
              iconClass: 'ion-help-buoy',
              action: function() {}
          }
      ]}/>
`}
          </code>
        </div>

        <div className='example-group'>
          <h2>Nested Menus</h2>
          <DropdownMenu
            menuIconClass='ion-navicon'
            moreIconClass='ion-chevron-right'
            items={this.getNestedMenuItems()}/>
          <code>
{`// Example Nested Menu Item Definition
let menuItems = [
    {
        name: 'Add Action',
        iconClass: 'ion-plus',
        action: function() {}
    },
    {
        name: 'Remove Action',
        iconClass: 'ion-minus',
        action: function() {}
    },
    {
        name: 'More...',

        // Instead of 'action' use 'menu' to nest another array
        menu: [
            {
                name: 'Nested Action',
                iconClass: 'ion-happy',
                action: function() {}
            },
            {
                name: 'Down the rabbit hole',
                iconClass: 'ion-ios-nutrition',

                // Another sub menu
                menu: [
                    {
                        name: 'Nest as deep as you want',
                        iconClass: 'ion-ios-lightbulb',
                        action: function() {}
                    }
                ]
            }
        ]
    }
];`}
          </code>
        </div>

        <div className='example-group'>
          <h2>Custom Nav Button</h2>
          <DropdownMenu
            customButton={{
              component: 'button',
              props: {
                className: 'custom-button',
                children: <span className='ion-navicon' />
              }
            }}
            items={this.getBasicMenuItems()}/>
          <code>
{`// Pass the 'customButton' prop in and the menu will use that instead
<DropdownMenu
    customButton={{
        component: 'button',
        props: {
            className: 'custom-button',
            children: <span className='ion-navicon' />
        }
    }}
    items={this.getMenuItems()}/>
`}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
