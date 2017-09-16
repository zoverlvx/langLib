import React from "react";
import App from "../js/components/app";
import toJson from "enzyme-to-json";
import {shallow, mount} from "enzyme";

const component = shallow(<App/ >);
const tree = toJson(component);

describe("<App />", () => {
	it("renders 1 <App /> component", () => {
		console.log(tree); 
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of App's tree", () => { 
		expect(tree).toMatchSnapshot();
	});

	it("", () => {
        
	});
});

//What ought to be tested