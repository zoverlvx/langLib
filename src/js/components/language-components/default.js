import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const Default = () => {
        return (
        <div id="margin_top">
            <h2>Please, select a language.</h2>
        </div>
                );
}

function mapStateToProps(state) {
        return {
                language: state.languages
        }
}

export default withRouter(connect(mapStateToProps)(Default));
