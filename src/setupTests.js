import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { XMLHttpRequest } from 'xmlhttprequest';

Enzyme.configure({ adapter: new Adapter() });
global.XMLHttpRequest = XMLHttpRequest;
