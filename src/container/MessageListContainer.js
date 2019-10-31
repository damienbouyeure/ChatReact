import React from "react";
import MessageList from "../components/MessageList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    console.log(state)
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageList);