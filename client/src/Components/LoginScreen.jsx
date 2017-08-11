import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

class LoginScreen extends Component {

    render() {
        const LoginDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50vh;
            p{
                color: red;
                font-size: 15px;
            }
        `
        if (this.props.loggedIn){
            return <Redirect to={`/user/${this.props.username}`} />
        }

        return (
            <div>
                <h1>Please login or sign up</h1>
                <LoginDiv>
                {this.props.loginError ? <p>{this.props.loginError}</p> : null}
                <form onSubmit={this.props.handleLogin}>
                    <div>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" required/>  
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                     <input name="password" type="password" required/> 
                    </div>
                    <button>Log in</button>
                </form>
                </LoginDiv>
            </div>
        );
    }
}

export default LoginScreen;