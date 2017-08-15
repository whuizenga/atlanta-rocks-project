import React, { Component } from 'react';
import axios from 'axios';

class CreateNewComment extends Component {
    constructor() {
        super()
        this.state = {
            showCommentBox: false,
        }
    }

    _toggleShowComment = () => {
        const newState = {...this.state}
        newState.showCommentBox = !this.state.showCommentBox;
        this.setState(newState);
    }

    _onSubmit = (event) => {
        const comment = event.target.comment.value;
        const routeId = this.props.routeId;

        axios.post("/api/route/comment", {routeId, comment}).then((res) => {
            //do I need to do anything here..?
        });

    }
    render() {
        return (
            <div>
                <button onClick={this._toggleShowComment}>Add a Comment</button>
                {this.state.showCommentBox ? 
                    <div>
                        <textarea name="comment" rows="4" cols="50" />
                        <div><button>Post</button></div>
                    </div>
                     : null}
            </div>
        );
    }
}

export default CreateNewComment;