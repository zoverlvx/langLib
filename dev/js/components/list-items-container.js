import React, { Component } from 'react';
import LanguageAspect from './language-aspect';

//the dropdown list component
//the container for the li
//attributes actions to the li which will then affect the LanguageDetail info
//creates the entirety of the dropdown menu
class ListItemsContainer extends Component {
	constructor(props) {
		super(props)
	}



	createParams() { 
		let partsOfSpeech = ["Pronouns", "Ordinal and Cardinal Numbers", "Regular Verb Conjugations"];

		return partsOfSpeech.map((partOfSpeech, i) => {
			console.log("Here is the this that we want", this); 
				return (
					<LanguageAspect  
					items={partOfSpeech} 
					key={i} 
					/>
					);
		});
	}

	render() {
		console.log("The beginning of render of ListItems ", this) 
		return (
		<ul>
		{this.createParams()}
		</ul>
		);
	}
}

export default ListItemsContainer;



