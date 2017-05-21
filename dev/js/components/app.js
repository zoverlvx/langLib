//npm run start 
import React from 'react';
import LanguageList from '../containers/language-list';
import LanguageDetail from '../containers/language-detail';
require('../../scss/style.scss');

//<LanguageParam />
//<ListItems />
//<LanguageBtn />
//<LanguageSpanOfBtns />
//<LanguageDetail />

//main component of the program
const App = () => (
	<div>
		<h2>Choose a language: </h2>
		<LanguageList />
		<hr />
		<h2>Language Details: </h2>
		<LanguageDetail />
	</div>
);

export default App;
 