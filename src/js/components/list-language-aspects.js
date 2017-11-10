import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LanguageAspect from "./language-aspect";
import {connect} from "react-redux";

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
