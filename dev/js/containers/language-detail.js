import React, {Component} from 'react';
import {connect} from 'react-redux';

//this component will change the information displayed
// based on the information as passed down by the action in the
// event

//this has gotten convoluted again
//I think that I'm witnessing the limits of the language reducer as a database
//I need to break the language reducer down into something much more simple
//Might be best to create View Components for each partOfSpeech for each language
//then have them display based on LANGUAGE_CHOSEN && PART_OF_SPEECH
class LanguageDetail extends Component {
	constructor(props) {
		super(props);
	} 

	render() {

		if(!this.props.language) {
			return (<h2>Please, select a language.</h2>)
		}

		if(this.props.language === "German" && this.props.partsOfSpeech === "Pronouns"){
			return (
				<div>
				<h1>{this.props.language.name}</h1>
				<h3>{this.props.language.pronouns.name}</h3>
				<hr />
				<h3>Die Nominativen Pronomen</h3>
				<p>1st			2nd				3rd</p>
				<p>{this.props.language.pronouns.nom.map((pronoun) => pronoun + " ")}</p>
				</div>
				)
		}

		return (
			<div>
		{ this.props.language.name }
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		language: state.activeLanguage
	}
}

export default connect(mapStateToProps)(LanguageDetail);