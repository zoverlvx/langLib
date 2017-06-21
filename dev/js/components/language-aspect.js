import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";


//trying to figure out the onClick. Is this being placed on the container?

const LanguageAspect = (props) => (		
		<li className="language_aspect"  key={props.id} onClick={() => props.dispatch(changePartOfSpeech(props.item))}>{props.item}</li>
	);

export default connect()(LanguageAspect);

