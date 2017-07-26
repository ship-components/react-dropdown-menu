jest.unmock('../MenuList');

// Don't need to test these and they currently throw errors
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { shallow, mount } from 'enzyme';

describe('MenuList', () => {
   let MenuList;

   beforeEach(() => {
    MenuList = require('../MenuList').default;
  });

   // Render without error
   it('should render without error', () => {
      let element = React.createElement(
         MenuList, // component class
         {} // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should support custom css classes', () => {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
        <MenuList className={className} />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });

   it('should render nested components', () => {
      let menuList = shallow(<MenuList />);
      expect(menuList.find('ul').length).toEqual(1);
   });
   // TO DO: should complete these
   xit('should change active props when item selected', () => {
      let onClick = jest.fn();
      let reactTree = mount(
         <MenuList
            active
            onClick={onClick} />
      );

      let comp = reactTree.find('MenuList').get(0);

       expect(comp.props.active).toBe(true);
       expect(onClick).not.toBeCalled();
       TestUtils.Simulate.click(comp.props.onClick);
       expect(comp.props.active).toBe(false);
       expect(onClick).toBeCalled();
   });
});
