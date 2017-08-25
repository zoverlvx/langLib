import React, {Component} from "react";
import {connect} from "react-redux";
import {selectLanguage} from "../actions/index"; 
import LanguageBtn from "../components/language-btn";
import { Link } from "react-router-dom";

class LanguageBtnCreator extends Component {
	createBtns() { 
	console.log("Here is LanguageBtnCreator with this.props.languages", this.props.languages) 
		return this.props.languages.map((language, i) => { 
			return (
				<LanguageBtn 
						url_name={language.url_name}
						name={language.name}
						key={i}
				/>
			);
		});
	}

	render() {

		return (
			<div>{this.createBtns()}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

//I think I still need to bind my actions together

export default connect(mapStateToProps)(LanguageBtnCreator);

   		