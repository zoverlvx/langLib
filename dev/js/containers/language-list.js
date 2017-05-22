import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions/index';
//I think it makes more sense to put selectLanguage on the li
// on the button. It used to be used here when the app was simpler
import LanguageBtn from '../components/LanguageBtn';

//key is going to be very important here
//and depending on how the two components are connected
//the key alone will be able to specify what the output will be onClick

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '40%'
	}
}

class LanguageSpanOfBtns extends Component {
	
	createBtns() {
		return this.props.languages.map((language, i) => {
			return (
	<LanguageBtn key={i} language={language.id} {...language} selectLanguage={ () => this.props.selectLanguage(language)} />
			);
		});
	}

	render() {
		return (
			<div style={styles.container}>{this.createBtns()}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		languages: state.languages
	}
}

export default connect(mapStateToProps)(LanguageSpanOfBtns);


          		