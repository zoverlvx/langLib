import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import allReducers from "./reducers";
import App from "./components/app";


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(typeof store)
console.log(store)  
console.log("Here is store.getState", store.getState()) 

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
	);