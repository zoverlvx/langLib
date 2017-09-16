import React from "react";
import ListLanguageAspects from "../js/components/list-language-aspects";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<ListLanguageAspects />);
const tree = toJson(component);

describe("<ListLanguageAspects />", () => {
	it("renders 1 <ListLanguageAspects /> component", () => {
		console.log(tree);
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of ListLanguageAspects' tree", () => { 
		expect(tree).toMatchSnapshot();
	});
});

//What ought to be tested