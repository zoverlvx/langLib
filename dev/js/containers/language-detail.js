import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link, Route} from "react-router-dom";
import FrenchPronouns from "../components/language-components/french-pronouns";
import FrenchNumbers from "../components/language-components/french-numbers";

class LanguageDetail extends Component {
	constructor(props) {
		super(props);
	} 

	render() {
		console.log("Here is this.props.match in Detail", this.props.match); 
		console.log("Here is this.props.location in Detail", this.props.location); 
		console.log("Here is this.props.history in Detail", this.props.history);   
		const lImparfait = "L'imparfait";

		if (this.props.location.pathname === "/") {
			return (
				<div id="margin_top">
			        <h2>Please, select a language.</h2>
			    </div>
			);
		}

		if (this.props.location.pathname === "/french/pronouns") {
			return (
				<FrenchPronouns />
				);
		}

		
		if(this.props.location.pathname === "/french/ordinal and cardinal numbers"){
			return (
                <FrenchNumbers />
				);
		}

		if(this.props.location.pathname === "/french/regular verb conjugations"){
			return (
				<div>

					<h2 id="margin_top_bottom">Les verbes</h2>

						<div className="list">
					<ul>
						<li id="col_head"></li>
						<li id="col_head">{this.props.language[0].verbs.er_conjugation.infinitive} </li>
						<li id="col_head">parler</li>
					</ul>

					<ul>
						<li id="col_head">Le présent:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.present[0]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.present[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.present[2]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.present[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.present[4]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.present[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Le passé composé:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[0]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[2]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[4]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.passe_compose[5]}</li>
					</ul>


					<ul>
						<li id="col_head">{lImparfait}:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[0]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[2]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[4]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.imparfait[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Le futur simple:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[0]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[1]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[2]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[4]}</li>
						<li>{this.props.language[0].verbs.er_conjugation.futur_simple[5]}</li>
					</ul>


						</div>

				</div>
				);
		}

		if(this.props.dropdown.language === "german" && this.props.dropdown.partOfSpeech === "pronouns"){
			return (
				<div>
					<h2 id="margin_top_bottom">{this.props.language[1].pronouns.name}</h2>
					<div className="list">
					<ul>
						<li id="col_head">Die nominativen Pronomen:</li>
						<li id="col_head">Singular</li>
						<li id="col_head">Plural</li>
					</ul>
					<ul>
						<li>1st:</li>
						<li>{this.props.language[1].pronouns.nom[0]}</li>
						<li>{this.props.language[1].pronouns.nom[1]}</li>
					</ul>
					<ul>
						<li>2nd fam:</li>
						<li>{this.props.language[1].pronouns.nom[2]}</li>
						<li>{this.props.language[1].pronouns.nom[3]}</li>
					</ul>
					<ul>
						<li>2nd form:</li>
						<li>{this.props.language[1].pronouns.nom[4]}</li>
						<li>{this.props.language[1].pronouns.nom[5]}</li>
					</ul>
					<ul>
						<li>3rd:</li>
						<li>{this.props.language[1].pronouns.nom[6]}</li>
						<li>{this.props.language[1].pronouns.nom[7]}</li>
					</ul>
				
					<ul>
						<li id="col_head">Die akkusativen Pronomen:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>
					<ul>
						<li>1st:</li>
						<li>{this.props.language[1].pronouns.acc[0]}</li>
						<li>{this.props.language[1].pronouns.acc[1]}</li>
					</ul>
					<ul>
						<li>2nd fam:</li>
						<li>{this.props.language[1].pronouns.acc[2]}</li>
						<li>{this.props.language[1].pronouns.acc[3]}</li>
					</ul>
					<ul>
						<li>2nd form:</li>
						<li>{this.props.language[1].pronouns.acc[4]}</li>
						<li>{this.props.language[1].pronouns.acc[5]}</li>
					</ul>
					<ul>
						<li>3rd:</li>
						<li>{this.props.language[1].pronouns.acc[6]}</li>
						<li>{this.props.language[1].pronouns.acc[7]}</li>
					</ul>

					<ul>
						<li id="col_head">Die dativen Pronomen:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>
					<ul>
						<li>1st:</li>
						<li>{this.props.language[1].pronouns.dat[0]}</li>
						<li>{this.props.language[1].pronouns.dat[1]}</li>
					</ul>
					<ul>
						<li>2nd fam:</li>
						<li>{this.props.language[1].pronouns.dat[2]}</li>
						<li>{this.props.language[1].pronouns.dat[3]}</li>
					</ul>
					<ul>
						<li>2nd form:</li>
						<li>{this.props.language[1].pronouns.dat[4]}</li>
						<li>{this.props.language[1].pronouns.dat[5]}</li>
					</ul>
					<ul>
						<li>3rd:</li>
						<li>{this.props.language[1].pronouns.dat[6]}</li>
						<li>{this.props.language[1].pronouns.dat[7]}</li>
					</ul>
					</div>
									
					<h4 id="margin_top_bottom">Die Possessivpronomen:</h4>
		

					<div className="list">
					<ul>
						<li id="col_head">Als Begleiter:</li>
						<li id="col_head"></li>
						<li id="col_head">ich</li>
						<li id="col_head">du</li>
						<li id="col_head">er</li>
						<li id="col_head">sie</li>
						<li id="col_head">es</li>
						<li id="col_head">wir</li>
						<li id="col_head">ihr</li>
						<li id="col_head">sie</li>
						<li id="col_head">Sie</li>
					</ul>
					<ul>
						<li>Nominativ</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Akkusativ</li>
						<li>m:</li>
						{this.props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>n:</li>
						{this.props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Dativ</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.em_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f:</li>
						{this.props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>pl:</li>
						{this.props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Genitiv</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.es_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					</div>

					<div className="list">
					<ul>
						<li id="col_head">Als Ersatz:</li>
						<li id="col_head"></li>
						<li id="col_head">ich</li>
						<li id="col_head">du</li>
						<li id="col_head">er</li>
						<li id="col_head">sie</li>
						<li id="col_head">es</li>
						<li id="col_head">wir</li>
						<li id="col_head">ihr</li>
						<li id="col_head">sie</li>
						<li id="col_head">Sie</li>
					</ul>
					<ul>
						<li>Nominativ</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Akkusativ</li>
						<li>m:</li>
						{this.props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>n:</li>
						{this.props.language[1].pronouns.gen.neut_independent.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Dativ</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.em_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f:</li>
						{this.props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>pl:</li>
						{this.props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li>Genitiv</li>
						<li>m/n:</li>
						{this.props.language[1].pronouns.gen.es_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					<ul>
						<li></li>
						<li>f/pl:</li>
						{this.props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
					</ul>
					</div>

				</div>
				)
		}
		if(this.props.dropdown.language === "german" && this.props.dropdown.partOfSpeech === "ordinal and cardinal numbers") {
				return (
					<div>
					<h2 id="margin_top_bottom">Die Nummer</h2>
				<div className="list">
				<ul>
			    	<li id="col_head">{this.props.language[1].numbers.card.name}</li>
				</ul>
				{this.props.language[1].numbers.card.nums.map((num, i) => <ul><li key={i}>{num}</li></ul>)}
				</div>

				<div className="list">
				<ul>
					<li id="col_head">{this.props.language[1].numbers.ord.name}</li>
				</ul>
				{this.props.language[1].numbers.ord.nums.map((num, i) => <ul><li key={i}>{num}</li></ul>)}
				</div>
					</div>
				
				);
			}
		if(this.props.dropdown.language === "german" && this.props.dropdown.partOfSpeech === "regular verb conjugations") {
				return(
					<div>
						<h2 id="margin_top_bottom">{this.props.language[1].verbs.name}</h2>

						<div className="list">
					<ul>
						<li id="col_head"></li>
						<li id="col_head">Das Infinitiv: </li>
						<li id="col_head">{this.props.language[1].verbs.infinitive}</li>
					</ul>

					<ul>
						<li id="col_head">das Präsens:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens[0]}</li>
						<li>{this.props.language[1].verbs.praesens[1]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens[2]}</li>
						<li>{this.props.language[1].verbs.praesens[3]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens[4]}</li>
						<li>{this.props.language[1].verbs.praesens[5]}</li>
					</ul>
					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens[6]}</li>
						<li>{this.props.language[1].verbs.praesens[6]}</li>
					</ul>

					<ul>
						<li id="col_head">das Perfekt:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens_perfekt[0]}</li>
						<li>{this.props.language[1].verbs.praesens_perfekt[1]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens_perfekt[2]}</li>
						<li>{this.props.language[1].verbs.praesens_perfekt[3]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens_perfekt[4]}</li>
						<li>{this.props.language[1].verbs.praesens_perfekt[5]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praesens_perfekt[6]}</li>
						<li>{this.props.language[1].verbs.praesens_perfekt[6]}</li>
					</ul>

					<ul>
						<li id="col_head">das Präteritum:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>

					</ul>
					
					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[0]}</li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[1]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[2]}</li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[3]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[4]}</li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[5]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[6]}</li>
						<li>{this.props.language[1].verbs.praeteritum_and_konjunktivII_praesens[6]}</li>
					</ul>

					<ul>
						<li id="col_head">das Plusquamperfekt:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.plusquamperfekt[0]}</li>
						<li>{this.props.language[1].verbs.plusquamperfekt[1]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.plusquamperfekt[2]}</li>
						<li>{this.props.language[1].verbs.plusquamperfekt[3]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.plusquamperfekt[4]}</li>
						<li>{this.props.language[1].verbs.plusquamperfekt[5]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.plusquamperfekt[6]}</li>
						<li>{this.props.language[1].verbs.plusquamperfekt[6]}</li>
					</ul>

					<ul>
						<li id="col_head">das Futur:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.futur[0]}</li>
						<li>{this.props.language[1].verbs.futur[1]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.futur[2]}</li>
						<li>{this.props.language[1].verbs.futur[3]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.futur[4]}</li>
						<li>{this.props.language[1].verbs.futur[5]}</li>
					</ul>

					<ul>
						<li></li>
						<li>{this.props.language[1].verbs.futur[6]}</li>
						<li>{this.props.language[1].verbs.futur[6]}</li>
					</ul>

					</div>


					</div>
					); 
			}
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
		} else {

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