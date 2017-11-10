import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const GermanPronouns = (props) => (
    <div>
		<h2 id="margin_top_bottom">{props.language[1].pronouns.name}</h2>
			<div className="list">
				<ul>
					<li id="col_head">Die nominativen Pronomen:</li>
					<li id="col_head">Singular</li>
					<li id="col_head">Plural</li>
				</ul>
				<ul>
					<li>1st:</li>
					<li>{props.language[1].pronouns.nom[0]}</li>
					<li>{props.language[1].pronouns.nom[1]}</li>
				</ul>
				<ul>
					<li>2nd fam:</li>
					<li>{props.language[1].pronouns.nom[2]}</li>
					<li>{props.language[1].pronouns.nom[3]}</li>
				</ul>
				<ul>
					<li>2nd form:</li>
					<li>{props.language[1].pronouns.nom[4]}</li>
					<li>{props.language[1].pronouns.nom[5]}</li>
				</ul>
				<ul>
					<li>3rd:</li>
					<li>{props.language[1].pronouns.nom[6]}</li>
					<li>{props.language[1].pronouns.nom[7]}</li>
				</ul>
				
				<ul>
					<li id="col_head">Die akkusativen Pronomen:</li>
					<li id="col_head"></li>
					<li id="col_head"></li>
				</ul>
				<ul>
					<li>1st:</li>
					<li>{props.language[1].pronouns.acc[0]}</li>
					<li>{props.language[1].pronouns.acc[1]}</li>
				</ul>
				<ul>
					<li>2nd fam:</li>
					<li>{props.language[1].pronouns.acc[2]}</li>
					<li>{props.language[1].pronouns.acc[3]}</li>
				</ul>
				<ul>
					<li>2nd form:</li>
					<li>{props.language[1].pronouns.acc[4]}</li>
					<li>{props.language[1].pronouns.acc[5]}</li>
				</ul>
				<ul>
					<li>3rd:</li>
					<li>{props.language[1].pronouns.acc[6]}</li>
					<li>{props.language[1].pronouns.acc[7]}</li>
				</ul>

				<ul>
					<li id="col_head">Die dativen Pronomen:</li>
					<li id="col_head"></li>
					<li id="col_head"></li>
				</ul>
				<ul>
					<li>1st:</li>
					<li>{props.language[1].pronouns.dat[0]}</li>
					<li>{props.language[1].pronouns.dat[1]}</li>
				</ul>
				<ul>
					<li>2nd fam:</li>
					<li>{props.language[1].pronouns.dat[2]}</li>
					<li>{props.language[1].pronouns.dat[3]}</li>
				</ul>
				<ul>
					<li>2nd form:</li>
					<li>{props.language[1].pronouns.dat[4]}</li>
					<li>{props.language[1].pronouns.dat[5]}</li>
				</ul>
				<ul>
					<li>3rd:</li>
					<li>{props.language[1].pronouns.dat[6]}</li>
					<li>{props.language[1].pronouns.dat[7]}</li>
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
				{props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Akkusativ</li>
				<li>m:</li>
				{props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>n:</li>
				{props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Dativ</li>
				<li>m/n:</li>
				{props.language[1].pronouns.gen.em_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f:</li>
				{props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>pl:</li>
				{props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Genitiv</li>
				<li>m/n:</li>
				{props.language[1].pronouns.gen.es_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
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
				{props.language[1].pronouns.gen.no_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Akkusativ</li>
				<li>m:</li>
				{props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>n:</li>
				{props.language[1].pronouns.gen.neut_independent.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.e_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Dativ</li>
				<li>m/n:</li>
				{props.language[1].pronouns.gen.em_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f:</li>
				{props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>pl:</li>
				{props.language[1].pronouns.gen.en_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li>Genitiv</li>
				<li>m/n:</li>
				{props.language[1].pronouns.gen.es_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
			<ul>
				<li></li>
				<li>f/pl:</li>
				{props.language[1].pronouns.gen.er_ending.map((pronoun, i) => <li key={i}>{pronoun}</li>)}
			</ul>
		</div>

	</div>
);

function mapStateToProps(state) {
	return {
		language: state.languages
		//dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(GermanPronouns));