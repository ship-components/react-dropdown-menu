jest.unmock('../MenuItem');

// Don't need to test these and they currently throw errors
jest.setMock('react-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('MenuItem', function(){
  let MenuItem;

  beforeEach(function() {
    MenuItem = require('../MenuItem').default;
  });

   // Render without error
   it('should render without error', function() {
      let element = React.createElement(
         MenuItem, // component class
         {} // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should exists', function() {
      // Render into document
      let menuItem = TestUtils.renderIntoDocument( <MenuItem/> );

      expect(TestUtils.isCompositeComponent(menuItem)).toBeTruthy();
   });

   it('should support custom css classes', function() {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
        <MenuItem className={className} />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });
});
