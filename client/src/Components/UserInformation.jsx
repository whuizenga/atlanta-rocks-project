import React, { Component } from 'react';
import axios from 'axios';

class UserInformation extends Component {
    constructor(){
        super();
        this.state = {
            editFirstName: false,
            editLastName: false,
            username: "",
            firstName: "",
            lastName: "",
            joinDate: "",
            
        }
    }
    componentWillMount() {
        const userId = this.props.userId;

        axios.get(`/api/user/${userId}`).then((res) => {
            const newState = {...this.state};
            newState.firstName = res.data.firstName;
            newState.lastName = res.data.lastName;
            newState.joinData = res.data.created_date;
            newState.username = res.data.username;

            this.setState(newState);
        });

    }
    render() {
        return (
            <div>
                <p>username: {this.state.username}</p>
                <p>{`Name: ${this.state.firstName} ${this.state.lastName}`}</p>
                <p>Date joined app: {this.state.joinDate}</p>
            </div> 
        );
    }
}

export default UserInformation;