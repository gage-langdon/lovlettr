import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

// need to mock the dom to test components that touch the dom directly
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.Node = {};
global.navigator = {};
