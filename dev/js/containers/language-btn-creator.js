import React, {Component} from "react";
import {connect} from "react-redux";
import {selectLanguage} from "../actions/index"; 
import LanguageBtn from "../components/language-btn";
import { withRouter, Link } from "react-router-dom";

const LanguageBtnCreator = (props) => {
	console.log("LanguageBtnCreator: props.match: ", props.match)
	console.log("LanguageBtnCreator: props.match.params: ", props.match.params) 
	console.log("LanguageBtnCreator: props.location: ", props.location)
	console.log("LanguageBtnCreator: props.location.pathname: ", props.location.pathname) 
	console.log("LanguageBtnCreator: props.history: ", props.history)  
	

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//might need history in order to get the routes to work manually
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	function createBtns() {
		return props.languages.map((language, i) => {
			//console.log("Here is LanguageBtnCreator with props.languages", props.languages)
			return (
				<LanguageBtn
					url_name={language.url_name}
					name={language.name}
					key={i}
				/>
			);
		});
	}
return (
		<div>
		{createBtns()}
		</div>
	);
}


function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

//I think I still need to bind my actions together

export default withRouter(connect(mapStateToProps)(LanguageBtnCreator));

   		