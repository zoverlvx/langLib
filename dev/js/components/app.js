//npm run start 
import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";
import ListLanguageAspects from "../components/list-language-aspects";

//<Route path="/(:language)" component={ListLanguageAspects} /> ???

// const App = () => (
//     <div>
//     <LanguageBtnCreator />
//     <LanguageDetail />
//     </div>
// 	);

const App = () => (
	<div>
	    <Route path="/" component={LanguageBtnCreator} /> 
	    <Route path="(:language)" component={LanguageBtnCreator} />
	    <Route path="(:language)/(:part-of-speech)" component={LanguageDetail} />
	</div>
);

//this.props.children?

export default App;


