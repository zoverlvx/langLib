import React, {Component} from 'react';
import {connect} from 'react-redux';

//this component will change the information displayed
// based on the information as passed down by the action in the
// event
class LanguageDetail extends Component {
	constructor(props) {
		super(props);
		//not sure if this is even relevant
	} 
	mapNums(nums){nums.map((nums) => nums.number)} 
	//nums.numbers? //I have no idea what this is doing

	render() {
		//clueless at this point
		//console.log("Here is LanguageDetail ", this.props.name) 

		if(!this.props.language) {
			return (<h2>Please, select a language.</h2>)
		}

		return (
			<div>
		{
			this.props.language.name
		}
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