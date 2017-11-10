import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

//fix the style
const GermanNumbers = (props) => (
    <div>
		<h2 id="margin_top_bottom">Die Nummer</h2>
			<div className="numberlist">
				<ul>
			    	<li id="col_head">{props.language[1].numbers.card.name}</li>
				</ul>
				{props.language[1].numbers.card.nums.map((num, i) => <li key={i}>{num}</li>)}
			</div>

			<div className="numberlist">
				<ul>
					<li id="col_head">{props.language[1].numbers.ord.name}</li>
				</ul>
				{props.language[1].numbers.ord.nums.map((num, i) => <li key={i}>{num}</li>)}
			</div>
	</div>

);

function mapStateToProps(state) {
	return {
		language: state.languages
		//dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(GermanNumbers));
