//npm run start 
import React from "react";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";
import {Router, Route} from "react-router";

//main component of the program
const App = () => (
	<div>
		<h2>Choose a language: </h2>
		<LanguageBtnCreator />
		<hr />
		<h2 id="margin_top_bottom">Language Details: </h2>
		<LanguageDetail />
	</div>
);

export default App;
 

//LanguageBtnCreator is likely my "home"

//LanguageDetail will alter based on route 
// e.g. www.languagelist.com/french/pronouns