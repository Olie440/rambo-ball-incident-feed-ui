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

    describe('rendering', () => {
        test('first page', () => {
            expect(element).toMatchSnapshot();
        });

        test('last page', () => {
            element.setState({ currentPage: 2 });
            expect(element).toMatchSnapshot();
        });

        test('when no class names are provided', () => {
            props.classNames = undefined;
            element.setProps(props);
            expect(element).toMatchSnapshot();
        });

        test('when pageSize is not provided', () => {
            props.pageSize = undefined;
            element.setProps(props);
            expect(element).toMatchSnapshot();
        });

        test('when data is not provided', () => {
            props.data = undefined;
            element.setProps(props);
            expect(element).toMatchSnapshot();
        });
    })

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