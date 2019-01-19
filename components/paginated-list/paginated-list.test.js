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

    it('renders the correct HTML', () => {
        expect(element).toMatchSnapshot();
    });

    it('renders the correct HTML when no class names are provided', () => {
        props.classNames = {};
        element.setProps(props);
        expect(element).toMatchSnapshot();
    });

    describe('when the right button is clicked', () => {
        beforeEach(() => {
            element.find('.controls_rightButton').simulate('click');
        });

        it('renders the next page', () => {
            expect(element).toMatchSnapshot();
        });

        it('increments the current page in state', () => {
            expect(element.state('currentPage')).toEqual(2);
        });
    });

    describe('when the left button is clicked', () => {
        beforeEach(() => {
            element.setState({ currentPage: 2 });
            element.find('.controls_leftButton').simulate('click');
        });

        it('renders the previous page', () => {
            expect(element).toMatchSnapshot();
        });

        it('decrements the current page in state', () => {
            expect(element.state('currentPage')).toEqual(1);
        });
    });
})