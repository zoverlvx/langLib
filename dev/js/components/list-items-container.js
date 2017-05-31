import React, { Component } from 'react';
import ListItems from './list-items';

//the dropdown list component
//the container for the li
//attributes actions to the li which will then affect the LanguageDetail info
//creates the entirety of the dropdown menu
class ListItemsContainer extends Component {
	constructor(props) {
		super(props)
	}

	handleClick(e) {
	e.preventDefault(); 
	console.log("handleClick is working")
	//this.props.dispatch(toggleDropdown(this.props.language))
 
}

	createParams() { 
//param needs a better name
		return this.props.liReducer.map((li, i) => {
			
				return (
					<ListItems 
					handleClick={this.handleClick.bind(this)} 
					items={li} 
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



//btnContainer creates the three buttons
//btn onClick shows the dropdownul
//dropdownul shows the li
//dropdownli onClick dependent upon id will generate the content of the displayinfo 
//displayinfo