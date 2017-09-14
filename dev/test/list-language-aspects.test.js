import React from "react";
import ListLanguageAspects from "../js/components/list-language-aspects";
import {shallow} from "enzyme";

describe("<ListLanguageAspects />", () => {
	it("renders 1 <ListLanguageAspects /> component", () => {
		const component = shallow(<ListLanguageAspects />);
		expect(component).toHaveLength(1);
	});
});