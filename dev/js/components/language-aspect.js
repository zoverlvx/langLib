import React from "react";
import { changePartOfSpeech } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


//trying to figure out the onClick. Is this being placed on the container?
//use Link around the LanguageAspect

//lolz
//match.params.language and match.params.part-of-speech ???
const LanguageAspect = (props) => (	
		<Link to={`/${props.name}/${props.id}`}>
		<li className="language_aspect"  key={props.id} onClick={() => props.dispatch(changePartOfSpeech(props.item))}><Link to={`/${props.language}/${props.item}`}>{props.item}</Link></li>
		</Link>
	);

export default connect()(LanguageAspect);

