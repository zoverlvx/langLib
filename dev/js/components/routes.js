import React from "react";
import { Route } from "react-router";
import {BrowserRouter} from "react-router-dom";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

const Routes = () => {
	return (
            <div>
            <BrowserRouter>
                <Route path="/" component={LanguageBtnCreator} /> 
	            <Route path=":language" component={LanguageBtnCreator} />
	            <Route path=":language/:part-of-speech" component={LanguageDetail} />
	            </BrowserRouter>
	        </div>
		);
}



export default Routes