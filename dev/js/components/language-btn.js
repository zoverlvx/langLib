import React, {Component} from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from "../actions";
import LanguageAspect from "./language-aspect";
import ListLanguageAspects from "./list-language-aspects";

//React-Router ---------------------------------------------------------------------------------------
//I believe I want to use NavLink around the span (inside the span?)
//<NavLink to='/:language'/> 

//Do I use render in the NavLink 
//to get the params.language from the function createBtns?

/*
		<div className="inline_div" >
			<span className="btn_span"  value={props.language} onClick={() => props.toggleDropdown(props.language)}> 
				<NavLink exact activeClassName="active_btn" to="/${props.language}">{props.name}</NavLink>	
			</span>
		{ props.dropdown.open && (props.dropdown.language === props.language) ? <ListLanguageAspects /> : null }
		</div>

*/

//end of React-Router ---------------------------------------------------------------------------------------

//component which describes the function of each
//individual button
const LanguageBtn = (props) => {
	console.log("Here is props in LanguageBtn", props) 
	return (
		<div className="inline_div" >
			<span className="btn_span"  value={props.language} onClick={() => props.toggleDropdown(props.language)}> 
				{props.name}	
			</span>
		{ props.dropdown.open && (props.dropdown.language === props.language) ? <ListLanguageAspects /> : null }
		</div>
	)
} 

//props.language needs a better name because it is kind of confusing

//https://stackoverflow.com/questions/44025468/multiple-dropdown-menu-state

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


export default connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn);
