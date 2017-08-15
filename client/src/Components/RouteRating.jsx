import React, { Component } from 'react';
import axios from 'axios';

class RouteRating extends Component {
    constructor() {
        super()
        this.state = {
            userHasRated: false,
            userRating: "",
            stateHasRatings: false,
            ratings: [],
            averageRating: "not yet rated",
        }
    }

    componentWillMount() {
        this._hasUserRated();
    }


    _hasUserRated = () => {
        if(this.state.stateHasRatings){

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
    } else {
        setTimeout(() => {
            this._hasUserRated();
        }, 300);
        setTimeout(() => {
            this._calculateAverageRating();
        }, 200);

    }};
    _calculateAverageRating = () => {
        const ratings = this.props.ratings;

        if(ratings.length > 0){
            let sum = 0;
            for(var i = 0; i < ratings.length; i++){
                sum += ratings[i].rating
            }
            let average = sum/ratings.length;

            const newState = {...this.state};
            newState.averageRating = average;
            newState.ratings = ratings;
            newState.stateHasRatings = true;
            this.setState(newState);
        }
    }
    _handleSubmit = (event) => {
        event.preventDefault();

        const newRating = event.target.rating.value;
        const newRaterId = this.props.userId;
    
        axios.put(`/api/route/rate/${this.props.routeId}`, {newRating, newRaterId}).then((res) => {
            const newState = {...this.state};
            newState.ratings.push({raterId: newRaterId, rating: newRating})
            newState.userHasRated = true;
            this.setState(newState);
            this._calculateAverageRating();
            
        }).catch((err) => {
            const newState = {...this.state};
            newState.userHasRated = true;
            this.setState(newState);
        })
        this._calculateAverageRating();
    }
    render() {
        if(this.state.userHasRated || !this.props.userId){
            return(
                <div>
                    <p>Average Rating: {this.state.averageRating}</p>
                </div>
            )
        } else if(!this.state.userHasRated){
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
                </div>
        );
    }}
}

export default RouteRating;