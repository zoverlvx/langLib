import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { toggleDropdown } from "../actions";
import ListLanguageAspects from "./list-language-aspects";

//isomorphic backend required
const LanguageBtn = (props) => {
	const languagePath = props.name.toLowerCase(); 
	return (
		<div className="inline_div">
			<span 
			className="btn_span"
			onClick={() => props.toggleDropdown(languagePath)}> 
				<Link to={`/${languagePath}`}>{props.name}</Link>
			</span>
		{ props.dropdown.open && (props.dropdown.language === languagePath) ? <ListLanguageAspects /> : null }
		</div>
	)
}

//these guys are training wheels
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