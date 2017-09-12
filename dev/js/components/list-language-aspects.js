import React, { Component } from "react";
import LanguageAspect from "./language-aspect";
import {connect} from "react-redux";

const ListLanguageAspects = (props) => {
	function createParams() {
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];
		return props.languages.map((grab, i) => {
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

export default connect(mapStateToProps)(ListLanguageAspects);