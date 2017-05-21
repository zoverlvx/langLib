import {combineReducers} from 'redux';
import languageReducer from './language-reducer';
import activeLanguageReducer from './reducer-active-language';
import liReducer from './li-reducer';
import dropdown from './dropdown';

//reducers gathered into one
const allReducers = combineReducers({
	languages: languageReducer,
	activeLanguage: activeLanguageReducer,
	liReducer: liReducer,
	dropdown: dropdown
});

export default allReducers;