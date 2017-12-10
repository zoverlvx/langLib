export const initialState = {
	language: null,
	partOfSpeech: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            if (state.language === action.nextLanguage) {
		return {
			language: action.nextLanguage,
                        partOfSpeech: "pronouns"
			}
            }
	    if (state.language !== action.nextLanguage) {
		return {
			language: action.nextLanguage,
                        partOfSpeech: "pronouns" 
	                }
            }
	case 'CHANGE_PART_OF_SPEECH':
        	return Object.assign({}, state, {partOfSpeech: action.partOfSpeech})
		default:
			return state;
	}
	return state;
}
