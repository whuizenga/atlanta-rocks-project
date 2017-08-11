import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import LoginButton from './Components/Login';
import Homepage from './Components/Homepage.jsx';
import SearchPage from './Components/SearchPage.jsx';
import LoginScreen from './Components/LoginScreen.jsx';


class App extends Component {
  constructor(){
        super()
        this.state = {
            loggedIn: false,
        }
    }

  _handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    axios.get(`api/user/${username}/${password}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    const NavBar = styled.div`
      display: flex;
      justify-content: space-between;
    `

    return (
      <Router>
      <div>
      <div>
        <NavBar>
          <Link to="/">Home</Link>
          <LoginButton loggedIn = {this.state.loggedIn}/>
        </NavBar>
      </div>
      <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/login" render={routeProps => <LoginScreen {...routeProps} handleLogin={this._handleLogin}/>} />

      </div>
      </div>
      </Router>
    );
  }
}

export default App;
