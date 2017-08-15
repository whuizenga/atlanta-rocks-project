import React, { Component } from 'react';
import axios from 'axios';

import RouteRating from './RouteRating';
import CreateNewComment from './CreateNewComment';
import CommentsList from './CommentsList';

class ShowRoute extends Component {
    constructor(){
        super()
        this.state = {
            wall: "",
            leadOnly: false,
            color: "",
            difficulty: "",
            date_set: "",
            date_retired: "",
            setBy: "",
            comments: [],
            ratings: [],
            userId: "",
        }
    }

    componentWillMount() {
        axios.get(`/api/route/${this.props.match.params.routeId}`).then((res) => {
            const newState = {...this.state}
            newState.wall = res.data.wall;
            newState.leadOnly = res.data.leadOnly;
            newState.color = res.data.color;
            newState.difficulty = res.data.difficulty;
            newState.date_set = res.data.date_set;
            newState.date_retired = res.data.date_retired;
            newState.setBy = res.data.setBy;
            newState.comments = res.data.comments;
            newState.ratings = res.data.ratings;
            newState.userId = this.props.userId;
            newState.routeId = this.props.match.params.routeId;
            
            this.setState(newState);
        }).catch((err) => {
            console.log(err);
        });
    };
    
    render() {
        return (
            <div>
                <h1>{this.state.difficulty} on {this.state.wall}</h1>
                <h3>{this.state.color}</h3>
                <p>Set by: {this.state.setBy}</p>

                <RouteRating userId={this.state.userId} ratings={this.state.ratings} routeId={this.props.match.params.routeId}/>

                {this.state.userId ? <CreateNewComment userId={this.state.userId} routeId={this.state.routeId}/> : null}
                <CommentsList comments={this.state.comments}/>
            </div>
        );
    }
}

export default ShowRoute;