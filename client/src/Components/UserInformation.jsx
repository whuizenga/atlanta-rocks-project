import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class UserInformation extends Component {
    constructor(){
        super();
        this.state = {
            editName: false,
            editPassword: false,
            userId: "",
            username: "",
            firstName: "",
            lastName: "",
            joinDate: "",
            admin: false,
            updatePasswordError: "",
        }
    }
    componentWillMount() {
        const userId = this.props.userId;

        axios.get(`/api/user/${userId}`).then((res) => {
            console.log(res.data);
            const newState = {...this.state};
            newState.firstName = res.data.firstName;
            newState.lastName = res.data.lastName;
            newState.joinDate = res.data.joinDate;
            newState.username = res.data.username;
            newState.admin = res.data.admin;
            newState.userId = userId;

            this.setState(newState);
        });

    }

    _toggleEditForm = () => {
        const newState = {...this.state};
        newState.editName = !this.state.editName;

        this.setState(newState);
    }
    _togglePasswordForm = () => {
        const newState = {...this.state};
        newState.editPassword = !this.state.editPassword;

        this.setState(newState);
    }
    _updatePassword = (event) => {
        event.preventDefault();

        const oldPassword = event.target.oldPassword.value;
        const newPassword = event.target.newPassword.value;
        const newPasswordConfirm = event.target.newPasswordConfirm.value;

        if (!(newPassword === newPasswordConfirm)){
            console.log("passwords do not match");
            const newState = {...this.state};
            newState.updatePasswordError = "passwords do not match"
            this.setState(newState);
        } else {
        axios.put(`/api/user/${this.state.userId}/password/`, {oldPassword, newPassword}).then((res) =>{
            const newState = {...this.state};
            newState.updatePasswordError = res.data;
            this.setState(newState);
        })}
    }

    _updateName = (event) => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;

        this.props.updateName(firstName, lastName);

        const newState ={...this.state};
        newState.editName = false;
        this.setState(newState); 
    }
    render() {

        const StyledUsername = styled.div`
            font-size: 30px,
            color: red;
        `;

        return (
            <div>
                <StyledUsername><p>username: {this.state.admin ? `[ADMIN]:` : null}{this.state.username}</p></StyledUsername>
                {this.state.firstName && this.state.lastName ? <p>{`Name: ${this.state.firstName} ${this.state.lastName}`}</p> : <p>I'm sorry I don't know your name. Please enter it below.</p>}
                <button onClick={this._toggleEditForm}>{this.state.editName ? "hide" : "edit"}</button>
                <form onSubmit={this._updateName}>
                    {this.state.editName ?  
                        <input name="firstName" type="text" placeholder={this.props.firstName}/>
                        : null}
                    {this.state.editName ?  
                        <input name="lastName" type="text" placeholder={this.props.lastName}/>
                        : null}
                    {this.state.editName ?  
                        <button>update</button>
                        : null}
                </form>
                <p>Date joined app: {this.state.joinDate}</p>
                <button onClick={this._togglePasswordForm}>{this.state.editPassword ? "hide":"change password"}</button>
                <form onSubmit={this._updatePassword}>
                    {this.state.editPassword ?  
                        <input type="password" placeholder="old password" name="oldPassword" required/>
                        : null}
                    {this.state.editPassword ?  
                        <input type="password" placeholder="new password" name="newPassword" required/>
                        : null}
                    {this.state.editPassword ?  
                        <input type="password" placeholder="confirm new password" name="newPasswordConfirm" required/>
                        : null}
                    {this.state.editPassword ?  
                        <button>update</button>
                        : null}
                </form>
                {this.state.updatePasswordError ? this.state.updatePasswordError : null}
            </div> 
        );
    }
}

export default UserInformation;