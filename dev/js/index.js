import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {TOGGLE_DROPDOWN, toggleDropdown} from './actions';
import allReducers from './reducers';
import {initialState} from './reducers/dropdown';
import App from './components/app';


const store = createStore(allReducers);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);