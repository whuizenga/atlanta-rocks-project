import React, { Component } from 'react';

class RouteRating extends Component {
    constructor() {
        super()
        this.state ={
            userHasRated: false,
            userRating: "",
            ratings: [],
            averageRating: 0,
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

        console.log("post my score to database then")
        this._calculateAverageRating();
    }
    render() {
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
    }
}

export default RouteRating;