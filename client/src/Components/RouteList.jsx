import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {fadeInUp} from 'react-animations';

class RouteList extends Component {
    render() {
    const route = this.props.route;
    const color = this.props.color;
    console.log(color);
    const creationDate = new Date(route.date_set);
    const monthSet = creationDate.getMonth()+1;
    const daySet = creationDate.getDate();
    const yearSet = creationDate.getFullYear();

    const RouteWrapper = styled.div`
        width: 80vw;
        height: 50px;
        margin: 15px auto;
        text-align: center;
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p{
            margin: 0px;
        }
        h1{
            margin: 0px;
        }
    `
    
    const fadeAnimation = keyframes`${fadeInUp}`;

    const FadeInDiv = styled.div`
        animation: 1s ${fadeAnimation};
    `

        return ( 
            <FadeInDiv>
                <RouteWrapper>
                    {this.props.displayWall ?
                    <div>
                        <h1>{route.wall}</h1>
                    </div>
                    : null}
                    <div>
                        <h1>{route.difficulty}</h1>
                    </div>
                    <div>
                        <p>Set by: {route.setBy}</p>
                        <p>Set on: {monthSet}/{daySet}/{yearSet}</p>
                    </div>
                </RouteWrapper>   
            </FadeInDiv>
        );
    }
}

export default RouteList;