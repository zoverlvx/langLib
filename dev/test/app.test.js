import React from "react";
import App from "../js/components/app";
import {shallow} from "enzyme";

describe("<App />", () => {
	it("renders 1 <App /> component", () => {
		const component = shallow(<App />);
		expect(component).toHaveLength(1);
		console.log(component.instance().props) 
	});
});