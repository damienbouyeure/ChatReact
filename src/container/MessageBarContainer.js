import React from "react";
import MessageBar from "../components/MessageBar";
import {connect} from "react-redux";
import {addMessages} from "../action";





const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessages: (text) => dispatch(addMessages(text)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageBar);