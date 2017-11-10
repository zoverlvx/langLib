import React from "react";
import { Route, Switch } from "react-router";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

//Switch required if multiple routes used

const Routes = () => {
	return (
            <div>
                <LanguageBtnCreator />
                <Route path="/:language/:partofspeech" component={LanguageDetail} />    
			</div>
       
		);
}

// export function createRoutes() {
// 	return (
//         <div>
//             <LanguageBtnCreator />
//             <Route path="/:language/:partsOfSpeech" component={LanguageDetail} />
//         </div>
// 		);
// }

export default Routes;

