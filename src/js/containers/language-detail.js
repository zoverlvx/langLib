import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link, Route} from "react-router-dom";
import { changeLanguage } from "../actions"; 
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

class LanguageDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){
        const {open} = this.props.dropdown;
        const closed = open;
        const opened = !open;
        const {language} = this.props.match.params;
        const nextLanguage = nextProps.match.params.language;
        const {changeLanguage} = this.props;
        
        if(opened && language === nextLanguage) {
            changeLanguage(nextLanguage);    
        }
        if(closed && language !== nextLanguage) {
            changeLanguage(nextLanguage);
        } 
        if(closed && language === nextLanguage) {
            changeLanguage(language);
        }
        if(opened && language !== nextLanguage) {
            changeLanguage();
        }
    }

    render() {      
    
        const {language} = this.props.match.params;
        const {partofspeech} = this.props.match.params;
        const {url} = this.props.match.params;
        const {changeLanguage} = this.props;
        const pathname = this.props.location.pathname;    
        const fullUrl = `${language}/${partofspeech}`
    
        changeLanguage(language);
    
        return (
	    pathname === "/french/pronouns" ? <FrenchPronouns /> :
            pathname === "/french/ordinal_and_cardinal_numbers" ? <FrenchNumbers /> :
	    pathname === "/french/regular_verb_conjugations" ? <FrenchVerbs /> : 
	    pathname === "/german/pronouns" ? <GermanPronouns /> : 
	    pathname === "/german/ordinal_and_cardinal_numbers" ? <GermanNumbers /> : 
	    pathname === "/german/regular_verb_conjugations" ? <GermanVerbs /> : 
	    pathname === "/russian/pronouns" ? <RussianPronouns /> : 
	    pathname === "/russian/ordinal_and_cardinal_numbers" ? <RussianNumbers /> :            
            pathname === "/russian/regular_verb_conjugations" ? <RussianVerbs /> : null 
	);  
    } 
} 

function mapStateToProps(state) {
	return {
		language: state.languages,
		dropdown: state.dropdown
	}
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (nextLanguage) => dispatch(changeLanguage(nextLanguage))
        }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LanguageDetail));
