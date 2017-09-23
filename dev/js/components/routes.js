import React from "react";
import { Route, Switch } from "react-router";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

//LanguageDetail should render some kind of display on route / but it doesn't

const Routes = () => {
	return (
            <div>
               <LanguageBtnCreator /> 
                <Switch>
                <Route path="/:language/:partofspeech" component={LanguageDetail} />     
	            </Switch>
	        </div>
		);
}



export default Routes;