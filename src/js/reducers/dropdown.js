export const initialState = {
	open: false,
	language: null,
	partOfSpeech: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
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
