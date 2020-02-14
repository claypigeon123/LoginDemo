import React, { Component } from 'react';

import LockedContent from './LockedContent';

export class Home extends Component {
    render() {
        // Passing activeUser prop further down the Component tree, to LockedContent
        return (
            <div className="container">
                <h5 className="text-primary font-weight-bold mb-4">This is content visible to everyone.</h5>

                <LockedContent activeUser={this.props.activeUser} />
            </div>
        );
    }
}

export default Home;