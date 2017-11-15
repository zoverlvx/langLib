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
  

 /* it.only("generates a path of /french", () => {
        const wrapper = mount(<Router><Provider store={store}><Routes /></Provider></Router>);
            
        const propsOfLink = wrapper.find(LanguageBtn).first().find("Link").props();

        //const propsOfA = wrapper.find(LanguageBtn).first().find("a").props();
        const debugOfConnectedRoute = wrapper.find("Routes").find("Route").find("Connect").first().debug();
        console.log("Here is debug of Connect", debugOfConnectedRoute);
        const connectedLanguageBtn = wrapper.find("Routes").find("Route").find("Connect").first();
        connectedLanguageBtn.simulate("click");
        const languageBtn = wrapper.find("Routes").find("Route").find("Connect").find("LanguageBtn").first();
        const afterClick = languageBtn.simulate("click").props().location.pathname;
        console.log("Here is after click: ", afterClick);
        const propsOfLb = languageBtn.props();
        const lbLocation = propsOfLb.location.pathname;
        console.log("props of LanguageBtn: ", propsOfLb);
        console.log("prop location.pathname of connected LanguageBtn", connectedLanguageBtn.props().location.pathname);
        console.log("pathname of languageBtn w/o click", lbLocation);
        expect(connectedLanguageBtn.props().location.pathname).toEqual("/french");
        // console.log("Here are the props of Link: ", propsOfLink);
        // console.log("Here is the clicked Link: ", clickedLink);
        
    });
*/
/*
     it.only("generates a path of /french", () => {
       const wrapper = mount(<Router><Provider store={store}><Routes /></Provider></Router>);
        const propsOfLb = wrapper.find(LanguageBtn).first().props();
        const lbPropName = wrapper.find(LanguageBtn).first().props().name;
        const debugOfLb = wrapper.find(LanguageBtn).first().debug();
       // const propsOfLink = wrapper.find(LanguageBtn).first().find("Link").props();
        const linkPropTo = wrapper.find(LanguageBtn).first().find("Link").props().to;
        const propsOfA = wrapper.find(LanguageBtn).first().find("a").props();
        const aPropHref = wrapper.find(LanguageBtn).first().find("a").props().href;
        const clickedLink = wrapper.find(LanguageBtn).first().find("Link").first().simulate("click").props().to;
        const clickedA = wrapper.find(LanguageBtn).first().find("a").first().simulate("click");
        const propsOfRoute = wrapper.find(LanguageBtn).first().find("Route").props();
         console.log("Props of Link: ", propsOfLink);        
         console.log("Prop To of Link: ", linkPropTo);
         console.log("Props of A: ", propsOfA);
         console.log("Prop Href of A: ", aPropHref);
         console.log("clickedLink: ", clickedLink);
         console.log("clickedA: ", clickedA);  
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
    it("renders Default component on /", () => {
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
