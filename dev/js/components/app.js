//npm run start 
import React from 'react';
import LanguageBtnCreator from '../containers/language-btn-creator';
import LanguageDetail from '../containers/language-detail';
//require('css/style.css');

//main component of the program
const App = () => (
	<div>
		<h2>Choose a language: </h2>
		<LanguageBtnCreator />
		<hr />
		<h2>Language Details: </h2>
		<LanguageDetail />
	</div>
);

export default App;
 