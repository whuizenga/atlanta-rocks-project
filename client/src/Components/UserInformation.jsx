import React, { Component } from 'react';
import axios from 'axios';

class UserInformation extends Component {
    constructor(){
        super();
        this.state = {
            editName: false,
            username: "",
            firstName: "",
            lastName: "",
            joinDate: "",
            admin: false,
        }
    }
    componentWillMount() {
        const userId = this.props.userId;

        axios.get(`/api/user/${userId}`).then((res) => {
            const newState = {...this.state};
            newState.firstName = res.data.firstName;
            newState.lastName = res.data.lastName;
            newState.joinDate = res.data.created_date
            newState.username = res.data.username;
            newState.admin = res.data.admin;

            this.setState(newState);
        });

    }

    _toggleEditForm = () => {
        const newState = {...this.state};
        newState.editName = !this.state.editName;

        this.setState(newState);
    }
    render() {
        return (
            <div>
                <p>username: {this.state.admin ? `[ADMIN]:` : null}{this.state.username}</p>
                <p>{`Name: ${this.state.firstName} ${this.state.lastName}`}</p>
                <form>
                    {this.state.editName ?  
                        <input type="text" placeholder={this.state.firstName}/>
                        : null}
                    {this.state.editName ?  
                        <input type="text" placeholder={this.state.lastName}/>
                        : null}
                    {this.state.editName ?  
                        <button>update</button>
                        : null}
                </form>
                <button onClick={this._toggleEditForm}>{this.state.editName ? "hide" : "edit"}</button>
                <p>Date joined app: {this.state.joinDate}</p>
            </div> 
        );
    }
}

export default UserInformation;