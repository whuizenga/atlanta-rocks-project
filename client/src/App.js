import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { setAxiosHeaders, setAxiosDefaults, deleteSession } from './util.js';

import LoginButton from './Components/Login';
import Homepage from './Components/Homepage.jsx';
import SearchPage from './Components/SearchPage.jsx';
import LoginScreen from './Components/LoginScreen.jsx';
import SignupScreen from './Components/SignupScreen.jsx';
import UserPage from './Components/UserPage.jsx';
import ShowWall from './Components/ShowWall.jsx';
import ShowDifficulty from './Components/ShowDifficulty.jsx';
import ShowRoute from './Components/ShowRoute';

class App extends Component {
  constructor(){
        super()
        this.state = {
            accountCreationSuccess: false,
            loggedIn: false,
            userId: "",
            username: "",
            firstName: "",
            lastName: "",
            loginError: "",
            routeSearch: "",
        }
    }

  componentWillMount(){
    setAxiosDefaults();
    if (localStorage.getItem("client")){
      axios.get('/api/user/validate_token').then((res) => {
        if (res.data.error){
          console.log(res.data.error);
          localStorage.clear();
        } else {
          this.setState({
            loggedIn: true,
            userId: localStorage.getItem("uid")
          });
        }
      });
    }
  }

  _handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    axios.post(`/api/user/sign_in/`, {email, password})
      .then((res) => {
        
        const newState = {...this.state};

        if(res.data.username){
          setAxiosHeaders(res.headers);
          newState.userId = res.data._id;
          newState.loggedIn = true;
          newState.username = res.data.username;
          newState.firstName = res.data.firstName;
          newState.lastName = res.data.lastName;
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

  _handleSignup = (email, username, password) => {
    axios.post('/api/user/', {email, username, password})
      .then((res) => {
          const newState = {...this.state};
          newState.accountCreationSuccess = true;

          this.setState(newState);
        })
  }
  
  _handleDeleteUser = () => {
    axios.get(`/api/user/${this.state.userId}/delete`).then(() => {
      this._handleLogout();
    }).catch((err) => {
      console.log("error sending delete");
      console.log(err);
    })
  }

  _handleLogout = (event) => {
      axios.delete('api/user/sign_out').then((res) => {
        deleteSession();
        const newState = {...this.state};
        newState.username = "";
        newState.firstName = "";
        newState.lastName = "";
        newState.loginError = "";
        newState.loggedIn = false;

        this.setState(newState);
      });
  }

  _updateRouteSearch = (searchParam) => {
    const newState = {...this.state};
    newState.routeSearch = searchParam;
    this.setState(newState);
  }

  _updateUserName = (firstName, lastName) => {
    axios.put(`/api/user/${this.state.userId}/name`, {firstName, lastName}).then((res) => {
      const newState = {...this.state};
      newState.firstName = firstName;
      newState.lastName = lastName;
      this.setState(newState);
    })
  }
  render() {
    const NavBar = styled.div`
      display: flex;
      justify-content: space-between;
      color: white;
      background-color:black;
      height: 5vh;
      align-items: center;
      padding-left: 15px;
      a {
        text-decoration: none;
        color: #7448A1;
      }
      a:hover{
        color: #59387C;
      }
    `

    return (
      <Router>
      <div>
      <div>
        <NavBar>
          <Link to="/">Home</Link>
          <LoginButton loggedIn = {this.state.loggedIn}  handleLogout={this._handleLogout} firstName={this.state.firstName} username={this.state.username}/>
        </NavBar>
      </div>
      <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" render={routeProps => 
              <SearchPage {...routeProps}
                routeSearch={this.state.routeSeach}
                updateRouteSearch = {this._updateRouteSearch}
                 />} />
          <Route exact path="/login" render={routeProps => 
              <LoginScreen {...routeProps} 
                handleLogin={this._handleLogin}
                loginError={this.state.loginError}
                loggedIn={this.state.loggedIn}
                username={this.state.username}
                />} />
          <Route exact path="/signup" render={routeProps => 
              <SignupScreen {...routeProps}
                handleSignup={this._handleSignup}
                loggedIn={this.state.loggedIn}
                accountCreated={this.state.accountCreationSuccess}
                />} />
          <Route exact path="/user/:username" render={routeProps => 
              <UserPage {...routeProps}
                loggedIn = {this.state.loggedIn}
                userId = {this.state.userId}
                deleteUser = {this._handleDeleteUser}
                updateName = {this._updateUserName}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                />} /> 
          <Route exact path="/wall/:wallId" render={routeProps => 
              <ShowWall {...routeProps}
                routeSearch = {this.state.routeSearch}
                />} />
          <Route exact path="/difficulty/:diffId" render={routeProps =>
              <ShowDifficulty {...routeProps}
                routeSearch = {this.state.routeSearch}
                />} />
          <Route exact path="/route/:routeId" render={routeProps => 
              <ShowRoute {...routeProps}
                userId = {this.state.userId}
                />} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
