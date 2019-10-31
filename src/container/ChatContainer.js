import React from 'react';
import {connect} from "react-redux";
import Chat from "../components/Chat";

const mapStateToProps = (state) => {
    return {

        username: state.username
    }
}

class ChatContainer extends React.Component {

    constructor(props) {
        super(props);
        if (props.username.length < 1) {
            props.history.push("/");
        }
    }

    render() {
        return (<Chat/>)

    }
}

export default connect(mapStateToProps)(ChatContainer);