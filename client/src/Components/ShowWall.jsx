import React, { Component } from 'react';
import axios from 'axios';

class ShowWall extends Component {
    constructor(){
        super()
        this.state={
            routes: [],
        }
    }

    componentWillMount(){
        const searchParam = this.props.match.params.wallId;

        axios.get(`/api/route/wallSearch/${searchParam}`)
            .then((res) => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                Show a list of the route on the wall here
            </div>
        );
    }
}

export default ShowWall;