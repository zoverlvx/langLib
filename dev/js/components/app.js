//npm run start 
import React from "react";
import {Switch, Route} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

//main component of the program
//compare next to language-aspect.js
const App = () => (
<Switch>
	<Route path="/" component={LanguageBtnCreator} /> 
	<Route path="/:language/:part-of-speech" component={LanguageDetail} />
</Switch>
);

export default App;