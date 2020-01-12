import React from 'react';
import {shallow} from 'enzyme';
import User from './User';

describe('User', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<User />));

  // Tests if the card is showing (i.e. Homepage)
  test('should render a <div /> with a class of card', () => expect(wrapper.find('.card').length).toEqual(1));

  // Tests if the name container renders
  test("should render a <div /> that shows the user's name", () => expect(wrapper.find('.card-body').length).toEqual(1));

});
