import React from "react";
import LanguageDetail from "../js/containers/language-detail";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<LanguageDetail />);
const tree = toJson(component);

describe("<LanguageDetail />", () => {
	it("renders 1 <LanguageDetail /> component", () => { 
		console.log(tree);
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of LanguageDetail's tree", () => { 
		expect(tree).toMatchSnapshot();
	});
});

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
