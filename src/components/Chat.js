import React from 'react';
import MessageList from "./MessageList";
import ScrollToBottom from 'react-scroll-to-bottom';
import './chat.css';
import App from "../App";
import MessageBar from "./MessageBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        text: state.messages,
        username: state.username
    }
}


class Chat extends React.Component {
    constructor(props) {
        super(props);
        if (props.username.length < 1) {
            props.history.push("/");
        }


    }


    render() {

        return (
            <div className="container h-100">

                    <MessageList messages={this.props.text}/>

                <MessageBar username={this.props.username}/>


            </div>
        )


    }
}

export default connect(mapStateToProps)(Chat);