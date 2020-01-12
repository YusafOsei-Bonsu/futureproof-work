import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

describe('App', () => {
    let wrapper;

    // Sets the App component as the component we want to test
    beforeAll(() => wrapper = shallow(<App />));

    // Checks if the file exists
    test('File should exist', () => expect(require('./App')).toBeTruthy());
    
    // Checks to see if the Router is in the component
    test('should render a <router>', () => expect(wrapper.find(Router).length).toEqual(1));

    // Checks if the navigational header exists in the App component
    test('should render a header that acts as navigation', () => expect(wrapper.find(Router).find('header').length).toEqual(1));
    
    // Wipes the suite
    afterAll(() => wrapper = null);
})
