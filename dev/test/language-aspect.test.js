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

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.




