import React, { Component } from 'react';

class RouteList extends Component {
    render() {
    const route = this.props.route;
    const creationDate = new Date(route.date_set);
    const monthSet = creationDate.getMonth();
    const daySet = creationDate.getDate();
    const yearSet = creationDate.getFullYear();
    
        return (
            <div>
                <div>
                    {route.difficulty}
                </div>
                <div>
                    Set by:{route.setBy}
                    Set on: {monthSet}/{daySet}/{yearSet}
                </div>
            </div>
        );
    }
}

export default RouteList;