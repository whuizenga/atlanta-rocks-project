import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
        const PageWrapper = styled.div`
            min-height: 95vh;
            background-color: gray;
        `

        const TitleWrapper = styled.div`
            min-height: 25vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-center: center;
            
            background-image: url("https://s-media-cache-ak0.pinimg.com/originals/45/8b/7c/458b7c24586e8a9bbe31e8f20722bb04.jpg");
            background-size: cover;
            background-attachment: fixed;
            margin: 0;
            text-align: center;
            h1 {
                margin: 0;
                font-size: 45px;
            }
            h3{
                margin-top: 0;
            }
            p {
                margin: 0;
            }
        `
        return (
            <PageWrapper>
                <TitleWrapper>
                    <div>
                        <h1>{this.state.difficulty} on {this.state.wall}</h1>
                        <h3>{this.state.color}</h3>
                        <p>Set by: {this.state.setBy}</p>
                    </div>
                <RouteRating userId={this.state.userId} ratings={this.state.ratings} routeId={this.props.match.params.routeId}/>
                </TitleWrapper>

                {this.state.userId ? <CreateNewComment userId={this.state.userId} routeId={this.state.routeId}/> : null}
                <CommentsList comments={this.state.comments}/>
            </PageWrapper>
        );
    }
}

export default ShowRoute;