import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import { MemoryRouter as Router, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../js/reducers/index";
import Adapter from 'enzyme-adapter-react-16';
import Routes from "../js/components/routes";
import LanguageBtn from "../js/components/language-btn";
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
        expect(prop).toEqual("/");      
    });

    it.only("generates a path of /french", () => {
    const wrapper = mount(<Router><Provider store={store}><Routes /></Provider></Router>);
    const propsOfRouter = wrapper.find("Router").props();
    const historyOfRouter = propsOfRouter.history.location.pathname;    
    console.log("Here's the pathname of Router: ", historyOfRouter);

    const connectedLb = wrapper.find("Connect").at(1);
    const pathNameOfConnectedLb = connectedLb.props().history.location.pathname
    console.log("Here is the pathname of French connected LanguageBtn: ", connectedLb.props().history.location.pathname);
    
    const frenchLanguageBtn = wrapper.find("LanguageBtn").first();
    const pathNameOfFrenchLb = frenchLanguageBtn.props().history.location.pathname;
    console.log("Here is the pathname of French Lb: ", pathNameOfFrenchLb);
   
    const frenchA = wrapper.find("a").first();
    console.log("Here is French <a> tag: ", frenchA.debug());
    frenchA.simulate("click")
 
    //didn't work
    //const span = wrapper.find("span").first();
    //console.log("Here is debug of span: ", span.debug());
    //span.simulate("click");
    //const Link = wrapper.find("Link").first().simulate("click");
    console.log("Here are the paths after click of French Link: ");    console.log(historyOfRouter + " " + pathNameOfConnectedLb + " " + pathNameOfFrenchLb);

    expect("/").toEqual("/french");
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
