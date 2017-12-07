import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

import UserInformation from './UserInformation';
import DeleteUser from './DeleteUser';

class UserPage extends Component {
    render() {
        const FindRouteButton = styled.div`
            display: flex;
            justify-content: center;
            a {
                font-size: 35px;
                border-radius: 20px;
                text-decoration: none;
                background-color: red;
                padding: 5px;
                color: white;
                text-align: center;
                text-decoration: none;
            }
            a:hover {
                background-color: darkred;
            }
        `
        
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
                <FindRouteButton><Link to="/search">find a route</Link></FindRouteButton>
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