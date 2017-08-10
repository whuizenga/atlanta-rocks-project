import React, { Component } from 'react';
import styled from 'styled-components';

class SearchPage extends Component {
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

                <p>Search by difficulty</p>
                </SearchWrapper>
            </div>
        );
    }
}

export default SearchPage;