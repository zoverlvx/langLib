import React from "react";
import LanguageAspect from "../js/components/language-aspect";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<LanguageAspect />);
const tree = toJson(component);

describe("<LanguageAspect />", () => {
    it("renders 1 <LanguageAspect /> component", () => {
		console.log(tree); 
        expect(component).toHaveLength(1);
    });

    it("provides a snapshot of LanguageAspect's tree", () => { 
	    expect(tree).toMatchSnapshot();
	});
});

//What ought to be tested