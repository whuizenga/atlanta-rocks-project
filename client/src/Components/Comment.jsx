import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
        const CommentWrapper = styled.div`
            background-color: white;
            border-radius: 15px;
            padding: 15px;
            p{
                margin: 0;
                display: inline;
            }
        `
        const UsernameSytle = styled.p`
            font-weight: bold;
        `
        return (
            <CommentWrapper>
                <UsernameSytle>@{this.state.username}:</UsernameSytle>
                <p>{this.props.comment.comment}</p>
            </CommentWrapper>
        );
    }
}

export default Comment;