import React from "react";
import ListLanguageAspects from "../js/components/list-language-aspects";
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "../js/reducers";

//let component; //then change component in the tests to shallow or mount as needed
//need to think about whether mount will be used
const store = createStore(reducers);
const component = shallow(<Provider store={store}><ListLanguageAspects /></Provider>);
const tree = toJson(component);

describe("<ListLanguageAspects />", () => {
	it("renders 1 <ListLanguageAspects /> component", () => {
		console.log(tree);
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of ListLanguageAspects' tree", () => { 
		expect(tree).toMatchSnapshot();
	});
        //THIS FAILS //should I even be testing this?
	it("renders parts of speech", () => {        
        const partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"]
        const props = partsOfSpeech.map( (part) => {
        	item: part 
        });  
        const list = shallow(<ListLanguageAspects {...props} />);    
        expect(list.find('.item').length).toBe(1);    
    });
});

//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.

