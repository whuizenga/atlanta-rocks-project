import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

class Homepage extends Component {
    

    render() {
        const fadeAnimation = keyframes`${fadeInDown}`;

        const TitleDiv = styled.div`
            display: flex;
            flex-direction: column;
            height: 95vh;
            justify-content: center;
            align-items: center;
            color: red;
            background-image: url("http://i.imgur.com/6ZU9mcy.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            h1{
                color: #7448A1;
                text-align: center;
                font-size: 70px;
                font-family: 'Frijole', cursive;
            }
            a{
                color: white;
                font-size: 35px;
                border-radius: 20px;
                text-decoration: none;
                background-color: red;
                opacity: 0.7;
                padding: 20px 30px;
            }
        `;
        const FadeInDiv = styled.div`
            animation: 1s ${fadeAnimation};
        `;
        return (
            <div>
                <TitleDiv>
                <FadeInDiv><h1>Atlanta Rocks</h1></FadeInDiv>

                <FadeInDiv><Link to="/search">climb on</Link></FadeInDiv>
                </TitleDiv>       
            </div>
        );
    }
}

export default Homepage;