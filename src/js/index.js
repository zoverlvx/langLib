import 'core-js/es6/map';
import 'core-js/es6/set';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter} from "react-router-dom";
import allReducers from "./reducers";
import Routes from "./components/routes"
//import {createRoutes} from "./components/routes";
require("../stylesheets/index.sass");
//I do not currently have middleware 
const mount = document.getElementById("root");
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
	    <BrowserRouter>
		    <Routes />
		</BrowserRouter>
	</Provider>, 
	mount
	);
