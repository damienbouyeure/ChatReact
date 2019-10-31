import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import {object} from "prop-types";
import ws from "../service/WebSocket";




class MessageBar extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            message: ""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (event.target.message.value.trim() != "") {

            ws.send(JSON.stringify(this.props.addMessages(this.state.message, this.props.username[0].username)));
            this.setState({message: ''});
            event.target.message.value = "";
        }

    }


    render() {

        return <div className="fixed-bottom">
            <form onSubmit={this.handleSubmit}>
                <InputGroup className="fixed-bottom container">
                    <FormControl type="text" id="message" value={this.state.message} onChange={this.handleChange}/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary btn-light">Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </div>;
    }
}

export default MessageBar;