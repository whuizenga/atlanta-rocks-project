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
            username: "",
            firstName: "",
            loginError: "",
        }
    }

  _handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    axios.get(`/api/user/login/${username}/${password}`)
      .then((res) => {
        
        const newState = {...this.state};

        if(res.data.username){
          newState.loggedIn = true;
          newState.username = res.data.username;
          newState.firstName = res.data.firstName;
          newState.loginError = "";
        } else {
          newState.loginError = res.data;
        };
        this.setState(newState);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  _handleLogout = (event) => {
      const newState = {...this.state};
      newState.username = "";
      newState.firstName = "";
      newState.loginError = "";
      newState.loggedIn = false;

      this.setState(newState);
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
          <LoginButton loggedIn = {this.state.loggedIn}  handleLogout={this._handleLogout}/>
        </NavBar>
      </div>
      <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/login" render={routeProps => 
              <LoginScreen {...routeProps} 
                handleLogin={this._handleLogin}
                loginError={this.state.loginError}/>} />

      </div>
      </div>
      </Router>
    );
  }
}

export default App;
