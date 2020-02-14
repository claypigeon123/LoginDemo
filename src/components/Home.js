import React, { Component } from 'react';

import LockedContent from './LockedContent';

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <h5 className="text-primary font-weight-bold">This is content visible to everyone</h5>
                <LockedContent activeUser={this.props.activeUser} />
            </div>
        );
    }
}

export default Home;