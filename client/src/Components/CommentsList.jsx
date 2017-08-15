import React, { Component } from 'react';

import Comment from './Comment.jsx';

class CommentsList extends Component {
    render() {
        return (
            <div>
                <p>Comments on this route</p>
                {this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />
                })}
            </div> 
        );
    }
}

export default CommentsList;