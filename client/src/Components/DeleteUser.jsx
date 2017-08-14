import React, { Component } from 'react';

class DeleteUser extends Component {
    constructor(){
        super();
        this.state ={
            showDeleteButton: false,
            executeDelete: false,
        }
    }
    _toggleDelete = () => {
        const newState = {...this.state};
        newState.showDeleteButton = !this.state.showDeleteButton;
        this.setState(newState);
    }
    _confirmDelete = () => {
        if(!this.state.executeDelete){
            const newState = {...this.state};
            newState.executeDelete = !this.state.executeDelete;
            this.setState(newState);
        } else {
            this.props.deleteUser();
        }
    }
    render() {
        return (
            <div>
                <p>Be careful down here!</p>
                <p>If you want to remove your account you can do so here</p>
                <button onClick={this._toggleDelete}>{this.state.showDeleteButton ? "nevermind!":"delete my account"}</button>
                {this.state.showDeleteButton ? 
                    <p>Are you sure that you want to delete your account?</p>
                    : null}
                {this.state.showDeleteButton ? 
                    <button onClick={this._confirmDelete}>{this.state.executeDelete ? "Yes! Delete my account!" : "Delete my account"}</button>
                    : null}
            </div>
        );
    }
}

export default DeleteUser;