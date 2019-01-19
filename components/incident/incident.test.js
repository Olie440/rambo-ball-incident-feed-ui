import { shallow } from 'enzyme';

import MockGame from '~/__mocks__/mock-game';
import Incident from './incident.component';

describe('<Incident />', () => {
    it('renders the correct HTML', () => {
        const props = MockGame().incidents[0];
        const element = shallow(<Incident {...props} />);

        expect(element).toMatchSnapshot();
    });
});