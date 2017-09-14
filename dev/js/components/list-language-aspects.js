import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LanguageAspect from "./language-aspect";
import {connect} from "react-redux";

//I'm not technically using anything from the reducer in this component
//I wonder if this is at least part of the miscommunication between Redux store and
//my LanguageDetail component
const ListLanguageAspects = (props) => {
	function createParams() {
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];
		return props.languages.map((arg, i) => {
			return (
				<LanguageAspect
				item={partsOfSpeech[i]}
				url_aspect={partsOfSpeech[i].toLowerCase()}
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

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

export default withRouter(connect(mapStateToProps)(ListLanguageAspects));