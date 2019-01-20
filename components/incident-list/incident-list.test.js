import IncidentList, { Header } from './incident-list.component';
import { shallow } from 'enzyme';

describe('<IncidentList />', () => {
    it('passes the correct props to PaginatedList', () => {
        const props = {
            pageSize: 25,
            incidents: [{id: 1}]
        };

        const element = shallow(<IncidentList {...props} />);
        expect(element).toMatchSnapshot();
    });

    it('doesn\'t error when no props are passed in', () => {
        const element = shallow(<IncidentList  />);
        expect(element).toMatchSnapshot();
    });

    describe('<Header />', () => {
        it('renders the correct HTML', () => {
            const element = shallow(<Header />);
            expect(element).toMatchSnapshot();
        });
    });
});