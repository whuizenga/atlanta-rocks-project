import React, { Component } from 'react';
import axios from 'axios';

class SignupScreen extends Component {
    constructor() {
        super();
        
        this.state={
            doPasswordsMatch: true,
        }
    }
    _handleSignUp = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;

        if(password !== passwordConfirm){
            this.setState({doPasswordsMatch: false})
        } else {

        }

        
    }
    render() {
        return (
            <div>
            {this.state.doPasswordsMatch ? null : <p>passwords don't match</p>}
                <form onSubmit={this._handleSignUp}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input name="username" type="text" placeholder="username" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input name="password" type="password" required/>
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm password:</label>
                        <input name="passwordConfirm" type="password" required/>
                    </div>
                    <button>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignupScreen;