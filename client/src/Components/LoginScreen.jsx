import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

class LoginScreen extends Component {

    render() {
        const LoginDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 95vh;
            background-image: url("https://s-media-cache-ak0.pinimg.com/originals/45/8b/7c/458b7c24586e8a9bbe31e8f20722bb04.jpg");
            background-repeat: no-repeat;
            background-attachment: fill;
            background-position: center;
            background-size: cover;
            p{
                color: red;
                font-size: 15px;
            }
            a{
                text-decoration: none;
            }
            a:hover {
                color: red;
            }
        `

        const FormWrapper = styled.div`
            text-align: right;
            opacity: 1;
        `
        const ButtonWrapper = styled.div`
            text-align: center;
            margin: 15px;
        `
        const LoginWrapper = styled.div`
            background-color: white;
            opacity: 0.7;
            padding: 25px;
            border-radius: 15px;

        `
        if (this.props.loggedIn){
            return <Redirect to={`/userprofile`} />
        }

        return (
            <div>
                <LoginDiv>
                <LoginWrapper>
                    <h1>login or <Link to="/signup">sign up</Link></h1>
                    {this.props.loginError ? <p>{this.props.loginError}</p> : null}
                    <form onSubmit={this.props.handleLogin}>
                        <FormWrapper>
                        <div className="userName">
                            <label htmlFor="email">Email: </label>
                            <input name="email" type="text" required/>  
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password: </label>
                            <input name="password" type="password" required/> 
                        </div>
                        </FormWrapper>
                        <ButtonWrapper><button>Log in</button></ButtonWrapper>
                    </form>
                </LoginWrapper>
                </LoginDiv>
            </div>
        );
    }
}

export default LoginScreen;