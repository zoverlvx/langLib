import React, {Component} from "react";
import { connect } from 'react-redux';
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from '../actions';
import ListItems from './list-items';
import ListItemsContainer from './list-items-container';



//component which describes the function of each
//individual button
class LanguageBtn extends Component {

	_handleClickBtn(){ 
console.log("After click", this.props.language);
this.props.toggleDropdown(this.props.language); //<--
console.log("_handleClickBtn is working") 
console.log("___________________________________________");
console.log("Here is this.props.language", this.props.language); 
console.log("Here is this.props.name", this.props.name);
console.log("Here is this.props.languages", this.props.languages);
	}

	render() {
		console.log("After render: ", this.props.language);
		return (
			<div>
				<span 
				onClick={this._handleClickBtn.bind(this)}
				> {this.props.name}	
				</span>
				<ListItemsContainer />
			</div>
			);
	}
}



//todo
//research bootstrap: dropdown open, btn_style, btn, dropdown-toggle

// When is it that we want to display the li and the language?
// How does the dropdown toggle know where to be? What causes that?
// Look at the flow and composition of the React Components / architecture

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDropdown: () => dispatch(toggleDropdown(TOGGLE_DROPDOWN))
	}
}

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		dropdown: state.dropdown,
		liReducer: state.liReducer
	}
}


export default connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn, ListItems);
//do I need to connect ListItems even though it's already in LanguageBtn?
//I think I need to connect mapDispatchToProps to this???
