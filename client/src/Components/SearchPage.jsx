import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            redirectToWall: false,
            redirectToDifficulty: false,
            searchParam: "",
        }
    }
    
    componentWillMount() {
        //reset state back to default
        const newState = {...this.state}
        newState.redirectToDifficulty = false;
        newState.redirectToWall = false;
        newState.searh = "";

        this.setState(newState);
    }

    _searchByWall = (event) => {
        event.preventDefault();

        const gymLocation = event.target.gymLocation.value;
        const wallNumber = event.target.wallNumber.value;
        const search = gymLocation+wallNumber

        this.props.updateRouteSearch(gymLocation+wallNumber);
        this.setState({redirectToWall: true, searchParam: search})
    }

    _searchByDifficulty = (event) => {
        event.preventDefault();

        const difficulty = "5." + event.target.difficulty.value;

        this.props.updateRouteSearch(difficulty);
        this.setState({redirectToDifficulty: true, searchParam: difficulty})
    }

    render() {
        const SearchWrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90vh;
        `
        if(this.state.redirectToDifficulty) {
            return <Redirect to={`/difficulty/${this.state.searchParam}`} />
        } else if (this.state.redirectToWall) {
            return <Redirect to={`/wall/${this.state.searchParam}`} />
        } else {
        return (
            <div>
                <SearchWrapper>
                <p>Search by wall</p>
                <form onSubmit={this._searchByWall}>
                    <select name="gymLocation" >
                        <option value="mg"> Main Gym </option>
                        <option value="pr"> Party Room </option>
                    </select>
                    <input name="wallNumber" type="number" step="1" min="1" max="32" /> 
                    <div><button>Submit</button></div>
                </form>

                <p>Search by difficulty</p>

                <form onSubmit={this._searchByDifficulty}>
                    <label htmlFor="difficulty">5.</label>
                    <input name="difficulty" type="number" step="1" min="6" max="13" />
                    <div><button>Submit</button></div>
                </form>
                </SearchWrapper>
            </div>
        );}
    }
}

export default SearchPage;