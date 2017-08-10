import React, { Component } from 'react';

class LoginScreen extends Component {
    render() {
        return (
            <div>
                <h1>Please login or sign up</h1>
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="passwor" />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginScreen;