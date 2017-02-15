jest.unmock('../DropdownMenu');

// Don't need to test these and they currently throw errors
jest.setMock('react-addons-css-transition-group', 'div');
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-highlight-click', 'div');


import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DropdownMenu', function(){
  let itemsProps = [{
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

  beforeEach(function() {
    DropdownMenu = require('../DropdownMenu').default;
  });

   // Render without error
   it('should render without error', function() {
      let element = React.createElement(
         DropdownMenu, // component class
         {
          'items': itemsProps
         } // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should exists', function() {
      // Render into document
      let dropdownMenu = TestUtils.renderIntoDocument( <DropdownMenu items={itemsProps}/> );
      expect(TestUtils.isCompositeComponent(dropdownMenu)).toBeTruthy();
   });

   it('should support custom css classes', function() {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
        <DropdownMenu
          className={className}
          items={itemsProps}
        />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });
});
