import React from 'react';
import MessageList from "./MessageList";

import './chat.css';
import App from "../App";
import MessageBar from "./MessageBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return { text: state.messages}
}


class Chat extends React.Component {
    constructor(props) {
        super(props);



    }



    render() {

        return (
            <div className="container h-100">
                <MessageList messages={this.props.text}/>
                <MessageBar />


            </div>
        )


    }
}

export default connect(mapStateToProps)(Chat);