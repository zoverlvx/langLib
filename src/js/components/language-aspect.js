global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const LanguageAspect = (props) => { 
	return (	
		<li className="language_dropdown"  
		onClick={() => props.dispatch(changePartOfSpeech(props.aspectPath))}>
		<Link className="language_dropdown_link" to={`/${props.dropdown}/${props.aspectPath}`}>{props.item}</Link>
		</li>
		);
}

function mapStateToProps(state) {
	return {
		dropdown: state.dropdown.language
		
	}
}

export default withRouter(connect(mapStateToProps)(LanguageAspect));
