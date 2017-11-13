import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link, Route} from "react-router-dom";
import Default from "../components/language-components/default";
import FrenchPronouns from "../components/language-components/french/french-pronouns";
import FrenchNumbers from "../components/language-components/french/french-numbers";
import FrenchVerbs from "../components/language-components/french/french-verbs";
import GermanPronouns from "../components/language-components/german/german-pronouns";
import GermanNumbers from "../components/language-components/german/german-numbers";
import GermanVerbs from "../components/language-components/german/german-verbs";
import RussianPronouns from "../components/language-components/russian/russian-pronouns";
import RussianNumbers from "../components/language-components/russian/russian-numbers";
import RussianVerbs from "../components/language-components/russian/russian-verbs";

const LanguageDetail = (props) => { 
    return (
	    props.location.pathname === "/french/pronouns" ? <FrenchPronouns /> :
            props.location.pathname === "/french/ordinal_and_cardinal_numbers" ? <FrenchNumbers /> :
	    props.location.pathname === "/french/regular_verb_conjugations" ? <FrenchVerbs /> : 
	    props.location.pathname === "/german/pronouns" ? <GermanPronouns /> : 
	    props.location.pathname === "/german/ordinal_and_cardinal_numbers" ? <GermanNumbers /> : 
	    props.location.pathname === "/german/regular_verb_conjugations" ? <GermanVerbs /> : 
	    props.location.pathname === "/russian/pronouns" ? <RussianPronouns /> : 
	    props.location.pathname === "/russian/ordinal_and_cardinal_numbers" ? <RussianNumbers /> : 
	    props.location.pathname === "/russian/regular_verb_conjugations" ? <RussianVerbs /> : null 
		); 
};

function mapStateToProps(state) {
	return {
		language: state.languages,
		dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(LanguageDetail));
