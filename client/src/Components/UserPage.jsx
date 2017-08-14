import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import UserInformation from './UserInformation';
import DeleteUser from './DeleteUser';

class UserPage extends Component {
    render() {
        if (!this.props.loggedIn){
            return <Redirect to={`/`} />
        } else {
        return (
            <div>
                <UserInformation 
                    userId={this.props.userId}
                    updateName={this.props.updateName}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName} />
                <br />
                <Link to="/search">Find a route</Link>
                <br />
                component that shows latest climbs
                <br />
                component that shows latest notes
                <br />
                <DeleteUser deleteUser={this.props.deleteUser}/>
            </div>
        );}
    }
}

export default UserPage;