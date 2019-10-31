import React from 'react';
import MessageItem from "./MessageItem";
import Card from 'react-bootstrap/Card';



class MessageList extends React.Component {


    componentDidMount() {
        if (this.props.messages.length >= 1) {
            this.scrollToBottom()
        }
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        let lastElement = this.props.messages.length - 1;
        var elmnt = document.getElementById("message_"+ lastElement);
        elmnt.scrollIntoView();
    }

    render() {

        if (this.props.messages.length < 1) {
            return (
            <Card body>
            <p className="text-center"> pas de messages</p>
            </Card> )
        }
        const items = this.props.messages.map((item, key) =>

            <div id={"message_"+key}>

                <Card body>

                    <p>@{item.username}</p>
                    <MessageItem content={item.text} />

                </Card>
                < br/>    </div>

        );
        return items;
    }
}

export default MessageList;