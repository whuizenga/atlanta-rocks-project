import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Homepage extends Component {
    render() {
        const TitleDiv = styled.div`
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            align-items: center;
            h1{
            font-size: 60px;
            }
        `
        return (
            <div>
                <TitleDiv>
                <h1>Atlanta Rocks</h1>

                <Link to="/search">climb on</Link>
                </TitleDiv>       
            </div>
        );
    }
}

export default Homepage;