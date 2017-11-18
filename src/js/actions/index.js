export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = (nextLanguage) => {
	return {
		type: CHANGE_LANGUAGE,
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
