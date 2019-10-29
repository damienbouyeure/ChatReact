import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from "./MessageItem";
import Card from 'react-bootstrap/Card';
import App from "../App";


class MessageList extends React.Component {

    render() {

        if (this.props.messages.length < 1) {
            return <p> pas de messages</p>
        }
        const items = this.props.messages.map((item, key) =>
            <div>
                <Card body>

                    <MessageItem content={item.text}/>

                </Card>
                < br/></div>
        );
        return items;
    }
}

export default MessageList;