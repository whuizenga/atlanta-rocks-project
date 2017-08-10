import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <Route exact path="/login" component={LoginScreen} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
