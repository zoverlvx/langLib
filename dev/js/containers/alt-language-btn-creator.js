import React, {Component} from "react";
import {connect} from "react-redux"; 
import LanguageBtn from "../components/alt-language-btn";

const LanguageBtnCreator = () => {
	function createBtns() {
        let languages = ["French", "German", "Russian"]
		return languages.map((language, i) => {
			<AltLanguageBtn 
                urlName={languages[i].toLowerCase()}
                name={languages[i]}
                key={i}
			/>
		});
	}
	return (
        <div>
        {createBtns()}
        </div>
		);
}

//don't believe I need mapStateToProps
//dont't believe I need to connect this to state because LanguageBtn 
//is that which affects the route with Link

export default LanguageBtnCreator