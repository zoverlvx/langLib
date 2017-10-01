import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const LanguageAspect = (props) => { 
	return (	
		<li className="language_dropdown"  
		onClick={() => props.dispatch(changePartOfSpeech(props.aspectPath))}>
		<Link to={`/${props.dropdown}/${props.aspectPath}`}>{props.item}</Link>
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