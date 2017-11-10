import {combineReducers} from "redux";
//import {routeReducer} from "react-router-redux";
import languageReducer from "./language-reducer";
import dropdown from "./dropdown";

//reducers gathered into one
const allReducers = combineReducers({
	languages: languageReducer,
	dropdown: dropdown
});

export default allReducers;
