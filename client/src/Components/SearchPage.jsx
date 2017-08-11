import React, { Component } from 'react';
import styled from 'styled-components';

class SearchPage extends Component {
    _searchByWall = (event) => {
        event.preventDefault();

        const gymLocation = event.target.gymLocation.value;
        const wallNumber = event.target.wallNumber.value;

        console.log(gymLocation+wallNumber);
    }

    render() {
        const SearchWrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90vh;
        `
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

                <form>
                    <label htmlFor="difficulty">5.</label>
                    <input name="difficulty" type="number" step="1" min="6" max="13" />
                    <div><button>Submit</button></div>
                </form>
                </SearchWrapper>
            </div>
        );
    }
}

export default SearchPage;