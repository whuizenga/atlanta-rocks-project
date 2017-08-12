import React, { Component } from 'react';

class SignupScreen extends Component {
    render() {
        return (
            <div>
                <form>
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