import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const FrenchVerbs = (props) => {
    const lImparfait = "L'Imparfait";
    return (

        <div className="language_detail">

	        <h2 id="margin_top_bottom">Les verbes</h2>

		        <div className="list">
			        <ul>
				        <li id="col_head"></li>
				        <li id="col_head">{props.language[0].verbs.er_conjugation.infinitive} </li>
				        <li id="col_head">parler</li>
			        </ul>

			        <ul>
				        <li id="col_head">Le présent:</li>
				        <li id="col_head"></li>
				        <li id="col_head"></li>
			        </ul>

			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.present[0]}</li>
				        <li>{props.language[0].verbs.er_conjugation.present[1]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.present[2]}</li>
				        <li>{props.language[0].verbs.er_conjugation.present[3]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.present[4]}</li>
				        <li>{props.language[0].verbs.er_conjugation.present[5]}</li>
			        </ul>

			        <ul>
				        <li id="col_head">Le passé composé:</li>
				        <li id="col_head"></li>
				        <li id="col_head"></li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.passe_compose[0]}</li>
				        <li>{props.language[0].verbs.er_conjugation.passe_compose[1]}</li>
			        </ul>
			        <ul>
			    	    <li></li>
			    	    <li>{props.language[0].verbs.er_conjugation.passe_compose[2]}</li>
			    	    <li>{props.language[0].verbs.er_conjugation.passe_compose[3]}</li>
		    	    </ul>
		    	    <ul>
			    	    <li></li>
			    	    <li>{props.language[0].verbs.er_conjugation.passe_compose[4]}</li>
			    	    <li>{props.language[0].verbs.er_conjugation.passe_compose[5]}</li>
		    	    </ul>


			        <ul>
				        <li id="col_head">{lImparfait}:</li>
				        <li id="col_head"></li>
				        <li id="col_head"></li>
			        </ul>

			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[0]}</li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[1]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[2]}</li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[3]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[4]}</li>
				        <li>{props.language[0].verbs.er_conjugation.imparfait[5]}</li>
			        </ul>

			        <ul>
				        <li id="col_head">Le futur simple:</li>
				        <li id="col_head"></li>
				        <li id="col_head"></li>
			        </ul>

			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[0]}</li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[1]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[2]}</li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[3]}</li>
			        </ul>
			        <ul>
				        <li></li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[4]}</li>
				        <li>{props.language[0].verbs.er_conjugation.futur_simple[5]}</li>
			        </ul>


		        </div>

        </div>

    );

}

function mapStateToProps(state) {
	return {
		language: state.languages
		//dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(FrenchVerbs));
