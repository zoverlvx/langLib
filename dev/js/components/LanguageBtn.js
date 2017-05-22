import React, {Component} from "react";
import { connect } from 'react-redux';
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from '../actions';

 

const styles = {
	container: {
		fontSize: '12px'
	}
}

//dumb component which simply displays the name of a list item
//in the dropdown
const LanguageParam = (props) => {
	return (
		<li style={styles.container} key={props.id} onClick={props.handleClick}>{props.param}</li>
		);
}

//the dropdown list component
//creates the entirety of the dropdown menu
class ListItems extends Component {
	constructor(props) {
		super(props)
		console.log("Here is props ", props)
		console.log("Here is this ", this)
		console.log("Here is this.props ", this.props)
		console.log("Here is this.props.languages", this.props.languages) 
	}

	handleClick(e) {
	e.preventDefault();
	console.log("This is this.props.language ", this.props.language) 
	console.log("handleClick is working")
	//this.props.toggleDropdown(this.props.language);
	this.props.dispatch(toggleDropdown(this.props.language))
 
}

	createParams() { 
//param needs a better name
		return this.props.liReducer.map((li, i) => {
			
				return (
					<LanguageParam 
					handleClick={this.handleClick.bind(this)} 
					param={li} 
					key={i} 
					/>
					);
		});
	}

	render() {
		console.log("The beginning of render of ListItems ", this) 
		return (
		<ul className="dropdown-menu">
		{this.createParams()}
		</ul>
		);
	}
}

//component which describes the function of each
//individual button
class LanguageBtn extends Component {

	_handleClickBtn(){ 
this.props.toggleDropdown(this.props.name);
	}

	render() {


		return (
			<div className="dropdown open">
				<span 
				className='btn_style btn dropdown-toggle' 
				onClick={this._handleClickBtn.bind(this)}
				> {this.props.name}	
				</span>
				{
					this.props.dropdown.open
					?
					<ListItems name={this.props.name} liReducer={this.props.liReducer} languages={this.props.languages}/>
					:
					null
				}
			</div>
			);
	}
}


// function mapDispatchToProps(dispatch) {
// 	return ({
// 		toggleDropdown: () => ({dispatch: () => (TOGGLE_DROPDOWN)})
// 	})
// }

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDropdown: () => dispatch(toggleDropdown(TOGGLE_DROPDOWN))
	}
}

function mapStateToProps(state) {
	return ({
		languages: state.languages,
		dropdown: state.dropdown,
		liReducer: state.liReducer
	})
}


export default connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn, ListItems);
//do I need to connect ListItems even though it's already in LanguageBtn?
//I think I need to connect mapDispatchToProps to this???
