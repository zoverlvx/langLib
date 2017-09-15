import React from "react";
import LanguageDetail from "../js/containers/language-detail";
import {shallow} from "enzyme";

describe("<LanguageDetail />", () => {
	it("renders 1 <LanguageDetail /> component", () => { 
		const component = shallow(<LanguageDetail />);
		expect(component).toHaveLength(1);
	});
});

