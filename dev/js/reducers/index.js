import {combineReducers} from 'redux';
import languageReducer from './language-reducer';
import activeLanguageReducer from './reducer-active-language';
import dropdown from './dropdown';

//reducers gathered into one
const allReducers = combineReducers({
	languages: languageReducer,
	activeLanguage: activeLanguageReducer,
	dropdown: dropdown
});

export default allReducers;