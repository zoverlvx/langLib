import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const RussianVerbs = (props) => (
	<div>
	    <h2 id="margin_top_bottom">{props.language[2].verbs.name}</h2>
		<div className="list">
			<ul>
				<li id="col_head"></li>
				<li id="col_head">Инфинитив:</li>
				<li id="col_head">{props.language[2].verbs.imperfective.first_conjugation.infinitive}</li>
			</ul>
			<ul>
				<li id="col_head">Настоящее время:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[0]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[2]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[4]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.present[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Прошедшее время:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[0]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[2]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[4]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.past[5]}</li>
			</ul>
			<ul>
				<li id="col_head">Будущее время:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[0]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[2]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[4]}</li>
				<li>{props.language[2].verbs.imperfective.first_conjugation.future[5]}</li>
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

export default withRouter(connect(mapStateToProps)(RussianVerbs));