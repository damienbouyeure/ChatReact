import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";

import {addUser} from "../action";




const mapDispatchToProps = dispatch => {
    return {
        addUser: (username) => dispatch(addUser(username)),

    }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: {username: ""},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        const { match, location, history } = this.props;
        event.preventDefault();
        if (event.target.username.value.trim() != "") {
            this.props.addUser(this.state);
            this.setState({username: ''});
            event.target.username.value = "";
            this.props.history.push("/chat");
        }

    }



    render() {

        return <div >
            <form onSubmit={this.handleSubmit}>
                <InputGroup className=" container">
                    <FormControl placeholder="username" type="text" id="username" value={this.state.username.username} onChange={this.handleChange}/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary btn-light">Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>


        </div>;
    }
}


export default connect(null, mapDispatchToProps)(Login);


