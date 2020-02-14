import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeUser: {
        _id: null,
        username: null
      }
    }
  }

  login = (user) => {
    this.setState({
      activeUser: {
        _id: user._id,
        username: user.username
      }
    });
  }

  logout = () => {
    this.setState({
      activeUser: {
        _id: null,
        username: null
      }
    });
  }

  render() {
    return (
      <Router>
        <Login activeUser={this.state.activeUser} login={this.login} logout={this.logout} />

        <Route exact path="/" render={(props) => <Home {...props} activeUser={this.state.activeUser} />} />
      </Router>
    )
  }
}

export default App;