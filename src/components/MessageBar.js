import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import {connect} from  "react-redux";
import {addMessages} from "../action";
import App from "../App";
import MessageList from "./MessageList";



const mapDispatchToProps = dispatch => {
    return {
        addMessages: (text) => dispatch(addMessages(text)),

    }
}

class MessageBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text:  {text: ""},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    this.setState({text: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        if(event.target.text.value != "") {


           this.props.addMessages(this.state);
            this.setState({text: ''});
            event.target.text.value = "";
        }

    }


    render() {

        return            <div className="fixed-bottom">
            <form  onSubmit={this.handleSubmit}>
            <InputGroup className="fixed-bottom container">
                <FormControl    type="text"  id="text"  value={this.state.text.text}  onChange={this.handleChange}/>
                <InputGroup.Append>
                    <Button variant="outline-secondary btn-light"  >Submit</Button>
                </InputGroup.Append>
            </InputGroup>
            </form>



        </div>;
    }
}

export default connect(null, mapDispatchToProps)(MessageBar);