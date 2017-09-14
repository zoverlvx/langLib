import React from "react";
import LanguageAspect from "../js/components/language-aspect";
import {shallow} from "enzyme";

describe("<LanguageAspect />", () => {

	const minProps = {
   		className: "language_aspect",
   		key: {},
   		onClick: () => {}
    	}

	it("renders 1 <LanguageAspect /> component", () => {
		const component = shallow(<LanguageAspect />);
		expect(component).toHaveLength(1);
	});
    
    it("renders props correctly", () => {
        expect(
        	shallow(
        		<LanguageAspect {...minProps} />
        	).length 
        ).toEqual(1); 
    });
    //Failing
    it("uses a link to dispatch an action to the router", () => {
        const wrapper = shallow(<LanguageAspect {...minProps} />)
        expect(
        	wrapper.find("Link").prop("to").toEqual("/")
        )
    });

});