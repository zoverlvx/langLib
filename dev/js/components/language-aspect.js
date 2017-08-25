import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



const LanguageAspect = (props) => (	
		<li className="language_aspect"  
		key={props.id} 
		onClick={() => props.dispatch(changePartOfSpeech(props.item))}>
		<Link to={`/${props.dropdown}/${props.item}`}>{props.item}</Link>
		</li>
		);

function mapStateToProps(state) {
	return {
		dropdown: state.dropdown.language,
		languages: state.languages
	}
}

export default connect(mapStateToProps)(LanguageAspect);

