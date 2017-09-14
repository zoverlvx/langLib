import React from "react";
import LanguageBtnCreator from "../js/containers/language-btn-creator";
import {shallow} from "enzyme";

describe("<LanguageBtnCreator />", () => {
	it("renders 1 <LanguageBtnCreator /> component", () => {
		const component = shallow(<LanguageBtnCreator />);
		expect(component).toHaveLength(1);
	});
});