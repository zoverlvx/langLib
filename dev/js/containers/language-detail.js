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

		if(this.props.dropdown.language === "German" && this.props.dropdown.partOfSpeech === "Pronouns"){
			return (
				<div>
					<h2>{this.props.language[1].pronouns.name}</h2>
					<h4>Die Nominativen Pronomen</h4>
					<p>{this.props.language[1].pronouns.nom.map((pronoun) => pronoun + " - ")}</p>
					<h4>Die Akkusativen Pronomen</h4>
					<p>{this.props.language[1].pronouns.acc.map((pronoun) => pronoun + " - ")}</p>
					<h4>Die Dativen Pronomen</h4>
					<p>{this.props.language[1].pronouns.dat.map((pronoun) => pronoun + " - ")}</p>
					<h4>Die Genitiven Pronomen:</h4><br />
					<h4>Als Begleiter</h4>
					<h5>Nominativ</h5>
					<p>Maskulinum: {
						this.props.language[1].pronouns.gen.no_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Neutrum: {
					this.props.language[1].pronouns.gen.no_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Femininum: {
						this.props.language[1].pronouns.gen.e_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Plural: {
					this.props.language[1].pronouns.gen.e_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<h5>Akkusativ</h5>
					<p>Maskulinum: {
					this.props.language[1].pronouns.gen.en_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Neutrum: {
					this.props.language[1].pronouns.gen.no_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Femininum: {
						this.props.language[1].pronouns.gen.e_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Plural: {
					this.props.language[1].pronouns.gen.e_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<h5>Dativ</h5>
					<p>Maskulinum: {
					this.props.language[1].pronouns.gen.em_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Neutrum: {
					this.props.language[1].pronouns.gen.em_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Femininum: {
						this.props.language[1].pronouns.gen.er_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Plural: {
					this.props.language[1].pronouns.gen.en_ending.map((pronoun) => pronoun + " - ")
					}
					</p>

					<h5>Genitiv</h5>

					<p>Maskulinum: {
					this.props.language[1].pronouns.gen.es_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Neutrum: {
					this.props.language[1].pronouns.gen.es_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Femininum: {
						this.props.language[1].pronouns.gen.er_ending.map((pronoun) => pronoun + " - ")
					}
					</p>
					<p>Plural: {
					this.props.language[1].pronouns.gen.er_ending.map((pronoun) => pronoun + " - ")
					}
					</p>

				</div>
				)
		} else {
				return (
			<div>
			Display
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

export default connect(mapStateToProps)(LanguageDetail);