import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const FrenchNumbers = (props) => (
    <div className="language_detail">
	    <h2 id="margin_top_bottom">Les nombres</h2>
		    <div className="numberlist">
			    <ul>
			        <li id="col_head">{props.language[0].numbers.card.name}</li>
			    </ul>
		        {props.language[0].numbers.card.nums.map((num, i) => <li key={i}>{num}</li>)}
	        </div>

	        <div className="numberlist">
		        <ul>
			        <li id="col_head">{props.language[0].numbers.ord.name}</li>
		        </ul>
		        {props.language[0].numbers.ord.nums.map((num, i) => <li key={i}>{num}</li>)}
	        </div> 
    </div>
);

function mapStateToProps(state) {
	return {
		language: state.languages
	}
}

export default withRouter(connect(mapStateToProps)(FrenchNumbers));
