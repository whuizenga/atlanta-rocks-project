import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Homepage extends Component {
    

    render() {
        const TitleDiv = styled.div`
            display: flex;
            flex-direction: column;
            height: 90vh;
            justify-content: center;
            align-items: center;
            h1{
            text-align: center;
            font-size: 70px;
            font-family: 'Frijole', cursive;
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