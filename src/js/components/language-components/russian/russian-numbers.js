import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//fix the style
const RussianNumbers = (props) => (
    <div>				
		<h2 id="margin_top_bottom">Номера</h2>
		<div className="numberlist"> 
			<ul>
			    <li id="col_head">{props.language[2].numbers.card.name}</li>
			</ul>
			{props.language[2].numbers.card.nums.nom.map((num, i) => <li key={i}>{num}</li>)}
		</div>
		<div className="numberlist">
			<ul>
				<li id="col_head">{props.language[2].numbers.ord.name}</li>
			</ul>
			{props.language[2].numbers.ord.nums.nom.map((num, i) => <li key={i}>{num}</li>)}
		</div>
	</div>
);

function mapStateToProps(state) {
	return {
		language: state.languages
		//dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(RussianNumbers));
