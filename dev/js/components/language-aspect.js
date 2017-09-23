import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const LanguageAspect = (props) => {
	console.log("LanguageAspect: props.match: ", props.match)
	console.log("LanguageAspect: props.location: ", props.location)
	console.log("LanguageAspect: props.history: ", props.history) 
	console.log("__________________________________________________________")
	console.log("LanguageAspect: props.location.pathname: ", props.location.pathname)  
	return (	
		<li className="language_aspect"  
		onClick={() => props.dispatch(changePartOfSpeech(props.urlAspect))}>
		<Link to={`/${props.dropdown}/${props.urlAspect}`}>{props.item}</Link>
		</li>
		);
}

function mapStateToProps(state) {
	return {
		dropdown: state.dropdown.language,
		languages: state.languages
	}
}

export default withRouter(connect(mapStateToProps)(LanguageAspect));