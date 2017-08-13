import React, { Component } from 'react';

class SignupScreen extends Component {
    _handleSignUp = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;

        console.log(username);
        console.log(password);
        console.log(passwordConfirm);
    }
    render() {
        return (
            <div>
                <form onSubmit={this._handleSignUp}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input name="username" type="text" placeholder="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input name="password" type="password"/>
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm password:</label>
                        <input name="passwordConfirm" type="password"/>
                    </div>
                    <button>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignupScreen;