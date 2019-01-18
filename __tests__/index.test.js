import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index.js';

describe('Index Page', () => {
    it('renders correctly', () => {
        const element = shallow(<IndexPage />);
        expect(element).toMatchSnapshot();
    })
})