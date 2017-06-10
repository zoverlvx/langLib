import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import {initialState} from './reducers/dropdown';
import App from './components/app';
import {TOGGLE_DROPDOWN, toggleDropdown} from './actions';

// const middlewares = [
// 	thunk,
// 	logger()
// ]

const middleware = applyMiddleware(thunk);

//getInitialState?
const store = createStore(
	allReducers, 
	compose(
	middleware,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

// const logger = (store) => (next) => (action) => {
// 	console.log("Action fired: ", action) 
// 	next(action);
// }

//const middleWare = applyMiddleware(logger);

//const store = createStore(allReducers, middleWare);

// store.subscribe(() => {
// 	console.log("Store changed ", store.getState()); 
// })

// store.dispatch((dispatch) => {
// 	dispatch(toggleDropdown())
// });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);

//import {Subject} from 'rxjs/Subject';

////create our stream as a subject so arbitrary data can be sent on the stream
//const action$ = new Subject();

////Initial State
//const initState = etc

////Redux reducer:
//allReducers

////Reduxification
//const store$ = action$.startWith(initState).scan(allReducers);

////Higher order function to send actions to the stream
//const actionDispatcher = (func) => (...args) =>
//action$.next(func(...args));

// Example action function
// const changeName = actionDispatcher((payload) => ({  
//   type: 'NAME_CHANGED',
//   payload
// }));

// // React view component 
// const App = (props) => {  
//   const { name } = props;
//   return (
//     <div>
//       <h1>{ name }</h1>
//       <button onClick={() => changeName('Harry')} >Harry</button>
//       <button onClick={() => changeName('Sally')} >Sally</button>
//     </div>
//   );
// }

// // subscribe and render the view
// const dom =  document.getElementById('app');  
// store$.subscribe((state) =>  
//     ReactDOM.render(<App {...state} />, dom));

