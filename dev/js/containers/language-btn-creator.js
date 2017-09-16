import React, {Component} from "react";
import {connect} from "react-redux"; 
import LanguageBtn from "../components/language-btn";
//not convinced that I need withRouter to wrap it as I get the same error with or without withRouter
//Invariant Violation: Could not find "store" in either the context or 
//props of "Connect(LanguageBtnCreator)". 
//Either wrap the root component in a <Provider>, 
//or explicitly pass "store" as a prop to "Connect(LanguageBtnCreator)".

const LanguageBtnCreator = (props) => {

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

export default connect(mapStateToProps)(LanguageBtnCreator);

   		