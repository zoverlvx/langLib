import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


//trying to figure out the onClick. Is this being placed on the container?
//use Link around the LanguageAspect

//lolz
//match.params.language and match.params.part-of-speech ???
const LanguageAspect = (props) => (	
		<li className="language_aspect"  
		key={props.id} 
		onClick={() => props.dispatch(changePartOfSpeech(props.item))}>
		<Link to={`/${props.dropdown}/${props.item}`}>{props.item}</Link>
		</li>
		);

	// const LanguageAspect = (props) => {	
	// console.log("Here is props from LanguageAspect", props) 
	// //console.log("Here is props.dropdown.language from LanguageAspect", props.dropdown.language)
	// return (
	// 	<li className="language_aspect"  
	// 	key={props.id} 
	// 	onClick={() => props.dispatch(changePartOfSpeech(props.item))}>
	// 	<Link to={`/${props.dropdown.language}/${props.item}`}>{props.item}</Link>
	// 	</li>
	// 	);
	// }

function mapStateToProps(state) {
	return {
		dropdown: state.dropdown.language
	}
}

export default connect(mapStateToProps)(LanguageAspect);

