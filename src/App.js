import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);

    // App level state keeps track of current user
    this.state = {
      activeUser: {
        _id: null,
        username: null
      }
    }
  }

  componentDidMount() {
    // Possible browser cookie check to see if someone's already logged in

    // Then set the activeUser state (or leave it unchanged) accordingly
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
    // - App level state object 'currentUser' passed as a prop to components that make use of it
    //
    // - Login and Logout functions passed as props to the Login component,
    //   this way we can change the App level state inside App's children
    return (
      <Router>
        <Login activeUser={this.state.activeUser} login={this.login} logout={this.logout} />

        <Route exact path="/" render={(props) => <Home {...props} activeUser={this.state.activeUser} />} />
      </Router>
    )
  }
}

export default App;