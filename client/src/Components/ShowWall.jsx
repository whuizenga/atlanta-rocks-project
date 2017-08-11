import React, { Component } from 'react';
import axios from 'axios';

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
                console.log(res.data);
                const newState = {...this.state};
                newState.routes = res.data;
                newState.wallNumber = searchParam;
                this.setState(newState);
            })
    }

    render() {
        return (
            <div>
                <h1>Wall {this.state.wallNumber}</h1>

                {this.state.routes.map((route, index) => {
                    return <RouteList />
                })}

            </div>
        );
    }
}

export default ShowWall;