import React from "react";
import LanguageBtnCreator from "../js/containers/language-btn-creator";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "../../js/reducers/index";

console.log("Here is the store in language-btn-creator.test: ",store); 

const store = createStore(reducers);
const component = shallow(<Provider store={store}><LanguageBtnCreator /></Provider>);
const tree = toJson(component);

describe("<LanguageBtnCreator />", () => {
	it("renders 1 <LanguageBtnCreator /> component", () => { 
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of LanguageBtnCreator's tree", () => { 
		expect(tree).toMatchSnapshot();
	});
});

//Do I need some kind of mount logic in my stateful components?
//https://stackoverflow.com/questions/38710309/when-should-you-use-render-and-shallow-in-enzyme-react-tests

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
