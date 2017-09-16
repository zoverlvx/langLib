import React from "react";
import LanguageBtn from "../js/components/language-btn";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<LanguageBtn />);
const tree = toJson(component);

describe("<LanguageBtn />", () => {
	it("renders 1 <LanguageBtn /> component", () => { 
		console.log(tree);
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of LanguageBtn's tree", () => { 
	    expect(tree).toMatchSnapshot();
	});
});

//What ought to be tested