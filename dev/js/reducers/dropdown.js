export const initialState = {
	open: false,
	language: null,
	partOfSpeech: null
}
//main state of the button component
//displays the dropdown menu when true
//allows the continuation of the display / the state of
//<LanguageDetail /> even if the button has been clicked to false
export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_DROPDOWN':
			if (state.open && state.language === action.nextLanguage) {
				return {
					open: false,
					language: action.nextLanguage
				}
			}
			if (!state.open && state.language === action.nextLanguage) {
				return {
					open: true,
					language: action.nextLanguage
				}
			}
			if (state.open && state.language !== action.nextLanguage) {
				return {
					open: true,
					language: action.nextLanguage
				}
			}
			if (!state.open && state.language !== action.nextLanguage) {
				return {
					open: true,
					language: action.nextLanguage
				} 
			}
		case 'CHANGE_PART_OF_SPEECH':
			return Object.assign({}, state, {partOfSpeech: action.partOfSpeech})

		default:
			return state;
	}
	return state;
}