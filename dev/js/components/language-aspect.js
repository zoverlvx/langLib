import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

//what is react-router?
//what is react-router-dom?
//what is react-router-redux?

const LanguageAspect = (props) => {
	//console.log("props.match from LanguageAspect", props.match)
	//console.log("props.location from LanguageAspect", props.location)
	//console.log("props.history from LanguageAspect", props.history) 
	//console.log("__________________________________________________________")
	//console.log("Here is props.location.pathname: ", props.location.pathname)  

	return (	
		<li className="language_aspect"  
		key={props.id} 
		onClick={() => props.dispatch(changePartOfSpeech(props.url_aspect))}>
		<Link to={`/${props.dropdown}/${props.url_aspect}`}>{props.item}</Link>
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
