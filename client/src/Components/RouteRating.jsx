import React, { Component } from 'react';
import axios from 'axios';

class RouteRating extends Component {
    constructor() {
        super()
        this.state ={
            userHasRated: false,
            userRating: "",
            ratings: [],
            averageRating: "not yet rated",
        }
    }
    componentWillMount() {
        const ratings = this.props.ratings;
        const userId = this.props.userId;

        const userRating = ratings.find((rating) => {
            return rating.raterId === userId;
        });
        if(userRating){
            const newState = {...this.state};
            newState.userHasRated = true;
            newState.userRating = userRating;
            newState.ratings = ratings;
            this.setState(newState);
        } else {
            const newState = {...this.state};
            newState.ratings = ratings;
            this.setState(newState);
        }

        this._calculateAverageRating();
    }
    _calculateAverageRating = () => {
        const ratings = this.props.ratings;

        console.log("get average")
    }
    _handleSubmit = (event) => {
        event.preventDefault();

        const newRating = event.target.rating.value;
        const newRaterId = this.state.userId;

        axios.put(`/api/route/rate/${this.props.routeId}`, {newRating, newRaterId}).then((res) => {
            const newState = {...this.state};
            newState.ratings.push({raterId: newRaterId, rating: newRating})
            this.setState(newState);
        })
        this._calculateAverageRating();
    }
    render() {
        // if(!this.state.userId){
        //     return(
        //         <div>
        //             <p>Average Rating: {this.state.averageRating}</p>
        //         </div>
        //     )
        // } else {
            return (
                <div>
                    {this.state.userHasRated ? 
                    <p>Average Rating: {this.state.average}</p> : null  }
                    {this.state.userHadRated ? null :
                    <form onSubmit={this._handleSubmit}>
                        <label htmlFor="rating">Rate: </label>
                        <input name="rating" type="number" min="1" max="5" step="1" required/>
                        <button>submit</button>
                    </form>}
                    If user has not yet given this a rating allow them to else show average of all ratings.
                </div>
        );
    }}
// }

export default RouteRating;