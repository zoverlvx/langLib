import React, { Component } from 'react';
import LanguageAspect from './language-aspect';

//the dropdown list component
//the container for the li
//attributes actions to the li which will then affect the LanguageDetail info
//creates the entirety of the dropdown menu
class ListLanguageAspects extends Component {
	constructor(props) {
		super(props)
	}



	createParams() { 
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];

		return partsOfSpeech.map((partOfSpeech, i) => {
			console.log("Here is the this that we want", this); 
				return (
					<LanguageAspect  
					item={partOfSpeech} 
					key={i} 
					/>
					);
		});
	}

	render() {
		return (
		<ul>
		{this.createParams()}
		</ul>
		);
	}
}

export default ListLanguageAspects;



