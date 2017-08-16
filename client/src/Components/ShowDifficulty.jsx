import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';

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
            justify-content: flex-start;
            align-items: center;
            min-height: 95vh;
            background-image: url("https://s-media-cache-ak0.pinimg.com/originals/45/8b/7c/458b7c24586e8a9bbe31e8f20722bb04.jpg");
            background-size: cover;
            background-attachment: fixed;
            a {
                text-decoration: none;
                color: black;
            }
        `
        const fadeAnimation = keyframes`${fadeIn}`
        const FadeInDiv = styled.div`
            animation: 1s ${fadeAnimation};
        `
        return (
            <div>
                <WallWrapper>
                <FadeInDiv><h1>Difficulty {this.state.difficulty}</h1></FadeInDiv>

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