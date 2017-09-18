import React from "react";
import App from "../js/components/app";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

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

});

   // it("uses a link to dispatch an action to the router", () => {
   //      const wrapper = shallow(<LanguageAspect {...minProps} />)
   //      expect(
   //       	wrapper.find("Link").prop("to").toEqual("/")
   //      )
   //  });

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
