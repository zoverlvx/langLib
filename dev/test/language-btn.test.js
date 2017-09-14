import React from "react";
import LanguageBtn from "../js/components/language-btn";
import {shallow} from "enzyme";

describe("<LanguageBtn />", () => {
	it("renders 1 <LanguageBtn /> component", () => {
		const component = shallow(<LanguageBtn />);
		expect(component).toHaveLength(1);
	});
});