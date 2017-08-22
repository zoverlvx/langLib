import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from "../actions";
import LanguageAspect from "./language-aspect";
import ListLanguageAspects from "./list-language-aspects";


//component which describes the function of each
//individual button

//need a default for / when language is false/unclicked
const LanguageBtn = (props) => {
	return (
		<div className="inline_div" >
			<span className="btn_span"  
			value={props.language} 
			onClick={() => props.toggleDropdown(props.language)}> 
				<Link to={`/${props.name}`}>{props.name}</Link>
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
