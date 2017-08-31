//action and action creator which signals to the reducer
//to reduce the state to a new state dependent upon the 
//eventCreators in the JSX

//can change this to CHANGE_LANGUAGE
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const toggleDropdown = (nextLanguage) => {
	return {
		type: TOGGLE_DROPDOWN,
		nextLanguage
	}
}

export const CHANGE_PART_OF_SPEECH = "CHANGE_PART_OF_SPEECH";
export const changePartOfSpeech = (partOfSpeech) => {
	return {
		type: CHANGE_PART_OF_SPEECH,
		partOfSpeech
	}
}