//npm run start 
import React from "react";
import {Switch, Route} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

//main component of the program
//compare next to language-aspect.js

// the routes are present (because I removed 
// LanguageBtnCreator and it doesn't show)

//This is still working, but I think I'm missing an understanding of what's going on
//Unless the Route isn't working at all and it's just dead code at the moment
//Second Route is totally dead.

//I think I need to do an overhaul of LanguageDetail, but before I 
//do that I'm going to check in, because I don't want to start 
//tearing things down without a second opinion

const App = (props, {params}) => {
console.log("Here is props from App", props) 
console.log("Here is props.params from App", props.params)
	return (
	<Switch>
	<Route path="/" component={LanguageBtnCreator} /> 
	<Route path={`/${props.params}/${props.params}`} component={LanguageDetail} />
</Switch>
);
}

export default App;