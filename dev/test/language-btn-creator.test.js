import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import LanguageBtnCreator from "../js/containers/language-btn-creator";
console.log("Flag for LanguageBtnCreator :", LanguageBtnCreator); 
import {mount} from "enzyme";
import {MemoryRouter as Router, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "../js/reducers/index";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const store = createStore(allReducers);
const component = mount(<Router><Provider store={store}><LanguageBtnCreator /></Provider></Router>);

describe("<LanguageBtnCreator />", function() {
	it("renders 1 <LanguageBtnCreator /> component", () => { 
		expect(component).toHaveLength(1);
	});
	
	console.log("Here is LanguageBtnCreator.props: ", component.instance().props.children); 
	//How do I access the actual children on the Component?
	console.log("Here is the instance of LanguageBtnCreator: ", component.instance()); 
	//stateNode: [Circular]... doesn't look good
	it("renders the buttons", () => {
	   expect(component.find("div").children()).toHaveLength(6); //why is length 6?
	});


});

//What I think I need to test:
//the LanguageBtnCreator should have a function of createBtns
//the function createBtns should return props.languages
//props.languages should return a component of <LanguageBtn />
//LanguageBtn should have an attribute of name
    //name should be equal to language.name
//LanguageBtn should have an attribute of key
    //key should be equal to i/a numerical value
//LanguageBtnCreator should return a div with the content of the function createBtns



//Do I need some kind of mount logic in my stateful components?
//https://stackoverflow.com/questions/38710309/when-should-you-use-render-and-shallow-in-enzyme-react-tests

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.
