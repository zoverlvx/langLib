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
	//console.log("props.match from LanguageBtn: ", props.match)
	//console.log("props.location from LanguageBtn: ", props.location)
	//console.log("props.history from LanguageBtn: ", props.history)  
	const urlLanguageRoute = props.name.toLowerCase(); 
	return (
		<div className="inline_div">
			<span className="btn_span"  
			
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

//this is magic
export default withRouter(connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn));
