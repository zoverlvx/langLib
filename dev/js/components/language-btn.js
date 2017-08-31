import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { toggleDropdown } from "../actions";
import LanguageAspect from "./language-aspect";
import ListLanguageAspects from "./list-language-aspects";


//component which describes the function of each
//individual button

//need a default for / when language is false/unclicked
// Line 19 is a no op
const LanguageBtn = (props) => {
	console.log("props.match from LanguageBtn: ", props.match)
	console.log("props.location from LanguageBtn: ", props.location)
	console.log("props.history from LanguageBtn: ", props.history)   
	return (
		<div className="inline_div">
			<span className="btn_span"  
			value={props.name} 
			onClick={() => props.toggleDropdown(props.url_name)}> 
				<Link to={`/${props.url_name}`}>{props.name}</Link>
			</span>
		{ props.dropdown.open && (props.dropdown.language === props.url_name) ? <ListLanguageAspects /> : null }
		</div>
	)
} 

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDropdown: (nextLanguage) => dispatch(toggleDropdown(nextLanguage))
	}
}

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		dropdown: state.dropdown
	}
}


export default withRouter(connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn));
