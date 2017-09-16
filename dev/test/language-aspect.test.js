import React from "react";
import LanguageAspect from "../js/components/language-aspect";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

const component = shallow(<LanguageAspect />);
const tree = toJson(component);

describe("<LanguageAspect />", () => {
    const minProps = {
    	className: "language_aspect",
    	key: {},
    	onClick: () => {}
     	}

    it("renders 1 <LanguageAspect /> component", () => {
		console.log(tree); 
        expect(component).toHaveLength(1);
    });

    it("provides a snapshot of LanguageAspect's tree", () => { 
	    expect(tree).toMatchSnapshot();
	});

	it("renders props correctly", () => {
        expect(
         	shallow(
         		<LanguageAspect {...minProps} />
         	).length 
         ).toEqual(1); 
     });
});

//What ought to be tested





