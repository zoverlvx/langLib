import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
//don't believe I need changeLanguage on here
import { changeLanguage } from "../actions";
import ListLanguageAspects from "./list-language-aspects";


//I put this below the Link
//<Route path={`/${languagePath}`} component={ListLanguageAspects} />

//isomorphic backend required
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


/*
const LanguageBtn = (props) => {
    const languagePath = props.name.toLowerCase();
    const {language} = props.match.params;
    return (
        <div className="center inline">
            <Link className="btn_link" to={`/${languagePath}`}>
            {props.name}
            </Link>
            {languagePath === language : <ListLanguageAspects /> : null}
        </div>
    )
} 
*/

//I don't think I need mapDispatchToProps anymore
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
