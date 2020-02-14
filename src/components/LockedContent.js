import React, { Component } from 'react';

export class LockedContent extends Component {
    render() {
        if (this.props.activeUser._id !== null) {
            return (
                <React.Fragment>
                    <h5 className="text-danger font-weight-bold">This is content only visible when logged in.</h5>
                </React.Fragment>
            );
        }
    }
}

export default LockedContent;