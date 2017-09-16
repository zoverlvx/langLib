import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import allReducers from "./reducers";
import App from "./components/app";
import Routes from "./components/routes"

//I do not currently have middleware 

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//console.log("Here is the store: ",store)  
console.log("Here is store.getState", store.getState()) 
//console.log("Here is store.dispatch", store.dispatch) 
//console.log(applyMiddleware) 

render(
	<Provider store={store}>
		<Routes />
	</Provider>, 
	document.getElementById("root")
	);
