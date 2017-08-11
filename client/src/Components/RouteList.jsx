import React, { Component } from 'react';

class RouteList extends Component {
    render() {
    const route = this.props.route;
        return (
            <div>
                <div>
                    {route.difficulty}
                </div>
                <div>
                    Set by:{route.setBy}
                    Set on:{route.date_set}
                </div>
            </div>
        );
    }
}

export default RouteList;