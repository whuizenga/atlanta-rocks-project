import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div onClick={this.props.handleLogout}>
                {loggedIn ? <Link to="/">Log out</Link> : <Link to="/login">Log in</Link>}
            </div>
        );
    }
}

export default Login;