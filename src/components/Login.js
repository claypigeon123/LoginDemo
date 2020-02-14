import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const validUser = {
    _id: "123456",
    username: "user",
    password: "password"
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

        // Axios call to backend here; use response (however you set it up) instead of validUser

        // ˇ --- Wrap this in the Axios callback(s) --- ˇ
        if (this.state.formUsername === validUser.username && this.state.formPassword === validUser.password) {
            this.props.login(validUser);
        } else {
            window.alert("Invalid Username or Password");
        }
        this.setState({formUsername: "", formPassword: ""});
        // ^ --- Wrap this in the Axios callback(s) --- ^
    }

    render() {
        if (this.props.activeUser._id === null) {
            return (
                <div className="container my-5 border border-primary rounded p-3 bg-light">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label className="h4 text-primary">Username</Form.Label>
                            <Form.Control required type="input" placeholder="Enter Username" value={this.state.formUsername} onChange={this.onChangeUsername} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="h4 text-primary">Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password" value={this.state.formPassword} onChange={this.onChangePassword} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" variant="outline-primary">Login</Button>
                        </Form.Group>
                        <Form.Group>
                            <p className="small m-0">Username is "user"</p>
                            <p className="small m-0">Password is "password"</p>
                        </Form.Group>
                    </Form>
                </div>
            );
        } else {
            return (
                <div className="container my-5 border border-primary rounded p-3 bg-light">
                    <h4 className="text-primary">Logged in</h4>
                    <h6>ID: {this.props.activeUser._id}</h6>
                    <h6>Username: {this.props.activeUser.username}</h6>
                    <Button variant="outline-danger" onClick={this.props.logout}>Logout</Button>
                </div>
            );
        }
    }
}

export default Login;