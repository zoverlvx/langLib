//root.js
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/:language?/:partOfSpeech" component={Home} />
        </Router>
    </Provider>
);
export default Root

//home.js
import React from "react";
import {connect} from "react-redux";
import {withRouter, Switch, Route} from "react-router-dom";
import LanguageBtnCreator from "./language-btn-creator";
import LanguageDetail from "./language-detail";

const Home => (
    <div>
        <LanguageBtnCreator />
        <Switch>
            <Route path="/" component={Default}/>
            <Route path="/:language/:partsofspeech" component={LanguageDetail}/>
        </Switch>
    </div>
);
export default withRouter(connect(Home)());

//index.js
import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import allReducers from "./reducers/index"
import Root from "./components/root"

const store = createStore(allReducers);
const mount = document.getElementById("root");

render(
    <Root store={store} />,
    mount
)

//language-btn-creator.js
import React from "react";
import LanguageBtn from "./component/language-btn";
import {connect} from "react-redux"; 

const LanguageBtnCreator = (props) => {
    function createBtns() {
        return props.languages.map((language, i) => {
            return (
                <LanguageBtn
                    name={language.name}
                    key={i}
                />
            );
        });
    }
    return (
        <div className="wrapper">
            {createBtns()}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        languages: state.languages
    }    
} 
export default connect(mapStateToProps)(LanguageBtnCreator);

//attempt
//filter-link-btn.js

//FilterLink should serve as a main part of the LanguageBtn 
//component as well as the LanguageAspect component
//This abstraction should prove useful in the context of both
//As "LanguageBtn" in LanguageBtnCreator using toggleDropdown as its source of Redux truth
//As "LanguageAspect" in ListLanguageAspects using changePartOfSpeech as its source of Redux truth
import React from "react";
import {NavLink} from "react-router";
//I think this idea needs to be implemented into LanguageBtn
//may not be a need to create another component when LanguageBtn
//can change to fit the abstraction
const FilterLinkBtn = ({match}) => {
    const languagePath = match.params.name.toLowerCase();
    const language = match.params.name;
    return (
        <NavLink
           to={language === null ? "/" : `/${languagePath}`}>
            {language} 
        </NavLink>
    )   
}
export default FilterLinkBtn

//language-btn.js
import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {toggleDropdown} from "../actions";
import ListLanguageAspects from "./list-language-aspects";

const LanguageBtn = (props) => {
    const languagePath = props.name.toLowerCase();
    return (
        <div className="center inline">
            <span
            className="btn_span"
            onClick={() => props.toggleDropdown(languagePath)}>
                <NavLink 
                    className="btn_link"
                    to={`/${languagePath}`}>
                    {props.name}
                </NavLink>
                {props.dropdown.open && (props.dropdown.language === languagePath) ? <ListLanguageAspects /> : null }
            </span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDropdown: (nextLanguage) => dispatch(toggleDropdown(nextLanguage)) 
    }
}

const mapStateToProps = (state) => {
    return {
        languages: state.languages,
        dropdown: state.dropdown
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LanguageBtn));

//list-language-aspects.js
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import LanguageAspect from "./language-aspect";

const ListLanguageAspects = (props) => {
    function createParams() {
        let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];
        return partsOfSpeech.map((arg, i) => {
            return (
                <LanguageAspect
                    item={partsOfSpeech[i]}
                    aspectPath={partsOfSpeech[i].toLowerCase().replace(/ /g, "_")}
                    key={i}
                    />
            );
        });
    }
    return (
        <ul>
            {createParams()}
        </ul>
    );
}
export default connect()(ListLanguageAspects);


