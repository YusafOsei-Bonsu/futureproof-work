import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/containers/Home';

describe('App', () => {
  let wrapper;

  // Focusing on the Home component for further tests
  beforeAll(() => wrapper = shallow(<Home />));

  // Checks if the Home component exists
  test('File should exist ', () => expect(require('../src/containers/Home')).toBeTruthy());

  // Checks if the static Avengers image exists in the system
  test('Static image should exist', () => expect(require('../public/assets/Avengers.png')).toBeTruthy()); 

  // Checks if the Avengers image has rendered   
  test('should render the Avengers image', () => expect(wrapper.find('div.flex-container').find('div').find('img').length).toEqual(1));
  
  // Checks if the form has been rendered
  test('should render the form', () => expect(wrapper.find('form').length).toEqual(1));
  
  // Wipe test suite after all tests have run
  afterAll(() => wrapper = null);
});
