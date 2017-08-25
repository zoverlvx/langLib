//npm run start 
import React from "react";
import {Switch, Route} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
//import LanguageDetail from "../containers/language-detail";

const LanguageDetail = () => (
	<p>Hello</p>
	);

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

const App = () => (
	<div>
	<Switch>
	<Route path="/" component={LanguageBtnCreator} /> 
	<Route path="/(:language)" component={LanguageBtnCreator} />
	</Switch>
	<Route path="/:language/:part-of-speech" component={LanguageDetail} />
	</div>
);

export default App;