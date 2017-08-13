import React, { Component } from 'react';

class UserInformation extends Component {
    constructor(){
        super();
        this.state = {
            editFirstName: false,
            editLastName: false,
        }
    }
    componentWillMount() {
        console.log("component will mount")
    }
    render() {
        return (
            <div>
                This is where your user info goes.
            </div>
        );
    }
}

export default UserInformation;