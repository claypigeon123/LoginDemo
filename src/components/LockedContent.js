import React, { Component } from 'react';

export class LockedContent extends Component {
    // Example usage of content locked behind logging in
    render() {
        if (this.props.activeUser._id !== null) {
            return (
                <React.Fragment>
                    <h5 className="text-danger font-weight-bold mt-4">This is content only visible when logged in.</h5>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment />
            );
        }
    }
}

export default LockedContent;