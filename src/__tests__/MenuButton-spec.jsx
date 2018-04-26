jest.unmock('../MenuButton');

// Don't need to test these and they currently throw errors
jest.mock('react-transition-group', () => ({ CSSTransitionGroup: () => <div /> }));
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('MenuButton', function(){
  let MenuButton;

  beforeEach(function() {
    MenuButton = require('../MenuButton').default;
  });

   // Render without error
   it('should render without error', function() {
      let element = React.createElement(
         MenuButton, // component class
         {} // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should exists', function() {
      // Render into document
      let menuButton = TestUtils.renderIntoDocument( <MenuButton/> );

      expect(TestUtils.isCompositeComponent(menuButton)).toBeTruthy();
   });

   it('should support custom css classes', function() {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
        <MenuButton className={className} />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });
});
