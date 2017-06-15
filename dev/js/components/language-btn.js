import React, {Component} from "react";
import { connect } from 'react-redux';
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from '../actions';
import LanguageAspect from './language-aspect';
import ListLanguageAspects from './list-language-aspects';



//component which describes the function of each
//individual button
const LanguageBtn = (props) => {
	console.log("Here is props in LanguageBtn", props) 
	return (
		<div>
			<span onClick={() => props.toggleDropdown(props.language)}> 
				{props.name}	
			</span>
		{ props.dropdown.open && props.name ? <ListLanguageAspects /> : null }
		</div>
	)
}

//https://stackoverflow.com/questions/44025468/multiple-dropdown-menu-state

//!!!
// is this not working because each button knows the state of the other one?
//!!!

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
