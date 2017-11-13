import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

//console.log("Here is requestAnimationFrame: ", typeof requestAnimationFrame); 

import React from "react";
import LanguageAspect from "../js/components/language-aspect";
import {createStore} from "redux";
import reducers from "../js/reducers";
import {Provider} from "react-redux";
import {MemoryRouter as Router, withRouter} from "react-router-dom";
import sinon from "sinon";
import {shallow, mount} from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const store = createStore(reducers);
//const component = mount(<Router><Provider store={store}><LanguageAspect /></Provider></Router>);

describe("<LanguageAspect />", () => {
    //console.log("Here are the children of LanguageAspect: ", component.children()); 

    it("renders 1 <LanguageAspect /> component", () => {
        const component = shallow(<LanguageAspect />);
        expect(component.length).toEqual(1);
    });

});

//What I think I need to test:

//Does the component return an li?
//Does the li have a className of language_dropdown?
//Does it render an onClick attribute?
//Does the onClick cause a dispatch event of props.dispatch(changePartOfSpeech(props.aspectPath))}? 
//Does the component render a Link?
//Does the Link have a to= attribute?
//Does the to= attribute have its path as `/${props.dropdown}/${props.aspectPath}`?
//Does the content of the Link have props.item?


//What ought to be tested

//Verify important callbacks and other props, but keep it minimal.
//Test reducers as they are functions. Same data in. Same data out.
//Action Creators: only indirectly, when testing reducers.
//Connected components: might be useful as a type of integration test, not a prime focus.




