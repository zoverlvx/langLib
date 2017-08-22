import React, {Component} from "react";
import {connect} from "react-redux";
import {selectLanguage} from "../actions/index"; // <-- double-check if this is being used
//I think it makes more sense to put selectLanguage on the li
// on the button. It used to be used here when the app was simpler
import LanguageBtn from "../components/language-btn";
import { Link } from "react-router-dom";

class LanguageBtnCreator extends Component {
	createBtns() {
		return this.props.languages.map((language, i) => {
			return (
				<div>
				<LanguageBtn 
						{...language}
						value={language.language}
						key={i} 
						language={language.name}  
						/>
				</div>
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


          		