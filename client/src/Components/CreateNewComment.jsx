import React, { Component } from 'react';

class CreateNewComment extends Component {
    constructor() {
        super()
        this.state = {
            showCommentBox: false,
        }
    }

    _toggleShowComment = () => {
        
    }
    render() {
        return (
            <div>
                <button>Add a Comment</button>
            </div>
        );
    }
}

export default CreateNewComment;