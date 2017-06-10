import React from 'react';
import { changePartOfSpeech } from '../actions';


const styles = {
	container: {
		fontSize: '12px'
	}
}

//dumb component which simply displays the name of a list item
//in the dropdown

//in css will take an id for to show this onClick from the LanguageBtn

const LanguageAspect = (props) => (
		
		<li style={styles.container} key={props.id} onClick={props.}>{props.items}</li>
		
	);

const mapDispatchToProps = (dispatch) => {
	return {
		changePartOfSpeech: (partOfSpeech) => dispatch(changePartOfSpeech(partOfSpeech))
	}
}

export default connect(mapDispatchToProps)(LanguageAspect);