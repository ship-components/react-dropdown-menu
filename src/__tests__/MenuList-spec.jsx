jest.unmock('../MenuList');

// Don't need to test these and they currently throw errors
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('MenuList', function(){
  let MenuList;

  beforeEach(function() {
    MenuList = require('../MenuList').default;
  });

   // Render without error
   it('should render without error', function() {
      let element = React.createElement(
         MenuList, // component class
         {} // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should exists', function() {
      // Render into document
      let menuList = TestUtils.renderIntoDocument( <MenuList/> );

      expect(TestUtils.isCompositeComponent(menuList)).toBeTruthy();
   });

   it('should support custom css classes', function() {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
        <MenuList className={className} />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });
});
