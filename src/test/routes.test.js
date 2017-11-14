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
    
    });
/*
     it.only("generates a path of /french", () => {
       const wrapper = mount(<Router><Provider store={store}><Routes /></Provider></Router>);
        const propsOfLb = wrapper.find(LanguageBtn).first().props();
        const lbPropName = wrapper.find(LanguageBtn).first().props().name;
        const debugOfLb = wrapper.find(LanguageBtn).first().debug();
        const propsOfLink = wrapper.find(LanguageBtn).first().find("Link").props();
        const linkPropTo = wrapper.find(LanguageBtn).first().find("Link").props().to;
        const propsOfA = wrapper.find(LanguageBtn).first().find("a").props();
        const aPropHref = wrapper.find(LanguageBtn).first().find("a").props().href;
        const clickedLink = wrapper.find(LanguageBtn).first().find("Link").first().simulate("click").props().to;
        const clickedA = wrapper.find(LanguageBtn).first().find("a").first().simulate("click");
        const propsOfRoute = wrapper.find(LanguageBtn).first().find("Route").props();
        // console.log("Props of Link: ", propsOfLink);        
        // console.log("Prop To of Link: ", linkPropTo);
        // console.log("Props of A: ", propsOfA);
        // console.log("Prop Href of A: ", aPropHref);
        // console.log("clickedLink: ", clickedLink);
        // console.log("clickedA: ", clickedA);  
        const firstRoute = wrapper.find("Routes").find("Route").at(0).debug();
        const dbOfConnectedRoute = wrapper.find("Routes").find("Route").find("Connect").first().debug();
        const propsOfConnectedRoute = wrapper.find("Routes").find("Route").find("Connect").first().props();
        const lb = wrapper.find("Routes").find("Route").find("Connect").find("LanguageBtn").first().props().location;
        const clickedLb = wrapper.find("Routes").find("Route").find("Connect").find("LanguageBtn").first().simulate("click").props().location;
        console.log("HERE IS PROP LOCATION OF LB: ", lb);
        console.log("HERE IS PROP LOCATION OF LB AFTER CLICK: ", clickedLb);
        const propLocation = wrapper.find("Routes").find("Route").find("Connect").first().props().location;
        const clickedLocation = wrapper.find("Routes").find("Route").find("Connect").first().simulate("click").props().location;
        //console.log("Here's the first route: ", firstRoute);
        console.log("Debug of connected LanguageBtn: ", dbOfConnectedRoute);
        console.log("Props of connected Route: ", propsOfConnectedRoute);
        console.log("Should be prop location: ", propLocation);
        console.log("Prop location after click: ", clickedLocation);


        expect(linkPropTo).toEqual("/french");
        expect(aPropHref).toEqual("/french");
        expect(clickedLink).toEqual("/french");
    });
*/
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
