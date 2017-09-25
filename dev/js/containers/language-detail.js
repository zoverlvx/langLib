import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link, Route} from "react-router-dom";
import FrenchPronouns from "../components/language-components/french/french-pronouns";
import FrenchNumbers from "../components/language-components/french/french-numbers";
import FrenchVerbs from "../components/language-components/french/french-verbs";
import GermanPronouns from "../components/language-components/german/german-pronouns";
import GermanNumbers from "../components/language-components/german/german-numbers";
import GermanVerbs from "../components/language-components/german/german-verbs";
import RussianPronouns from "../components/language-components/russian/russian-pronouns";
import RussianNumbers from "../components/language-components/russian/russian-numbers";
import RussianVerbs from "../components/language-components/russian/russian-verbs";

class LanguageDetail extends Component {
	constructor(props) {
		super(props);
	} 

	render() {
		console.log("Here is this.props.match in Detail", this.props.match); 
		console.log("Here is this.props.location in Detail", this.props.location); 
		console.log("Here is this.props.history in Detail", this.props.history);   
    
    return (
        this.props.location.pathname === "/french/pronouns" ? <FrenchPronouns /> :
		this.props.location.pathname === "/french/ordinal and cardinal numbers" ? <FrenchNumbers /> :
	    this.props.location.pathname === "/french/regular verb conjugations" ? <FrenchVerbs /> : 
	    this.props.location.pathname === "/german/pronouns" ? <GermanPronouns /> : 
	    this.props.location.pathname === "/german/ordinal and cardinal numbers" ? <GermanNumbers /> : 
	    this.props.location.pathname === "/german/regular verb conjugations" ? <GermanVerbs /> : 
	    this.props.location.pathname === "/russian/pronouns" ? <RussianPronouns /> : 
	    this.props.location.pathname === "/russian/ordinal and cardinal numbers" ? <RussianNumbers /> : 
	    this.props.location.pathname === "/russian/regular verb conjugations" ? <RussianVerbs /> : null
    	);

		if (this.props.location.pathname === "/") {
			return (
				<div id="margin_top">
			        <h2>Please, select a language.</h2>
			    </div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		language: state.languages,
		dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(LanguageDetail));