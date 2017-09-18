import React, { Component } from "react";
import LanguageAspect from "./language-aspect";
import {connect} from "react-redux";

const ListLanguageAspects = (props) => {
	function createParams() {
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"] 
		return partsOfSpeech.map((arg, i) => {
            return (
                <LanguageAspect
                item={partsOfSpeech[i]}
                urlAspect={partsOfSpeech[i].toLowerCase()}
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

//Not really sure that I need this here
// function mapStateToProps(state) {
// 	return {
// 		languages: state.languages
// 	}
// }

// export default connect(mapStateToProps)(ListLanguageAspects);
export default ListLanguageAspects;