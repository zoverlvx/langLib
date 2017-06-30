//npm run start 
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";
const Router = BrowserRouter;

/*
<Router>
<div>
	<h2>Choose a language: </h2>
	<Route path="/" component={LanguageBtnCreator} />
	<hr />
	<h2 id="margin_top_bottom">Language Details: </h2>
	<Route path="/:language/:part-of-speech" component={LanguageDetail} />
</div>
</Router>

//if 404

<Route render={function () {
	return <p>Not Found</p>
}} />
*/

//main component of the program
const App = () => (
<Router>
	<div>
		<h2>Choose a language: </h2>
	<Route path="/" component={LanguageBtnCreator} />
		<hr />
		<h2 id="margin_top_bottom">Language Details: </h2>
	<Route path="/:language/:part-of-speech" component={LanguageDetail} />
	</div>
</Router>
);

export default App;


/*

const Root = ({store}) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/(:language/:part_of_speech)" component={App} />
		</Router>
	</Provider>
);

//Really trying to visualize the use of Link right now

import {Link}

const FilterLanguages = ({language}) => (
	<Link
		to={language === "German" ? "german" 
		: language === "French" ? "french" 
		: language === "Russian" ? "russian" 
		: language}
		>
		{children} //really stretching it here
		</Link>

);

*/
 

//LanguageBtnCreator is likely my "home"

//LanguageDetail will alter based on route 
// e.g. www.languagelist.com/french/pronouns

//example of what I've surmised to be truthy in regards to how it should look

//put <Link></Link> around my btn spans and languageAspect li's?

// class App extends Component {
// 	render() {
// 		return (
// 			<Router history={browserHistory}>
//				<Route path={"/"} component={LanguageBtnCreator}>
//					<IndexRoute component={App} />
// 					<Route path={"french"} component={LanguageDetail}>
//						//this would mean french is set to true in the reducer
//
//					<Route path={"pronouns"} component={LanguageDetail} />
//						//this would mean that pronouns was set in the partOfSpeech portion of the reducer
//
//					<Route path={"numbers"} component={LanguageDetail} />
//					<Route path={"verbs"} component={LanguageDetail} />
//					</Route>
// 					</Route>
//				<Route path={"home-single"} component={Home} />
// 			</Router>
// 			);
// 	}
// }