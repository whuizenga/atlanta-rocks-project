import React, { Component } from 'react';

class SignupScreen extends Component {
    _handleSignUp = (event) => {
        event.preventDefault();

        console.log(event.target.username.value);
        console.log(event.target.password.value);
        console.log(event.target.passwordConfirm.value);
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