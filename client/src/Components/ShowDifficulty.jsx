import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import RouteList from './RouteList';

class ShowWall extends Component {
    constructor(){
        super()
        this.state={
            difficulty: "",
            routes: [],
        }
    }

    componentWillMount(){
        const searchParam = this.props.match.params.diffId;

        axios.get(`/api/route/difficultySearch/${searchParam}`)
            .then((res) => {
                const newState = {...this.state};
                newState.routes = res.data;
                newState.difficulty = searchParam;
                this.setState(newState);
            })
    }

    render() {
        const WallWrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            a {
                text-decoration: none;
                color: black;
            }
        `
        return (
            <div>
                <WallWrapper>
                <h1>Difficulty {this.state.difficulty}</h1>

                {this.state.routes.map((route, index) => {
                    if(!route.date_retired){
                    return <Link to={`/route/${route._id}` } key={index}><RouteList key={index}
                            route={route}
                            displayWall={true}/></Link>
                } else {
                    return null;
                }})}
                </WallWrapper>
            </div>
        );
    }
}

export default ShowWall;