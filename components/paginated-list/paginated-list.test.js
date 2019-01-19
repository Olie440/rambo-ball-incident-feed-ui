import React from 'react';
import { shallow } from 'enzyme';

import PaginatedList from './paginated-list.component';
import MockComponent from '~/__mocks__/mock-component';

describe('PaginatedList', () => {
    let element, props;

    beforeEach(() => {
        props = {
            component: MockComponent,
            pageSize: 3,
            data: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ],
            classNames: {
                container: 'container',
                children: 'children',
                controls: {
                    container: 'controls_container',
                    leftButton: 'controls_leftButton',
                    pageText: 'controls_pageText',
                    rightButton: 'controls_rightButton'
                }
            }
        };

        element = shallow(<PaginatedList {...props} />);
    });

    it('renders the first page correctly', () => {
        expect(element).toMatchSnapshot();
    });

    it('renders the last page correctly', () => {
        element.setState({ currentPage: 2 });
        expect(element).toMatchSnapshot();
    });

    it('renders the correct HTML when no class names are provided', () => {
        props.classNames = {};
        element.setProps(props);
        expect(element).toMatchSnapshot();
    });

    it('increments the current page when the right button is clicked', () => {
        element.setState({ currentPage: 1 });
        element.find('.controls_rightButton').simulate('click');
        expect(element.state('currentPage')).toEqual(2);
    });

    it('decrements the current page when the left button is clicked', () => {
        element.setState({ currentPage: 2 });
        element.find('.controls_leftButton').simulate('click');
        expect(element.state('currentPage')).toEqual(1);
    });
});