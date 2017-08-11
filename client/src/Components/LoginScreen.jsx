import React, { Component } from 'react';
import styled from 'styled-components';

class LoginScreen extends Component {
    constructor(){
        super();
        this.state ={
            userlogin:{
                username: "",
                password: "",
            },
        }
    }

    render() {
        const LoginDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50vh;
        `
        return (
            <div>
                <h1>Please login or sign up</h1>
                <LoginDiv>
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