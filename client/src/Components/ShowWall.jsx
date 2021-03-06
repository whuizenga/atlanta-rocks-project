import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import RouteList from './RouteList';

class ShowWall extends Component {
    constructor(){
        super()
        this.state={
            wallNumber: "",
            routes: [],
        }
    }

    componentWillMount(){
        const searchParam = this.props.match.params.wallId;

        axios.get(`/api/route/wallSearch/${searchParam}`)
            .then((res) => {
                const newState = {...this.state};
                newState.routes = res.data;
                newState.wallNumber = searchParam;
                this.setState(newState);
            })
    }

    render() {
        const WallWrapper = styled.div`
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
            a {
                text-decoration: none;
                color: black;
            }
        `
        return (
            <div>
                <WallWrapper>
                <h1>Wall {this.state.wallNumber}</h1>

                {this.state.routes.map((route, index) => {
                    if(!route.date_retired){
                    return <Link to={`/route/${route._id}`} key={index}><RouteList key={index}
                            route={route}/></Link>
                } else {
                    return null;
                }})}
                </WallWrapper>
            </div>
        );
    }
}

export default ShowWall;