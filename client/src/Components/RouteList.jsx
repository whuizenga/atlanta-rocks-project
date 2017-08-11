import React, { Component } from 'react';
import styled from 'styled-components';

class RouteList extends Component {
    render() {
    const route = this.props.route;
    const creationDate = new Date(route.date_set);
    const monthSet = creationDate.getMonth();
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
    
        return ( 
            <RouteWrapper>
            <div>
                <h1>{route.difficulty}</h1>
            </div>
            <div>
                <p>Set by:{route.setBy}</p>
                <p>Set on: {monthSet}/{daySet}/{yearSet}</p>
            </div>
            </RouteWrapper>   
        );
    }
}

export default RouteList;