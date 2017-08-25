import React, { Component } from "react";
import LanguageAspect from "./language-aspect";
import {connect} from "react-redux";

//the dropdown list component
//the container for the li
//attributes actions to the li which will then affect the LanguageDetail info
//creates the entirety of the dropdown menu

//I think I need a switch and a route around the languageAspect
class ListLanguageAspects extends Component {
	constructor(props) {
		super(props)
	}
	createParams() { 
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];

		return this.props.languages.map((grab, i) => {
			return (
					<div key={i}>
					<LanguageAspect  
					item={partsOfSpeech[i]} 
					key={i} 
					url_name={grab.url_name}
					/>
					</div>
					);
		});
	}

	render() {
		return (
		<ul>
		{this.createParams()}
		</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

export default connect(mapStateToProps)(ListLanguageAspects);

// Each child in an array or iterator should have a unique "key" prop. Check the render method of `ListLanguageAspects`. See https://fb.me/react-warning-keys for more information.
//     in div (created by ListLanguageAspects)
//     in ListLanguageAspects (created by LanguageBtn)
//     in div (created by LanguageBtn)
//     in LanguageBtn (created by Connect(LanguageBtn))
//     in Connect(LanguageBtn) (created by LanguageBtnCreator)
//     in div (created by LanguageBtnCreator)
//     in div (created by LanguageBtnCreator)
//     in LanguageBtnCreator (created by Connect(LanguageBtnCreator))
//     in Connect(LanguageBtnCreator) (created by Route)
//     in Route (created by App)
//     in Switch (created by App)
//     in App
//     in Provider
//     in Router (created by BrowserRouter)
//     in BrowserRouter



