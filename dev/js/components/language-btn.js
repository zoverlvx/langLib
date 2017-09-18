import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { toggleDropdown } from "../actions";
import ListLanguageAspects from "./list-language-aspects";

//need a default for / when language is false/unclicked -> isomorphism on the backend
const LanguageBtn = (props) => {
	console.log("LanguageBtn: props.match: ", props.match)
	console.log("LanguageBtn: props.match.params: ", props.match.params) 
	console.log("LanguageBtn: props.location: ", props.location)
	console.log("LanguageBtn: props.location.pathname: ", props.location.pathname) 
	console.log("LanguageBtn: props.history: ", props.history) 
 
	const urlLanguageRoute = props.name.toLowerCase(); 
	//props.url_name
	return (
		<div className="inline_div">
			<span 
			className="btn_span"
			onClick={() => props.toggleDropdown(urlLanguageRoute)}> 
				<Link to={`/${urlLanguageRoute}`}>{props.name}</Link>
			</span>
		{ props.dropdown.open && (props.dropdown.language === urlLanguageRoute) ? <ListLanguageAspects /> : null }
		</div>
	)
} 

//Why do I need mapStateToProps and/or mapDispatchToProps 
// if Provider is providing store to the JSX elements wrapped therein?
// Store is createStore which is AllReducers which is CombineReducers which is each separate Reducer
//<Provider store={store}><App /></Provider> 
//App.store?

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