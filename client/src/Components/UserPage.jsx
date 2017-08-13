import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserPage extends Component {
    render() {
        if (!this.props.loggedIn){
            return <Redirect to={`/`} />
        } else {
        return (
            <div>
                component that shows user information
                <br />
                button that takes me to search
                <br />
                component that shows latest climbs
                <br />
                component that shows latest notes
            </div>
        );}
    }
}

export default UserPage;