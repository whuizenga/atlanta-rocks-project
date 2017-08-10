import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginButton from './Components/Login';
import Homepage from './Components/Homepage.jsx';
import SearchPage from './Components/SearchPage.jsx';


class App extends Component {
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
          <LoginButton />
        </NavBar>
      </div>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
