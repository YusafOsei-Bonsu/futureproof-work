import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/containers/App';

describe('App', () => {
  let wrapper;

  // Focusing on the App component as the one we want to test
  beforeAll(() => wrapper = shallow(<App />));

  // Checks if the App component exists
  test('File should exist ', () => expect(require('../src/containers/App')).toBeTruthy());

  // Checks to see if the Router is in the component
  test('should render a <router>', () => expect(wrapper.find(Router).length).toEqual(1));

  // Checks if the navigational header exists in the App component
  test('should render a navigational bar', () => expect(wrapper.find(Router).find('nav').length).toEqual(1));
  
  // Wipe test suite after all tests have run
  afterAll(() => wrapper = null);
})
