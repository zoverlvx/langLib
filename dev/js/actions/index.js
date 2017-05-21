//action and action creator which signals to the reducer
//to reduce the state to a new state dependent upon the 
//eventCreators in the JSX
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const toggleDropdown = (nextLanguage) => {
	return {
		type: TOGGLE_DROPDOWN,
		nextLanguage
	}
}

