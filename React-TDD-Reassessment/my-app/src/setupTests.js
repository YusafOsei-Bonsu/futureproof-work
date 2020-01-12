import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// This will execute and properly configure Enzyme before each test
Enzyme.configure({ adapter: new Adapter() });