import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import UserInformation from './UserInformation';

class UserPage extends Component {
    render() {
        if (!this.props.loggedIn){
            return <Redirect to={`/`} />
        } else {
        return (
            <div>
                <UserInformation userId={this.props.userId} />
                <br />
                <Link to="/search">Find a route</Link>
                <br />
                component that shows latest climbs
                <br />
                component that shows latest notes
                <br />
                A place to delete your account.
            </div>
        );}
    }
}

export default UserPage;