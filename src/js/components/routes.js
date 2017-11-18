import React from "react";
import {connect} from "react-redux";
import { withRouter, Route, Switch } from "react-router";
import Default from "../components/language-components/default";
import LanguageBtnCreator from "../containers/language-btn-creator";
import LanguageDetail from "../containers/language-detail";

//Switch required if multiple routes used

const Routes = (props) => {
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

// export function createRoutes() {
// 	return (
//         <div>
//             <LanguageBtnCreator />
//             <Route path="/:language/:partsOfSpeech" component={LanguageDetail} />
//         </div>
// 		);
// }

const mapStateToProps = (state) => {
        return {
                languages: state.languages,
                dropdown: state.dropdown
        }
}

export default withRouter(connect(mapStateToProps)(Routes));

