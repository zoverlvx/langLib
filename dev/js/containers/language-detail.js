import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link, Route} from "react-router-dom";
import FrenchPronouns from "../components/language-components/french/french-pronouns";
import FrenchNumbers from "../components/language-components/french/french-numbers";
import FrenchVerbs from "../components/language-components/french/french-verbs";
import GermanPronouns from "../components/language-components/german/german-pronouns";
import GermanNumbers from "../components/language-components/german/german-numbers";
import GermanVerbs from "../components/language-components/german/german-verbs";

class LanguageDetail extends Component {
	constructor(props) {
		super(props);
	} 

	render() {
		console.log("Here is this.props.match in Detail", this.props.match); 
		console.log("Here is this.props.location in Detail", this.props.location); 
		console.log("Here is this.props.history in Detail", this.props.history);   
    
    return (
        this.props.location.pathname === "/french/pronouns" ? <FrenchPronouns /> :
		this.props.location.pathname === "/french/ordinal and cardinal numbers" ? <FrenchNumbers /> :
	    this.props.location.pathname === "/french/regular verb conjugations" ? <FrenchVerbs /> : 
	    this.props.location.pathname === "/german/pronouns" ? <GermanPronouns /> : 
	    this.props.location.pathname === "/german/ordinal and cardinal numbers" ? <GermanNumbers /> : 
	    this.props.location.pathname === "/german/regular verb conjugations" ? <GermanVerbs /> : null
    	);

		if(this.props.dropdown.language === "russian" && this.props.dropdown.partOfSpeech === "pronouns"){
			return (
				<div>
					
					<h2 id="margin_top_bottom">{this.props.language[2].pronouns.name}</h2>
										
					<div className="list">
					<ul>
						<li id="col_head">Именительный падеж:</li>
						<li id="col_head">единственное число</li>
						<li id="col_head">множественное число</li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.nom[0]}</li>
						<li>{this.props.language[2].pronouns.nom[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.nom[2]}</li>
						<li>{this.props.language[2].pronouns.nom[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.nom[4]}</li>
						<li>{this.props.language[2].pronouns.nom[5]}</li>
					</ul>


					<ul>
						<li id="col_head">Винительный падеж:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[0]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[2]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[4]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[5]}</li>
					</ul>


					<ul>
						<li id="col_head">Родительный падеж:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[0]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[2]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[4]}</li>
						<li>{this.props.language[2].pronouns.acc_and_gen[5]}</li>
					</ul>


					<ul>
						<li id="col_head">Дательный падеж:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.dat[0]}</li>
						<li>{this.props.language[2].pronouns.dat[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.dat[2]}</li>
						<li>{this.props.language[2].pronouns.dat[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.dat[4]}</li>
						<li>{this.props.language[2].pronouns.dat[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Местный падеж:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.loc[0]}</li>
						<li>{this.props.language[2].pronouns.loc[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.loc[2]}</li>
						<li>{this.props.language[2].pronouns.loc[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.loc[4]}</li>
						<li>{this.props.language[2].pronouns.loc[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Творительный падеж:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{this.props.language[2].pronouns.ins[0]}</li>
						<li>{this.props.language[2].pronouns.ins[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{this.props.language[2].pronouns.ins[2]}</li>
						<li>{this.props.language[2].pronouns.ins[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{this.props.language[2].pronouns.ins[4]}</li>
						<li>{this.props.language[2].pronouns.ins[5]}</li>
					</ul>

					</div>

				</div>
				);
		}
		if(this.props.dropdown.language === "russian" && this.props.dropdown.partOfSpeech === "ordinal and cardinal numbers"){
			return (
				<div>
					
					<h2 id="margin_top_bottom">Номера</h2>
						<div className="list">
							<ul>
			    				<li id="col_head">{this.props.language[2].numbers.card.name}</li>
							</ul>
						{this.props.language[2].numbers.card.nums.nom.map((num, i) => <ul><li key={i}>{num}</li></ul>)}
						</div>

						<div className="list">
							<ul>
								<li id="col_head">{this.props.language[2].numbers.ord.name}</li>
							</ul>
						{this.props.language[2].numbers.ord.nums.nom.map((num, i) => <ul><li key={i}>{num}</li></ul>)}
						</div>

				</div>
				);
		}
		if(this.props.dropdown.language === "russian" && this.props.dropdown.partOfSpeech === "regular verb conjugations"){
			return (
				<div>
					
					<div className="list">
					<ul>
						<li id="col_head"></li>
						<li id="col_head">Инфинитив:</li>
						<li id="col_head">{this.props.language[2].verbs.imperfective.first_conjugation.infinitive}</li>
					</ul>

					<ul>
						<li id="col_head">Настоящее время:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[0]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[2]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[4]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.present[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Прошедшее время:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[0]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[2]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[4]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.past[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Будущее время:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[0]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[2]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[4]}</li>
						<li>{this.props.language[2].verbs.imperfective.first_conjugation.future[5]}</li>
					</ul>

					</div>

				</div>
				);
		} 

		if (this.props.location.pathname === "/") {
			return (
				<div id="margin_top">
			        <h2>Please, select a language.</h2>
			    </div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		language: state.languages,
		dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(LanguageDetail));