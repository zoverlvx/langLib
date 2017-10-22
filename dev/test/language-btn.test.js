import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import LanguageBtn from "../js/components/language-btn";
import {shallow} from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const component = shallow(<LanguageBtn />);

describe("<LanguageBtn />", () => {
	it("renders 1 <LanguageBtn /> component", () => { 
		expect(component).toHaveLength(1);
	});


});

//What I think should be tested:
//LanguageBtn should have a const of languagePath consisting of props.name.toLowerCase();
//LanguageBtn should return a div
//The div should have a className attribute of inline_div
//The div should have a child of span
//The span should have a className attribute of btn_span 
//The span should have an onClick attribute
//The onClick attribute should handle a dispatch of toggleDropdown(languagePath)
//span should have a child of Link
//Link should have a className attribute of btn_link_color
//Link should have a to= attribute
//the to attribute should have a path of `/${languagePath}`
//Link should have the content of props.name
//div should have the content of the ternary operation in {props.dropdown.open && (props.dropdown.language === languagePath) ? <ListLanguageAspects /> : null}
// ^^This could be more than one test
//

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
