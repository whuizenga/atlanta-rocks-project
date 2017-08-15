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
        event.preventDefault();
        const comment = event.target.comment.value;
        const routeId = this.props.routeId;
        const userId = this.props.userId;

        console.log(routeId);
        axios.put("/api/route/comment", {routeId, userId, comment}).then((res) => {
            
        });

    }
    render() {
        return (
            <div>
                <button onClick={this._toggleShowComment}>Add a Comment</button>
                {this.state.showCommentBox ? 
                    <div>
                        <form onSubmit={this._onSubmit}>
                            <textarea name="comment" rows="4" cols="50" />
                            <div><button>Post</button></div>
                        </form>
                    </div>
                     : null}
            </div>
        );
    }
}

export default CreateNewComment;