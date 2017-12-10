import {combineReducers} from "redux";
import languageReducer from "./language-reducer";
import dropdown from "./dropdown";

const allReducers = combineReducers({
	languages: languageReducer,
	dropdown: dropdown
});

export default allReducers;
