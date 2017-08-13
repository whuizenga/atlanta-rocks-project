import React, { Component } from 'react';
import axios from 'axios';

class UserInformation extends Component {
    constructor(){
        super();
        this.state = {
            editName: false,
            editPassword: false,
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
        axios.put("/api/user/updatepassword").then((res) =>{
            console.log(res);
        })}
    }
    render() {
        return (
            <div>
                <p>username: {this.state.admin ? `[ADMIN]:` : null}{this.state.username}</p>
                <p>{`Name: ${this.state.firstName} ${this.state.lastName}`}</p>
                <button onClick={this._toggleEditForm}>{this.state.editName ? "hide" : "edit"}</button>
                <form>
                    {this.state.editName ?  
                        <input name="firstName" type="text" placeholder={this.state.firstName}/>
                        : null}
                    {this.state.editName ?  
                        <input name="lastName" type="text" placeholder={this.state.lastName}/>
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