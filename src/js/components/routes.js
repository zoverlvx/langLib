import React from "react";
import { Route, Switch } from "react-router";
import Default from "../components/language-components/default";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";


const Routes = (props) => {
    console.log(props.children);
	return (
            <div>
                <LanguageBtnCreator />
                <Switch>
                    <Route exact path="/" component={Default} />
                    <Route path="/:language/:partofspeech" component={LanguageDetail} />    
                </Switch>			
            </div>
       
		);
}

export default Routes;
