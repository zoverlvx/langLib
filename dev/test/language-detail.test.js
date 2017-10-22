import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import LanguageDetail from "../js/containers/language-detail";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme";

configure({ adapter: new Adapter() });
const component = shallow(<LanguageDetail />);

describe("<LanguageDetail />", () => {
	it("renders 1 <LanguageDetail /> component", () => { 
		expect(component).toHaveLength(1);
	});
});

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
