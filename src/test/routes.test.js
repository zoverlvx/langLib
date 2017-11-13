import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import {MemoryRouter as Router, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "../js/reducers/index";
import Adapter from 'enzyme-adapter-react-16';
import Routes from "../js/components/routes";
import LanguageBtnCreator from "../js/containers/language-btn-creator";

configure({ adapter: new Adapter() });

const store = createStore(allReducers);

describe("Routes", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Routes />);
    });
    
    it.only("has a component of LanguageBtnCreator", () => {
        expect(wrapper.find(LanguageBtnCreator).length).toEqual(1);
    });

    it.only("has a Switch component", () => {
        expect(wrapper.find("Switch").length).toEqual(1);
    });    
    
    it.only("has two Route components", () => {
        expect(wrapper.find("Route").length).toEqual(2);        
    });

    it.only("has a path of /", () => {
        const component = wrapper.find("Route").first();  
        const prop = component.props().path;
        console.log("Here is wrapper: ", wrapper);
        console.log("Here is component: ", component);
        console.log("Here is the prop which should be path: ", prop);
        console.log("Here is component.props", component.props());
        expect(prop).toEqual("/");      
    });

     it.only("generates a path of /french", () => {
        wrapper.find(LanguageBtnCreator)
        console.log("Checking wrapper for 2nd Route: ", wrapper.find("Route").get(1));
        console.log("Checking wrapper for 2nd Route's path prop: ", wrapper.find("Route").at(1).props().path);

    });

    it.only("renders Default component on /", () => {
        console.log("Here is wrapper.debug", wrapper.debug());
    });


   
    it("generates a path of /german", () => {

    });

    it("generates a path of /russian", () => {

    });

    it("generates a path of french/pronouns", () => {

    });

    it("generates a path of french/ordinal_and_cardinal_numbers", () => {

    });

});
