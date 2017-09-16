import React from "react";
import LanguageBtnCreator from "../js/containers/language-btn-creator";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<LanguageBtnCreator />);
const tree = toJson(component);

describe("<LanguageBtnCreator />", () => {
	it("renders 1 <LanguageBtnCreator /> component", () => {
		console.log(tree); 
		expect(component).toHaveLength(1);
	});

		it("provides a snapshot of LanguageBtnCreator's tree", () => { 
		    expect(tree).toMatchSnapshot();
	});
});

//What ought to be tested