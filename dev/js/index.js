import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import {TOGGLE_DROPDOWN, toggleDropdown} from "./actions";
import allReducers from "./reducers";
import {initialState} from "./reducers/dropdown";
import App from "./components/app";


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);