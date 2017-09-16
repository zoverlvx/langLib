import React from "react";
import { Route } from "react-router";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

const Routes = () => {
	return (
            <div>
                <Route path="/" component={LanguageBtnCreator} /> 
	            <Route path=":language" component={LanguageBtnCreator} />
	            <Route path=":language/:part-of-speech" component={LanguageDetail} />
	        </div>
		);
}



export default Routes