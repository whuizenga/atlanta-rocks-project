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
        newState.searchParam = "";

        this.setState(newState);
    }

    _searchByWall = (event) => {
        event.preventDefault();

        const gymLocation = event.target.gymLocation.value;
        const wallNumber = event.target.wallNumber.value;
        const search = gymLocation.toUpperCase()+wallNumber

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
            height: 95vh;
            background-image: url("https://s-media-cache-ak0.pinimg.com/originals/45/8b/7c/458b7c24586e8a9bbe31e8f20722bb04.jpg");
            background-repeat: no-repeat;
            background-attachment: fill;
            background-position: center;
            background-size: cover;
        `
        const SearchFormWrapper = styled.div`
            display: flex;
            background-color: white;
            opacity: 0.8;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            padding: 30px;
            height: 250px;
            width: 250px;
            p{
                font-size: 30px;
                margin: 0;
            }
            select{
                font-size: 24px;
                text-align: center;
            }
            input{
                height: 60px;
                width: 60px;
                font-size: 35px;
                text-align: center;
                border: none;
                background-color: #26ad87;
                padding-left: 15px;
            }
            input:focus{
                border: 3px solid black;
            }
            label {
                font-size: 45px;
            }
        `
        if(this.state.redirectToDifficulty) {
            return <Redirect to={`/difficulty/${this.state.searchParam}`} />
        } else if (this.state.redirectToWall) {
            return <Redirect to={`/wall/${this.state.searchParam}`} />
        } else {
        return (
            <SearchWrapper>
            <SearchFormWrapper>
                <p>search by wall</p>
                <form onSubmit={this._searchByWall}>
                   <div> <select name="gymLocation" >
                        <option value="mg"> Main Gym </option>
                        <option value="pr"> Party Room </option>
                    </select></div>
                    <input name="wallNumber" type="number" step="1" min="1" max="32" /> 
                    <div><button>Submit</button></div>
                </form>
            </SearchFormWrapper>

            <SearchFormWrapper>
            <p>search by difficulty</p>

            <form onSubmit={this._searchByDifficulty}>
                <label htmlFor="difficulty">5.</label>
                <input name="difficulty" type="number" step="1" min="6" max="13" />
                <div><button>Submit</button></div>
            </form>
            </SearchFormWrapper>
            </SearchWrapper>
        );}
    }
}

export default SearchPage;