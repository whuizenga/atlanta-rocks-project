import React, { Component } from 'react';
import styled from 'styled-components';

import Comment from './Comment.jsx';

class CommentsList extends Component {
    render() {
        const CommentsDiv = styled.div`
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        `

        return (
            <CommentsDiv>
                <p>Comments on this route</p>
                {this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />
                })}
            </CommentsDiv> 
        );
    }
}

export default CommentsList;