import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
    constructor(){
        super();
        this.state ={
            username: '',
        }
    }
    componentWillMount(){
        axios.get(`/api/user/${this.props.comment.posterId}/username`).then((res) => {
            const newState = {...this.state};
            newState.username = res.data;
            this.setState(newState);
        })
}
    render() {
        return (
            <div>
                <p>@{this.state.username} says:</p>
                <p>{this.props.comment.comment}</p>
            </div>
        );
    }
}

export default Comment;