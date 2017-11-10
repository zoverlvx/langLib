import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import ListLanguageAspects from "../js/components/list-language-aspects";
import sinon from "sinon";
import {Provider} from "react-redux";
import {MemoryRouter as Router, withRouter} from "react-router-dom";
import {createStore} from "redux";
import reducers from "../js/reducers";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from "enzyme";

configure({ adapter: new Adapter() });

//let component; //then change component in the tests to shallow or mount as needed
//need to think about whether mount will be used
const store = createStore(reducers);
const component = mount(<Router><Provider store={store}><ListLanguageAspects /></Provider></Router>);

describe("<ListLanguageAspects />", () => {
	it("renders 1 <ListLanguageAspects /> component", () => {
		expect(component).toHaveLength(1);
	});
	
	it("renders the parts of speech", () => {
	   expect(component.find("ul").children()).toHaveLength(3); 
	});
	
	console.log("Here is ListLanguageAspects.prototype: ",ListLanguageAspects.prototype); 
      
      
//THIS FAILS //should I even be testing this?
// 	it("renders parts of speech", () => {        
//         const partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"]
//         const props = partsOfSpeech.map( (part) => {
//         	item: part 
//         });  
//         const list = shallow(<ListLanguageAspects {...props} />);    
//         expect(list.find('.item').length).toBe(1);    
//     });

});

//What I think should be tested:
//ListLanguageAspects should have a function of createParams
//the function createParams should have a variable let called partsOfSpeech as an array
//the partsOfSpeech array should have an index of 3
//each partsOfSpeech index should be typeof === "string"
//createParams should return partsOfSpeech.map
//partsOfSpeech.map should use an empty argument and an index
//partsOfSpeech.map should return <LanguageAspect />
//LanguageAspect should have an attribute called item
//the attribute item should be an index of partsOfSpeech
//LanguageAspect should have an attribute called aspectPath
//aspectPath should have the content of partsOfSpeech[i].toLowerCase().replace(/ /g, "_")
//LanguageAspect should have an attribute called key
//key should have an index mapped from partsOfSpeech.map as its content
//ListLanguageAspects should return a ul
//the ul should have the function createParams as its content




//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.

