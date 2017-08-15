import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Login extends Component {
    render() {
        const LoginWrapper = styled.div`
            display: flex;
            flex-direction: row;
            p {
                margin: 0;
                margin-right: 25px;
            }
            a {
                margin-right: 15px;
            }
        `
        const loggedIn = this.props.loggedIn;
        return (
            <LoginWrapper>
                {loggedIn ? <p> Welcome back, <Link to={`/user/${this.props.username}`}> {this.props.firstName} </Link> </p> : null }

                <div onClick={this.props.handleLogout}>
                    {loggedIn ? <Link to="/">Log out</Link> : <Link to="/login">Log in</Link>}
                </div>
            </LoginWrapper>
        );
    }
}

export default Login;