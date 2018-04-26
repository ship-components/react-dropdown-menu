jest.unmock('../DropdownMenu');

// Don't need to test these and they currently throw errors
jest.setMock('react-transition-group', 'div');
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');


import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('DropdownMenu', () => {
  let itemsProps = [
    {
      action: function() {},
      iconClass: 'icon-edit',
      key: Math.floor((Math.random() * 100) + 1),
      name: 'Open details...'
    },
    {
      action: function() {},
      iconClass: 'icon-add',
      key: Math.floor((Math.random() * 100) + 1),
      name: 'Insert new card here'
    },
    {
      action: function() {},
      iconClass: 'icon-content_copy',
      key: Math.floor((Math.random() * 100) + 1),
      name: 'Duplicate card'
    }
  ]
  let DropdownMenu;
  beforeEach(() => {
    DropdownMenu = require('../DropdownMenu').default;
  });

  // Render without error
  it('should render without error', () => {
    let element = React.createElement(
       DropdownMenu, // component class
       {
        'items': itemsProps
       } // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('should support custom css classes', () => {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <DropdownMenu
        className={className}
        items={itemsProps}
      />
    );
    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  it('should be rendered with a MenuList as a child', () => {
    let MenuList = require('../MenuList').default;
    let dropdownMenu = TestUtils.renderIntoDocument(<DropdownMenu items={itemsProps} />);
    let menuList = TestUtils.findRenderedComponentWithType(dropdownMenu, MenuList);

    expect(TestUtils.isCompositeComponentWithType(menuList, MenuList)).toBe(true);
  });
});
