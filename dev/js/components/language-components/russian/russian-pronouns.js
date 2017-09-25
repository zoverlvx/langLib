import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const RussianPronouns = (props) => (
	<div>			
		<h2 id="margin_top_bottom">{props.language[2].pronouns.name}</h2>							
		<div className="list">
			<ul>
				<li id="col_head">Именительный падеж:</li>
				<li id="col_head">единственное число</li>
				<li id="col_head">множественное число</li>
			</ul>
			<ul>
				<li>1st:</li>
				<li>{props.language[2].pronouns.nom[0]}</li>
				<li>{props.language[2].pronouns.nom[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.nom[2]}</li>
				<li>{props.language[2].pronouns.nom[3]}</li>
			</ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.nom[4]}</li>
				<li>{props.language[2].pronouns.nom[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Винительный падеж:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
			    <li>1st:</li>
				<li>{props.language[2].pronouns.acc_and_gen[0]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.acc_and_gen[2]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[3]}</li>
			</ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.acc_and_gen[4]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Родительный падеж:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li>1st:</li>
				<li>{props.language[2].pronouns.acc_and_gen[0]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.acc_and_gen[2]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[3]}</li>
			</ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.acc_and_gen[4]}</li>
				<li>{props.language[2].pronouns.acc_and_gen[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Дательный падеж:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li>1st:</li>
				<li>{props.language[2].pronouns.dat[0]}</li>
				<li>{props.language[2].pronouns.dat[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.dat[2]}</li>
				<li>{props.language[2].pronouns.dat[3]}</li>
			</ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.dat[4]}</li>
				<li>{props.language[2].pronouns.dat[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Местный падеж:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li>1st:</li>
				<li>{props.language[2].pronouns.loc[0]}</li>
				<li>{props.language[2].pronouns.loc[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.loc[2]}</li>
				<li>{props.language[2].pronouns.loc[3]}</li>
			</ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.loc[4]}</li>
				<li>{props.language[2].pronouns.loc[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Творительный падеж:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li>1st:</li>
				<li>{props.language[2].pronouns.ins[0]}</li>
				<li>{props.language[2].pronouns.ins[1]}</li>
			</ul>
			<ul>
				<li>2nd:</li>
				<li>{props.language[2].pronouns.ins[2]}</li>
				<li>{props.language[2].pronouns.ins[3]}</li>
		    </ul>
			<ul>
				<li>3rd:</li>
				<li>{props.language[2].pronouns.ins[4]}</li>
				<li>{props.language[2].pronouns.ins[5]}</li>
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

export default withRouter(connect(mapStateToProps)(RussianPronouns));