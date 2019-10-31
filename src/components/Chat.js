import React from 'react';
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import './chat.css';
import MessageListContainer from "../container/MessageListContainer";
import MessageBarContainer from "../container/MessageBarContainer";



class Chat extends React.Component {

    render() {

        return (
            <div className="container h-100">
                <MessageListContainer messages={this.props.text}/>
                <MessageBarContainer username={this.props.username}/>
            </div>
        )


    }
}

export default Chat;