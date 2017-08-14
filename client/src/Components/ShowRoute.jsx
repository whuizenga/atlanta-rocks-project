import React, { Component } from 'react';
import axios from 'axios';

class ShowRoute extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentWillMount() {
        console.log("starting axios call");
        axios.get(`api/route/${this.props.match.params.routeId}`).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            <div>
                THIS IS THE ROUTE PAGE.
            </div>
        );
    }
}

export default ShowRoute;