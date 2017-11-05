import React, {Component} from "react";
import {connect} from "react-redux"; 
import LanguageBtn from "../components/language-btn";

//technically the languages are coming from a "reducer acting as database"
const LanguageBtnCreator = (props) => {
	function createBtns() {
		return props.languages.map((language, i) => {
			return (
				<LanguageBtn
					name={language.name}
					key={i}
				/>
			);
		});
	}
return (
		<div className="wrapper">
		{createBtns()}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

export default connect(mapStateToProps)(LanguageBtnCreator);

   		
