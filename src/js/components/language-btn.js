import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { changeLanguage } from "../actions";
import ListLanguageAspects from "./list-language-aspects";


const LanguageBtn = (props) => {
	const languagePath = props.name.toLowerCase(); 
        const {language} = props.match.params;

	return (
		<div className="center inline">
				<Link className="btn_link"  to={`/${languagePath}/pronouns`}>{props.name}</Link>
                               		{ props.dropdown.open && (props.dropdown.language === languagePath) ? <ListLanguageAspects /> : null }
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeLanguage: (nextLanguage) => dispatch(changeLanguage(nextLanguage))
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
