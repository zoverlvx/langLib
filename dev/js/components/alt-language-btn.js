import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { toggleDropdown } from "../actions";
import ListLanguageAspects from "./list-language-aspects";

const LanguageBtn = (props) => {
	let urlRoute = props.urlName
	return (
            <div className="inline_div">
                <span
                className="btn_span"
                onClick={() => props.toggleDropdown(url_name)}>
                    <Link to={`/${urlRoute}`}>{props.name}</Link>
                </span>
                {props.dropdown.open && (props.dropdown.language === urlRoute) ? <ListLanguageAspects />}
            </div> 
		);
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

export default withRouter(connect(mapStateToProps, 
mapDispatchToProps)(LanguageBtn))