import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const GermanVerbs = (props) => (
	<div>
		<h2 id="margin_top_bottom">{props.language[1].verbs.name}</h2>
		<div className="list">
			<ul>
				<li id="col_head"></li>
				<li id="col_head">Das Infinitiv: </li>
				<li id="col_head">{props.language[1].verbs.infinitive}</li>
			</ul>
			<ul>
				<li id="col_head">das Präsens:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens[0]}</li>
				<li>{props.language[1].verbs.praesens[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens[2]}</li>
				<li>{props.language[1].verbs.praesens[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens[4]}</li>
				<li>{props.language[1].verbs.praesens[5]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens[6]}</li>
				<li>{props.language[1].verbs.praesens[6]}</li>
			</ul>
			<ul>
				<li id="col_head">das Perfekt:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens_perfekt[0]}</li>
				<li>{props.language[1].verbs.praesens_perfekt[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens_perfekt[2]}</li>
				<li>{props.language[1].verbs.praesens_perfekt[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens_perfekt[4]}</li>
				<li>{props.language[1].verbs.praesens_perfekt[5]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praesens_perfekt[6]}</li>
				<li>{props.language[1].verbs.praesens_perfekt[6]}</li>
			</ul>
			<ul>
				<li id="col_head">das Präteritum:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[0]}</li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[2]}</li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[3]}</li>
			</ul>
            <ul>
				<li></li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[4]}</li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[5]}</li>
			</ul>
			<ul>
			    <li></li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[6]}</li>
				<li>{props.language[1].verbs.praeteritum_and_konjunktivII_praesens[6]}</li>
			</ul>
			<ul>
				<li id="col_head">das Plusquamperfekt:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.plusquamperfekt[0]}</li>
				<li>{props.language[1].verbs.plusquamperfekt[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.plusquamperfekt[2]}</li>
				<li>{props.language[1].verbs.plusquamperfekt[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.plusquamperfekt[4]}</li>
				<li>{props.language[1].verbs.plusquamperfekt[5]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.plusquamperfekt[6]}</li>
				<li>{props.language[1].verbs.plusquamperfekt[6]}</li>
			</ul>
			<ul>
				<li id="col_head">das Futur:</li>
				<li id="col_head"></li>
				<li id="col_head"></li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.futur[0]}</li>
				<li>{props.language[1].verbs.futur[1]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.futur[2]}</li>
				<li>{props.language[1].verbs.futur[3]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.futur[4]}</li>
				<li>{props.language[1].verbs.futur[5]}</li>
			</ul>
			<ul>
				<li></li>
				<li>{props.language[1].verbs.futur[6]}</li>
				<li>{props.language[1].verbs.futur[6]}</li>
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

export default withRouter(connect(mapStateToProps)(GermanVerbs));