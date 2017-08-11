import React, { Component } from 'react';

class ShowWall extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    componentWillMount(){
        const searchParam = this.props.match.params.wallId;

        console.log(searchParam);
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