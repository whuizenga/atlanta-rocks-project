import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

class SignupScreen extends Component {
    constructor() {
        super();
        
        this.state={
            doPasswordsMatch: true,
        }
    }
    _handlePasswordConfirm = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;

        if(password !== passwordConfirm){
            this.setState({doPasswordsMatch: false})
        } else {
            this.props.handleSignup(email, username, password);
        }    
    }
    render() {
        const SigninDiv = styled.div`
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

        if(this.props.loggedIn){
            return <Redirect to={`/user/${this.props.username}`} />
        } else {
        return (
            <SigninDiv>
                <LoginWrapper>
                <FormWrapper>
                <ButtonWrapper>{this.props.accountCreated ? <p>Account Created</p> : null }</ButtonWrapper>
                <ButtonWrapper>{this.state.doPasswordsMatch ? null : <p>passwords don't match</p>}</ButtonWrapper>
                    <form onSubmit={this._handlePasswordConfirm}>
                        <div>
                            <label htmlFor="username">Username: </label>
                            <input name="username" type="text" placeholder="username" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input name="email" type="email" placeholder="email" required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input name="password" type="password" min="8" required/>
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">Confirm password:</label>
                            <input name="passwordConfirm" type="password" min="8" required/>
                        </div>
                        <ButtonWrapper><button>Sign up</button></ButtonWrapper>
                    </form>
                </FormWrapper>
                </LoginWrapper>
            </SigninDiv>
        );
    }}
}

export default SignupScreen;