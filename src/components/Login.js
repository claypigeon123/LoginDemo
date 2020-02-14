import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const validUser = {
    _id: "123456",
    username: "aliki",
    password: "pizza"
}

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formUsername: "",
            formPassword: ""
        }
    }

    onChangeUsername = (e) => { this.setState({ formUsername: e.target.value }) }

    onChangePassword = (e) => { this.setState({ formPassword: e.target.value }) }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.formUsername === validUser.username && this.state.formPassword === validUser.password) {
            this.props.login(validUser);
        } else {
            window.alert("Fuck off");
        }

        this.setState({formUsername: "", formPassword: ""});
    }

    render() {
        if (this.props.activeUser._id === null) {
            return (
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="input" placeholder="Enter Username" value={this.state.formUsername} onChange={this.onChangeUsername} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password" value={this.state.formPassword} onChange={this.onChangePassword} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" variant="outline-danger">Login</Button>
                        </Form.Group>
                    </Form>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <p>Logged in as {this.props.activeUser.username}</p>
                    <Button variant="outline-danger" onClick={this.props.logout}>Click to logout</Button>
                </div>
            );
        }
    }
}

export default Login;