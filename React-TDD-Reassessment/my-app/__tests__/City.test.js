import React from 'react';
import {shallow} from 'enzyme';
import City from '../src/City';

describe('City', () => {
    let wrapper;

    // Focusing on the City component for further tests
    beforeAll(() => wrapper = shallow(<City />));

    // Checks if the Home component exists
    test('File should exist ', () => expect(require('../src/City')).toBeTruthy());

    // Checks if the City image has rendered   
    test('should render the City image', () => expect(wrapper.find('img').length).toEqual(1));

    // Checks if the city info has rendered
    test('should render the city info', () => expect(wrapper.find('ul').length).toEqual(1));

    // Wipe test suite after all tests have run
    afterAll(() => wrapper = null);
});

