import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginButton from './Components/Login';
import Homepage from './Components/Homepage.jsx';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <LoginButton />
        </nav>
      </div>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
