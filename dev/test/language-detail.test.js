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