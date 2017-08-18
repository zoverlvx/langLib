import React, {Component} from "react";
import {connect} from "react-redux";
import {selectLanguage} from "../actions/index"; // <-- double-check if this is being used
//I think it makes more sense to put selectLanguage on the li
// on the button. It used to be used here when the app was simpler
import LanguageBtn from "../components/language-btn";
import { Link } from "react-router-dom";

//key is going to be very important here
//and depending on how the two components are connected
//the key alone will be able to specify what the output will be onClick

// const styles = {
// 	container: {
// 		display: 'flex',
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'space-around',
// 		width: '40%'
// 	}
// } style={styles.container}

//React-Router ---------------------------------------------------------------------------------------
//I believe I want to use NavLink around the button
//<NavLink to='/:language'/> 

//Do I use render in the NavLink 
//to get the params.language from the function createBtns?
// No, I think it needs to be used in the stateless component 

//<Link to={`/${language.name}`}>
class LanguageBtnCreator extends Component {
	createBtns() {
		return this.props.languages.map((language, i) => {
			console.log("Labeled:",language.name)
			return (
				<div>
				<LanguageBtn 
						{...language}
						value={language.language}
						key={i} 
						language={language.name}  
						/>
				</div>
			);
		});
	}

	render() {

		return (
			<div>{this.createBtns()}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

//I think I still need to bind my actions together

export default connect(mapStateToProps)(LanguageBtnCreator);


          		